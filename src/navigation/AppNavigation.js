import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { THEME } from '../theme'
import {Ionicons} from '@expo/vector-icons'
import { Platform } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { BookedScreen } from '../screens/BookedScreen'

const PostNavigator = createStackNavigator({
    Main: MainScreen,
    Post: {
        screen: PostScreen,
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'red'
            }
        }
    }
},{
    initialRouteName: 'Main',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
        },
        headerTintColor: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#fff'
    }

})

const BookedNavigator = createStackNavigator(
  {
    Booked: BookedScreen,
    Post: PostScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
      },
      headerTintColor: Platform.OS === "ios" ? THEME.MAIN_COLOR : "#fff",
    },
  }
);


// const BottomNavigator = createBottomTabNavigator({
//     Post: {
//         screen: PostNavigator,
//         navigationOptions: {
//             tabBarIcon: <Ionicons name='ios-albums' size={25}/>
//         }
//     },
//     Booked: {
//         screen: BookedNavigator,
//         navigationOptions: {
//             tabBarIcon: <Ionicons name='ios-star' size={25}/>
//         }
//     }
// })

export const AppNavigation = createAppContainer(PostNavigator
)