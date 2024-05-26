import { Weather } from "../components/CityDetailsComponent/CityDetailsComponent.types";

export interface ArrivedAction {
  type: string;
  payload: Weather;
  meta: {
    arg: { endpointName: string };
  };
}
export interface LogEntry {
  id: number;
  type: string;
  endpoint: string;
  status: "success" | "";
  timestamp: string;
  requestData: Weather;
}

export interface LocalAction {
  type: string;
  payload: Array<LogEntry> | null;
}
export interface ErrorPrompt {
  status: string;
  data: {
    cod: string;
    message: string;
  };
}
