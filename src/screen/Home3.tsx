import React from 'react'
import { Button, Text, View } from 'react-native'
import { style } from '../styles/AppStyles';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {

}

export const Home3 = ({ navigation }: Props) => {
    return (

        <View style={style.globalMargin}>
            <Text>
                Hola
           </Text>

            <Button
                title="Inicio"
                onPress={() => navigation.popToTop()}
            />

            <Button
                title="Regresar una"
                onPress={() => navigation.pop()}
            />
        </View>
    )
}
