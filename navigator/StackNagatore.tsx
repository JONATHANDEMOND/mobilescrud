import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../src/HomeScreen/HomeScreen';
import { DetallesPersonalScreen } from '../src/HomeScreen/DetallesPersonalScreen';
import { NuevoPersonalScreen } from '../src/HomeScreen/NuevoPersonalScreen';

export const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detalles" component={DetallesPersonalScreen} />
      <Stack.Screen name="Nuevo" component={NuevoPersonalScreen} />
    </Stack.Navigator>
  );
}
export default StackNavigator