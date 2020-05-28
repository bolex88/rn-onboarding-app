import React from 'react'
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'

const Payment = ({ navigation }) => {
    return (
        <View style={styles.background}>
            <Text style={styles.textstyle}>PAYMENT SUCCESSFUL</Text>
              <Text style={styles.textp}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam assumenda nobis quae eveniet quos ex magnam eligendi nesciunt iusto. Ad adipisci quod dolore in earum laborum, ipsa ut nobis aliquid.
              </Text>
            <Image style={styles.imagestyle}
            source={require('../../assets/images/successful_purchase.png')} 
           />

           <TouchableOpacity onPress={() => navigation.navigate('Online')}>
                <Text style={styles.textbutton}>Get Started</Text>
            </TouchableOpacity>
            <View style={styles.viewStyle}>
                <View>
                <TouchableOpacity onPress={() =>
                      navigation.navigate('AddCart')}>
                    <Text style={styles.TextOne}>Previous</Text>
                  </TouchableOpacity>
                </View>
                    <View style={styles.DotOne} />
                    <View style={styles.DotOne} />
                    <View style={styles.DotTwo} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        flex: 10
    },
    textstyle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 5,
        marginLeft: 15,
        marginTop: 15

    },
    textp: {
        fontSize: 15,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10
    },
    textbutton: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'blue',
        borderColor: 'blue',
        borderWidth: 2,
        padding: 5,
        marginStart: 110,
        marginEnd: 110,
        textAlign: 'center',
        borderRadius: 20,
        color: 'white',
        marginBottom: 40
        
    },
    imagestyle: {
        maxHeight: 240,
        maxWidth: 300,
        marginStart: 25,
        marginEnd: 25,
        marginTop: 10,
        marginBottom: 30,
        alignItems: 'center'
    },
    viewStyle: {
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center'
    },
    TextOne: {
        color: 'gray',
        alignSelf: 'flex-start',
        marginLeft: 15,
        marginRight: 90
    },
    DotOne: {
        width: 10, 
        height: 10, 
        backgroundColor: 'steelblue', 
        borderRadius: 15, 
    },
    DotTwo: {
        width: 20, 
        height: 10, 
        backgroundColor: 'blue', 
        borderRadius: 15, 
    },
});

export default Payment;