import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

export default props => {
    return (
        <View style={[styles.container, props.style]}>
            <TouchableOpacity onPress={props.acao}>
                <Text style={[styles.button, props.styleButton]}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginTop: 4
    },
    button: {
        fontSize: 26,
        textAlign: 'center',
        color: '#FFFFFF',
        backgroundColor: '#4867AA',
        borderRadius: 10,
        height: 40,
        marginBottom: 2,
        width: Dimensions.get('window').width - 50
    }
})