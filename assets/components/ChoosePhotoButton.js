import * as React from 'react';
import { Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ChoosePhotoButton({setImgUri}) {
  return (
    <Button
      title='Choose a Photo'
      onPress={() => choosePhotoAsync(setImgUri)}
    />
  );
}

async function choosePhotoAsync(setImgUri) {
  // Asking for Permissions
 const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  const isSuccessful = status === 'granted'; 

  if (!isSuccessful) {
    alert('Media permissions not granted');
    return;
  }

  const image = await ImagePicker.launchImageLibraryAsync(
    {mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspectRatio: [1,1]
    }
  );
  if (!image.cancelled) {
    //do something with new user photo
    setImgUri(image.uri);
  }
}