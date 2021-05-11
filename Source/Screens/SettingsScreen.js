import { Card, Icon, Right, Text } from 'native-base'
import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import Header2 from '../Components/Header2'

function SettingScreen(props) {
    return (
        <View style={styles.mainView}>
            <Header2 {...props}>
                <Text {...props} style={styles.font}>SETTINGS</Text>
            </Header2>
            <View style={styles.alignment}>
                <Card
                    style={styles.cardDesign}>

                    <Image source={require('../Assests/icon1.png')} style={styles.image}></Image>
                    <Text>FAQ's</Text>
                    <Right>
                        <Icon name='chevron-forward' onPress={() => props.navigation.navigate('FAQScreen')}>
                        </Icon>
                    </Right>
                </Card>
                <Card style={styles.cardDesign}>
                    <Image source={require('../Assests/icon2.png')} style={styles.image}></Image>

                    <Text>Privacy Policy</Text>
                    <Right>
                        <Icon name='chevron-forward' onPress={() => props.navigation.navigate('PrivacyPolicyScreen')} >
                        </Icon>
                    </Right>
                </Card>
                <Card style={styles.cardDesign}>
                    <Icon name='notifications-outline'>
                    </Icon>
                    <Text>Notifiations</Text>
                    <Right>
                        <Icon name='chevron-forward' onPress={() => props.navigation.navigate('NotificationScreen')}>
                        </Icon>
                    </Right>
                </Card>
            </View>

        </View>
    )
}
export default SettingScreen

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'white'
    },
    font: {
        fontSize: 20
    },
    alignment: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    cardDesign: {
        borderRadius: 15,
        width: '90%',
        padding: 15,
        flexDirection: 'row',
    },
    image: {
        width: 18,
        height: 22,
        marginRight: 10
    }
})