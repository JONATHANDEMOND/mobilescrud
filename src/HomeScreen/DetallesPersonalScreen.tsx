import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Button, Card, Divider, Text, TextInput } from 'react-native-paper'
import { styles } from '../theme/styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ref, remove, update } from 'firebase/database'
import { auth, dbRealTime } from '../config/firebaseConfig'

// interface
interface formPersonal{
  id:string,
  nombre:string,
  apellido:string,
  cargo:string,
  sueldo:string

}


export const DetallesPersonalScreen = () => {
  //hook accede a toda la infomracion de navegacion
const route = useRoute();
//@ts-ignore
const{formPersonal}=route.params;

//hook state apr acambiar el esra del fomrulario de eduitar y eliminar
const [fomrEdit, setFomrEdit] = useState<formPersonal>({
  id:'',
  nombre:'',
  apellido:'',
  cargo:'',
  sueldo:''
})
//hook usenavigation:permite navegar de u n screen a otro
const navigation = useNavigation();
//hook Useefect cargar y mostrar la data en el formulario detalle
useEffect(()=>{
    setFomrEdit(formPersonal);
},[]
)

//funcione q nos permite actulizar los fomrularios
const handleSetValues=(key:string,value:string)=>{
    setFomrEdit({...fomrEdit,[key]:value})
}
//funcion para actulizar la data
const handleUpdateRopa=async()=>{
    const dbRef=ref(dbRealTime,'personal/' + fomrEdit.id)
try{
    await update(dbRef,{
        id:fomrEdit.id,
      nombre:fomrEdit.nombre,
      apellido:fomrEdit.apellido,
      cargo:fomrEdit.cargo,
      sueldo:fomrEdit.sueldo
    });
    navigation.goBack();
}catch(e){
    console.log(e);
    
}

}
//funcion para eliminar el producto
const handleDelteRopa = async()=>{
    const dbRef=ref(dbRealTime,'personal/'+ fomrEdit.id)
    try{
        await remove(dbRef);
        navigation.goBack();
    }catch(e){
        console.log(e);
        
    }
 }


  return (
    <View style={styles.container}>
    <Card >
    
    <Card.Content>
        <Text variant="headlineSmall" style={styles.textStyle}>Detalles Prenda</Text>
        <TextInput label='Id' mode='outlined' style={styles.inputStyle}
      onChangeText={(value)=>handleSetValues('id',value)}/>
      <TextInput label='Nombre' mode='outlined' style={styles.inputStyle}
      onChangeText={(value)=>handleSetValues('nombre',value)}/>
      <Divider/>
      <TextInput label='Apellido' mode='outlined' style={styles.inputStyle} 
      onChangeText={(value)=>handleSetValues('apellido',value)}/>
      <TextInput label='Cargo' mode='outlined' style={styles.inputStyle}
      onChangeText={(value)=>handleSetValues('cargo', value)}
      />
      <TextInput label='Sueldo' mode='outlined' style={styles.inputStyle}
      onChangeText={(value)=>handleSetValues('sueldo', value)}
      keyboardType='numeric'/>
    </Card.Content>
    </Card>
   
    <Button 
            mode='contained' 
            style={styles.buttonStyle}
            icon='motorbike'
            onPress={handleUpdateRopa}>
                Actualizar
                </Button>

              <Button 
            mode='contained'
            style={styles.buttonStyle}
             icon="delete-empty"
             onPress={handleDelteRopa}
             >Eliminar
             </Button>  
    </View>

  )


}

  
  
