import React from 'react'
import { Text, TextInput, IconButton } from 'react-native-paper';
import { formPersonal } from '../HomeScreen';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { styles } from '../../theme/styles';
interface Props{
  formPersonal:formPersonal
}

export const PersonalComponetns = ({formPersonal}:Props) => {
  const navigation = useNavigation();


  return (
    
          <View>
        <Text variant="headlineSmall">Personal</Text>
        <Text variant="titleLarge">Id: {formPersonal.id}</Text>
        <Text variant="titleLarge">Nombre: {formPersonal.nombre}</Text>
        <Text variant="titleLarge">Apellido: {formPersonal.apellido}</Text>
        <Text variant="titleLarge">Cargo: {formPersonal.cargo}</Text>
        <Text variant="titleLarge">Sueldo: {formPersonal.sueldo}</Text>
        <IconButton icon ="arrow-right-bold-circle"
          onPress={()=>navigation.dispatch(CommonActions.navigate({name:'Detalles',params:{formPersonal}}))}
       />
    </View>
  )
}



