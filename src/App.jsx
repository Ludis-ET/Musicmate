import { useState } from "react";
import { store } from "./redux/store";
import "./App.css";
import { CakeContainer } from "./components/CakeContainer";
import { Provider } from "react-redux";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Provider store={store}>
        <CakeContainer />
      </Provider>
    </>
  );
}

export default App;
