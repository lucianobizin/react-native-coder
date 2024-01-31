import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, FlatList, Modal } from 'react-native';
import uuid from 'react-native-uuid';

const miApp = () => {

  const [newProduct, setNewProduct] = useState({
    productId: "",
    productName: "",
    productPrice: null
  })

  const [products, setProducts] = useState([])

  const [modalDelete, setModalDelete] = useState(false)

  const [deleteProductId, setDeleteProductId] = useState("")

  const onHandlerProductName = (name) => {
    setNewProduct({ ...newProduct, productName: name })
    console.log(newProduct)
  }

  const onHandlerProductPrice = (price) => {
    setNewProduct({ ...newProduct, productPrice: price })
    console.log(newProduct)
  }

  const addProduct = () => {
    if (newProduct.productName && newProduct.productPrice !== null) {
      const id = uuid.v4()
      newProductWithId = { ...newProduct, productId: id }
      setProducts([...products, newProductWithId])
      setNewProduct({ productId: "", productName: "", price: null })
    } else {
      console.log("Por favor completa el campo faltante")
    }
  }

  const onHandlerDeleteProduct = () => {
    setProducts(products.filter(product => product.productId !== deleteProductId))
  }

  const onHandlerDeleteModal = (id) => {
    setDeleteProductId(id)
    setModalDelete(true)

  }

  console.log(newProduct)
  console.log(products)

  return (

    <View style={styles.container}>

      <View style={styles.inputsContainer}>

        <Text style={styles.addProductTitle}>ADD PRODUCTS TO LIST</Text>

        <View style={styles.inputContainer}>
          <View style={styles.inputs}>
            <TextInput placeholder="Introduce a product" style={styles.input} onChangeText={onHandlerProductName} value={newProduct.productName} />
            <TextInput placeholder="Introduce a price" style={styles.input} onChangeText={onHandlerProductPrice} value={newProduct.productPrice} />
            <View style={styles.addButton}>
              <Button color="#00A0E0" title="ADD" onPress={() => addProduct()} />
            </View>
          </View>
        </View>

      </View>

      <View style={styles.listContainer}>

        <FlatList
          data={products}
          keyExtractor={product => product.productId}
          renderItem={({ item }) => (
            <View style={styles.productContainer}>
              <Text style={styles.cardProduct}>{item.productName}</Text>
              <View style={styles.productDetails}>
                <Text style={styles.cardPrice}>{item.productPrice}</Text>
              </View>
              <View style={styles.deleteButton}>
                <Button color="#EE3344" title="DEL" onPress={() => onHandlerDeleteModal(item.productId)} />
              </View>
            </View>
          )}
        />

        <Modal visible={modalDelete} animationType="slide" transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>¿Estás seguro que quieres borrar el producto?</Text>
              <View style={styles.modalButtons}>
                <Button title="SÍ" onPress={() => {
                  onHandlerDeleteProduct();
                  setModalDelete(false);
                }} color="#EE3344" />
                <Button title="NO" onPress={() => setModalDelete(false)} color="#00A0E0" />
              </View>
            </View>
          </View>
        </Modal>

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
    backgroundColor: '#F4F4F4',
  },
  inputsContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 20,
    marginHorizontal: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  addProductTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    height: 250,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    marginVertical: 20,
    marginHorizontal: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputs: {
    gap: 35
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#00A0E0',
  },
  addButton: {
    backgroundColor: '#00A0E0',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  addButtonLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 15,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productDetails: {
    width: "33%",
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardProduct: {
    width: "33%",
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardPrice: {
    fontSize: 16,
    color: '#333333',
  },
  deleteButton: {
    backgroundColor: '#EE3344',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  deleteButtonLabel: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro para resaltar el modal
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});