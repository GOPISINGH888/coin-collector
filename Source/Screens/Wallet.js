import { Card, CardItem, Text } from 'native-base'
import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import Header2 from '../Components/Header2'
import HeaderComponent from '../Components/HeaderComponent'

function Wallet(props) {
    return (
        <View style={styles.mainContainer}>
            <Header2 {...props}>
                <Text {...props} style={styles.font}>WALLET</Text>
            </Header2>
            <View style={styles.alignment}>
                <Card style={styles.cardDesign}>
                    <CardItem style={styles.upperCard}>
                        <Text style={styles.font}>Total Balance</Text>
                        <Image source={require('../Assests/image1.png')} style={{ width: 66, height: 34 }}></Image>
                    </CardItem>
                    <CardItem style={styles.alignment}>
                        <Text style={[styles.lowerCard, styles.font]}>$0.00</Text>
                    </CardItem>
                </Card>
                <Card style={styles.secondCard}>
                    <CardItem style={[styles.upperCard]}>
                        <Text style={styles.font}>Wallet Activity</Text>
                    </CardItem>
                    <CardItem style={styles.upperCard}>
                        <Text style={styles.text1}>Today You got $50 referred by Annie</Text>
                        <Text style={styles.text2}>5:57PM</Text>
                    </CardItem>
                    <CardItem>
                        <Text style={styles.text1}>Today You got $50 referred by Amara</Text>
                        <Text style={styles.text2}>5:57PM</Text>
                    </CardItem>
                </Card>

            </View>


        </View>
    )
}
export default Wallet

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
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
        borderRadius: 5,
        width: '90%',
        height: 150
    },
    upperCard: {
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        borderBottomColor: '#DCDCDC',
    },
    lowerCard: {
        padding: 20
    },
    secondCard: {
        width: '90%',
        marginTop: 20,
        borderRadius: 5
    },
    text1: {
        padding: 10
    },
    text2: {
        marginBottom: 30,
        fontSize: 12,
        color: 'grey'
    }
})