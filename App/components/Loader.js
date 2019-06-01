/*
    Author : Swapnil Panchal
    Loader custom class    
*/

import React, { Component } from 'react';
import { View, Dimensions, ImageBackground, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types'
import colors from './../theme/colors'
const screenDimensions = Dimensions.get('window');

class Loader extends Component {

    // Props declaration
    static propTypes = {
        color: PropTypes.string,
        size: PropTypes.number,
        visible: PropTypes.bool
    }

    // Props default data
    static defaultProps = {
        color: colors.THEME_COLOR,
        size: 20,
        visible: false
    }

    constructor(props) {
        super(props);
    }

    // Main render area
    render() {
        const { color, size, visible } = this.props
        return (
            <ImageBackground style={{ opacity: 1, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: -64, left: 0, right: 0, bottom: 0, height: (visible) ? screenDimensions.height : 0, width: (visible) ? screenDimensions.width : 0, backgroundColor:'transparent' }} >
                <View>
                    {(visible) && <ActivityIndicator size="large" color={colors.THEME_COLOR} />}
                </View>
            </ImageBackground>
        )
    }
}
module.exports = Loader

