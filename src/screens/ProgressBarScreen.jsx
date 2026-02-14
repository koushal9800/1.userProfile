import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ProgressBarScreen = () => {
  const [innerWidth, setInnerWidth] = useState(0);

  const decreaseWidth = () => {
    setInnerWidth(prev => Math.max(prev - 10, 0));
  };

  const increaseWidth = () => {
    setInnerWidth(prev => Math.min(prev + 10, 100));
  };
  const getColor = () =>{
    if(innerWidth <40) return 'red';
    if(innerWidth < 80) return 'orange';
    return 'green'
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ProgressBarScreen</Text>

      <View
        style={{
          width: '100%',
          height: 32,
          borderWidth: 1,
          borderRadius: 12,
          marginTop: 20,
          backgroundColor:'grey'
        }}
      >



        <View
          style={{
            width: `${innerWidth}%`,
            height: '100%',
            backgroundColor: getColor(),
            borderTopLeftRadius: 12,
            borderBottomLeftRadius: 12,
          }}
        >
            <Text style={{ fontSize:20, color:'#fff', alignSelf:'center' }} >{innerWidth}%</Text>
        </View>
      </View>

      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}
      >
        <TouchableOpacity
          onPress={decreaseWidth}
          style={{ padding: 12, borderWidth: 1, borderRadius: 8 }}
        >
          <Text>-10%</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={increaseWidth}
          style={{
            padding: 12,
            borderWidth: 1,
            borderRadius: 8,
            marginLeft: 12,
          }}
        >
          <Text>+10%</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProgressBarScreen;
