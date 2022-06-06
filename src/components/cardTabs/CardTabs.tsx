import React from "react";
import { StyleSheet, Text, View } from "react-native";

// icons
import { IDirection } from "../../assets/icons/IDirection";
import { ITwoRain } from "../../assets/icons/ITwoRain";
import { IWind } from "../../assets/icons/IWind";

// types
import { IList } from "../../types/IData";

// styles
import { Colors } from "../../styles/colors";
import { SCREEN_WIDTH } from "../../styles/dimensions";

interface CardTabsProps {
    today?: IList
}

const CardTabs: React.FC<CardTabsProps> = ({ today }: CardTabsProps) => {
    return <View style={styles.body}>
        <View style={styles.center}>
            <IWind />
            <Text style={styles.text}>{today?.wind?.speed} km/h</Text>
            <Text style={styles.bottomText}>wind</Text>
        </View>
        <View style={styles.center}>
            <ITwoRain />
            <Text style={styles.text}>{today?.main?.humidity}%</Text>
            <Text style={styles.bottomText}>humidity</Text>
        </View>
        <View style={styles.center}>
            <IDirection />
            <Text style={styles.text}>{today?.wind?.deg}</Text>
            <Text style={styles.bottomText}>direction</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    body: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 0.5,
        borderTopColor: Colors.white1,
        width: SCREEN_WIDTH * 0.8,
        paddingVertical: 30,
        marginTop: 30
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: Colors.white1,
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 30
    },
    bottomText: {
        color: Colors.grayOpacity,
        textTransform: 'capitalize',
        fontSize: 15,
        fontWeight: '600',
    }
});


export default CardTabs