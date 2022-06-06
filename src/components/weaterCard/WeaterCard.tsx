import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// icons
import { IDate } from '../../assets/icons/IDate';
import { IGoBack } from '../../assets/icons/IGoBack';
import { ILocation } from '../../assets/icons/ILocation';
// components
import CardShadow from '../cardShadow/CardShadow';

// types
import { IList } from '../../types/IData';

// navigation
import { MainCustomerRoutes, MainCustomerScreenProps } from '../../navigation/MainCustomerStackNavigator';

// styles
import { Colors } from '../../styles/colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../styles/dimensions';

type Props = MainCustomerScreenProps<MainCustomerRoutes.Home>;

interface WeaterCardProps {
    title: string;
    children?: React.ReactNode;
    list?: IList[],
    week?: boolean,
    navigation?: Props
}

const WeaterCard: React.FC<WeaterCardProps> = ({ title, children, week, navigation }) => {
    return (
        <>
            <LinearGradient
                colors={[Colors.blue1, Colors.blue2]}
                style={[styles.linearGradient, {
                    height: week ? SCREEN_HEIGHT * 0.3 : SCREEN_HEIGHT * 0.65,
                }]}>
                <View style={[styles.titleBlock, { justifyContent: week ? 'space-between' : 'center', }]}>
                    {week && <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBack}>
                        <IGoBack />
                    </TouchableOpacity>}
                    <View style={styles.header}>
                        {week ? <IDate style={styles.icon} /> : <ILocation style={styles.icon} />}
                        <Text style={styles.titleText}>{title}</Text>
                    </View>
                </View>
                {!week && <View style={styles.updateBlock}>
                    <View style={styles.dot} />
                    <Text style={styles.updatingText}>Updating</Text>
                </View>}
                <View>{children}</View>
            </LinearGradient>
            <CardShadow />
        </>
    );
};

const styles = StyleSheet.create({
    linearGradient: {
        borderColor: '#36B8FB',
        borderWidth: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 55,
        borderBottomLeftRadius: 55,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center"
    },
    titleBlock: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        width: SCREEN_WIDTH * 1
    },
    titleText: {
        color: Colors.white1,
        fontSize: 23,
        fontWeight: 'bold',
    },
    icon: {
        alignSelf: 'flex-end',
    },
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
    updateBlock: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#B1DDF1',
        borderRadius: 20,
        width: '24%',
        height: 30,
        marginTop: 10
    },
    dot: {
        width: 7,
        height: 7,
        borderRadius: 150,
        backgroundColor: '#FFF10C',
        marginRight: 5
    },
    updatingText: {
        color: Colors.white1,
        fontWeight: 'bold'
    },
    goBack: {
        borderWidth: 1.5,
        borderColor: Colors.white1,
        borderRadius: 50,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    }
});

export default WeaterCard;
