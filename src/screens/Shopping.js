import React from 'react'
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'

const Shopping = ({ navigation }) => {
    return (
        <View style={styles.background}>
            <View>
            <Text style={styles.textstyle}>ONLINE SHOPPING</Text>
            </View>
            
              <View>
              <Text style={styles.textp}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illum blanditiis repellendus pariatur natus inventore recusandae qui sunt, obcaecati sapiente nobis dolor delectus fuga doloribus ipsum a soluta provident! Amet.
              </Text>
              </View>
            
                <Image style={styles.imagestyle}
                source={require('../../assets/images/online_shopping.png')} 
                />
          
            <View>
                <TouchableOpacity onPress={() => 
                    navigation.navigate('AddCart')}>
                    <Text style={styles.textbutton}>Next</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.viewStyle}>
                <Text></Text>
                <Text style={styles.TextOne}> . . . </Text>
                <Text style={styles.TextTwo}>Skip</Text>
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
        marginTop: 15,

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
        justifyContent: 'space-between'
    },
    TextOne: {
        color: 'blue',
    },
    TextTwo: {
        color: 'gray',
    }
  
});

export default Shopping;