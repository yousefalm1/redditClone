import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AllPosts from './src/screens/AllPosts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomeNavigation from './src/Navigation/HomeNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const queryClient = new QueryClient();
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <HomeNavigation />
      </QueryClientProvider>
    </NavigationContainer>
  );
}
