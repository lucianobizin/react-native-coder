import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import uuid from 'react-native-uuid';
import ModalDeleteProducts from './src/components/ModalDeleteProducts.js';
import AddProducts from './src/components/AddProducts.js';
import ListContainer from './src/components/ListContainer.js';

const miApp = () => {

  const [modalVisible, setModalVisible] = useState(false)

  const [productSelected, setProductSelected] = useState({})

  const [productTitle, setProductTitle] = useState("")

  const [productPrice, setProductPrice] = useState("")

  const [products, setProducts] = useState([])

  const onHandlerProductName = (name) => {
    setProductTitle(name)
  }

  const onHandlerProductPrice = (price) => {
    if (/^\d*\.?\d*$/.test(price)) {
      setProductPrice(price);
    } else {
      console.log("Price is not a number")
    }
  };

  const addProduct = () => {
    if (productTitle && productPrice) {
      const newProduct = {
        productId: uuid.v4(),
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
        completed: false,
        productName: productTitle,
        productPrice: productPrice
      };

      setProducts([...products, newProduct]);

      setProductTitle("");
      setProductPrice("");

    } else {
      console.log("Please, complete labels correctly");
    }
  };

  const onHandlerDeleteProduct = () => {
    setProducts(products.filter(product => product.productId !== productSelected.productId))
    setModalVisible(!modalVisible)
  }

  const onHandlerDeleteModal = (productSelected) => {
    setProductSelected(productSelected)
    setModalVisible(!modalVisible)

  }

  const onHanedlerSwitchCompletedButton = (id) => {
    setProducts(products.map(product => {
      if (product.id === id) return { ...product, ...{ completed: !product.completed } }
      else return product
    })
    )

  }

  return (

    <View style={styles.container}>

      <AddProducts
        onHandlerProductName={onHandlerProductName}
        productTitle={productTitle}
        onHandlerProductPrice={onHandlerProductPrice}
        productPrice={productPrice}
        addProduct={addProduct} />

      <View style={styles.listContainer}>

        <ListContainer
          products={products}
          onHandlerDeleteModal={onHandlerDeleteModal}
          onHanedlerSwitchCompletedButton={onHanedlerSwitchCompletedButton} />

        <ModalDeleteProducts
          productSelected={productSelected}
          onHandlerDeleteProduct={onHandlerDeleteProduct}
          onHandlerDeleteModal={onHandlerDeleteModal}
          modalVisible={modalVisible}
        />

      </View>

    </View >
  );
};

export default miApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: '#FCAF14',
  },
  listContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 15,
  }
});