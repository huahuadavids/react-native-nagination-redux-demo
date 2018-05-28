import React from 'react';
import { Provider } from 'react-redux';
import Apps from './routes/TabList';// app的入口
import store from "./flux/store";
import SplashScreen from 'react-native-splash-screen'
export default class App extends React.Component {
  componentDidMount(){
    SplashScreen.hide()
      // 会提示用户是否应许地理定位
      navigator.geolocation.getCurrentPosition(
        (pos)=>{
          console.log(pos)
        },
        (err)=>{
          console.log(err)
        },
        {
          enableHighAccuracy:true,
          timeout: 20000,
          maximumAge: 1000 
        }
      )
      //watch 用户位置
      this.watchID = navigator.geolocation.watchPosition((pos)=>{
        this.setState(pos)
      })
  }
  render() {
    return (
      <Provider store={store}>
        <Apps />
      </Provider>
    )
  }
  componentWillUnmount() {
    store.unsubscribe(this);
    navigator.geolocation.clearWatch(this.watchID)
  }
}
