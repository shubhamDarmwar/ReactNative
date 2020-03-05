import React from 'react'
import {
    View, 
    Text, 
    StyleSheet
} from 'react-navigation'

import { Icon, 
    Header, 
    Container, 
    Button, 
    Content, 
    Left
} from 'native-base'


export default class SettingScreen extends React.Component{
    render(){
        return (
            <Container>
                <Content>
                    <Text> 'Setting Screen' </Text>
                </Content>
            </Container>
        )
    }
}
// export default SettingScreen;