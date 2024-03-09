import React from "react";
import { Box, Container, SimpleGrid, Heading, Text, Image, Button, Flex, Spacer, Icon } from "@chakra-ui/react";
import { FaShoppingCart, FaGift, FaHeart } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Box textAlign="center" py={10}>
        <Heading as="h1" size="xl" mb={2}>
          Handmade Gifts & Crafts
        </Heading>
        <Text fontSize="lg">Unique. Quality. Craftsmanship.</Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {productData.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />

            <Box p={5}>
              <Flex align="baseline" mt={2}>
                <Icon as={FaGift} color="green.500" w={5} h={5} />
                <Heading ml={2} size="md" fontWeight="semibold" lineHeight="short">
                  {product.name}
                </Heading>
              </Flex>

              <Text mt={2}>{product.description}</Text>

              <Flex mt={3}>
                <Text fontSize="xl" fontWeight="semibold">
                  {product.price}
                </Text>
                <Spacer />
                <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="outline">
                  Add to Cart
                </Button>
              </Flex>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

const productData = [
  {
    id: 1,
    name: "Handcrafted Wooden Bowl",
    description: "A beautifully carved wooden bowl perfect for your dining table.",
    price: "$25",
    image: 'https://images.unsplash.com/photo-1648650841017-d6ab862e9f05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYW5kY3JhZnRlZCUyMHdvb2RlbiUyMGJvd2x8ZW58MHx8fHwxNzA5OTc2NTQ2fDA&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 2,
    name: "Crochet Amigurumi Toy",
    description: "Adorable and cuddly handmade crochet toys for kids of all ages.",
    price: "$15",
    image: 'https://images.unsplash.com/photo-1629019317873-3f603b269723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwYW1pZ3VydW1pJTIwdG95fGVufDB8fHx8MTcwOTk3NjU0Nnww&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 3,
    name: "Custom Leather Journal",
    description: "Tailor-made leather journals that capture your thoughts in style.",
    price: "$30",
    image: 'https://images.unsplash.com/photo-1526280760714-f9e8b26f318f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBsZWF0aGVyJTIwam91cm5hbHxlbnwwfHx8fDE3MDk5NzY1NDd8MA&ixlib=rb-4.0.3&q=80&w=1080',
  },
  // Add more products as needed
];

export default Index;
