import React from 'react';
import { View, Text,PixelRatio } from 'react-native';

export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Detail',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#666', //后退按钮和标题都使用此属性作为它们的颜色
    headerTitleStyle: {
      fontWeight: 'normal',
    }
  };
  /*
   * @可以传参数的标题
   * static navigationOptions = ({ navigation }) => {
   *    return {
   *      title: navigation.getParam('otherParam', 'A Nested Details  Screen'),
   *    };
   *  };
   * @内部更新路由参数
   * <Button
   * title="Update the title"
   *  onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
  />
  */
  constructor(){
    super()
    this.state = {
      text: 'haha'
    }
  }
  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }
  render() {
    const uid = this.props.navigation.getParam('uid',
      'NO-ID');//如果没有的返回指
    return (
      <View style={
        { flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }
      }>
        <Text>
          {uid}
        </Text>
        <Text onPress={ ()=> {this.setState({
          text: this.state.text + '-h'
        })} }
          style={
            {
              borderWidth:1/PixelRatio.get(),
              borderColor: '#ff0000'
            }
          }
        > { this.state.text }</Text>
      </View>
    );
  }
}