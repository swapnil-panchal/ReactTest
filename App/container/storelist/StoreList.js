import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native'
import { isModuleDeclaration } from '@babel/types';
import styles from './styles'
import constants from './../../constant/constants'
import Api from './../../service/Api'
import alert from './../../components/alert'
import Loader from './../../components/Loader'
import colors from '../../theme/colors';

const api = Api.create()
class StoreList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            store_list: [],
            visibleLoader: true,
        }
    }

    // Navigation options
    static navigationOptions = {
        title: constants.STORE_LIST
    }

    // View life cycle method
    componentWillMount() { }

    componentDidMount() {
        this.getAllStoreList()
    }

    // Methods declaration
    // Get All the stores
    async getAllStoreList() {        
        const storeListResponse = await api.storelist()
        if (storeListResponse.data.success) {
            if ((storeListResponse.data.stores !== null) && storeListResponse.data.stores.length > 0) {
                this.setState({ store_list: storeListResponse.data.stores,visibleLoader:false })
            }
        } else {
            alert(constants.ALERT_API)
        }
    }
    
    // By clicking on the below method user will navigate to the details page with store id
    onClickStore(storeid) {
        this.props.navigation.navigate("StoreDetails", { storeId: storeid })
    }

    renderFlatList = ({ item, index }) => {    
        return (
            <TouchableOpacity style={styles.storeWrapper} onPress={() => this.onClickStore(item.storeId)}>
                <Text style={{color:colors.THEME_COLOR}}>{(item.tradingName) ? item.tradingName : `Store ${index}`}</Text>
                <Text style={{color:(item.status === 'pending'?colors.RED:colors.GREEN)}}>{item.status.toUpperCase()}</Text>
            </TouchableOpacity> 
        )
    }

    // Main render area
    render() {
        const { store_list, visibleLoader } = this.state
        return (
            <View style={styles.container}>
                <FlatList
                    data={store_list}
                    extraData={store_list}
                    keyExtractor={(item, index) => item.storeId}
                    renderItem={this.renderFlatList}
                />
                <Loader visible={visibleLoader} size={27} />
            </View>
        )
    }
}

module.exports = StoreList