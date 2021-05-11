import { Card, CardItem, Container, Content, Icon, Item, Text, View } from 'native-base'
import React from 'react'
import { StyleSheet, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import Buttn from '../Components/Buttn'
import HeaderComponent from '../Components/HeaderComponent'

function HomeScreen(props) {

    const data = [
        {
            id: 1,
            name: 'Silver',
            prize: '$25.5'
        },
        {
            id: 2,
            name: 'Gold',
            prize: '$25.5'
        },
        {
            id: 3,
            name: 'Platinum',
            prize: '$25.5'
        },
        {
            id: 4,
            name: 'Copper',
            prize: '$25.5'
        },
        {
            id: 5,
            name: 'Aliminium',
            prize: '$25.5'
        },
        {
            id: 6,
            name: 'Zinc',
            prize: '$25.5'
        },
        {
            id: 7,
            name: 'Lead',
            prize: '$25.52'
        },
        {
            id: 8,
            name: 'Tin',
            prize: '$252'
        },

    ]

    function renderData({ item }) {
        return (
            <View style={[styles.flatlist, styles.upperCard]}>
                <View style={{ width: '80%' }}>
                    <Text style={styles.flatlistText}>{item.name}</Text>
                </View>
                <View style={{ width: '20%' }}>
                    <Text style={styles.flatlistText}>{item.prize}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.mainContainer}>
            <HeaderComponent {...props}>
                <Text {...props} style={styles.font}>HOME</Text>
            </HeaderComponent>
            <ScrollView>
                <View style={styles.alignment}>
                    <Card style={[styles.cardDesign, styles.alignment]}>
                        <CardItem style={[styles.upperCard, styles.alignment]}>
                            <Text style={styles.font}>Wallet Balance</Text>
                        </CardItem>
                        <CardItem style={styles.lowerCard}>
                            <Image source={require('../Assests/image1.png')} style={{ width: 139, height: 72 }}></Image>
                            <Text style={styles.font}>$0.00</Text>
                        </CardItem>
                    </Card>
                    <Card style={styles.flatlistCard}>
                        <View style={[styles.alignment, styles.upperCard]}>
                            <Text style={styles.font}>Current prize</Text>
                        </View>
                        <FlatList

                            data={data}
                            keyExtractor={item => item.id}
                            renderItem={(item) => renderData(item)}
                        ></FlatList>
                    </Card>
                    <Buttn text={'Buy'}  onPress={()=>props.navigation.navigate('Buy')} />

                </View>
            </ScrollView>
        </View>
    )
}
export default HomeScreen
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
        borderRadius: 10,
        width: '90%'
    },
    upperCard: {
        borderBottomWidth: 2,
        borderBottomColor: '#DCDCDC',
        width: '100%'
    },
    lowerCard: {
        flexDirection: 'column'
    },
    flatlistCard: {
        borderRadius: 10,
        width: '90%',
        marginTop: 20
    },
    flatlist: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    flatlistText: {
        fontSize: 18
    }

})