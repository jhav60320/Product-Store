import { Box, Heading, HStack, Button, Image, Text, CloseButton, Dialog, Portal, Input, VStack } from "@chakra-ui/react"
import { useColorModeValue } from "./ui/color-mode"
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useProductStore } from "@/store/product";
import { toaster } from "./ui/toaster";
import { useState } from "react";



const ProductCard = ({ product }) => {
    const [updatedProduct, setUpdatedProduct] = useState(product);
    const textColor = useColorModeValue('gray.600', 'gray.200');
    const bg = useColorModeValue('white', 'gray.800');
    const [open, setOpen] = useState(false)

    const { deleteProduct, updateProduct } = useProductStore()
    const handleDeleteProduct = async (pid) => {
        const { success, message } = await deleteProduct(pid);
        if (!success) {
            toaster.create({
                title: 'Error',
                description: message,
                type: 'error',
                duration: 3000,
                closable: true,
            })
        } else {
            toaster.create({
                title: 'Success',
                description: message,
                type: 'success',
                duration: 3000,
                closable: true,
            })

        }
    }

    const handleUpdateProduct = async (pid, updatedProduct) => {
        const {success,message} = await updateProduct(pid,updatedProduct);
        setOpen(false);
        if (!success){
            toaster.create({
                title: "Error",
                description: message,
                type: "error",
                duration: 3000,
                closable: true
            })
        } else {
            toaster.create({
                title: "Success",
                description: "Product Updated Successfully",
                type: "success",
                duration: 3000,
                closable: true
            })
        }
    }

    return (
        <Box
            shadow={'lg'}
            rounded={'lg'}
            overflow={'hidden'}
            transition={'all 0.3s'}
            _hover={{ transform: "translateY(-5px)", shadow: "xl", cursor: "pointer" }}
            bg={bg}
        >
            <Image src={product.image} alt={product.name} h={48} w={'full'} objectFit={'cover'} />
            <Box p={15}>
                <Heading as={'h3'} size={'md'} mb={2}>
                    {product.name}
                </Heading>
                <Text fontWeight={'bold'} fontSize={'xl'} color={textColor} mb={4}>
                    ${product.price}
                </Text>

                <HStack gap={2}>
                    <Dialog.Root lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
                        <Dialog.Trigger asChild>
                            <Button backgroundColor={'blue.200'}><FaRegEdit /></Button>
                        </Dialog.Trigger>
                        <Portal>
                            <Dialog.Backdrop />
                            <Dialog.Positioner>
                                <Dialog.Content>
                                    <Dialog.Header>
                                        <Dialog.Title>Update Product</Dialog.Title>
                                    </Dialog.Header>
                                    <Dialog.Body>
                                        <VStack gap={4}>
                                            <Input placeholder="Product Name" name="name" value={updatedProduct.name} onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })} />
                                            <Input placeholder="Price" name="number" value={updatedProduct.price} onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })} />
                                            <Input placeholder="Image URL" name="image" value={updatedProduct.image} onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })} />
                                        </VStack>
                                    </Dialog.Body>
                                    <Dialog.Footer>
                                        <Button onClick={() => handleUpdateProduct(product._id,updatedProduct)}>Update</Button>
                                        <Dialog.ActionTrigger asChild>
                                            <Button variant="outline">Cancel</Button>
                                        </Dialog.ActionTrigger>
                                        
                                    </Dialog.Footer>
                                    <Dialog.CloseTrigger asChild>
                                        <CloseButton size="sm" />
                                    </Dialog.CloseTrigger>
                                </Dialog.Content>
                            </Dialog.Positioner>
                        </Portal>
                    </Dialog.Root>
                    <Button backgroundColor={'red.300'} onClick={() => handleDeleteProduct(product._id)}><RiDeleteBin6Line /></Button>
                </HStack>
            </Box>

        </Box>
    )
}

export default ProductCard
