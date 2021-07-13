import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MenuProvider } from 'react-native-popup-menu';

import Gallery from './Components/Screens/Gallery';
import ImageDetails from './Components/Screens/ImageDetails';
import Main from './Components/Screens/Main';
import Splash from './Components/Screens/Splash';
import Categories from './Components/Screens/Categories';
import Album from './Components/Screens/Album';
import Frames from './Components/Screens/Frames'
import CreateAlbum from './Components/Screens/CreateAlbum';
import Covergallery from './Components/Screens/Covergallery';
import AlbumImags from './Components/Screens/AlbumImags';
import Albumcoverimage from './Components/Screens/Albumcoverimage'
import Addcategories from './Components/Screens/Addcategories';
import CategoryCoverImage from './Components/Screens/CategoryCoverImage';
import FullimageView from './Components/Screens/FullimageView';
import AlbumView from './Components/Screens/AlbumView';
import CategoryAlbum  from './Components/Screens/CategoryAlbum';
import AddAlbumImages from './Components/Screens/AddAlbumImages';
import Pdfview from './Components/Screens/Pdfview';
import Preview from './Components/Screens/Preview';
import AddPreview from './Components/Screens/AddPreview';
import CategoryAlbumView from './Components/Screens/CategoryAlbumView';




export default function App({navigation}){
  const Stack =createStackNavigator();
 
  return(
    <MenuProvider>
    <NavigationContainer >
    <Stack.Navigator screenOptions={{headerMode:'null'}} >
      <Stack.Screen name="Splash" component={Splash}/>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Gallery" component={Gallery}/>
      <Stack.Screen name="ImageDetails" component={ImageDetails}/>
      <Stack.Screen name="AlbumImags" component={AlbumImags}/>
      <Stack.Screen name="Albumcoverimage" component={Albumcoverimage}/>
      <Stack.Screen name='Categories' component={Categories}/>
      <Stack.Screen name="Album" component={Album}/>
      <Stack.Screen name="CreateAlbum" component={CreateAlbum}/>
      <Stack.Screen name="Frames" component={Frames}/>
      <Stack.Screen name="Covergallery" component={Covergallery}/>
      <Stack.Screen name="Addcategories" component={Addcategories}/>
      <Stack.Screen name="CategoryCoverImage" component={CategoryCoverImage}/>
      <Stack.Screen name="FullimageView" component={FullimageView}/>
      <Stack.Screen name="AlbumView" component={AlbumView}/>
      <Stack.Screen name="CategoryAlbum" component={CategoryAlbum}/>
      <Stack.Screen name="AddAlbumImages" component={AddAlbumImages}/>
      <Stack.Screen name="Pdfview" component={Pdfview}/>
      <Stack.Screen name="Preview" component={Preview}/>
      <Stack.Screen name="AddPreview" component={AddPreview}/>
      <Stack.Screen name="CategoryAlbumView" component={CategoryAlbumView}/>
      
   </Stack.Navigator>
    </NavigationContainer>
     </MenuProvider>
  );
}


