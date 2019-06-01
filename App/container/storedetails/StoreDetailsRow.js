import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

class StoreDetailsRow extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { layoutStyle, leftText,leftTitle, rightText,rightTitle, centerText,centerTitle } = this.props
        return (
            <View>
                {
                    (layoutStyle === 'row')
                        ?
                        <View style={styles.storeRow}>
                            <View style={styles.innerLeftRow}>
                                <Text style={styles.titleText}>{leftTitle}</Text>
                                <Text>{(leftText)?leftText:'-'}</Text>
                            </View>
                            
                            <View style={styles.innerRow}>
                            <Text style={styles.titleText}>{rightTitle}</Text>
                                <Text>{(rightText)?rightText:'-'}</Text>
                            </View>
                        </View>
                        :
                        <View style={styles.storeColumn}>
                            <Text style={styles.titleText}>{centerTitle}</Text>
                            <Text>{(centerText)?centerText:'-'}</Text>
                        </View>
                }
            </View>
        )
    }
}
module.exports = StoreDetailsRow