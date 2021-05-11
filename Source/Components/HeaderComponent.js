import { Card, CardItem, Icon,  Text } from 'native-base'
import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

function HeaderComponent(props) {
    return (
        <View>
            <Card style={styles.card}>
                <Icon name='menu' onPress={()=>props.navigation.openDrawer()}>
                </Icon>
                <Text  {...props}></Text>
                <Icon onPress={()=>props.navigation.navigate('Profile')}  name='person'>
                </Icon>
            </Card>
        </View>
    )
}
export default HeaderComponent

const styles = StyleSheet.create({
    font: {
        fontSize: 20,
    },
    card: {
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    }
})