import React from 'react';
import { Provider } from 'react-redux';
import Apps from './routes/TabList';// app的入口
import store from "./flux/store";
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Apps />
      </Provider>
    )
  }
  componentWillUnmount() {
    store.unsubscribe(this);
  }
}
