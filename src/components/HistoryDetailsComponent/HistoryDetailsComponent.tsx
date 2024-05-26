import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LogEntry } from "../../utils/requestLogger.types";
import { baseSkeleton } from "../../utils/skeletonResponse";
import "./HistoryDetailsComponent.scss";

const HistoryDetailsComponent = () => {
  const { id } = useParams<{ id: string }>();
  const [targetWeather, setTargetWeather] = useState<LogEntry>(baseSkeleton);

  useEffect(() => {
    if (id) {
      const allLocalLog: LogEntry[] = JSON.parse(
        localStorage.getItem("requestLog") || "[]"
      );
      const target = allLocalLog.find(
        (elem: LogEntry) => elem.id === Number(id)
      ) as LogEntry;
      setTargetWeather(target || {});
    }
  }, [id]);

  return (
    <>
      {targetWeather.id ? (
        <div className="container">
          <div className="details__block">
            <div className="left__block">
              <p className="this__temp">
                {Math.floor(targetWeather.requestData.main.temp - 273.15)}°
              </p>
              <p className="this__time">
                <span className="description__title">Time:</span>{" "}
                <span>21:54</span>
              </p>
              <p className="this__city">
                <span className="description__title">City:</span>{" "}
                <span>{targetWeather.requestData.name}</span> [
                <span>{targetWeather.requestData.sys.country}</span>]
              </p>
              <p className="this__wind">
                <span className="description__title">Wind: </span>
                <span className="wind__params">
                  Speed:{" "}
                  <span className="params__item">
                    {targetWeather.requestData.wind.speed}
                  </span>{" "}
                  m/sec Gust:{" "}
                  <span className="params__item">
                    {targetWeather.requestData.wind.gust || 0}
                  </span>{" "}
                  m/sec
                </span>
              </p>
            </div>
            <div className="right__block">
              <p className="this__day_description">
                <span className="description__title">Today </span>
                {targetWeather.requestData.weather[0].main}
              </p>
              <p className="feels__temperature">
                <span className="description__title">
                  Temperature feels like:
                </span>{" "}
                {Math.floor(targetWeather.requestData.main.feels_like - 273.15)}
                °
              </p>
              <p className="this__day_pressure">
                <span className="description__title">Pressure: </span>
                {targetWeather.requestData.main.pressure} hPa
              </p>
              <p className="this__day_humidity">
                <span className="description__title">Humidity: </span>
                {targetWeather.requestData.main.humidity} %
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>No data Found</div>
      )}
    </>
  );
};

export default HistoryDetailsComponent;
