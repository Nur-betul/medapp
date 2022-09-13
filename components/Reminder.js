import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { CheckBox, Icon } from 'react-native-elements';

const Reminder = (props) => {
    const [check, setCheck] = useState(false);

    const completionState = (check ? '- Complete' : '')

    return (
        <View style={styles.reminder}>
            <View style={styles.reminderLeft}>
                {/* <View style={styles.square}></View> */}
                <CheckBox checked={check} onPress={() => setCheck(!check)}/>
                    <Text style={styles.reminderText}>{props.text} {completionState}</Text>
            </View>
            {/* <View style={styles.circular}></View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    reminder: {
        backgroundColor: '#DCDCDC',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifycontent: 'space-between',
        marginBottom: 20,
    },
    reminderLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: 'teal',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    reminderText: {
        maxWidth: '80%',  
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: 'teal',
        borderWidth: 2,
        borderRadius: 5,
        marginLeft: 180,
    },
});

export default Reminder;