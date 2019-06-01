import React, { Component } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import styles from './styles'
import constants from './../../constant/constants'
import Api from './../../service/Api'
import Loader from './../../components/Loader'
import alert from './../../components/alert'
import StoreDetailsRow from './StoreDetailsRow'
import colors from '../../theme/colors';
const api = Api.create()

class StoreDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            store_id: '',
            visibleLoader: true,
            name: '',
            address: '',
            suburb: '',
            phone: '',
            status: '',
            currency: '',
            country: '',
            product_list: [],
            selected_items: [],
        }
    }

    // Navigation options
    static navigationOptions = {
        title: constants.STORE_DETAILS
    }

    // View life cycle method
    componentWillMount() {
        const { navigation } = this.props
        this.setState({ store_id: navigation.getParam('storeId') })
    }

    componentDidMount() {
        this.getStoreDetailsFromStoreId()
    }

    // Methods declaration
    // Get store details from store id and store it to our array.
    async getStoreDetailsFromStoreId() {
        const { store_id } = this.state

        const getStoreDetailResponse = await api.getStoreDetails('store', store_id)
        if (getStoreDetailResponse.data.success) {
            const getStoreProductData = await api.getStoreDetails('product', store_id)
            if (getStoreProductData.data.success) {
                let store_detail = getStoreDetailResponse.data.store
                let product_data = []
                if (getStoreProductData.data.products.length > 0) {
                    getStoreProductData.data.products.map((data, index) => {
                        data.isAdded = false
                        product_data.push(data)
                    })
                }
                this.setState({
                    visibleLoader: false,
                    name: (store_detail.name) ? store_detail.name : '',
                    address: (store_detail.address) ? store_detail.address : '',
                    suburb: (store_detail.suburb) ? store_detail.suburb : '',
                    phone: (store_detail.phone) ? store_detail.phone : '',
                    status: (store_detail.status) ? store_detail.status : '',
                    currency: (store_detail.currency) ? store_detail.currency : '',
                    country: (store_detail.country) ? store_detail.country : '',
                    product_list: product_data
                })
            } else {
                this.setState({ visibleLoader: false }, () => { alert(constants.ALERT_API) })
            }
        } else {
            this.setState({ visibleLoader: false }, () => { alert(constants.ALERT_API) })
        }
    }

    // Adding and removing data from the array for checkout process
    onClickAction(callFrom, index, itemData) {
        const { product_list, selected_items } = this.state
        var product_data = [...product_list]
        var selected_list = [...selected_items]

        if (callFrom === 'remove') {
            product_data[index].isAdded = false
            selected_list.map((data, innerIndex) => {
                if (data.index === index) {
                    selected_list.splice(innerIndex, 1)
                }
            })
        } else {
            product_data[index].isAdded = true
            selected_list.push({ "index": index, "data": itemData })
        }
        this.setState({
            product_list: product_data,
            selected_items: selected_list
        })
    }

    // Checkout button click action
    onClickCheckOut() {
        this.props.navigation.navigate("CheckOut", { selected_data: this.state.selected_items })
    }

    // Main render area
    renderStoreDetails() {
        const { name, address, phone, suburb, country, currency, status } = this.state
        return (
            <View style={styles.storeDetailsWrapper}>
                {/* Row 1 */}
                <StoreDetailsRow layoutStyle="center" centerTitle="Store Name" centerText={name.toUpperCase()} />
                <StoreDetailsRow layoutStyle="row" leftTitle="Address" leftText={address.toUpperCase()} rightTitle="Suburb" rightText={suburb.toUpperCase()} />
                <StoreDetailsRow layoutStyle="row" leftTitle="Phone" leftText={phone.toUpperCase()} rightTitle="Status" rightText={status.toUpperCase()} />
                <StoreDetailsRow layoutStyle="row" leftTitle="Currency" leftText={currency.toUpperCase()} rightTitle="Country" rightText={country.toUpperCase()} />
            </View>
        )
    }

    renderProductList() {
        const { product_list, selected_items } = this.state
        return (
            <View style={styles.productWrapper}>
                {(product_list.length > 0)
                    ?
                    <FlatList
                        data={product_list}
                        extraData={product_list}
                        keyExtractor={(item) => item._id}
                        renderItem={this.renderProductFlatList}
                    />
                    :
                    <View style={styles.emptyWrapper}>
                        <Text style={styles.emptyText}>NO PRODUCT TO DISPLAY...!</Text>
                    </View>
                }
                {(selected_items.length > 0) &&
                    <TouchableOpacity onPress={() => this.onClickCheckOut()} style={styles.checkoutWrapper}>
                        <Text style={styles.checkoutText}>CHECK OUT :: {selected_items.length} {(selected_items.length === 1) ? 'ITEM' : 'ITEMS'}</Text>
                    </TouchableOpacity>}

            </View>
        )
    }

    renderProductFlatList = ({ item, index }) => {
        return (
            <View style={styles.productListWrapper}>
                <View style={{ flex: 0.8, borderWidth: 0 }}>
                    <Text style={styles.labelText2}>Product Name : {item.name}</Text>
                    <Text style={styles.labelText2}>Price Cash : {item.priceCash}</Text>
                    <Text style={styles.labelText2}>Price Bux : {item.priceBux}</Text>
                    <Text style={styles.labelText2}>Category : {item.category}</Text>
                </View>
                <View style={{ flex: 0.2, borderWidth: 0, justifyContent: 'center', alignItems: 'center' }}>
                    {
                        (item.isAdded) ?
                            <TouchableOpacity onPress={() => this.onClickAction('remove', index, item)} style={[styles.iconImageWrapperAdd, { backgroundColor: colors.DARK_RED }]}>
                                <Text style={styles.counterText}>REMOVE</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => this.onClickAction('add', index, item)} style={[styles.iconImageWrapperAdd, { backgroundColor: colors.DARK_GREEN }]}>
                                <Text style={styles.counterText}>ADD</Text>
                            </TouchableOpacity>
                    }
                </View>
            </View>
        )
    }
    rednerLabel() {
        return (
            <View style={styles.label}>
                <Text style={styles.labelText}>PRODUCT LIST</Text>
            </View>
        )
    }

    render() {
        const { visibleLoader, store_id } = this.state
        return (
            <View style={styles.container}>
                {this.renderStoreDetails()}
                {this.rednerLabel()}
                {this.renderProductList()}
                <Loader visible={visibleLoader} size={27} />
            </View>
        )
    }
}

module.exports = StoreDetails