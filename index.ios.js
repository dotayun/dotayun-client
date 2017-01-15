/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Container,
    Header,
    Title,
    Badge,
    Content,
    Footer,
    FooterTab,
    Input,
    InputGroup,
    Text,
    Picker,
    Button,
    Icon,
    Card,
    CardItem,
    Thumbnail,
    List,
    ListItem,
    Radio,
    CheckBox,
    Fab,
    Spinner
} from 'native-base';
import {
    AppRegistry,
    StyleSheet,
    // Text,
    TextInput,
    Image,
    View
} from 'react-native';


const Item = Picker.Item;
export default class dotayun extends Component {
    constructor(props) {

        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: 'key0',
            results: {
                items: [],
            },
        };
    }

    onValueChange(value: string) {
        this.setState({
            selected1: value,
        });
    }


    render() {
        return (
            <Container>
                <Header>
                    <Button transparent>
                        <Icon name='ios-arrow-back'/>
                    </Button>

                    <Title>Header</Title>

                    <Button transparent>
                        <Icon name='ios-menu'/>
                    </Button>
                </Header>

                <Content>

                    <Spinner color='blue' />
                    <List>

                        <ListItem itemDivider>
                            <Text>A</Text>
                        </ListItem>
                        <ListItem >
                            <Text>Aaron Bennet</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Ali Connors</Text>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Input inlineLabel label="First Name" placeholder="John" />
                            </InputGroup>
                        </ListItem>

                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                                <Input placeholder="EMAIL" />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                                <Input placeholder="PASSWORD" secureTextEntry />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-call" style={{ color: '#0A69FE' }} />
                                <Input placeholder="PHONE" keyboardType="numeric" />
                            </InputGroup>
                        </ListItem>

                        <ListItem iconLeft>
                            <Icon name="ios-transgender" style={{ color: '#0A69FE' }} />
                            <Text>GENDER</Text>
                            <Picker
                                iosHeader="Select one"
                                mode="dropdown"
                                selectedValue={this.state.selected1}
                                onValueChange={this.onValueChange.bind(this)} >
                                <Item label="Male" value="key0" />
                                <Item label="Female" value="key1" />
                                <Item label="Other" value="key2" />
                            </Picker>
                        </ListItem>

                        <ListItem>
                            <InputGroup >
                                <Input stackedLabel label="Permanent Address" placeholder="Address" />
                            </InputGroup>
                        </ListItem>
                    </List>
                    <Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
                        Sign Up
                    </Button>
                    <Card style={{flex: 0}}>
                        <CardItem header>
                            <Text>NativeBase card header</Text>
                        </CardItem>
                        <CardItem>
                            <Thumbnail source={require('./img/furthestWorld.jpg')}/>

                            <Badge success>2</Badge>
                            <Text>NativeBase</Text>
                            <Text note>GeekyAnts</Text>
                        </CardItem>

                        <CardItem cardBody>
                            <Image style={{resizeMode: 'cover', width: null}} source={require('./img/dota.png')}/>
                            <Text style={{textAlign: 'center'}}>
                                铁甲依然在！
                            </Text>
                            <Button transparent textStyle={{color: '#87838B'}}>
                                <Icon name="logo-github"/>
                                <Text>1,926 stars</Text>
                            </Button>
                        </CardItem>
                        <CardItem button onPress="">
                            <Thumbnail source={require('./img/dota.png')}/>
                            <Text>Native Starter Pro</Text>
                        </CardItem>
                    </Card>
                    <List>
                        <ListItem>
                            <Radio selected={false} />
                            <Text>Daily Stand Up</Text>
                        </ListItem>
                        <ListItem>
                            <Radio selected={true} />
                            <Text>Discussion with Client</Text>
                        </ListItem>
                        <ListItem>
                            <CheckBox checked={true}/>
                            <Text>Daily Stand Up</Text>
                        </ListItem>
                        <ListItem>
                            <CheckBox checked={false}/>
                            <Text>Discussion with Client</Text>
                        </ListItem>
                    </List>
                    <Button block success> Success </Button>

                    <Fab
                        active={this.state.active}
                        direction="right"
                        containerStyle={{marginLeft: 10}}
                        style={{backgroundColor: '#5067FF'}}
                        position="bottomLeft"
                        onPress={() => this.setState({active: !this.state.active})}
                    >
                        <Icon name="md-share"/>
                        <Button style={{backgroundColor: '#34A34F'}}>
                            <Icon name="logo-whatsapp"/>
                        </Button>
                        <Button style={{backgroundColor: '#3B5998'}}>
                            <Icon name="logo-facebook"/>
                        </Button>
                        <Button disabled style={{backgroundColor: '#DD5144'}}>
                            <Icon name="ios-mail"/>
                        </Button>
                    </Fab>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button>
                            <Badge>2</Badge>
                            Apps
                            <Icon name='ios-apps-outline'/>
                        </Button>
                        <Button>
                            Camera
                            <Icon name='ios-camera-outline'/>
                        </Button>
                        <Button active>
                            Navigate
                            <Icon name='ios-compass'/>
                        </Button>
                        <Button>
                            Contact
                            <Icon name='ios-contact-outline'/>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
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

AppRegistry.registerComponent('dotayun', () => dotayun);
