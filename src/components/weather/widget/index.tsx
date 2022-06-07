import Icon from "../icon";
import { Alert } from "../../alert";
import { WeatherCard } from "../card";

import { getTimestampToWeekday } from "../../../utils/weather";
import "./style.scss";

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherEntity {
  current: {
    dt: number;
    temp: number;
    humidity: number;
    uvi: number;
    wind_speed: number;
    wind_deg: number;
    weather: Weather[];
  };
  daily: {
    dt: number;
    temp: {
      min: number;
      max: number;
    };
    weather: Weather[];
  }[];
}

interface WeatherWidgetProps {
  data?: WeatherEntity;
  error?: string;
}

interface WeatherListCardProps {
  iconId: number;
  tempMax: number;
  tempMin: number;
  dateName: string;
}

function WeatherListCard({
  iconId,
  tempMax,
  tempMin,
  dateName,
}: WeatherListCardProps) {
  return (
    <div className="weather-list-card">
      <div className="card-container">
        <div className="title">{dateName}</div>
        <div className="icon">
          <Icon id={iconId} />
        </div>
        <div className="temperature-max">{Math.round(tempMax)}ºC</div>
        <div className="temperature-min">{Math.round(tempMin)}ºC</div>
      </div>
    </div>
  );
}

export function WeatherWidget({ data, error }: WeatherWidgetProps) {
  const current = data?.current;
  const dailyData = data?.daily;
  return (
    <>
      {current && (
        <div className="container">
          <div className="weather-widget">
            <WeatherCard
              temperature={current.temp}
              humidity={current.humidity}
              uvi={current.uvi}
              windSpeed={current.wind_speed}
              windDeg={current.wind_deg}
              weatherIconId={current.weather[0].id}
            />

            <div className="weather-list">
              {dailyData &&
                dailyData.slice(0, 6).map((item, index) => {
                  return (
                    <WeatherListCard
                      key={index}
                      iconId={
                        index === 0 ? current.weather[0].id : item.weather[0].id
                      }
                      tempMax={item.temp.max}
                      tempMin={item.temp.min}
                      dateName={
                        index === 0 ? "Today" : getTimestampToWeekday(item.dt)
                      }
                    />
                  );
                })}
            </div>
          </div>
        </div>
      )}
      {error && <Alert severity="error">{error}</Alert>}
    </>
  );
}
