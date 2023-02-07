import { FaRegHeart, FaStar } from "react-icons/fa";
import { Box, Button, Grid, HStack, Image, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface IRoomProps {
    pk: number;
    imageUrl: string;
    name: string;
    rating: number;
    city: string;
    country: string;
    price: number;
}


export default function Room({ pk, imageUrl, name, rating, city, country, price }: IRoomProps) {
    const gray = useColorModeValue("gray.600", "gray.300");
    
    return (
        <Link to={`/rooms/${pk}`}>
            <VStack alignItems={"flex-start"}>
                <Box position="relative" overflow={"hidden"} mb={3} rounded="2xl">
                    {/* <Image minH="280" src="https://a0.muscache.com/im/pictures/miso/Hosting-47181423/original/39c9d4e7-78d0-4807-9f0d-3029d987d02a.jpeg?im_w=720" /> */}
                    <Image minH="280" src={imageUrl} />

                    <Button variant={"unstyled"} position="absolute" top={0} right={0} color="white">
                        <FaRegHeart size="20px" />
                    </Button>
                </Box>
                <Box>
                    <Grid gap={2} templateColumns={"6fr 1fr"}>
                        <Text display={"block"} as="b" noOfLines={1} fontSize="md">
                            {/* Cheomdangwahak-ro,Jeongeup-si, North Jeolla Province, South Korea */}
                            {name}
                        </Text>
                        <HStack spacing={1} alignItems="center">
                            <FaStar size={12} />
                            {/* <Text fontSize={"sm"}>5.0</Text> */}
                            <Text fontSize={"sm"}>{rating}</Text>
                        </HStack>
                    </Grid>

                    <Text fontSize={"sm"} color={gray}>
                        {city}, {country}
                    </Text>
                </Box>
                <Text fontSize={"sm"} color={gray}>
                    {/* <Text as="b">$72</Text> / night */}
                    <Text as="b">${price}</Text> / night
                </Text>
            </VStack>
        </Link>
    );
}
