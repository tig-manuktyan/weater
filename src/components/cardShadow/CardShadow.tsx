import React from "react";
import { StyleSheet, View } from "react-native";

// styles
import { Colors } from "../../styles/colors";
import { SCREEN_WIDTH } from "../../styles/dimensions";

const CardShadow = () => {
    return <View style={styles.shadowBlock}>
        <View style={styles.shadow} />
    </View>
}
const styles = StyleSheet.create({
    shadowBlock: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -38
    },
    shadow: {
        backgroundColor: Colors.blue2,
        opacity: 0.4,
        height: 50,
        width: SCREEN_WIDTH * 0.9,
        borderBottomEndRadius: 55,
        borderBottomLeftRadius: 55,
    },
});

export default CardShadow;