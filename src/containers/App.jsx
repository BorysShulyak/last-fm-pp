import Routes from "../routes";
import styles from  './App.module.css';
import {Provider} from "react-redux";
import store from "../core/store";

function App() {
  return (
      <Provider store={store}>
          <div className={styles.App}>
              <Routes/>
          </div>
      </Provider>
  );
}

export default App;
