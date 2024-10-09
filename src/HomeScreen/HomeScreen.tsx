import { CommonActions, useNavigation } from '@react-navigation/native'
import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Button, Text } from 'react-native-paper'
import { dbRealTime } from '../config/firebaseConfig'
import { View } from 'react-native'
import { styles } from '../theme/styles'
import { FlatList } from 'react-native-gesture-handler'
import { PersonalComponetns } from './components/PersonalComponetns';

export interface formPersonal{
  id:string,
  nombre:string,
  apellido:string,
  cargo:string,
  sueldo:string

}

export const HomeScreen = () => {
  const navigation = useNavigation();
  const [fomrPersonal, setFomrPersonal] = useState<formPersonal[]>([]);

  //useefect
  useEffect(()=>{
    getAllPersonal();
  },[])

  //funcion para navegar
  const NuevoNav = () => {
    navigation.dispatch(CommonActions.navigate({ name: "Nuevo" }));
  };

  //FUNCION APRA TRAER LA DATA
  const getAllPersonal = () => {
    const dbRef = ref(dbRealTime, "personal/");
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) return;
      const getKeys = Object.keys(data);
      const listPersonal: formPersonal[] = [];
      getKeys.forEach((key) => {
        const value = { ...data[key], id: key };
        listPersonal.push(value);
      });
      setFomrPersonal(listPersonal);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={fomrPersonal}
        renderItem={({ item }) => <PersonalComponetns formPersonal={item} />}
        keyExtractor={(item) => item.id}
      />

      <Button style={styles.buttonStyle} mode="contained" onPress={NuevoNav}>
        Agregar
      </Button>
    </View>
  );
}


