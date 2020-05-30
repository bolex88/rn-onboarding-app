import React from 'react'
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'

const Cart = ({ navigation }) => {
    return (
        <View style={styles.background}>
            <Text style={styles.textstyle}>ADD TO CART</Text>
              <Text style={styles.textp}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem neque nesciunt saepe, illum distinctio asperiores iste dolore quibusdam veritatis fugiat! Sapiente nesciunt officiis minima vitae temporibus, dicta quaerat alias cumque.
              </Text>
            
            <Image style={styles.imagestyle}
            source={require('../../assets/images/add_to_cart.png')} 
             />

            <TouchableOpacity onPress={() => navigation.navigate('Pay')}>
                <Text style={styles.textbutton}>Next</Text>
            </TouchableOpacity>

            
            <View style={styles.viewStyle}>
                <View>
                  <TouchableOpacity onPress={() =>
                      navigation.navigate('Online')}>
                    <Text style={styles.TextOne}>Previous</Text>
                  </TouchableOpacity>
                </View>
                    <View style={styles.DotOne} />
                    <View style={styles.DotTwo} />
                    <View style={styles.DotThree} />
                <View>
                  <TouchableOpacity onPress={() =>
                      navigation.navigate('Pay')}>
                    <Text style={styles.TextTwo}>Skip</Text>
                  </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

// stylying of the add to cart screen!
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
        marginTop: 80

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
        marginTop: 30,
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
        marginRight: 4
    },
    DotTwo: {
        width: 20, 
        height: 10, 
        backgroundColor: 'blue', 
        borderRadius: 15, 
        marginRight: 4
    },
    DotThree: {
        width: 10, 
        height: 10, 
        backgroundColor: 'steelblue', 
        borderRadius: 15, 
    },
    TextTwo: {
        color: 'gray',
        alignSelf: 'flex-end',
        marginLeft: 115
    }

});

export default Cart;