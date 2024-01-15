import { View, Text, ScrollView, Pressable, Button, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

export default function Order() {

  const [apiData, setApiData] = useState([]);
  const [lastApiCallTime, setLastApiCallTime] = useState(null);
  const userInfo = useSelector((state) => state.user.user);
  const userId = userInfo.id;

  const fetchData = async () => {
    try {
      const response = await fetch('http://192.168.180.108:9089/paypal');
      const data = await response.json();

      // Kiểm tra xem có sự thay đổi trong dữ liệu hay không
      if (JSON.stringify(data) !== JSON.stringify(apiData)) {
        console.log('Dữ liệu API:', data);
        setApiData(data);
        setLastApiCallTime(new Date()); // Cập nhật thời gian cuộc gọi API
      }
    } catch (error) {
      console.error('Lỗi cuộc gọi API:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Cuộc gọi API ban đầu

    // Thiết lập khoảng thời gian cho việc đánh giá API định kỳ (mỗi 5 giây trong ví dụ này)
    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);

    // Xóa khoảng thời gian khi thành phần được hủy
    return () => clearInterval(intervalId);
  }, []);







  const renderItem = ({ item }) => {
    if(item.idUser==userId){
    return (
  
      
        <ScrollView horizontal>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#F0FFF0',
              paddingVertical: 5,
              paddingHorizontal: 2,
            }}
          >
            <Text style={{ fontSize: 13, color: 'blue', padding: 10 }}>
              {item.paymentId}
            </Text>
            <Text style={{ fontSize: 16, color: '#00FF00', padding: 10 }}>
              {item.status}
            </Text>
            <Text style={{ fontSize: 16, color: 'black', padding: 10 }}>
              {item.paymentTime}
            </Text>
            <View
              style={{
                width: 75,
                borderRadius: 20,
                backgroundColor: 'green',
                alignItems: 'center',
              }}
            >
              <Text style={{ fontSize: 16, color: 'white', padding: 10 }}>
                {item.amount}
              </Text>
            </View>
          </View>
        </ScrollView>
 
    );
  }
  else
  {
    return null;
  }
 
  };
  return (
  
    
    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 5 }}>
        <Pressable>
    <FlatList
      data={apiData}
      keyExtractor={(item) => item.id.toString()} 
      renderItem={renderItem}
      initialNumToRender={apiData.length}
      maxToRenderPerBatch={apiData.length}
    />
    </Pressable>
  </View>
    
    
  )
}