import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';
import { getPosts } from '../api/posts';
const AllPosts = () => {
  const navigation = useNavigation();
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });
  return (
    <ScrollView style={{ padding: 20 }}>
      {data?.map((post) => (
        <TouchableOpacity
          key={post.id}
          onPress={() => navigation.navigate('SinglePost', { post })}
        >
          <Text style={{ color: 'black' }}>{post.title}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={{ backgroundColor: 'blue', padding: 10 }}
        onPress={() => navigation.navigate('AddPost')}
      >
        <Text>Add Post</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AllPosts;

const styles = StyleSheet.create({});
