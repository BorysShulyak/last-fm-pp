import * as React from 'react'
import Routes from "../routes";
import {Provider} from "react-redux";
import store from "../core/store";
import styles from  './App.module.css';

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
