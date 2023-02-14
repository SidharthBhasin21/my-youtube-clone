import { Provider } from "react-redux";
import "./App.css";
import Body from "./Component/Body";
import Head from "./Component/Head";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
