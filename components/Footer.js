import React from 'react';
import { Text } from 'react-native';
import { 
  FooterTab,
  Button,
  Icon,
 } from 'native-base';

const Footer = () => (
  <FooterTab>
    <Button vertical onPress={() => this.openDescription}>
      <Icon name='ios-home-outline' />
      <Text>Home</Text>
    </Button>
    <Button vertical onPress={()=> this.openDescription}>
      <Icon name='ios-pint' />
      <Text>Beers</Text>
    </Button>
    <Button vertical onPress={()=> this.openDescription}>
      <Icon name='ios-globe-outline' />
      <Text>Breweries</Text>
    </Button>
  </FooterTab>
)

export default Footer;