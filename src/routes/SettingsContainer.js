import React from "react"
import {StyleSheet, Image, Button, View} from "react-native"
import {createDrawerNavigator} from "react-navigation"
class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/chats-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View style={styles.view}>
        <Button
          onPress={() => this.props.navigation.openDrawer()}
          title="Go to notifications"
        />
      </View>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/chats-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View style={[styles.view, styles.font]}>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  view: {
    flex: 1 ,
    justifyContent: "center",
    alignItems: "center"
  },
  font: {
      fontSize: 12 
  }
});

const setting = createDrawerNavigator(
  {
    Home: {
      screen: MyHomeScreen,
    },
    Notifications: {
      screen: MyNotificationsScreen,
    }
  }
);

export default setting;

/**
 * @name Drawer navigation
 * this.props.navigation.openDrawer();
 * this.props.navigation.closeDrawer();
 * this.props.navigation.toggleDrawer();
 */
