import ProductCard from '@/components/ProductCard'
import { useProductStore } from '@/store/product'
import { Container, SimpleGrid, Span, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts])
  console.log("products", products)
  return (
    <Container maxW='container.xl' py={12}>
      <VStack gap={8}>
        <Text fontSize={"4xl"} fontWeight={"bold"} bgGradient={"to-r"} gradientFrom={'cyan.400'} gradientTo={'blue.600'} bgClip={"text"} textAlign={'center'}>
          Current Products 🚀
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3
          }}
          gap={10}
          w={'full'}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        {(products.length === 0 && (
          <Text fontSize={'xl'} textAlign={'center'} fontWeight={'bold'} color={'gray.500'}>
            No Products found 🥲{" "}
            <Link to={"/create"}>
              <Text as={'span'} color={'blue.500'} _hover={{ textDecoration: "underline" }}>
                Create a Product
              </Text>
            </Link>
          </Text>
        ))}
      </VStack>
    </Container>
  )
}

export default HomePage
