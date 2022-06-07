import Icon from "../icon";
import { getWindDirectionByDegree, getMpsToKmph } from "../../../utils/weather";
import "./style.scss";

interface WeatherCardProps {
  temperature: number;
  humidity: number;
  uvi: number;
  windSpeed: number;
  windDeg: number;
  weatherIconId: number;
}

export function WeatherCard({
  temperature,
  humidity,
  uvi,
  windSpeed: mps,
  windDeg,
  weatherIconId,
}: WeatherCardProps) {
  const windDirection = getWindDirectionByDegree(windDeg);
  const windSpeed = Math.round(getMpsToKmph(mps));
  return (
    <div className="container">
      <div className="weather-card">
        <div className="weather-icon">
          {weatherIconId && <Icon id={weatherIconId} />}
        </div>
        <div>
          <div className="title">Barcelona, Spain</div>
          {temperature && (
            <div className="temperature">{Math.round(temperature)}º</div>
          )}
          {humidity && <div className="details">Humidity: {humidity}%</div>}
          <div className="details">UVI: {uvi}</div>
          {windDirection && windSpeed && (
            <div className="details">
              Wind: {windDirection} {windSpeed}kmh
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
