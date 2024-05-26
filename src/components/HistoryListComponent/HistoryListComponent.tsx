import { LogEntry } from "../../utils/requestLogger.types";
import "./HistoryListComponent.scss";

const HistoryListComponent = ({ requestItem }: { requestItem: LogEntry }) => {
  return (
    <>
      {requestItem && (
        <>
          <div className="history__info">
            {requestItem.requestData.name} [
            <span className="history__city">
              {requestItem.requestData.sys.country}
            </span>
            ]
            <span>
              Last request: {requestItem.timestamp.split(",")[0]} time
            </span>
          </div>
          <div className="history__temperature">
            {Math.floor(requestItem.requestData.main.temp - 273.15)}°
          </div>
        </>
      )}
    </>
  );
};

export default HistoryListComponent;
