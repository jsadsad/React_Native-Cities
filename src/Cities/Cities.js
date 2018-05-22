import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native'

import { colors } from '../theme'
import CenterMessage from '../components/CenterMessage'


export default class Cities extends React.Component {
  static navigationOptions = {
    title: 'Cities',
    headerTitleStyle: {
      color: 'blue',
      fontSize: 20,
      fontWidth: 400
    }
  }
  viewCity = (city) => {
    this.props.navigation.navigate('City', { city })
  }
  render() {
    return(
      <ScrollView>
        <View>
          {
            !this.props.screenProps.cities.length && (
              <CenterMessage message="No cities" />
            )
          }
          {
            this.props.screenProps.cities.map((city, index) => (
              <View>
                <TouchableWithoutFeedback
                   onPress={() => this.viewCity(city)}
                   >
                     <View style={styles.cityContainer}>
                       <Text style={styles.city}>{city.city}</Text>
                       <Text style={styles.country}>{city.country}</Text>
                     </View>

                </TouchableWithoutFeedback>
              </View>
            ))
          }
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  cityContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary
  },
  city: {
    fontSize: 15
  },
  country: {
    color: 'rgba(0, 0, 0, .5)'
  }
})
