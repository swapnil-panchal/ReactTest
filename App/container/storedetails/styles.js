import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from './../../theme/colors'
import { Dimensions } from 'react-native'

const screenDimensions = Dimensions.get('window')

export default styles = {
    container: {
        flex: 10,
    },
    storeDetailsWrapper: {
        flex: 3,
        borderWidth: 0,
    },
    productWrapper: {
        flex: 7
    },
    storeRow: {
        height: hp('6%'),
        borderBottomWidth: 1,
        borderColor: colors.BORDER_BOTTOM,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    innerLeftRow: {
        flex: 0.5,
        borderRightWidth: 1,
        borderColor: colors.BORDER_BOTTOM,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        color: colors.BORDER_BOTTOM,
        fontSize: wp('4%'),
    },
    innerRow: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    storeColumn: {
        height: hp('6%'),
        borderBottomWidth: 1,
        borderColor: colors.BORDER_BOTTOM,
        justifyContent: 'center',
        alignItems: 'center',
    },
    productListWrapper: {
        height: hp('12%'),
        borderBottomWidth: 1,
        borderColor: colors.BORDER_BOTTOM,
        justifyContent: 'center',
        padding: 8,
        backgroundColor: colors.THEME_COLOR,
        paddingHorizontal: 20,
        borderRadius: 25,
        margin: 10,
        flexDirection: 'row',
    },
    label: {
        height: hp('7%'),
        borderBottomWidth: 1,
        borderColor: colors.BORDER_BOTTOM,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.THEME_COLOR,
    },
    labelText: {
        color: colors.WHITE,
        fontSize: wp('5%'),
        fontWeight: 'bold'
    },
    labelText2: {
        color: colors.WHITE,
        fontSize: wp('4%'),
        fontWeight: 'bold'
    },
    emptyWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        height: hp('20%')
    },
    emptyText: {
        color: colors.BORDER_BOTTOM,
        fontSize: wp('6%')
    },
    iconImage: {
        height: hp('3%'),
        width: wp('4%'),
        borderWidth: 0
    },
    iconImageWrapperAdd: {
        justifyContent: 'center',
        alignItems: 'center',
        height: hp('3%'),
        width: wp('20%'),
        borderRadius: 8
    },
    counterText: {
        fontSize: wp('4%'),
        color: colors.WHITE,
        fontWeight: 'bold'
    },
    checkoutWrapper: {
        position: 'absolute',
        height: hp('6%'),
        width: screenDimensions.width - 100,
        alignSelf: 'center',
        backgroundColor: colors.BORDER_BOTTOM,
        bottom: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkoutText: {
        fontSize: wp('4%'),
        color: colors.THEME_COLOR,
        fontWeight: 'bold'
    }
}