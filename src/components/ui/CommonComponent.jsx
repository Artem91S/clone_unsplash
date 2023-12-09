import React, { useEffect } from "react";
import Header from "./Header"
import { Outlet, useParams } from "react-router-dom";

function CommonComponent() {
  const param = useParams();
  useEffect(() => {
    console.log(param);
    // useDocumentTitle()
  }, []);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default CommonComponent;
