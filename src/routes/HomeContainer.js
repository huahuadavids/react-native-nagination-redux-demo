import { createStackNavigator } from 'react-navigation';
import DetailsScreen from "../views/home/DetailsScreen"
import HomeScreen from "../views/home/HomeScreen"
import {Platform} from "react-native"
/**
 * @name react-navigation
 * @url https://www.jianshu.com/p/2f575cc35780
 * react-navigation分为三个部分。
 * StackNavigator类似顶部导航条，用来跳转页面和传递参数。
 * TabNavigator类似底部标签栏，用来区分模块。
 * DrawerNavigator抽屉，类似从App左侧滑出一个页面，在这里不做讲解。
 */
export default Home = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions:{
        headerTitle:'首页',
        headerBackTitle:null
      }
    },
    Details: {
      screen: DetailsScreen,
      navigationOptions:{
        headerTitle:'详情',
        headerBackTitle: null, //设置跳转页面左侧返回箭头后面的文字
        headerStyle: {
          elevation: 0, //去掉安卓导航条底部阴影
          shadowOpacity: 0//去掉ios导航条底部阴影
        }
      }
    }
  },
  {
    initialRouteName: 'Home',
    /**
     * @name initialRouteParams
     * 初始路由的参数
     */
    initialRouteParams : {
      name: 'index'
    },
    /**
     * @name headerMode 边缘滑动返回上级页面时动画效果
     * float：iOS默认的效果，可以看到一个明显的过渡动画。
     * screen：滑动过程中，整个页面都会返回。
     * none：没有动画,上边也不显示导航栏
     */
    headerMode: 'screen',
    /**
     * @name mode
     * 默认是card ，
     * modal：iOS独有的使屏幕从底部画出
     */
    mode: Platform === 'android'? 'card' :'modal',
  }
);