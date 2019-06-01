import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from './../../theme/colors'

export default styles = {
    container: {
        flex: 10,
    },
    storeWrapper: {
        height: hp('8%'),
        borderBottomWidth: 1,
        borderColor: colors.BORDER_BOTTOM,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    }
}