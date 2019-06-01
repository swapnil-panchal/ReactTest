import React, { Component } from 'react'
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Alert,
} from 'react-native'
import styles from './../storedetails/styles'
import constants from './../../constant/constants'
import colors from './../../theme/colors'

class CheckOut extends Component {

    constructor(props) {
        super(props)
        this.state = {
            product_list: []
        }
    }

    // Navigation options
    static navigationOptions = {
        title: constants.PRODUCT_DETAILS
    }

    // View life cycle method
    componentWillMount() {
        this.setState({ product_list: this.props.navigation.getParam('selected_data') })
    }

    componentDidMount() { }

    // Methods declaration
    onClickAction(index, item) {
        var checkout_data = [...this.state.product_list]
        checkout_data.splice(index, 1)
        this.setState({
            product_list: checkout_data
        })
        if (checkout_data.length === 0) {
            this.props.navigation.goBack()
        }
    }
    showAlert(index, item) {
        Alert.alert(constants.APP_NAME, "Are you sure want to remove an item ?",
            [
                { text: "YES", onPress: () => this.onClickAction(index, item) },
                { text: "NO", style: 'cancel' }
            ])
    }
    // Main render area
    renderProductFlatList = ({ item, index }) => {
        return (
            <View style={styles.productListWrapper}>
                <View style={{ flex: 0.8, borderWidth: 0 }}>
                    <Text style={styles.labelText2}>Product Name : {item.data.name}</Text>
                    <Text style={styles.labelText2}>Price Cash : {item.data.priceCash}</Text>
                    <Text style={styles.labelText2}>Price Bux : {item.data.priceBux}</Text>
                    <Text style={styles.labelText2}>Category : {item.data.category}</Text>
                </View>
                <View style={{ flex: 0.2, borderWidth: 0, justifyContent: 'center', alignItems: 'center' }}>
                    {
                        (item.data.isAdded) &&
                        <TouchableOpacity onPress={() => this.showAlert(index, item)} style={[styles.iconImageWrapperAdd, { backgroundColor: colors.DARK_RED }]}>
                            <Text style={styles.counterText}>REMOVE</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        )
    }

    render() {
        const { product_list } = this.state
        return (
            <View style={styles.container}>

                <FlatList
                    data={product_list}
                    extraData={product_list}
                    keyExtractor={(item) => item._id}
                    renderItem={this.renderProductFlatList}
                />

            </View>
        )
    }
}

module.exports = CheckOut