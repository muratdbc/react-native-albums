import React,{Component} from 'react';
import {Text,View} from 'react-native';

const Card= (props) =>{
		return (<View style={styles.card}>
			{props.children}
			</View>) 
}
const styles={
	card:{
		borderWidth:1,
		borderRadius: 2,
		borderColor:'#DDD',
		shadowColor: '#000',
		shadowOpacity:0.2,
		shadowOffset: {width:0,height:2},
		elevation:2,
		shadowRadius: 1,
		marginLeft:5,
		marginRight:5,
		marginTop:15

	}
}
export default Card;