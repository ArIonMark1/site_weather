import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import HistoryDetailsComponent from "./components/HistoryDetailsComponent/HistoryDetailsComponent";
const MainPage = lazy(() => import("./pages/MainPage"));
const HistoryPage = lazy(() => import("./pages/HistoryPage"));

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="history" element={<HistoryPage />}>
            <Route path=":id" element={<HistoryDetailsComponent />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
