import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {AppLoading} from 'expo'
import { AppNavigation } from './src/navigation/AppNavigation';

export default function App() {
  return <AppNavigation/>
}