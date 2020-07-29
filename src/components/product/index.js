import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Colors from '../../constants/Colors';
import {Image, Text} from 'react-native-elements';

export default function Product({item}) {

    return (
        <View style={styles.productContainer}>
            <Image
                source={item['imageUri'] && {uri: item['imageUri']}}
                style={{width: 100, height: 100}}
                PlaceholderContent={<ActivityIndicator/>}
            />
            <Text style={styles.text} >{item.name}</Text>
            <Text style={[styles.text, {alignSelf: "flex-start", paddingLeft: 10}]}>{`S/ ${item.price}`}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    productContainer: {
        alignItems: 'center',
        height: 170,
        width: wp(42),
        backgroundColor: Colors.white,
        marginRight: 15,
        marginVertical: 10,
        borderRadius: 15,
    },
    text:{
        color: Colors.secondary,
        fontSize: 15,
    }
});
