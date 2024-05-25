import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, StarIcon } from 'react-native-heroicons/solid';
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import CoffeeRow from '../../components/Coffee/CoffeeRow';
import BasketIcon from '../../components/Basket/BasketIcon';

const RestaurantScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [navigation]);

    return (
        <>
            <BasketIcon />
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image 
                        source={{
                            uri: 'https://lh3.googleusercontent.com/p/AF1QipNpUxSh-tDcuOp0drsJwB-Wtys96Xdn8RvrCybI=s1360-w1360-h1020',
                        }}
                        style={styles.image}
                    />
                </View>

                <View style={styles.infoContainer}>
                    <View style={styles.infoContent}>
                        <Text style={styles.title}>Cafe Kafka</Text>
                        <View style={styles.ratingContainer}>
                            <View style={styles.rating}>
                                <StarIcon color='green' opacity={0.5} size={22}/>
                                <Text style={styles.ratingText}>
                                    <Text style={styles.ratingValue}>4.7</Text>
                                </Text>
                            </View>
                            <View style={styles.location}>
                                <MapPinIcon color='gray' opacity={0.4} size={22}/>
                                <Text style={styles.locationText}>Oboźna 3, 00-340 Warszawa, Poland</Text>
                            </View>
                        </View>
                        <Text style={styles.description}>Elegant and cozy cafe in the heart of Warsaw</Text>
                    </View>
                    <TouchableOpacity style={styles.allergyContainer}>
                        <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20}/>
                        <Text style={styles.allergyText}>
                            Have a coffee allergy?
                        </Text>
                        <ChevronRightIcon color="#00CCBB"/>
                    </TouchableOpacity>
                </View>

                <View style={styles.menuContainer}>
                    <Text style={styles.menuTitle}>Menu</Text>
                    <CoffeeRow
                        key={1}
                        id={1}
                        name='Cappuccino'
                        description='Awesome Cappuccino with steamed milk'
                        price={35}
                        image='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Cappuccino_at_Sightglass_Coffee.jpg/1200px-Cappuccino_at_Sightglass_Coffee.jpg'
                    />
                    <CoffeeRow
                        key={2}
                        id={2}
                        name='Latte'
                        description='Coffee drink with an Italian origin'
                        price={25}
                        image='https://www.foodandwine.com/thmb/CCe2JUHfjCQ44L0YTbCu97ukUzA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Partners-Latte-FT-BLOG0523-09569880de524fe487831d95184495cc.jpg'
                    />
                    <CoffeeRow
                        key={3}
                        id={3}
                        name='Espresso'
                        description='A boiling water is forced under pressure through ground coffee beans'
                        price={20}
                        image='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg/1200px-Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg'
                    />
                    <CoffeeRow
                        key={4}
                        id={4}
                        name='Iced Matcha Latte'
                        description='Smooth and creamy matcha sweetened just right'
                        price={28}
                        image='https://coffeecopycat.com/wp-content/uploads/2023/04/IcedMatchaLatte-1200-x-1200.jpg'
                    />
                    <CoffeeRow
                        key={5}
                        id={5}
                        name='Iced Coffee'
                        description='Iced coffee is a coffee beverage served cold'
                        price={18}
                        image='https://images.immediate.co.uk/production/volatile/sites/2/2021/08/coldbrew-iced-latte-with-my-recipe-photo-by-@ellamiller_photo-f1e3d9e.jpg?quality=90&resize=556,505'
                    />
                    <CoffeeRow
                        key={6}
                        id={6}
                        name='Iced Chocolate'
                        description='A delicate cold chocolate drink'
                        price={20}
                        image='https://thegreencreator.com/wp-content/uploads/EASY-Iced-Chocolate-Drink-Vegan-Cold-incredibly-delicious-and-SO-comforting-TheGreenCreator-recipe-chocolatedrink-glutenfree-icedchocolatedrink-1.jpg'
                    />
                </View>
                <View style={styles.orderContainer}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Orders')
                    }} style={styles.orderButton}>
                        <Text style={styles.orderButtonText}>Orders</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        position: 'relative',
    },
    image: {
        width: '100%',
        height: 200,
        backgroundColor: '#d1d5db', // bg-gray-300
        padding: 16,
    },
    infoContainer: {
        backgroundColor: 'white',
    },
    infoContent: {
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
        marginBottom: 8,
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 8,
    },
    ratingText: {
        fontSize: 12,
        color: '#6b7280', // text-gray-500
    },
    ratingValue: {
        color: '#10b981', // text-green-500
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationText: {
        fontSize: 12,
        color: '#6b7280', // text-gray-500
    },
    description: {
        color: '#6b7280', // text-gray-500
        marginTop: 8,
        paddingBottom: 16,
    },
    allergyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#d1d5db', // border-gray-300
    },
    allergyText: {
        paddingLeft: 8,
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
    },
    menuContainer: {
        paddingBottom: 144,
    },
    menuTitle: {
        paddingHorizontal: 16,
        paddingTop: 24,
        marginBottom: 12,
        fontSize: 20,
        fontWeight: 'bold',
    },
    orderContainer: {
        padding: 20,
        backgroundColor: 'white',
        marginTop: 20,
        space: 4,
    },
    orderButton: {
        borderRadius: 8,
        backgroundColor: '#00CCBB',
        padding: 16,
    },
    orderButtonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default RestaurantScreen;
