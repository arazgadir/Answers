import React, { useState } from 'react'
import { View, Text, FlatList, Pressable, Image } from 'react-native'
import { UnvisibleIcon } from '../../assets/UnvisibleIcon'
import { VisibleIcon } from '../../assets/VisibleIcon'
import { Header } from './Header'
import { styles } from './styles'
import LinearGradient from 'react-native-linear-gradient';
import { SectionIcon } from '../../assets/SectionIcon'

export const ProfileSreen = () => {

    const mockData = [
        { number: '#22' }, { number: '#21' }, { number: '#20' }, { number: '#19' }, { number: '#18' }, { number: '#17' },
        { number: '#16' }, { number: '#15' }, { number: '#14' }, { number: '#13' }, { number: '#12' }, { number: '#11' },
        { number: '#10' }, { number: '#9' }, { number: '#8' }, { number: '#7' }, { number: '#6' }, { number: '#5' },
        { number: '#4' }, { number: '#3' }, { number: '#2' }, { number: '#1' },
    ]
    const RenderItem = ({ item }) => {
        const [isAnswerShow, setIsAnswerShow] = useState(false)
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.section}  >
                    <View style={styles.numberView}>
                        <SectionIcon />
                        <Text style={styles.number}>{item.number}</Text>
                    </View >
                    <Text style={styles.questionText}>What abscure thing are you talanted at?</Text>
                    {isAnswerShow ?
                        <View style={styles.imageView}>
                            <Image style={{ left: 10 }} source={require('../../assets/pic1.png')} />
                            <Image source={require('../../assets/pic2.png')} />
                        </View>
                        :
                        <></>
                    }
                </View>
                {isAnswerShow ?
                    <LinearGradient colors={['#FFECFF', '#A8CBFF',]} style={styles.sectionAnserws}>
                        <View style={[styles.userAnswers, styles.userAnswersBorder]}>
                            <Image source={require('../../assets/pic2.png')} />
                            <Text style={styles.sectionAnserwsText}>I am excellent at cooking and painting. my paintings are hung in the gallery.</Text>
                        </View>
                        <View style={styles.userAnswers}>
                            <Image source={require('../../assets/pic1.png')} />
                            <Text style={styles.sectionAnserwsText}>I am excellent at cooking and painting.</Text>
                        </View>
                        <Pressable style={styles.hide} onPress={() => setIsAnswerShow(show => !show)}>
                            <UnvisibleIcon />
                            <Text style={{ left: 5 }}>hide answers</Text>
                        </Pressable>
                    </LinearGradient>
                    :
                    <Pressable style={styles.showAnswer} onPress={() => item.number && setIsAnswerShow(show => !show)}>
                        <VisibleIcon />
                        <Text style={styles.showAnswerText}>show answers</Text>
                    </Pressable>
                }
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.total}>
                <Text>{`Total: ${mockData.length}`}</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={mockData}
                renderItem={({ item }) => {
                    return (
                        <RenderItem item={item} />
                    )
                }}
            />
        </View>
    )
}