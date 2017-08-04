import {
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  buttonContainer: {
        alignItems: 'flex-end'
    },
    button: {
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#ffffff',
        width: 200,
        marginRight: 20,
        marginTop: 15,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    submit: {
        color: '#666666',
        fontWeight: '600'
    },
    inputContainer: {
        marginLeft: 20,
        marginRight: 20,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 }
    },
    input: {
        height: 60,
        backgroundColor: "#ffffff",
        paddingLeft: 10,
        paddingRight: 10
    },
    todoContainer: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#ededed',
        paddingLeft: 14,
        paddingTop: 7,
        paddingBottom: 7,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 },
        flexDirection: 'row',
        alignItems: 'center'
    },
    todoText: {
        fontSize: 17
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    todobutton: {
        alignSelf: 'flex-end',
        padding: 7,
        borderColor: '#ededed',
        borderWidth: 1,
        borderRadius: 4,
        marginRight: 5
    },
    text: {
        color: '#666666'
    },
    complete: {
        color: 'green',
        fontWeight: 'bold'
    },
    deleteButton: {
        color: 'rgba(175, 47, 47, 1)'
    }
});

export default styles;