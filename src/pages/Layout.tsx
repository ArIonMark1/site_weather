import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader";

import HeaderComponent from "../components/HeaderComponent";

const Layout = () => {
  return (
    <>
      <HeaderComponent />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
