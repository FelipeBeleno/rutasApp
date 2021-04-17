import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Button, Text, View } from 'react-native'
import { style } from '../styles/AppStyles';

export const Home2 = () => {



    const navigator = useNavigation()
    return (

        <View style={style.globalMargin}>
            <Text>
                Hola
           </Text>

            <Button

                title="Home 3"
                onPress={()=> navigator.navigate('Home3') }
            />
        </View>
    )
}
