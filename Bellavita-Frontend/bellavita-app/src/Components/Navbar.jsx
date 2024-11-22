import { Box, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { UilShoppingBag, UilUser } from '@iconscout/react-unicons';
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [hoverItem, setHoverItem] = useState(null); // track hover state
    const [hoverLink, setHoverLink] = useState(null); // track link hover for color change
    const [cartItemCount, setCartItemCount] = useState(1); // Cart item count
    const imageUrl = "https://bellavitaorganic.com/cdn/shop/files/1920-720_d6d8e588-ffc0-4ff3-bbb5-6f6fe3e5b345.webp?v=1732002403&width=1400";


    const handleMouseEnter = (item) => {
        setHoverItem(item);
    };

    const handleMouseLeave = () => {
        setHoverItem(null);
    };

    const handleLinkMouseEnter = (item) => {
        setHoverLink(item);
    };

    const handleLinkMouseLeave = () => {
        setHoverLink(null);
    };

    const subMenuItems = {
        PERFUMES: ["All Perfumes", "Men", "Women", "Unisex", "Oud Collection", "Attars", "Little Luxuries"],
        "BATH & BODY": ["Shower Gel", "Body Mist", "Body Perfume", "Body Lotion", "Travel Kit"],
        SKINCARE: ["All Skincare", "Face Wash", "Lip Care", "Skin Essential Combos"],
        GIFTING: ["Gift Sets", "Perfume Combos"]
    };

    return (

        <Box width='100%'>
            <Box h={{ base: '60vh', md: '80vh' }} screens
                w="100%"
                backgroundImage={`url(${imageUrl})`}
                backgroundPosition="center"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                cursor='pointer'
                py={4}>


                {/* Navbar Section */}
                <Box
                    mt={-4}
                    height='80px'
                    transition="1s"
                    display="flex"
                    justifyContent="space-around"
                    bg="transparent"
                    color="white"
                    _hover={{ bg: "white", color: "black" }}>

                    <Box>
                        <InputGroup ml={-10}>
                            <InputLeftElement pointerEvents="none">
                                <FaSearch color="gray" />
                            </InputLeftElement>
                            <Input
                                type="text"
                                size="md"
                                w="100%"
                                placeholder="Search..."
                                _placeholder={{ color: 'gray' }}
                                border="none"
                                borderBottom="2px solid"
                                borderColor="white"
                                borderRadius="0"
                                _focus={{
                                    borderBottom: "2px solid",
                                    borderColor: "blue.500",
                                    boxShadow: "none",
                                }}
                            />
                        </InputGroup>
                    </Box>

                    <Box mt={2} ml={-130}>
                        <Link to="/">
                            <Text fontSize="2xl" fontWeight="bold" cursor="pointer">
                                BELLAVITA*
                            </Text>
                        </Link>
                    </Box>

                    <Box display="flex" gap={7} mt={2}>
                        <UilUser cursor="pointer" />
                        <Box position="relative" cursor="pointer">
                            <UilShoppingBag />
                            <Box
                                position="absolute"
                                top="-1px"
                                right="-8px"
                                bg="black"
                                color="white"
                                borderRadius="50%"
                                width="18px"
                                height="17px"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                fontSize="10px"
                            >
                                {cartItemCount}
                            </Box>
                        </Box>
                    </Box>
                </Box>


                {/* Navigation Menu */}
                <Box mt={-7} textAlign="center">
                    <nav >
                        <ul style={{ listStyleType: "none", padding: 0, display: "flex", justifyContent: "center", gap: "20px" }}>
                            {["BOGO", "CRAZY DEALS", "SHOP ALL", "BESTSELLERS", "PERFUMES", "BATH & BODY", "COSMETICS", "NEW ARRIVALS", "SKINCARE", "GIFTING"].map((item) => (
                                <li
                                    key={item}
                                    onMouseEnter={() => {
                                        handleMouseEnter(item);
                                        handleLinkMouseEnter(item);
                                    }}
                                    onMouseLeave={() => {
                                        handleMouseLeave();
                                        handleLinkMouseLeave();
                                    }}
                                    style={{
                                        position: "relative",
                                        fontSize: "12px",
                                        fontWeight: "lighter",
                                        color: hoverLink === item ? "white" : "gray",
                                        textDecoration: "none",
                                        listStyle: "none",
                                        cursor: "pointer",
                                        transition: "color 0.5s",
                                    }}
                                >

                                    {item}
                                    {/* Hover effect line below text */}
                                    <Box
                                        as="span"
                                        display="block"
                                        height="1px"
                                        bg={hoverLink === item ? "blue.500" : "transparent"}
                                        transition="width 0.3s"
                                        width={hoverLink === item ? "100%" : "0"}
                                        mt="2px"
                                        ml="auto"
                                        mr="auto"
                                    />
                                    {(hoverItem === item && ["PERFUMES", "BATH & BODY", "SKINCARE", "GIFTING"].includes(item)) && (
                                        <Box
                                            position="absolute"
                                            top="20px"
                                            left="50%"
                                            transform="translateX(-50%)"
                                            bg="white"
                                            color="gray"
                                            width='180px'
                                            boxShadow="md"
                                            p={4}
                                            borderRadius="md"
                                            transition="all 0.3s ease"
                                            zIndex={1000}
                                            opacity={hoverItem === item ? 1 : 0}
                                            visibility={hoverItem === item ? "visible" : "hidden"}
                                            _hover={{ color: "black", transition: "0.5s" }}
                                        >
                                            {subMenuItems[item].map((subItem) => (
                                                <Text
                                                    key={subItem}
                                                    fontSize="12px"
                                                    mb={2}
                                                    textAlign="center"
                                                    _hover={{ color: "black" }}
                                                >
                                                    {subItem}
                                                </Text>
                                            ))}
                                        </Box>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </Box>
            </Box>


            <Box mt={5}>
                <img width='100%' src="https://bellavitaorganic.com/cdn/shop/files/Instruction-Banner-desktop-diwali.png?v=1727232096&width=1400" alt="Banner" />
            </Box>
        </Box>
    );
};

export default Navbar;
