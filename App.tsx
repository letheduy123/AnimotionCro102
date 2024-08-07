import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import * as ImagePicker from 'react-native-image-picker';

const App = () => {
  const [hinhAnh, setHinhAnh] = useState(null);
  //viet ham chup anh
  const chupAnh =useCallback(()=>{
    //dinh nghia optin dinh nghia camera
    let option={
      savetToPhoto:true,
      mediaTpe:'photo',
      includeBase64:true,//neu lay chuoi base 64 true
      includeExtra:true
    }
    //khoi dong Came ra chup anh
    ImagePicker.launchCamera(option,setHinhAnh);
  },[]);
  useEffect(()=>{
    console.log(hinhAnh);
    
  },[hinhAnh])
  //chon anh
  const chonAnh=useCallback(()=>{
    let option={
      mediaType:'photo',
      selelectionLimit: 0

    }
  
  
    ImagePicker.launchImageLibrary (option, setHinhAnh);
  },[]);

  return (
    <View>
      <Text>App</Text>
      <View>
        <Button title='chup anh' onPress={chupAnh} />
      </View>
      <View>
        <Button title='chon anh' onPress={chonAnh} />
      </View>

      <View style={{margin:10}}>
        {
(typeof(hinhAnh?.assets)!='undefined')?
hinhAnh?.assets.map((objImage,index)=>{
  return(
    <View key={index} style={{margin:10}}>
      <Image key={index} 
      source={{uri:objImage.uri}}
      style={{ width:200,height:200}}/>
      </View>
  )

})
:
<Text>Moi ban chon anh</Text>
        }
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})