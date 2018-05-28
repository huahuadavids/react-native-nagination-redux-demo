import React from 'react';
import {
  View, Text, Button, TextInput, StyleSheet, Image,
  TouchableHighlight
} from 'react-native';
import {connect} from "react-redux"
import {increase} from "../../flux/actions/counter"

/**
 * @name camera
 * 1. yarn add react-native-camera
 * 2. react-native link react-native-camera
 * 3. config
 */
// import { RNCamera } from 'react-native-camera';
/*
 * @name Image
 * <Image
 *  onLoad={()=>{}}  // ios support
 *  defaultSource={require("../../images/pay_type_2_1.png")}
 *  source={require("../../images/pay_type_2_1.png")}></Image>
*/
// @connect(
//   state => state,
//   { increase }
// )
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }
  constructor(props) {
    super(props);
    this.state = {
      input: 'input'
    }
  }

  render() {
    console.log(this.props)
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text numberOfLines={1} style={
          {
            width: 200
          }
        }>
          Home ScreenHome Screen
          Home ScreenHome Screen Home Screen
        </Text>
        <Text>{this.props.value}</Text>
        <Text>{this.props.factor}</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details',{
            uid: 111
          })}
        />
        <Button
          style={styles.add}
          title="add"
          onPress={() => this.props.increase()}
        />
        <TextInput
          placeholder={'please input something'}
          placeholderTextColor={"#ccc"}
          // value={} // 默认的值
          editable={true}

          // returnKeyType={"search"}
          //password={true}
          //onChange={}
          //onFocus={}
          //onBlur={}
          // onSubmitEditing={(v)=>{
          //   this.setState({
          //     input: v
          //   })
          // }}
          style={styles.input}/>


      </View>
    );
  }
}


const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 40,
    // borderWidth:1,
    // borderColor: '#ff0000'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  },
  add: {
    borderWidth: 1,
    borderColor: '#111',
    width: 200,
    height: 40
  }
});


export default connect(
  (state) => ({
    value: state.counter.count,
    factor: state.counter.factor
  }),
  {
    increase
  }
)(HomeScreen)

// export default HomeScreen;


