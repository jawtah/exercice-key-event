// Example of Image Picker in React Native
// https://aboutreact.com/example-of-image-picker-in-react-native/
 
// Import React
import React, {useEffect, useState} from 'react';
// Import required components
import {
  
  View,

  Image,Button
} from 'react-native';
 
// Import Image Picker

import {launchImageLibrary,launchCamera} from "react-native-image-picker"
 
const App = () => {
  

  const[file,setFile]=useState("https://th.bing.com/th/id/R.88399706b4a51f89e8ab6d7a81b726a1?rik=bx8qwQQ%2fO4mlLw&pid=ImgRaw&r=0")

  useEffect(()=> {
    setFile(file)
  })
 
return(
  <View style={{flex:1}}>
  <Button onPress={() =>
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
        saveToPhotos:true,
        storageOptions:{
          skipBackup:true,
        }
      }  ).then(file=>{
        console.log(file)
        setFile(file.assets[0].uri);
      })
      .catch(err=>{console.log(err)})
  }
title="Select Image"/>
<Button onPress={() =>
  launchCamera(
    {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
      saveToPhotos:true,
      storageOptions:{
        skipBackup:true,
      }
    }  ).then(file=>{
      console.log(file)
      setFile(file.assets[0].uri);
    })
    .catch(err=>{console.log(err)})
}
title="Prendre une photo"/>

<Image style={{width:200,height:200}} 
       source={{uri: file}}/>
  </View>
)

}
export default App