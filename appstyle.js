import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    main: {
        flex: 1, flexDirection: 'column',
    },
    header: {
        flex: 1, flexDirection: 'row-reverse', justifyContent: 'flex-start',
    },
    body: {
        flex: 1, flexDirection: 'row-reverse',
    },
    input: {
        fontFamily: 'IRANSansMobile', fontSize: 18,
    }
})

export default styles;