import { StyleSheet ,ScrollView, FlatList,Image} from 'react-native'
import React from 'react'
import ProductCard from '@/components/ProductCard'
import productlist from '@/app/constans'
// import { ScrollView } from 'react-native-gesture-handler'
export default function index() {
  
  return (
    <ScrollView style={styles.container}>
      <FlatList style = {styles.cardcontainer}
      numColumns={2}
      data={productlist}
      keyExtractor={item => item.productName}
      renderItem={({item}) => ( <ProductCard {...item}/> )}
      />  
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:10,
    backgroundColor:'#F9FCFF',
    transform: [{translateY: 50}],
  },
  cardcontainer:{
    
    
  },
})
