import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import logo from './logo.svg';
import './App.css';
import { NavigationBar } from './components/NavigationBar'

function App() {
  return (
    <View style={styles.link}>
      <NavigationBar>
      <Text>
        test
      </Text>
      </NavigationBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#eeeeee"
  },
  link: {
    margin: 16,
  },
  linkText: {
    color: "#191970",
    fontSize: 24,
  },
});
export default App;
