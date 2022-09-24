import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../../screens/homeScreen';
import { NewsScreen } from '../../screens/newsScreen';
import { AddScreen } from '../../screens/addScreen';
import { SearchScreen } from '../../screens/searchScreen';
import { ProfileSreen } from '../../screens/profileScreen';
import { HomeIcon } from '../../assets/HomeIcon';
import { AddIcon } from '../../assets/AddIcon';
import { SearchIcon } from '../../assets/SearchIcon';
import { ProfileIcon } from '../../assets/ProfileIcon';
import { NewsIcon } from '../../assets/NewsIcon';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator 
        initialRouteName='Profile'
        screenOptions={() => ({
            headerShown: false,
            tabBarActiveTintColor: '#807B75',
            tabBarStyle: { height: 90, paddingTop: 10 },
            tabBarItemStyle: { height: 70, borderRadius: 10 },
            tabBarHideOnKeyboard: true,
            tabBarLabelStyle: { fontSize: 15 },
            tabBarShowLabel: false,
        })}
        >
            <BottomTab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarIcon: () => <HomeIcon />,
                }}
            />
            <BottomTab.Screen
                name='News'
                component={NewsScreen}
                options={{
                    tabBarIcon: () => <NewsIcon />,
                }}
            />
            <BottomTab.Screen
                name='Add'
                component={AddScreen}
                options={{
                    tabBarIcon: () => <AddIcon />,
                }}
            />
            <BottomTab.Screen
                name='Search'
                component={SearchScreen}
                options={{
                    tabBarIcon: () => <SearchIcon />,
                }}
            />
            <BottomTab.Screen
                name='Profile'
                component={ProfileSreen}
                options={{
                    tabBarIcon: () => <ProfileIcon />,
                }}
            />
        </BottomTab.Navigator>
    )
}
export default BottomTabNavigator