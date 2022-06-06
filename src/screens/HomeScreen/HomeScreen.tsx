import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


// types
import { IData, IList } from "../../types/IData";

// components
import CardInfo from "../../components/cardInfo/CardInfo";
import CardTabs from "../../components/cardTabs/CardTabs";
import WeaterCard from "../../components/weaterCard/WeaterCard";

// icons
import { IArrowRight } from "../../assets/icons/IArrowRight";

// navigation
import { MainCustomerRoutes, MainCustomerScreenProps } from "../../navigation/MainCustomerStackNavigator";

// utils 
import { Celsius } from "../../utils/Celsius";

// styles
import { Colors } from "../../styles/colors";

type Props = MainCustomerScreenProps<MainCustomerRoutes.Week>;

const HomeScreen = ({ navigation }: Props) => {
    const [data, setData] = useState<IData[]>([])

    const date: any = new Date(data?.list?.[0]?.dt_txt).toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    })
        .split('. ')
        .join('-').split('.')[0];

    const forecastDay: IList[] = data?.list?.filter((item: IList) => item.dt_txt.includes(date))

    async function getWeater() {
        try {
            const response = await axios.get<IData>('https://community-open-weather-map.p.rapidapi.com/forecast', {
                params: { q: 'armenia' },
                headers: {
                    'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
                    'X-RapidAPI-Key': '2576d5f510mshab72d79467d8eedp190f59jsnb5a39b0f41f9'
                }
            })
            setData(response.data)
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getWeater()
    }, [])

    const renderItem = ({ item }: IList) => {
        const dateTime = item.dt_txt.split('')
        return <View style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#243C58', borderRadius: 30, paddingHorizontal: 10, margin: 10 }}>
            <Text style={{ color: Colors.white1 }}>
                {Celsius(item.main.temp)}
            </Text>
            <Image
                source={{
                    width: 50,
                    height: 50,
                    uri: `http://openweathermap.org/img/w/${item.weather[0].icon}.png`,
                }}
            />
            <Text style={{ color: Colors.white1 }}>{dateTime.splice(10, 6)}</Text>
        </View>
    };
    
    return <View style={styles.body}>
        <WeaterCard title={data?.city?.name}>
            {forecastDay && <View style={{ display: 'flex', alignItems: 'center' }}>
                <Image
                    source={{
                        width: 120,
                        height: 120,
                        uri: `http://openweathermap.org/img/w/${forecastDay[0].weather[0].icon}.png`,
                    }}
                    style={{ margin: 0, padding: 0 }}
                />
                <CardInfo today={forecastDay[0]} date={date} />
                <CardTabs today={forecastDay[0]} />
            </View>}
        </WeaterCard>
        <View style={{ marginVertical: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25 }}>
            <Text style={{ color: Colors.white1, fontSize: 18, fontWeight: 'bold' }}>Today</Text>
            <TouchableOpacity onPress={() => navigation.navigate(MainCustomerRoutes.Week)} style={{ display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: Colors.gray1, fontSize: 16, height: 30, marginRight: 5 }}>5 day</Text>
                <IArrowRight />
            </TouchableOpacity>
        </View >
        <FlatList horizontal data={forecastDay} renderItem={renderItem} />
    </View >
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

export default HomeScreen