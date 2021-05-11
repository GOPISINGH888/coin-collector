import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Card, Icon, Right, Text } from 'native-base'
import Header2 from '../Components/Header2'
import Header3 from '../Components/Header3'

function FAQScreen(props) {
    return (
        <View style={styles.mainView}>
            <Header3 {...props}>
                <Text {...props} style={styles.text}>FAQ's</Text>
            </Header3>
            <View style={styles.alignment}>
                <Card style={styles.cardDesign}>
                    <Text style={styles.text}>Lorem ipsum is dummy text?</Text>
                    <Text style={[styles.text2]}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Text>
                </Card>
                <Card style={[styles.cardDesign, styles.cardDesign2]}>
                    <Text style={styles.text}>Lorem ipsum is dummy text?</Text>

                    <Icon name='chevron-forward'>
                    </Icon>
                </Card>
                <Card style={[styles.cardDesign, styles.cardDesign2]}>
                    <Text style={styles.text}>Lorem ipsum is dummy text?</Text>
                    <Icon name='chevron-forward'>
                    </Icon>
                </Card>
                <Card style={[styles.cardDesign, styles.cardDesign2]}>
                    <Text style={styles.text}>Lorem ipsum is dummy text?</Text>
                    <Icon name='chevron-forward'>
                    </Icon>
                </Card>
            </View>

        </View>
    )
}
export default FAQScreen

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'white'
    },
    alignment: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    cardDesign: {
        borderRadius: 10,
        width: '90%',
        padding: 20,
    },
    cardDesign2: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 20
    },
    text2: {
        fontSize: 18,
        color: 'grey'
    }
})