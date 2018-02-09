import React from 'react';
import { withRouter } from 'react-router-native';
import { Text, Platform, Dimensions } from 'react-native';
import { List, ListItem } from 'native-base';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const navs = [
  { name: 'Home', path: '/' },
  { name: 'Beers', path: '/beers' },
  { name: 'Breweries', path: '/breweries' },
]

const navigate = ( close, history, path ) => {
  close();
  history.push(path);
} 

const Sidebar = ({ close, history, dispatch }) => {
  return (
    <List style={styles.drawer}>
    { navs.map( (nav,i) => {
      return(
        <ListItem key={i}>
          <Text
            onPress={() => navigate(close, history, nav.path) }
            style={styles.text}
          >
            { nav.name }
          </Text>
        </ListItem>
        )
      })
    }
    </List>
  )
}

const styles = {
  drawer: {
    height: deviceHeight / 3.5,
    width: deviceWidth / 1.4,
    marginBottom: 10,
  },
  text: {
    fontWeight: (Platform.OS === 'ios') ? '500' : '400',
    fontSize: 16,
  }
}

export default withRouter(Sidebar);