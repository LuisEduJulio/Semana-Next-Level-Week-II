import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import StudyTabs from './studyTabs';

const { Navigator, Screen } = createStackNavigator();

function AppStack(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen component={Landing} name='Landing' />
                <Screen component={GiveClasses} name='GiveClasses' />
                <Screen component={StudyTabs} name='StudyTabs' />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;