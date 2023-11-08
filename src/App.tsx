import { useRoutes } from "react-router-dom";
import router from "./routes";

function App() {
  const Router = useRoutes(router);
  return Router;
}

export default App;
