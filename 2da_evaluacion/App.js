import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import {Container, Content, Header, Left, Button, Icon, Body, Title, Right, Footer, FooterTab, Tab, Tabs, TabHeading,CardItem} from 'native-base';
import {Ionicons} from '@expo/vector-icons';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <Container style= {styles.container} >
      <Header hasTabs style={styles.Header}/> 
        <Tabs >

          <Tab  heading={<TabHeading style={{backgroundColor:'#778899'}}><Text><Ionicons name="md-heart" size={25} color={'hotpink'}></Ionicons></Text></TabHeading>}>
              <Content style={styles.Content}>
                <Button large bordered block success style={{padding:50,margin:50,borderColor:"blue"}}>
                  <Text style={{color:"white",fontWeight:"bold",fontSize:20,fontStyle: "italic"}}>
                  FITNESS TIME
                  </Text>
                </Button>
                <Content>
                <Text>
                  <Button bordered light style={{backgroundColor:"black", marginTop:100, margin:25}} padding={25}>
                  <Text style={{color:"white",fontWeight:"bold"}} >Series</Text>
                </Button>
                <Text><Ionicons name="md-arrow-dropdown-circle" size={25}></Ionicons></Text>
                <Button bordered light style={{backgroundColor:"black", margin:25}} padding={25}>
                  <Text style={{color:"white",fontWeight:"bold"}}>Inicio</Text>
                </Button>
                <Button bordered light style={{backgroundColor:"black", margin:25}} padding={15}>
                  <Text style={{color:"white",fontWeight:"bold"}}>Descanso</Text>
                </Button>
                </Text>
              </Content>
              </Content>
          </Tab>

           <Tab heading={<TabHeading style={{backgroundColor:'#778899'}}><Text><Ionicons name="md-play" size={25} color={'tomato'}></Ionicons></Text></TabHeading>}>
               <Content style={{backgroundColor:'#006666'}}>
                <Text>
                  This is Content Section
                </Text>
              </Content>
          </Tab>

           <Tab heading={<TabHeading style={{backgroundColor:'#778899'}}><Text><Ionicons name="md-pause" size={25} color={'sandybrown'}></Ionicons></Text></TabHeading>}>
               <Content style={{backgroundColor:'#006666'}}>
                <Text>
                  This is Content Section
                </Text>
              </Content>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    
  },
  Header: {
    color: 'grey',
    height: 23,
  },

  Content: {
    padding:15,
    backgroundColor:'#67AB9F'

  },
  
  
});
