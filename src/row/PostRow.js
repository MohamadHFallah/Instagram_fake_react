import React from 'react';
import { StyleSheet, View, Text, Image,Alert } from 'react-native';
import { Icon, ActionSheet } from 'native-base';
import FastImage from 'react-native-fast-image'

state = {
    click: true
}
const PostRow = ({ userName, userLogo = '', content, comment }) => (
    <View style={style.root}>
        <View style={style.header}> 
            <Image style={style.userLogo} source={{ uri: userLogo }}
                onPress={() => { Alert.alert("myTitle", "my message"); }} />
            <Text style={style.userName}>{userName}</Text>
            <View style={{ flex: 1 }} />
            <Icon style={style.icon} type="FontAwesome" name="ellipsis-v"
                onPress={() => { Alert.alert("myTitle", "my message"); }} />
        </View>
        <View style={style.body}>
            <FastImage
                style={{ width: '100%', height: 200, backgroundColor: '#f00' }}
                source={{
                    uri: 'http://edu-edu.ir/channel/1.jpg',
                    headers: { Authorization: 'someAuthToken' },
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
                onProgress={e => console.log(e.nativeEvent.loaded / e.nativeEvent.total)}
            />
            <Text >{content} </Text>

        </View>
        <View style={style.footer}>
            <View style={style.footer_icons}>
                <Icon style={style.icon} type="FontAwesome" name="heart" />
                <Icon style={style.icon} type="FontAwesome" name="comment" />
            </View>
            <Text >{comment} </Text>
        </View>
    </View>
)

const style = StyleSheet.create({
    root:
    {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderRadius: 2,
        elevation: 4,
        margin: 4,
        padding: 8,
    },
    header:
    {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: "#f00",
    },
    body:
    {
        justifyContent: 'center',
        margin: 4,
    },
    footer:
    {
        justifyContent: 'center',
        margin: 4,
    },
    footer_icons:
    {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 4,
        justifyContent: 'flex-start',
    },
    icon:
    {
        margin: 6,
        color: '#efefef'
    },
    userName:
    {
        fontSize: 16,
        color: '#898989',
    },
    userLogo:
    {
        width: 60,
        height: 60,
        marginLeft: 6,
        marginTop: 2,
        marginRight: 2,
        borderRadius: 100,
    },
    imagePost: {
        width: '100%',
        height: 150,
    }
});
export default PostRow;