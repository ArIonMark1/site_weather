import { Middleware } from "@reduxjs/toolkit";
import { Weather } from "../components/CityDetailsComponent/CityDetailsComponent.types";
import { ArrivedAction } from "./requestLogger.types";
import { LogEntry } from "./requestLogger.types";

const baseAction: ArrivedAction = {
  type: "",
  payload: null,
  meta: {
    arg: {
      endpointName: "",
    },
  },
};

const requestLogger: Middleware =
  (store) =>
  (next) =>
  (action = baseAction) => {
    if (
      action &&
      (action.type as ArrivedAction["type"]).endsWith("/fulfilled")
    ) {
      const requestLog: LogEntry[] = JSON.parse(
        localStorage.getItem("requestLog") || "[]"
      );

      const newLogEntry: LogEntry = {
        id: (action.payload as Weather).id,
        type: action.type,
        endpoint: action.meta.arg.endpointName,
        status: "success",
        timestamp: new Date().toISOString(),
        requestData: action.payload as ArrivedAction["payload"],
      };

      const updatedLog = [newLogEntry, ...requestLog].slice(0, 5);
      localStorage.setItem("requestLog", JSON.stringify(updatedLog));
    }

    return next(action);
  };

export default requestLogger;
