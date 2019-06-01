import React, { Component } from 'react'
import { Alert } from 'react-native'
import constants from './../constant/constants'

export default alert = (message) => {
    Alert.alert(constants.APP_NAME, message)
}