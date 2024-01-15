import { View, Text, useWindowDimensions, StyleSheet } from 'react-native'
import React from 'react'

import Profile from './Profile';
import Order from './Order';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { useState } from 'react';

const renderScene = SceneMap({
    first: Profile,
    second: Order
  })

export default function tabsuser() {

    const layout= useWindowDimensions ();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
      {
        key: "first",
        title: "PROFILE",
      },
      {
        key: "second",
        title: "ORDERS",
      },
    ]);


    const renderTabsBar = (props) => (
        <TabBar
          {...props}
          tabStyle={styles.tabStyle}
          indicatorStyle={{ backgroundColor:'black' }}
          activeColor="white"
          inactiveColor="#00FF7F"
          renderLabel={({ route, color }) => <Text style={{color, ...styles.text}}>{route.title}</Text>}
      />); 

      return (
        <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width}}
        renderTabBar={renderTabsBar}
      />
      );
    }


    const styles = StyleSheet.create({
      tabStyle: {
        backgroundColor: "black",
      },
      text: {
        fontSize: 13,
        fontWeight: "bold",
      },
    });