import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
//demo voi sharavalue
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming,Easing } from 'react-native-reanimated';
//vi du ve hieu ung thay doi kich thuoc cua 1 view lucs ung dung 

const Animotion = () => {
  const chieu_rong=useSharedValue(100);//gia tri ban dau la 100
  //tao hieu ung
  const animateStyle =useAnimatedStyle(()=>{
    return{width:chieu_rong.value}
  });
  const handaleChangStyle =()=>{
    //su dung hieu ung thay doi
    // chieu_rong.value=300;//thay doi kich thuoc khong co hiru ung
    //hieu ung ne bro
    // chieu_rong.value=withSpring(chieu_rong.value ==100?300:100)//đây nha ! hiệu ứng nè
    //tích hợp thời gian dílay khi có hiêu ứng
    chieu_rong.value=withTiming(350,{
      easing:Easing.linear,
      duration:10000 //thoi gian 10s

    })

  }
  return (
    <View style={st.khung}>
      <Animated.View style={[st.vidu,animateStyle]}/>
      {/* <View style={[st.vidu,animateStyle]}/> */}
  <Button title='Thay doi kich thuoc' onPress={handaleChangStyle}/>
    </View>
  )
}

export default Animotion

const st = StyleSheet.create({
  khung:{
flex:1,
justifyContent:'center',
alignItems:'center'
  },
  vidu:{
    height:100,backgroundColor:'green'

  }
})