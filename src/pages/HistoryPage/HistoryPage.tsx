import { useEffect, useState } from "react";
import { LogEntry } from "../../utils/requestLogger.types";
import HistoryListComponent from "../../components/HistoryListComponent";
import { NavLink, Outlet } from "react-router-dom";
import { localArrayData } from "../../utils/skeletonResponse";
import "./HistoryPage.scss";

const HistoryPage = () => {
  const [historyData, setHistoryData] =
    useState<Array<LogEntry>>(localArrayData);

  // Component DidMount
  useEffect(() => {
    setHistoryData(() =>
      JSON.parse(localStorage.getItem("requestLog") || "[]")
    );
  }, []);

  return (
    <>
      <div className="container">
        <div className="title__history">Research History</div>
        <ul className="history">
          {historyData && historyData.length > 0 ? (
            historyData.map((obj: LogEntry) => (
              <NavLink to={`${obj.id}`} className="history__link">
                <li key={obj.id} className="history__link__item">
                  <HistoryListComponent requestItem={obj} />
                </li>
              </NavLink>
            ))
          ) : (
            <NavLink to={"/"} className="history__link">
              <li className="history__link__item">
                No records. Klick here to start searching.
              </li>
            </NavLink>
          )}
        </ul>
      </div>

      <Outlet />
    </>
  );
};

export default HistoryPage;
