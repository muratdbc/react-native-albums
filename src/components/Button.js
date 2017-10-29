import React from 'react';
import {TouchableOpacity,Text} from 'react-native';

const Button =(props) =>{
	return (<TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
		<Text style={styles.textStyle}>{props.children}</Text>
		</TouchableOpacity>)
}

const styles={
	buttonStyle:{
		flex:1,
		alignSelf:'stretch',
		backgroundColor:'#FFF',
		borderRadius: 5,
		borderWidth:1,
		borderColor:'#007AFF',
		marginLeft:5,
		marginRight:5
	},
	textStyle:{
		alignSelf:'center',
		fontWeight:'600',
		fontSize:16,
		paddingTop:10,
		paddingBottom:10,
		color:'#007AFF'

	}
}

export default Button;