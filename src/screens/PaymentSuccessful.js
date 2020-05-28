import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const PaymentSuccessful = ({ navigation }) => {
    return (
        <View>
        <Text style={styles.textstyle}>
                PAYMENT SUCCESSFUL
            </Text>
                <Text style={styles.textp}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eligendi consequuntur veniam quod.
                </Text>
            <Image style={styles.imagestyle} source={'assets:/icon.png' } />

            <Button style={styles.buttonstyle}
                title="Get Started"
                onPress={() => navigation.navigate('Online')}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    textstyle: {
        fontSize: 30,
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
    imagestyle: {
        width: 300,
        height: 350
    }
});

export default PaymentSuccessful;