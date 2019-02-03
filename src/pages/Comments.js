import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import CommentRow from '../row/CommentRow';
import api from '../api/FetchData';

class Comments extends Component {

  state = {
    post_id: -1,
    comments: []
  }
  static navigationOptions = {
    headerTitle: 'Comment',
  };


  constructor(props) {
    super(props); 
    this.state = {

    };

  }

  async componentDidMount() {

    const { navigation } = this.props;
    const post_id = navigation.getParam("post_id");
    this.setState({ post_id });
    const comments = await api.fetchComments(post_id);  
    this.setState({ comments });
  }

  getData() {
    return [
      {
        id: 1,
        post_id: 2,
        user_id: 1000,
        content: 'like',
        created: '2018-12-31T20:30:00.000',
        isDeleted: 0,
        isActive: 1,
        userName: "sara"
      },
      {
        id: 2,
        post_id: 2,
        user_id: '1001',
        content: 'big like',
        created: '2018-12-31T20:30:00.000',
        isDeleted: 0,
        isActive: 1,
        userName: 'amir'
      }
    ]
  }

  render() {

    return (
      <View style={{
        flex: 1,
        backgroundColor: '#FCFCFC',
      }}>
        <FlatList
          data={this.state.comments}
          renderItem={({ item }) =>
            <TouchableOpacity >
               <CommentRow
                comment={item}     
                /> 
            </TouchableOpacity>

          }
          keyExtractor={item => item.id}
        />

      </View>
    );
  }
}

export default Comments;
