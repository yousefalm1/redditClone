import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { addPost } from '../api/posts';
import { useNavigation } from '@react-navigation/native';

const AddPost = () => {
  const navigation = useNavigation();
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const { mutate: addPostMutation } = useMutation({
    mutationFn: addPost,
  });

  const handleAddPost = () => {
    addPostMutation({ title, description });
    navigation.navigate('AllPosts');
  };

  return (
    <View style={{ padding: 20, gap: 10 }}>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray' }}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        required
      />
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray' }}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        required
      />
      <TouchableOpacity
        style={{ backgroundColor: 'green', padding: 10, alignItems: 'center' }}
        onPress={handleAddPost}
      >
        <Text>Add Post</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddPost;

const styles = StyleSheet.create({});
