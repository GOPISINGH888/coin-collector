import { Card, CardItem, Icon,  Text } from 'native-base'
import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

function Header2(props) {
    return (
        <View>
            <Card style={styles.card}>
                <CardItem style={{width:'35%'}}>
                <Icon name='arrow-back' onPress={()=>props.navigation.openDrawer()}>
                </Icon>
                </CardItem>
                <CardItem>
                <Text {...props}></Text>
                </CardItem>
            </Card>
        </View>
    )
}
export default Header2

const styles = StyleSheet.create({
    font: {
        fontSize: 20,
    },
    card: {
        borderBottomWidth: 2,
        flexDirection: 'row',
    }
})