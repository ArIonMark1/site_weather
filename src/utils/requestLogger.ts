import { Middleware } from "@reduxjs/toolkit";
import { Weather } from "../components/CityDetailsComponent/CityDetailsComponent.types";
import { ArrivedAction } from "./requestLogger.types";
import { LogEntry } from "./requestLogger.types";

import { baseAction } from "./skeletonResponse";

const requestLogger: Middleware =
  () =>
  (next) =>
  (action = baseAction) => {
    if (
      action &&
      ((action as ArrivedAction).type as ArrivedAction["type"]).endsWith(
        "/fulfilled"
      )
    ) {
      // const storage = store;
      // console.log(storage);
      const requestLog: LogEntry[] = JSON.parse(
        localStorage.getItem("requestLog") || "[]"
      );

      const newLogEntry: LogEntry = {
        id: ((action as ArrivedAction).payload as Weather).id,
        type: (action as ArrivedAction).type,
        endpoint: (action as ArrivedAction).meta.arg.endpointName,
        status: "success",
        timestamp: new Date().toLocaleString(),
        requestData: (action as ArrivedAction)
          .payload as ArrivedAction["payload"],
      };

      const updatedLog = [newLogEntry, ...requestLog].slice(0, 5);
      localStorage.setItem("requestLog", JSON.stringify(updatedLog));
    }

    return next(action);
  };

export default requestLogger;
