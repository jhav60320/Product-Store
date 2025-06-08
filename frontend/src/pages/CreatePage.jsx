import { useColorModeValue } from '@/components/ui/color-mode';
import { toaster } from '@/components/ui/toaster';
import { useProductStore } from '@/store/product';
import { Box, Button, Container, Heading, Input, Toaster, VStack } from '@chakra-ui/react';

import React, { useState } from 'react'

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  
  const { createProduct } = useProductStore()
  // const toast = useToast()
  const handleAddProduct = async() => {
    const {success,message} = await createProduct(newProduct)
    if (!success){
      toaster.create({
        title:"Error",
        description: message,
        type: "error",
        closable: true
      })
    }else{
      toaster.create({
        title:"Success",
        description: message,
        type: "success",
        closable: true,
      })
    }
  }

  return <Container maxW={"container.sm"}>
    
    <VStack
      spacing={8}
    >
      <Heading as={"h1"} fontWeight={"bold"} size={"4xl"} textAlign={"center"} mb={8}>
        Create New Prdoduct
      </Heading>
      <Box
        w={'5xl'} bg={useColorModeValue("white","gray.800")}
        p={6} rounded={"lg"} shadow={"md"}
      >
        <VStack spacing={4}>
          <Input
            placeholder='Product Name'
            fontSize={"xl"}
            h={"16"}
            borderColor={useColorModeValue("gray.900","white")}
            name='name'
            Value={newProduct.name}
            onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
          />
          <Input 
            placeholder='Price'
            fontSize={"xl"}
            h={"16"}
            borderColor={useColorModeValue("gray.900","white")}
            name='price'
            type='number'
            value={newProduct.price}
            onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
          />
          <Input 
            placeholder='Image URL'
            fontSize={"xl"}
            h={"16"}
            borderColor={useColorModeValue("gray.900","white")}
            name='image'
            value={newProduct.image}
            onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
          />
          <Button fontSize={"xl"} h={"16"} bg={useColorModeValue("blue.500","blue.600")} _hover={{bg: useColorModeValue("blue.300","blue.400")}} onClick={handleAddProduct} w='full'>
            Add Product
          </Button>
        </VStack>
      </Box>
    </VStack>
  </Container>
}

export default CreatePage
