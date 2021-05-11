import React, { useState } from 'react'
import { View, StyleSheet, Switch } from 'react-native'
import { Card, Text } from 'native-base'
import Header2 from '../Components/Header2'
import Header3 from '../Components/Header3'

function NotificationScreen(props) {

    const [enb, setEnb] = useState(false)
    const [enb1, setEnb1] = useState(false)

    const change = () => {
        if (enb1 == false) {
            setEnb(true)
        }
        else {
            setEnb(false)
        }
    }

    const change2 = () => {
        if (enb == false) {
            setEnb1(true)
        }
        else {
            setEnb1(false)
        }
    }

    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled1, setIsEnabled1] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

    return (
        <View style={styles.mainView}>
            <Header3 {...props}>
                <Text style={styles.text} {...props}>Notifications</Text>
            </Header3>
            <View style={styles.alignment}>
                <Card style={styles.cardDesign}>
                    <Text style={styles.text2}>Via Email</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </Card>
                <Card style={styles.cardDesign}>
                    <Text style={styles.text2}>Via SMS</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled1 ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch1}
                        value={isEnabled1}
                    />
                </Card>
            </View>
        </View>
    )
}
export default NotificationScreen

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'white'
    },
    alignment: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    text: {
        fontSize: 20
    },
    text2: {
        fontSize: 18
    },
    cardDesign: {
        width: '90%',
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})