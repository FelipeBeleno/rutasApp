import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { style } from '../styles/AppStyles';



interface Props extends StackScreenProps<any, any> {
}

export const Home = ({ navigation }: Props) => {

    return (

        <View style={style.globalMargin}>
            <Text>
                Home
            </Text>
            <Button

                title="Ir a pagina 2"
                onPress={() => navigation.navigate("Home2")}
            />
        </View>
    )
}
