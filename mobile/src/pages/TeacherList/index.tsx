import React, { useState } from 'react';
import { View, ScrollView, TextInput, Text } from 'react-native';
import { BorderlessButton, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';


function TeacherList(){
    const navigation = useNavigation();

    function handleGoBack(){
        navigation.goBack();
    }

    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    function handleToggleFiltersVisible(){
        setIsFiltersVisible(!isFiltersVisible);
    }
    
    return (
        <View style={styles.container}>
            <PageHeader 
                title="Proffys disponíveis" 
                headerRight={(
                    <BorderlessButton>
                        <Feather name='filter' size={20} color='#FFF' onPress={handleToggleFiltersVisible}/>
                    </BorderlessButton>
                )}
            >
                {isFiltersVisible &&  
                    (<View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Qual a matéria'
                            placeholderTextColor='#C1BCCC'
                        />
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput 
                                    style={styles.input}
                                    placeholder='Qual o dia?'
                                    placeholderTextColor='#C1BCCC'
                                />
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput 
                                    style={styles.input}
                                    placeholder='Qual a horário?'
                                    placeholderTextColor='#C1BCCC'
                                />
                            </View>
                        </View>
                        <TouchableOpacity style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </PageHeader>
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                <TeacherItem />
            </ScrollView>
        </View>
    )
}

export default TeacherList;