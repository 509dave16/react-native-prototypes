import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Realm from 'realm';

class RealmPrototype extends Component {
 render() {
   let realm = new Realm({
     schema: [{ name: 'Dog', properties: { name: 'string' } }]
   });

   realm.write(() => {
     realm.create('Dog', { name: 'Rex' });
   });

   return (
     <View style={styles.container}>
       <Text style={styles.welcome}>
         Count of Dogs in Realm: {realm.objects('Dog').length}
       </Text>
     </View>
   );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default RealmPrototype;
