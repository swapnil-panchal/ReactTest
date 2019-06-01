import { createStackNavigator, createAppContainer } from 'react-navigation'
import colors from './../theme/colors'
// Screen list
import StoreList from './../container/storelist/StoreList'
import StoreDetails from './../container/storedetails/StoreDetails'
import ProoductDetails from './../container/productdetails/ProductDetails'
import CheckOut from './../container/checkout/CheckOut'

const RootStack = createStackNavigator({
    StoreList: {
        screen: StoreList,        
    },
    StoreDetails: {
        screen: StoreDetails,        
    },
    ProoductDetails: {
        screen: ProoductDetails ,        
    },
    CheckOut: {
        screen: CheckOut ,        
    }
},
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: colors.THEME_COLOR,
            },
            headerTintColor: colors.WHITE,
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    });

const AppStack = createAppContainer(RootStack);


export default AppStack