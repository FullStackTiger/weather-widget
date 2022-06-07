import { Spinner } from "../../spinner";
import { useApi } from "../../../api/use-api";
import { WeatherWidget, WeatherEntity } from "../widget";

export function useWeatherData() {
  const AppId = process.env.REACT_APP_OPENWEATHERMAP_APP_ID;
  const weatherEndpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=41.3888&lon=2.159&units=metric&appid=${AppId}`;
  return useApi<WeatherEntity>(weatherEndpoint);
}

export function WeatherData() {
  const { isLoading, data, error } = useWeatherData();

  return isLoading ? (
    <Spinner />
  ) : (
    <WeatherWidget data={data} error={error?.message} />
  );
}

export default WeatherData;
