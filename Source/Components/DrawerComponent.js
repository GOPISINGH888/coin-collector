import React from 'react'
import { Icon, Text } from 'native-base'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'

function DrawerComponent(props) {
    return (
        <View style={styles.mainView}>
            <View style={styles.view2}>
                <View style={styles.smallView}>
                    <Text style={styles.alignment}>View</Text>
                </View>
                <View>
                    <Icon onPress={() => props.navigation.navigate('Profile')} name='person' style={{ width: 50, height: 50, borderRadius: 25 }}></Icon>
                    <Text>Radhika</Text>
                    <Text>radhika@gmail.com</Text>
                </View>
            </View>
            <View style={{ height: '70%' }}>
                <TouchableOpacity style={styles.button}
                    onPress={() => props.navigation.navigate('Wallet')}
                >
                    <Icon name='wallet'></Icon>
                    <Text style={styles.text}>Wallet</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                   onPress={() => props.navigation.navigate('InviteFriends')}
                >
                    <Image source={require('../Assests/invitation.jpg')} style={styles.iconImage}></Image>
                    <Text style={styles.text}>Invite a friend</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                    onPress={() => props.navigation.navigate('SettingScreen')}

                >
                    <Icon name='settings'></Icon>
                    <Text style={styles.text}>Settings</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} >
                    <Image source={require('../Assests/logout.png')} style={styles.iconImage}></Image>
                    <Text style={styles.text}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default DrawerComponent

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'white'
    },
    view2: {
        height: '30%',
        backgroundColor: '#D3AE36',
        padding: 20
    },
    smallView: {
        width: 50,
        height: 20,
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'flex-end'
    },
    imageStyle: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    alignment: {
        alignSelf: 'center',
    },
    button: {
        padding: 20,
        flexDirection: 'row',
    },
    text: {
        fontSize: 20,
        marginLeft: 20
    },
    iconImage: {
        width: 25,
        height: 25
    }

})