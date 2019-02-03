import React, { Component } from 'react';
import { View, TouchableOpacity, FlatList, Alert } from 'react-native';
import loadPost from './api/FetchData';
import Row from './row/Row';
import { Container,Content,Button, Footer, FooterTab, Icon } from 'native-base';

class Main extends Component {  

    state = {
        posts: []
    }
    static navigationOptions = {
        headerTitle: 'Instagram Fake',  
    };

    constructor(props) {
        super(props);
        this.state = {
        }; 
    }

    async componentDidMount() {
        const posts = await loadPost.fetchPosts();
        this.setState({ posts });
    }

    getData() {
        return [
            {
                key: 1,
                userName: 'Albert Einstein',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                img: 'http://edu-edu.ir/channel/cat/3.jpg'
            },
            {
                key: 2,
                userName: 'Isaac newton',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                img: 'http://edu-edu.ir/channel/cat/4.jpg'
            },
            {
                key: 3,
                userName: 'Albert Einstein',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                img: 'http://edu-edu.ir/channel/cat/6.jpg'
            },
            {
                key: 4,
                userName: 'Isaac newton',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                img: 'http://edu-edu.ir/channel/cat/7.jpg'
            },
            {
                key: 5,
                userName: 'Albert Einstein',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                img: 'http://edu-edu.ir/channel/cat/8.jpg'
            },
            {
                key: 6,
                userName: 'Isaac newton',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                img: 'http://edu-edu.ir/channel/cat/9.jpg'
            },
            {
                key: 7,
                userName: 'Albert Einstein',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                img: 'http://edu-edu.ir/channel/cat/10.jpg'
            },
            {
                key: 8,
                userName: 'Isaac newton',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                img: 'http://edu-edu.ir/channel/cat/11.jpg'
            },
            {
                key: 9,
                userName: 'Albert Einstein',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                img: 'http://edu-edu.ir/channel/cat/13.jpg'
            },
            {
                key: 10,
                userName: 'Isaac newton',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                img: 'http://edu-edu.ir/channel/cat/15.jpg'
            },
        ]
    }
    render() {
        return (
            <Container style={{
                flex: 1,
                backgroundColor: '#FCFCFC', }}>
                <Content >
                    <FlatList  
                        data={this.state.posts}
                        renderItem={({ item }) =>

                            <Row
                                post_id={item.id}
                                user_id={item.user_id}
                                userName={item.userName}
                                userLogo={item.img}
                                content={item.content}
                                comment={item.comments}
                                created={item.created}
                                liked={item.liked}
                                navigation={this.props.navigation}
                            />


                        }
                        keyExtractor={item => item.id}
                    />

                </Content >
                <Footer  >
                     <FooterTab style={{backgroundColor:"#fff"}}>
                        <Button >
                            <Icon active name="apps" />
                        </Button>
                        <Button> 
                            <Icon name="camera" />
                        </Button>
                        <Button>
                            <Icon name="navigate" />
                        </Button>
                        <Button>
                            <Icon name="person" />
                        </Button>
                    </FooterTab>
                </Footer>


            </Container>
        );
    }
}

export default Main;
