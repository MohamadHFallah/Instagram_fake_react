import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
        color: '#428F32'
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
export default styles; 