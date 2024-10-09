import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Navigation from './navigator/StackNagatore';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigator/StackNagatore';
import { DetallesPersonalScreen } from './src/HomeScreen/DetallesPersonalScreen';
import { NuevoPersonalScreen } from './src/HomeScreen/NuevoPersonalScreen';

export default function App() {
  return (
    <NavigationContainer>
   <PaperProvider>
    <StackNavigator/>
   
</PaperProvider>
</NavigationContainer>
  );
}


