import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Animated,
  LayoutAnimation,
  TouchableOpacity,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/FontAwesome'

export default function EventListItem({ event, goToEvent }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => goToEvent(event)}>
      <Ionicons
        name={event.icon ? event.icon : 'ticket'}
        size={32}
        color='black'
        style={styles.icon}
      />
      <View style={{flex: 1}}>
        <Text style={styles.h2}>{event.title}</Text>
        <Text style={styles.p}>{event.location}</Text>
      </View>
      <Ionicons
        name='chevron-right'
        size={32}
        color='black'
        style={styles.icon}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#eff3f3',
    flexDirection: 'row',
    marginHorizontal: 8,
    marginVertical: 4,
    shadowColor: '#2B2B2B',
    shadowOffset: { width: 3, height: 3},
    shadowRadius: 3,
    shadowOpacity: .5,
    elevation: 10
  },
  h2: {
    fontWeight: "700",
    fontSize: 18,
    color: '#2B2B2B',
    margin: 4,
    paddingBottom: 12
  },
  p: {
    fontWeight: "300",
    fontSize: 18,
    color: '#2B2B2B',
    margin: 4,
    paddingBottom: 4
  },
  icon: {
    padding: 12,
    alignSelf: 'center'
  }
})
