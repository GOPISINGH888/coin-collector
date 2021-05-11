import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Text } from 'native-base'
import Header2 from '../Components/Header2'
import { ScrollView } from 'react-native-gesture-handler'
import Header3 from '../Components/Header3'

function PrivacyPolicyScreen(props) {
    return (
        <View style={styles.mainView}>
            <Header3 {...props}>
                <Text {...props} style={styles.font0}>Privacy Policy</Text>
            </Header3>
            <ScrollView>
                <View style={styles.alignment}>
                    <View>
                        <Text style={styles.font}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</Text>
                    </View>
                    <View style={styles.flexDesign}>
                        <TouchableOpacity style={styles.button1} >
                            <Text style={styles.font1}>Accept</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button2} >
                            <Text style={styles.font1}>Reject</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}
export default PrivacyPolicyScreen

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'white'
    },
    font0: {
        fontSize: 20
    },
    font: {
        fontSize: 18
    },
    font1: {
        fontSize: 20,
        alignSelf: 'center'
    },
    alignment: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    flexDesign: {
        flexDirection: 'row',
        padding: 20
    },
    button1: {
        width: 150,
        height: 51,
        backgroundColor: '#D3AE36',
        padding: 10,
        borderRadius: 10,
        marginRight: 20,

    },
    button2: {
        width: 150,
        height: 51,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#D3AE36'
    }
})