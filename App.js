import React from 'react';
import { View, StatusBar } from 'react-native';


import Home from "./src/views/Home";


export default function App() {
  return (
    <View >
      <StatusBar
      backgroundColor = "#000103"
     // hidden = {true}
      />
      <Home />
    </View>
  );
}

