import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {Button} from 'react-native-elements';

export default class OrderDetail extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `Order #${navigation.state.params.item}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    const {navigate} = this.props.navigation;
    return (
      <View style={{backgroundColor: '#EBF5FB', flex:1}}>
      {/* Need to pull out info from the server */}
        <Text style={styles.textStyle}> {/*getOrderInfo()*/} Nikesh, Small Pizza, Delivery </Text>
      <Button
          title= "Order Received"  
          backgroundColor='#5499C7'
          raised
          large
          onPress={()=> navigate('Home')}
          //onPress={() => console.log('Send notification to user')}
          //onPress={()=> sendNotificationToUser()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  textStyle: {
    color: '#EC7063',
    fontWeight: 'bold',
    fontSize: 25,
    alignSelf: 'center'
  },
});