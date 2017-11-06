// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';


// Make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
    <View style={viewStyle}>
        <Text style={textStyle}> {props.headerText} </Text>
    </View>
    );
};

const styles = {
    viewStyle: {
        justifyContent: 'center',
        backgroundColor: '#F1F1F1',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',                    //iOS only
        shadowOffset: { width: 0, height: 2 },  //iOS only
        shadowOpacity: 0.2,                     //iOS only
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

// Make component available for other parts of the App
export default Header;
