import Header from "./../Header"
import { Outlet} from "react-router-dom";

function CommonComponent() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default CommonComponent;
