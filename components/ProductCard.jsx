import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Bannerlogo from '@/app/Sitelogos';

const ProductCard = (props) =>{
 function openurl (link) {
    Linking.openURL(link)
 }
  return(
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.productContainer}>
        <Image source={{uri:Bannerlogo[props.origin]}} 
              style={styles.bannerimg}/>
          {/* <View style={styles.bannerContainer}>
            {(Bannerlogo[props.origin])?(<Image source={{uri:Bannerlogo[props.origin]}} 
              style={styles.bannerimg}/>):(<Text style={styles.bannerText}>{props.origin}</Text>)}
          </View>  */}
          <View style = {styles.imgContainer}>
            <Image source={{
            uri:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRebTChZyMfmjyP9imbxFQqINLYzSWG4xMNhes2KBGYiyDmWvAfGWZQIDqFQ3tQaagkVdPqLZFThL8U6_GG7U8cGBFamN3rD4e4d0dzTg7FeTivLZ7laBFy',
            }}
            style ={styles.cardimage}
            />
          </View>
          <View style = {styles.textContainer}>
            <Text style ={[styles.productname]}>{props.productName.slice(0,40)} ...</Text>
            <View style={styles.priceContainer}>
              <Text style ={styles.price}>{props.price}</Text>
              <Text style ={styles.discount}>{props.discoubt}</Text>
            </View>
            
            <TouchableOpacity style ={styles.buybtn}
              onPress={()=>openurl(props.ororiginUrl)}>
              <Text style ={styles.buytext}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  ) 
}

const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    
    cardimage:{
        height:190,
        width:180,
        borderBottomRightRadius:6,
        borderBottomLeftRadius:6,
    },
    productname:{
     margin:5,
     color:"#353535",
     fontSize:16,
     fontWeight:'400',
    },
    price:{
      color:'#14110F',
      fontWeight:'600',
      fontSize:18,
    },
    discount:{
      color:'#EF6F6C',//D1AC00//292F36//E9B872//C8963E
      fontWeight:'600',
      fontSize:10,
    },
    buytext:{
      color:"#F3F3F4",//E4FDE1
      fontWeight:'700',
      fontSize:16,
    },
    productContainer:{
      height:325,
      width:200,
      paddingHorizontal:5,
      backgroundColor:"#FFFFFC",//E4FDE1//D8DDEF//DEFFF2//FFFFFC//E9F1F7//E5E7EB
      elevation:3,
      alignItems:'center',
      margin:5,
      borderRadius:6,
    },
    imgContainer:{
      elevation:10,
      borderRadius:10,
    },
    textContainer:{
      paddingVertical:5,
      rowGap:3,
      alignContent:'flex-start'
    },
    buybtn:{
      backgroundColor:"#303633",//363020//011C27
      height:30,
      width:70,
      marginLeft:5,
      padding:3,
      marginBottom:5,
      borderRadius:5,
      elevation:5,
      alignItems:'center'
    },
    bannerContainer:{
      position:'absolute',
      zIndex:1,
      top:0,
      right:10,
      borderRadius:8,

      backgroundColor:'white',
      padding:2,
    },
    bannerText:{
      fontWeight:'600',
      color:'#3C493F',
    },
    priceContainer:{
      paddingLeft:5,
      marginBottom:5,
      flexDirection:'row',
      columnGap:5,
    },
    bannerimg:{
      height:25,
      width:65,
      position:'absolute',
      zIndex:2,
      top:0,
      right:10,
      
      borderRadius:8,
    },
})
export default ProductCard