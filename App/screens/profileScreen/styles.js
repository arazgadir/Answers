import { StyleSheet } from 'react-native';

const colors = {
    black: '#323F4E',
    red: '#F76A6A',
    text: '#ffffff',
    container: '#E5E5E5',
    total: '#DFDCFF',
    showAnswer: '#F8F8F8',
    number: '#564AE2',
    textColor: '#201000',
    answerBorder: '#B7C5EB'
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.container,
        paddingHorizontal: 16
    },
    total: {
        backgroundColor: colors.total,
        marginHorizontal: '40%',
        alignItems: 'center',
        borderRadius: 16,
        paddingVertical: 5,
        marginVertical: 10
    },
    section: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        paddingVertical: 25,
        borderRadius: 16,
        paddingTop: 15,
        marginTop: 15,
        borderRadius: 16,
        backgroundColor: colors.text,
        elevation: 7,
        zIndex: 1,
    },
    questionText: {
        fontFamily: 'Poppins',
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 21,
        width: '45%',
        color: colors.textColor,
        left: 20,
    },
    imageView: {
        flexDirection: 'row',
        paddingLeft: 60,
    },
    number: {
        fontSize: 24,
        fontWeight: '900',
        lineHeight: 30,
        fontFamily: 'Poppins',
        color: colors.number,
        top: 5

    },
    numberView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 30,
        borderRightWidth: 1,
        borderRightColor: colors.showAnswer,
        bottom: 5
    },
    sectionAnserws: {
        backgroundColor: '#FFECFF',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        marginTop: 0,
        elevation: 7,
        marginTop: -10
    },
    userAnswers: {
        flexDirection: 'row',
        padding: 20
    },
    userAnswersBorder: {
        borderBottomColor: colors.answerBorder,
        borderBottomWidth: 1,
    },
    sectionAnserwsText: {
        fontFamily: 'Poppins',
        fontWeight: "400",
        fontSize: 14,
        width: '50%',
        left: 20,
    },
    hide: {
        alignItems: 'center',
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    showAnswer: {
        alignItems: 'center',
        backgroundColor: colors.showAnswer,
        marginTop: -10,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    showAnswerText: {
        fontFamily: 'Poppins',
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 21,
        paddingVertical: 15,
        left: 5

    }
})

