import React,{Component} from 'react';
import {View} from 'react-native';

const CardSection = (props)=>{
	return (<View style={style.containerStyle}>{props.children}</View>)
}; 

const style={
	containerStyle:{
		borderBottomWidth:1,
		padding:5,
		backgroundColor: "#FFF",
		justifyContent: 'flex-start',
		flexDirection : "row",
		borderColor: "#DDD",
		position:"relative",

	}
}

export default CardSection;
