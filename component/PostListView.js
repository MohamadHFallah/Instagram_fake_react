import React from 'react';
import { View, ListView, FlatList, StyleSheet, Text } from 'react-native';
import CustomRow from './CustomRow';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


const PostListView = ({ itemList }) => (
    <View style={styles.container}>
        <FlatList
                data={itemList}
                renderItem={({ item }) => <CustomRow
                    title={item.name} 
                    description={item.description}
                    image_url={item.img}
                />}
            />

    </View>
);

export default PostListView;