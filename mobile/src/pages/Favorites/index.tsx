import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';
import { styles } from './styles';


function Favorites(){
    const navigation = useNavigation();

    function handleGoBack(){
        navigation.goBack();
    }
    
    return (
        <View style={styles.container}>
           <PageHeader title='Meus proffys favoritos' />
        </View>
    )
}

export default Favorites;