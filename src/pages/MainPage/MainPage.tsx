import { useState } from "react";
import { useGetCityByTitleQuery } from "../../redux/features/weatherApi/requestApi";
import SearchCityComponent from "../../components/SearchCityComponent";
import CityDetailsComponent from "../../components/CityDetailsComponent";
import Loader from "../../components/Loader";
import "./MainPage.scss";

const MainPage = () => {
  const [cityTitle, setCityTitle] = useState<string>("");
  // ****************************************************************
  const { data, isFetching, isSuccess, isError, error } =
    useGetCityByTitleQuery(cityTitle, {
      skip: cityTitle === "",
      refetchOnReconnect: true,
    });

  // ****************************************************************
  return (
    <>
      <div className="main__page">
        <div className="container">
          <SearchCityComponent submit={setCityTitle} />

          <div className="response__container">
            {isFetching ? (
              <Loader />
            ) : (
              <>
                {isSuccess && (
                  <>
                    <CityDetailsComponent onRender={data} />
                  </>
                )}
                {isError && (
                  <div className="error__block">
                    <p className="error__message">
                      <span className="error__code">{error.data.cod} </span>
                      Wrong request.... {error.data.message}
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
