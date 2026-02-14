import React, {useState} from "react";
import {View,Text, Image, TouchableOpacity} from 'react-native'

const user = {
  name: 'Jane Doe',
  bio: 'Frontend developer who loves React and coffee ☕️',
  image: 'https://do6gp1uxl3luu.cloudfront.net/question-webp/dummyUser.jpg'
};

const App = () =>{

  const [show,setShow] = useState(false)

  const toggleBio = () =>{
    setShow(!show)
  }

  return (
    <View style={{ flex:1,  alignItems:'center', backgroundColor:'#000' }} >

      <View style={{ flex:8, justifyContent:'center' }} >

    <Image source={{uri: user.image}} style={{ width:100, height:100, borderRadius:100 }} resizeMode='contain'  />

      <Text style={{ marginVertical:20, color:'#fff', fontSize:20, fontWeight:'bold',  }} >{user.name}</Text>


    <TouchableOpacity 
    onPress={toggleBio}
    style={{ padding:20, backgroundColor:'#fff', borderRadius:10 }} >
      <Text>Show Biosss</Text>
    </TouchableOpacity>

    </View>

    <View style={{ flex:4, justifyContent:'flex-start', alignItems:'flex-start' }} >
    {show &&
    <Text style={{ marginVertical:20, color:'#fff', fontSize:20, fontWeight:'bold',  }}>{user.bio}</Text>
  }
    </View>
    

    </View>
  )
}

export default App