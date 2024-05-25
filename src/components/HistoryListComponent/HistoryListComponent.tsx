import { Weather } from "../CityDetailsComponent/CityDetailsComponent.types";
import "./HistoryListComponent.scss";

const HistoryListComponent = ({ requestData }: { requestData: Weather }) => {
  return (
    <>
      {requestData && (
        <>
          <div className="history__info">
            {requestData.name}{" "}
            <span className="history__city"> {requestData.sys.country}</span>
          </div>
          <div className="history__temperature">
            {Math.floor(requestData.main.temp - 273.15)}°
          </div>
        </>
      )}
    </>
  );
};

export default HistoryListComponent;
