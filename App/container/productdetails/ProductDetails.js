import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'
import styles from './styles'
import constants from './../../constant/constants'

class ProductDetails extends Component {

    constructor(props) {
        super(props)
    }

    // Navigation options
    static navigationOptions = {
        title: constants.PRODUCT_DETAILS
    }

    // View life cycle method
    componentWillMount() { }

    componentDidMount() { }

    // Methods declaration

    // Main render area
    render() {
        return (
            <View style={styles.container}>

            </View>
        )
    }
}

module.exports = ProductDetails