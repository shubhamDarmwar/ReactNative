import React from 'react';
import { StyleSheet, Text, View, Component, TouchableOpacity, Image} from 'react-native';

export class Header extends React.Component{

    onHamburgerClick(){
        // var {title1, function1} = this.props
        // print()
        // console.log("sdfsadfsd");
        // this.props.toggleDrawer()
        
    }
    
    render(){
        
        return(
            <View style = {styles.header}>
                <View>
                    <TouchableOpacity onPress = {this.props.toggleDrawer}>
                        <Image
                            style ={styles.image}
                            source={require('/Users/sdaramwar/Documents/Study/GitHub/ReactNative/HamburgerMenu/assets/menu.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.title}>
                    <Text>
                        {this.props.title}
                    </Text>
                </View>
                <Image
                    style ={styles.image}
                    source={require('/Users/sdaramwar/Documents/Study/GitHub/ReactNative/HamburgerMenu/assets/menu.png')}
                />
            </View>
        )
    }

    
}

const styles = StyleSheet.create({
    
    header : {
        // paddingTop : 100,
        // height : 70,
        // width : 350,
        // flex : 1,
        backgroundColor : '#ddd',
        flexDirection : 'row',
        alignContent: "flex-end",
        justifyContent : 'space-between'
    },
    image : {
        height : 50,
        width : 50  
        // alignItems : "center"      
    },
    title : {
        // height : 50,
        flexDirection : 'column',
        justifyContent : 'center'
    }
});