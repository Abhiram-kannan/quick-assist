import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from './DetailsScreen';

const options = [
  { name: 'General First Aid', icon: 'local-hospital' },
  { name: 'Snake Bites', icon: 'coronavirus' },
  { name: 'Broken Bones', icon: 'personal-injury' },
  { name: 'Earthquake', icon: 'landslide' },
  { name: 'Floods', icon: 'water' },
  { name: 'Landslides', icon: 'terrain' },
  { name: 'Seizures', icon: 'personal-injury' },
  { name: 'Vehicle Accidents', icon: 'directions-car' },
  { name: 'Dog Bites', icon: 'pets' },
  { name: 'Burns', icon: 'fireplace' },
  { name: 'Drowning', icon: 'waves' },
  { name: 'Electric Shock', icon: 'bolt' },
  { name: 'Poisoning', icon: 'science' },
  { name: 'Choking', icon: 'restaurant-menu' },
];

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            style={styles.option}
            key={index}
            onPress={() =>
              navigation.navigate('Details', {
                name: option.name,
              })
            }
          >
            <MaterialIcons name={option.icon} size={40} color="white" />
            <Text style={styles.optionText}>{option.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  option: {
    backgroundColor: '#1eaad1',
    width: 100,
    height: 100,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 10,
  },
  optionText: {
    marginTop: 5,
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
});
