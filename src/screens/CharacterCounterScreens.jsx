import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const CharacterCounterScreens = () => {
  const [maxLength, setMaxLength] = useState(50);

  const [text,setText] = useState('')

const counttextLength = text.length

const extraValue = counttextLength - Number(maxLength)

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
        }}
      >
        <Text>maxLength : </Text>
        <TextInput
          style={{ borderWidth: 1, width: '30%' }}
          value={maxLength}
          onChangeText={setMaxLength}
        />
      </View>

      <View style={{ marginTop: 20, alignItems: 'center' }}>
        <TextInput
          style={{ borderWidth: 1, width: '50%' }}
          placeholder='Start Typing'
          multiline={true}
          numberOfLines={12}
          value={text}
          onChangeText={setText}
        />
      </View>

      <View style={{ alignItems: 'center', marginTop: 20, flexDirection:'row', justifyContent:'center' }}>
        <Text>{counttextLength}</Text>
        <Text>/{maxLength}</Text>
        
        
      </View>

      {extraValue > 0 &&
        <View style={{ marginTop:20 }} >
            <Text>Limit Exceeded by 
            
        <Text>{extraValue}</Text>
         characters
            </Text>
        </View>
}

    </View>
  );
};

export default CharacterCounterScreens;
