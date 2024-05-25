import { Weather } from "../components/CityDetailsComponent/CityDetailsComponent.types";

export interface ArrivedAction {
  type: string;
  payload: Weather | null;
  meta: {
    arg: { endpointName: string };
  };
}
export interface LogEntry {
  id: number;
  type: string;
  endpoint: string;
  status: "success" | "error";
  timestamp: string;
  requestData: ArrivedAction;
}

export interface LocalAction {
  type: string;
  payload: Array<LogEntry> | null;
}
