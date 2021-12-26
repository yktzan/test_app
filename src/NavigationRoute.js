import * as React from 'react';
import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ContactScreen from './screen/ContactScreen';
import DetailsScreen from './screen/DetailsScreen';

function Contact({navigation, route}) {
  return <ContactScreen navigation={navigation} route={route} />;
}
function Details({navigation, route}) {
  return <DetailsScreen navigation={navigation} route={route} />;
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Contact}
          options={{
            title: 'Contacts',
            headerLeft: () => (
              <TouchableOpacity>
                <Image
                  source={require('../src/assets/icon/search.png')}
                  style={{width: 20, height: 20}}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity>
                <Image
                  source={require('../src/assets/icon/plus.png')}
                  style={{width: 20, height: 20}}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
