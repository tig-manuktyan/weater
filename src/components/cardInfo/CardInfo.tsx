import React from "react";
import { StyleSheet, Text } from "react-native";

// types
import { IList } from "../../types/IData";

// utils
import { Celsius } from "../../utils/Celsius";

// styles
import { Colors } from "../../styles/colors";

interface CardInfoProps {
    date: string
}

const CardInfo: React.FC<IList & CardInfoProps> = ({ today, date }: IList) => {
    return <>
        <Text style={styles.celsius}>{Celsius(today.main.temp)}</Text>
        <Text style={styles.description}>{today.weather[0].description}</Text>
        <Text style={{ textAlign: 'center', color: Colors.white1, fontSize: 16 }}>{date}</Text>
    </>
}

const styles = StyleSheet.create({
    celsius: {
        fontSize: 110,
        color: Colors.white1,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: -30
    },
    description: {
        textAlign: 'center',
        color: Colors.white1,
        fontSize: 25
    }
});

export default CardInfo