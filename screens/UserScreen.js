import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
 // Import selector từ userSlice
import { useSelector } from 'react-redux';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import TabsUser from './tabsuser';

const UserScreen = () => {
  const userInfo = useSelector((state) => state.user.user);
  const base64Image =userInfo.imageData
 
  // backgroundColor:'rgb(255,255,224)'
  return (
    
    <SafeAreaView  style={{flexDirection:'column',flex:1,}}>
      <View style={{ flex:4 ,justifyContent:'center',backgroundColor:'white'}}>
        <View  style={{alignItems:'center'}} > 
      
       <View style={{position:'absolute',alignItems:'center',justifyContent:'center'}}>
          <Image   source={{ uri: `data:image/jpeg;base64,${base64Image}` }} style={{height:100,width:100,borderRadius:70,}} />
          </View>
          </View>
          

          <View style={{alignItems:'center' ,marginTop:110}}>
  <Text style={{fontWeight:'600'}}>{userInfo.name}</Text>
</View>
      </View>
  
      <View style={{flex:8}}>
      <TabsUser/>
        </View>
       
    
    </SafeAreaView>
    
  );
};
export default UserScreen;



{/* <View style={{flex:0.7,backgroundColor:'rgb(50,205,50)',flexDirection:'row'}}>
<TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
  onPress={() => handleTabPress('PROFILE')}>
<Text style={{ fontWeight: '800', color: selectedTab === 'PROFILE' ? 'white' : 'black' }}>PROFILE</Text>
</TouchableOpacity>
{/* <View style={{ width: 0.5, backgroundColor: 'black' }} /> */}
{/* <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
onPress={() => handleTabPress('ORDERS')}>
 <Text style={{ fontWeight: '800', color: selectedTab === 'ORDERS' ? 'white' : 'black' }}>ORDERS</Text>
</TouchableOpacity>
</View> */} 