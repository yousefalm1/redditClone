import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPosts from '../screens/AllPosts';
import SinglePost from '../screens/SinglePost';
import AddPost from '../screens/AddPost';

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AllPosts" component={AllPosts} />
      <Stack.Screen name="SinglePost" component={SinglePost} />
      <Stack.Screen name="AddPost" component={AddPost} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({});
