import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import PageHeader from '../../components/PageHeader';

function TeacherList(){
    const navigation = useNavigation();

    function handleGoBack(){
        navigation.goBack();
    }
    
    return (
        <View style={styles.container}>
           <PageHeader title="Proffys disponíveis" />
        </View>
    )
}

export default TeacherList;