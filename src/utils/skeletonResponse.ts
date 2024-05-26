import { Weather } from "../components/CityDetailsComponent/CityDetailsComponent.types";
import { LogEntry } from "./requestLogger.types";
import { ArrivedAction } from "./requestLogger.types";

export const requestData: Weather = {
  id: 0,
  main: {
    humidity: 0,
    pressure: 0,
    feels_like: 0,
    temp: 0,
    temp_max: 0,
    temp_min: 0,
  },
  name: "",
  sys: {
    type: 0,
    country: "",
    sunrise: 0,
    sunset: 0,
  },
  weather: [],
  wind: {
    gust: 0,
    speed: 0,
  },
};

export const baseSkeleton: LogEntry = {
  id: 0,
  type: "",
  endpoint: "",
  status: "",
  timestamp: "",
  requestData,
};

export const baseAction: ArrivedAction = {
  type: "",
  payload: requestData,
  meta: {
    arg: {
      endpointName: "",
    },
  },
};
export const localArrayData: LogEntry[] = [baseSkeleton];
