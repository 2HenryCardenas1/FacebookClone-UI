import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { HeaderVideo } from '../../components'
import { STYLE_SCROLL_VIEW_SCREEN } from '../../utils/constants'


function Video() {
    return (
        <ScrollView style={STYLE_SCROLL_VIEW_SCREEN}>
            <HeaderVideo />
        </ScrollView>
    )
}

export { Video }