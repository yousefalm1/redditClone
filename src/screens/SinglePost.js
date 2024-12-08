import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import {
  getSinglePost,
  deletePost,
  addComment,
  deleteComment,
} from '../api/posts';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRoute, useNavigation } from '@react-navigation/native';
const SinglePost = ({ route }) => {
  const queryClient = useQueryClient();

  const navigation = useNavigation();
  const { post } = route.params;

  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['singlePost', post.id],
    queryFn: () => getSinglePost(post.id),
  });

  const { mutate: deletePostMutation } = useMutation({
    mutationKey: ['deletePost'],
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
      navigation.navigate('AllPosts');
    },
  });
  const handleDelete = () => {
    deletePostMutation(post.id);
  };

  const { mutate: addCommentMutation } = useMutation({
    mutationKey: ['addComment'],
    mutationFn: (comment) => addComment(post.id, comment),
    onSuccess: () => {
      queryClient.invalidateQueries(['singlePost', post.id]);
      setUsername('');
      setComment('');
    },
  });

  const handleAddComment = () => {
    addCommentMutation({ username, comment });
  };

  const { mutate: deleteCommentMutation } = useMutation({
    mutationKey: ['deleteComment'],
    mutationFn: (id) => deleteComment(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['singlePost', post.id]);
    },
  });

  const handleDeleteComment = (id) => {
    deleteCommentMutation(id);
  };

  return (
    <View style={{ padding: 20, gap: 10, alignItems: 'center' }}>
      <View style={{ flexDirection: 'column', gap: 10 }}>
        <Text>{data?.title}</Text>
        <Text>{data?.description}</Text>
        <TouchableOpacity
          style={{ backgroundColor: 'red', padding: 10 }}
          onPress={handleDelete}
        >
          <Text>Delete</Text>
        </TouchableOpacity>

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontWeight: 'bold' }}>Comments:</Text>
          {data?.comments?.map((comment) => (
            <View key={comment.id} style={{ marginVertical: 5 }}>
              <Text style={{ fontWeight: '500' }}>
                Username: {comment.username}:
              </Text>
              <Text> Comment: {comment.comment}</Text>
              <Text>id: {comment.id}</Text>
              <TouchableOpacity
                style={{ backgroundColor: 'red', padding: 10 }}
                onPress={() => handleDeleteComment(comment.id)}
              >
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>

      <View style={{ gap: 10 }}>
        <TextInput
          placeholder="Enter Username"
          value={username}
          required
          name="username"
          onChangeText={setUsername}
          style={{ borderWidth: 1 }}
        />
        <TextInput
          placeholder="Add a comment"
          value={comment}
          onChangeText={setComment}
          required
          name="comment"
          style={{ borderWidth: 1 }}
        />
        <TouchableOpacity
          style={{ backgroundColor: 'green', padding: 10 }}
          onPress={handleAddComment}
        >
          <Text>Add Comment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SinglePost;

const styles = StyleSheet.create({});
