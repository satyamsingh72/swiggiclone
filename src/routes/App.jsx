import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "../components/Header";
import {Provider} from "react-redux";
import appStore from "../utils/appStore";



function App() {
  return (
    <Provider store={appStore}>
      <Header></Header>
      <Outlet />
    </Provider>
  );
}

export default App;
