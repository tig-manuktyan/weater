import React from "react";
import { StyleSheet, View } from "react-native";
// navigation
import { MainCustomerRoutes, MainCustomerScreenProps } from "../../navigation/MainCustomerStackNavigator";

// components
import CardTabs from "../../components/cardTabs/CardTabs";
import WeaterCard from "../../components/weaterCard/WeaterCard";

type Props = MainCustomerScreenProps<MainCustomerRoutes.Week>;

const WeekScreen = ({ navigation }: Props) => {
    return <View style={styles.body}>
        <WeaterCard title="5 day" week navigation={navigation}>
            <CardTabs />
        </WeaterCard>
    </View>
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#000A18",
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default WeekScreen