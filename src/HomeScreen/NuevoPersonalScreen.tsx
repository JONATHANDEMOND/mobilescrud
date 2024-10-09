import React, { useState } from 'react'
import { View } from 'react-native'
import { IconButton, Text, TextInput } from 'react-native-paper'
import { styles } from '../theme/styles';
import { useNavigation } from '@react-navigation/native'
import { push, ref, set } from 'firebase/database';
import { dbRealTime } from '../config/firebaseConfig';
 interface formPersonal{
  id:string,
  nombre:string,
  apellido:string,
  cargo:string,
  sueldo:string

}




export const NuevoPersonalScreen = () => {
  const navigation=useNavigation()

  const [formPersonal, setFormPersonal] = useState<formPersonal>({
    id:'',
    nombre:'',
    apellido:'',
    cargo:'',
    sueldo:''
  })
  
  ///funcion para setear formulario
  const handleSetValues=(key:string,value:string)=>{
        setFormPersonal({...formPersonal,[key]:value})
  }

//funcion apra agregar persnal
const handleSetPersonal=async()=>{
  
  //para crear la tabla en la base de datos
  const dbRef = ref(dbRealTime, 'personal/');
  //para grabar en la base de datos
  const savePersonal = push(dbRef);
  try{
    await set(savePersonal, formPersonal)
    navigation.goBack();
  }catch(e){
    console.log(e);
    
  }





}


  return (
 
      <View style={styles.container}>
        <Text variant="headlineSmall">Nuevo Personal</Text>
        <Text variant="titleLarge">Agrega ID</Text>
        <TextInput
          label="ID"
          onChangeText={(value) => handleSetValues("id", value)}
        />
        <Text variant="titleLarge">Agrega Nombre</Text>
        <TextInput
          label="Nombre"
          onChangeText={(value) => handleSetValues("nombre", value)}
        />
        <Text variant="titleLarge">Agrega Apellido</Text>
        <TextInput
          label="Apellido"
          onChangeText={(value) => handleSetValues("apellido", value)}
        />
        <Text variant="titleLarge">Agrega Cargo</Text>
        <TextInput
          label="Cargo"
          onChangeText={(value) => handleSetValues("cargo", value)}
        />
        <Text variant="titleLarge">Agrega Sueldo</Text>
        <TextInput
          label="Sueldo"
          onChangeText={(value) => handleSetValues("sueldo", value)}
        />
         <View style={styles.buttonStyle}>
        <IconButton
          icon="alert-plus-outline"
          size={35}
          onPress={handleSetPersonal}
        />
      </View>
      </View>
     
    
  );
}

