import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import router from "./routes";
import darkModeHandler from "./helpers/darkmodeFn";

function App() {
  useEffect(() => {
    darkModeHandler(true)
  },[])
  const Router = useRoutes(router);
  return Router;
}

export default App;
