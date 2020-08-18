import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

function Favorites(){
    const navigation = useNavigation();

    function handleGoBack(){
        navigation.goBack();
    }
    
    return (
        <View style={styles.container}>
           
        </View>
    )
}

export default Favorites;