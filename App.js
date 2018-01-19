import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Bottom,
  Left,
  Right,
  Body,
  Icon,
  Drawer,
  Button,
} from 'native-base';
import { NativeRouter, Route, Switch } from 'react-router-native';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Beers from './components/Beers';
import Breweries from './components/Breweries';
import RealFooter from './components/Footer';

class App extends React.Component {
  state = { drawerOpen: false }
  
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
    });
  }

  toggleDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen }, () => {
      if (this.state.drawerOpen)
        this.openDrawer();
      else
        this.closeDrawer();
    })
  }

  closeDrawer = () => {
    this.drawer._root.close();
  }

  openDrawer = () => {
    this.drawer._root.open();
  }

  render() {
    return (
      <NativeRouter>
        <Container style={{backgroundColor: 'black'}}>
          <Header>
            <Left>
            <Button 
              transparent 
              iconLeft 
              title='Home'
              onPress={this.toggleDrawer}
            >
              <Icon name='ios-beer' />
            </Button>
            </Left>
            <Body>
              <Title>Brewery</Title>
              <Title>Data Base</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <Drawer
              ref={ ref => { this.drawer = ref }}
              content={
                <Sidebar
                  close={this.toggleDrawer}
                  navigator={this._navigator}
                />
              }
              onClose={this.closeDrawer}
            >
            </Drawer>
            { this.state.drawerOpen ? null :
              <View>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/beers' component={Beers} />
                  <Route exact path='/breweries' component={Breweries} />
                </Switch>
              </View>
            }
          </Content>
          <Footer>
            <RealFooter />
          </Footer>
        </Container>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
