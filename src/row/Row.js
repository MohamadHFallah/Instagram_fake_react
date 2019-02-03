import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Alert, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import style from '../style/PostStyle';
import FastImage from 'react-native-fast-image';
import dt from '../util/DateParser';

class Row extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={style.root}>
                <View style={style.header}>
                    <Image style={style.userLogo}
                        source={{ uri: 'http://edu-edu.ir/channel/cat/test/' + this.props.user_id + ".jpg" }}
                        onPress={() => { this.props.navigation.navigate('Profile') }} />
                    <Text style={style.userName}>{this.props.userName} </Text>
                    <View style={{ flex: 1 }} />
                    <TouchableOpacity>
                        <Icon style={style.icon} type="FontAwesome" name="ellipsis-v" />
                    </TouchableOpacity>
                </View>
                <View style={style.body}>
                    <FastImage
                        style={{ width: '100%', height: 200, backgroundColor: '#f00' }}
                        source={{
                            uri: 'http://edu-edu.ir/channel/cat/test/' + this.props.user_id + ".jpg",
                            headers: { Authorization: 'someAuthToken' },
                            priority: FastImage.priority.normal,
                        }}
                        resizeMode={FastImage.resizeMode.cover}
                        onProgress={e => console.log(e.nativeEvent.loaded / e.nativeEvent.total)}
                    />
                    <Text >{this.props.content} </Text>
                </View>
                <View style={style.footer}>
                    <View style={style.footer_icons}>

                        <Icon style={style.icon} type="FontAwesome" name="heart" />

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Comments', {
                                "post_id": this.props.post_id
                            })}>
                            <Icon style={style.icon} type="FontAwesome" name="comment"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row'}}> 
                        <Text >{this.props.comment + " comments"}</Text>
                        <Text >    </Text>  
                        <Text style={{color:"#848F82"}}> 
                        {dt.DateParser(this.props.created).toLocaleUpperCase()} 
                        </Text>
                    </View>
                </View>
            </View>

        );
    }
}


export default Row;
