//[{"id":1,"post_id":2,"user_id":"1000","content":"like","created":"2018-12-31T20:30:00.000Z","isDeleted":0,"isActive":1,"userName":"sara"},{"id":2,"post_id":2,"user_id":"1001","content":"big like","created":"0000-00-00 00:00:00","isDeleted":0,"isActive":1,"userName":"amir"}]

import React from 'react';
import { View, Text, Image, Alert } from 'react-native';
import style from '../style/commentStyle';
import dt from '../util/DateParser';
 
state = {
    click: true 
}

const CommentRow = ({ comment }) => (

    <View style={style.root}>
        <View style={style.root}>
            <View style={{ flex: 1 }}>
                <Image style={style.userLogo}
                    source={{ uri: 'http://edu-edu.ir/channel/cat/test/' + comment.user_id + ".jpg" }} />
            </View>

            <View style={style.body}>
                <Text style={style.userName}>{comment.userName}</Text>
                <Text style={style.date}>{comment.content}</Text>
                <Text style={style.date}>{dt.DateParser(comment.created)}</Text>
            </View> 
        </View>
    </View >
)
  
export default CommentRow;