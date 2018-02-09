import React from 'react';
import { Text } from 'react-native';
import { withRouter } from 'react-router-native';
import { 
  FooterTab,
  Button,
  Icon,
} from 'native-base';

openHome = () => {
  this.props.history.push('/')
}

openBeers = () => {
  this.props.history.push('/beers')
}

openBreweries = () => {
  this.props.history.push('/breweries')
}

const Footer = () => (
  <FooterTab>
    <Button vertical onPress={this.openHome}>
      <Icon name='ios-home-outline' />
      <Text>Home</Text>
    </Button>
    <Button vertical onPress={this.openBeers}>
      <Icon name='ios-pint' />
      <Text>Beers</Text>
    </Button>
    <Button vertical onPress={this.openBreweries}>
      <Icon name='ios-globe-outline' />
      <Text>Breweries</Text>
    </Button>
  </FooterTab>
)

export default withRouter(Footer);