import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    root:
    {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        margin: 4,
        padding: 8,
    },
    body:
    {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        margin: 6,
    },
    icon:
    {
        margin: 4,
        color: '#efefef'
    },
    date:
    {
        color: '#898989'
    },
    userName:
    {
        marginTop: 4,
        marginBottom: 4,
        fontSize: 17,
        color: '#898989',
    },
    content: {
        fontSize: 17,
        color: '#303030',

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

export default styles;