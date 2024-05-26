import { useEffect } from "react";
import "./CityDetailsComponent.scss";
import { Weather } from "./CityDetailsComponent.types";
interface PropsTypes {
  onRender: Weather;
}
const CityDetailsComponent = ({ onRender }: PropsTypes) => {
  const returnStringTime = (): string => {
    const curentTime = new Date().toLocaleTimeString();
    return curentTime;
  };

  useEffect(() => {
    return () => {
      returnStringTime();
    };
  }, [onRender]);

  return (
    <>
      <div className="this__content">
        <div className="this__day">
          <div className="top__block">
            <div className="this__temp">
              {Math.floor(onRender.main.temp - 273.15)}°
            </div>
            <div className="this__day__day">Tooday</div>
          </div>
          <div className="bottom__block">
            <div className="this__time">
              Time: <span>{returnStringTime()}</span>
            </div>
            <div className="this__city">
              City: <span>{onRender.name}</span>
              <span className="this__countryCode">
                {" "}
                [ {onRender.sys.country} ]
              </span>
            </div>
            <div>
              Wind: Speed:{" "}
              <span className="wind__speed">{onRender.wind.speed}</span>m/s
              Gust:{" "}
              <span className="wind__gust">{onRender.wind.gust || 0}</span>m/s
            </div>
          </div>
        </div>
        {/* Celsius = Kelvin - 273.15 */}
        <div className="this__day_info">
          <div className="this__day_info_items">
            <div className="this__day_description">
              <span className="description__title">Today </span>
              {onRender.weather[0].main}
            </div>
            <div className="this__day_temperature">
              <span className="description__title">Temperatura: </span>
              {Math.floor(onRender.main.temp - 273.15)}
            </div>
            <div className="feels__temperature">
              <span className="description__title">
                Temperatura feels like:
              </span>
              {Math.floor(onRender.main.feels_like - 273.15)}
            </div>
            <div className="maximum__temperature">
              <span className="description__title">Temperatura maximum: </span>
              {Math.floor(onRender.main.temp_max - 273.15)}
            </div>
            <div className="minimum__temperature">
              <span className="description__title">Temperatura minimum: </span>
              {Math.floor(onRender.main.temp_min - 273.15)}
            </div>

            <div className="this__day_pressure">
              <span className="description__title">Pressure: </span>
              {onRender.main.pressure} hPa
            </div>
            <div className="this__day_humidity">
              <span className="description__title">Humidity: </span>
              {onRender.main.humidity} %
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CityDetailsComponent;
