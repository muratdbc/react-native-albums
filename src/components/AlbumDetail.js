import React , {Component} from 'React';
import {Text,View,Image,Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetail =({album}) => {
		const {title,artist,thumbnail_image,image,url} =album;
		return (
			<Card>
				<CardSection>
					<View style={styles.thumnailContainerStyle}>
						<Image style={styles.thumbnailStyle} source={{uri:thumbnail_image}}/>
					</View>
					
					<View style={styles.headerContentStyle}>
						<Text style={styles.artistText}>{title}</Text>	
						<Text>{artist}</Text>
					</View>
				</CardSection>
				<CardSection >
					<Image style={styles.imageStyle}  source={{ uri: image}} />
				</CardSection>
				<CardSection>
					<Button  onPress={()=>Linking.openURL(url)}> Buy Now </Button>
				</CardSection>
			</Card>
			);
}
const styles={
	headerContentStyle:{
		flexDirection:'column',
		justifyContent: 'space-around'
	},
	thumbnailStyle:{
		width:60,
		height:60,
	},
	thumnailContainerStyle:{
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft:10,
		marginRight:10
	},
	artistText:{
		fontSize:18
	},
	imageStyle:{
		height:300,
		flex:1,
		width:null
	}
}

export default AlbumDetail;