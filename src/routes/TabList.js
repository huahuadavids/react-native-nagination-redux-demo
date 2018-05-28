import React from 'react';
import { Text, View,Image,StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Home from "./HomeContainer"
import setting from "./SettingsContainer"
class Discover extends React.Component {
  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Discover!</Text>
      </View>
    );
  }
}

class Me extends React.Component {
  componentDidMount() {
    this.mounted = true;
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Me!</Text>
      </View>
    );
  }
  componentWillUnmount(){
    this.mounted = false;
  }
}

export default App = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: '微信',
      tabBarIcon: ({tintColor, focused}) => (
        <Image resizeMode='contain'
               source={require('../assets/chats-icon.png')}
               style={
                 [styles.footImage, {tintColor: tintColor}]
               }
        />
      )
    }
  },
  Settings: {
    screen: setting,
    navigationOptions: {
      tabBarLabel: '通讯录',
      tabBarIcon: ({tintColor, focused}) => (
        <Image resizeMode='contain'
               source={require('../assets/contact.png')}
               style={
                 [styles.footImage, {tintColor: tintColor}]
               }
        />
      )
    }
  },
  Discover: {
    screen: Discover,
    navigationOptions: {
      tabBarLabel: ' 发现',
      tabBarIcon: ({tintColor, focused}) => (
        <Image resizeMode='contain'
               source={require('../assets/discover.png')}
               style={
                 [styles.footImage, {tintColor: tintColor}]
               }
        />
      )
    }
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: '我',
      tabBarIcon: ({tintColor, focused}) => (
        <Image resizeMode='contain'
               source={require('../assets/me.png')}
               style={
                 [styles.footImage, {tintColor: tintColor}]
               }
        />
      )
    }
  }
},{
  tabBarPosition: 'bottom',
  lazy: true, // 是否懒加载
  initialRouteName: 'Home',
  tabBarOptions: {
    activeTintColor: '#16ff79',
    inactiveTintColor: '#111',
    showIcon: true,
    pressOpacity: 0.8,
    style: {
      height: 45,
      padding:10,
      paddingTop:10,
      backgroundColor: '#ffffff',
      zIndex: 0,
      position: 'relative'
    },
    labelStyle: {
      fontSize: 12,
      paddingVertical: 0,
      marginTop: 12
    },
    iconStyle: {
      marginTop: -3
    },
    tabStyle: {
      backgroundColor: '#FFF',
    },
  }
});

const styles = StyleSheet.create({
  footImage :{
    width: 20,
    marginTop:5
  }
})