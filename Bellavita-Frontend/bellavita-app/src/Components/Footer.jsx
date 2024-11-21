import { Box, Input, Text, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faPinterest, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (

        <Box bg='#434343' h='auto'  >

            <Box display='flex' width='80%' pt={30} margin='auto' gap='55px'>
                <Box>
                    <Text color='white' fontSize='14px' mb={10}>BESTSELLERS</Text>
                    <Text color="white" fontSize="12px" mb={4} cursor='pointer' _hover={{ color: 'gray.400' }}>Ultimate Perfume Box</Text>
                    <Text color="white" fontSize="12px" mb={4} cursor='pointer' _hover={{ color: 'gray.400' }} whiteSpace='nowrap'>Perfume Gift Set For Men</Text>
                    <Text color="white" fontSize="12px" mb={4} cursor='pointer' _hover={{ color: 'gray.400' }} whiteSpace='nowrap'>Perfume Gift Set For Women</Text>
                    <Text color="white" fontSize="12px" mb={4} cursor='pointer' _hover={{ color: 'gray.400' }} whiteSpace='nowrap'>Under Eye Cream for Dark Circles</Text>
                    <Text color="white" fontSize="12px" mb={4} cursor='pointer' _hover={{ color: 'gray.400' }}>Perfume For Men</Text>
                    <Text color="white" fontSize="12px" mb={4} cursor='pointer' _hover={{ color: 'gray.400' }}>Perfume For Women</Text>
                    <Text color="white" fontSize="12px" mb={4} cursor='pointer' _hover={{ color: 'gray.400' }}>Unisex Perfume</Text>
                </Box>

                <Box>
                    <Text color='white' fontSize='14px' mb={10}>INFORMATION</Text>
                    <Text color="white" fontSize="12px" mb={4} cursor='pointer' _hover={{ color: 'gray.400' }}>Blogs</Text>
                    <Text color="white" fontSize="12px" mb={4} cursor='pointer' _hover={{ color: 'gray.400' }}>Newsroom</Text>
                    <Text color="white" fontSize="12px" mb={4} cursor='pointer' _hover={{ color: 'gray.400' }} whiteSpace='nowrap'>Terms & Conditions</Text>
                    <Text color="white" fontSize="12px" mb={4} cursor='pointer' _hover={{ color: 'gray.400' }}>Privacy Policy</Text>
                    <Text color="white" fontSize="12px" mb={4} cursor='pointer' _hover={{ color: 'gray.400' }} whiteSpace='nowrap'>Refund and Return</Text>
                    <Text color="white" fontSize="12px" mb={4} cursor='pointer' _hover={{ color: 'gray.400' }}>Shipping Policy</Text>
                    <Text color="white" fontSize="12px" mb={4} cursor='pointer' _hover={{ color: 'gray.400' }} whiteSpace='nowrap'>Bulk Order - GST Invoice</Text>
                </Box>

                <Box>
                    <Text color='white' fontSize='14px' mb={10}>SUPPORT</Text>
                    <Text color="white" fontSize="12px" mb={4} cursor='pointer' _hover={{ color: 'gray.400' }}>About Us</Text>
                    <Text color="white" fontSize="12px" mb={4} cursor='pointer' _hover={{ color: 'gray.400' }}>Contact Us</Text>
                    <Text color="white" fontSize="12px" mb={4} cursor='pointer' _hover={{ color: 'gray.400' }} whiteSpace='nowrap'>Order Tracking</Text>
                    <Text color="white" fontSize="12px" mb={4} cursor='pointer' _hover={{ color: 'gray.400' }} whiteSpace='nowrap'>All Products</Text>
                    <Text color="white" fontSize="12px" mb={4} cursor='pointer' _hover={{ color: 'gray.400' }}>FAQ</Text>
                    <Text color="white" fontSize="12px" mb={4} cursor='pointer' _hover={{ color: 'gray.400' }}>Sitemap</Text>
                </Box>

                <Box>
                    <Text color='white' fontSize='14px' mb={10}>CONTACT US</Text>
                    <Text color="white" fontSize="12px" mb={4} cursor='pointer' _hover={{ color: 'gray.400' }}>Office Location: Plot no.</Text>
                    <Text color="white" fontSize="12px" mb={4} cursor='pointer' _hover={{ color: 'gray.400' }}>417, Udyog Vihar Phase III, Gurgaon, Haryana, India</Text>
                    <Text color="white" fontSize="12px" mb={4} cursor='pointer' _hover={{ color: 'gray.400' }}>shop@bellavitaorganic.com</Text>
                    <Text color="white" fontSize="12px" mb={4} cursor='pointer' _hover={{ color: 'gray.400' }}>+91-9311732440</Text>
                    <Text color="white" fontSize="12px" mb={4} cursor='pointer' _hover={{ color: 'gray.400' }}>Timing: 10:00 AM to 7:00 PM, Monday to Sunday</Text>
                </Box>


                <Box>

                    <Text color='white' fontSize='14px' mb={10} >EXCLUSIVE</Text>
                    <InputGroup >
                        <InputLeftElement pointerEvents="none">
                        </InputLeftElement>
                        <Input
                            type="email"
                            required
                            size="md"
                            w="100%"
                            color='white'
                            textAlign='left'
                            placeholder="Enter Email Here"
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

                    <Text cursor='pointer' _hover={{ color: 'gray.400' }} fontSize='12px' color='white' mt={5} mb={4}>Sign up here to get the latest news, updates and special offers delivered to your inbox.</Text>
                    <Text cursor='pointer' _hover={{ color: 'gray.400' }} color='white' fontSize='12px' mb={5}>Plus, you will be the first to know about our discounts!</Text>


                    <Box display="flex" gap={5} ml={-2}>
                        <Box
                            display="flex"
                            color="white"
                            justifyContent="center"
                            alignItems="center"
                            width="30px"
                            height="30px"
                            backgroundColor="transparent"
                            borderRadius="50%"
                            cursor="pointer"
                            transition="all 0.3s ease"
                            _hover={{
                                transform: 'scale(1.2)',
                                backgroundColor: 'white',
                                color: 'black'
                            }}
                        >
                            <FontAwesomeIcon icon={faFacebookF} size="md" color="inherit" />
                        </Box>

                        <Box
                            display="flex"
                            justifyContent="center"
                            color='white'
                            alignItems="center"
                            width="30px"
                            height="30px"
                            backgroundColor="transparent"
                            borderRadius="50%"
                            cursor="pointer"
                            transition="all 0.3s ease"
                            _hover={{
                                transform: 'scale(1.2)',
                                backgroundColor: 'white',
                                color: 'black'
                            }}
                        >
                            <FontAwesomeIcon icon={faTwitter} size="md" />
                        </Box>

                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            width="30px"
                            height="30px"
                            color='white'
                            backgroundColor="transparent"
                            borderRadius="50%"
                            cursor="pointer"
                            transition="all 0.3s ease"
                            _hover={{
                                transform: 'scale(1.2)',
                                backgroundColor: 'white',
                                color: 'black'
                            }}
                        >
                            <FontAwesomeIcon icon={faPinterest} size="md" />
                        </Box>

                        <Box
                            display="flex"
                            color='white'
                            justifyContent="center"
                            alignItems="center"
                            width="30px"
                            height="30px"
                            backgroundColor="transparent"
                            borderRadius="50%"
                            cursor="pointer"
                            transition="all 0.3s ease"
                            _hover={{
                                transform: 'scale(1.2)',
                                backgroundColor: 'white',
                                color: 'black'
                            }}
                        >
                            <FontAwesomeIcon icon={faInstagram} size="md" />
                        </Box>

                        <Box
                            display="flex"
                            color='white'
                            justifyContent="center"
                            alignItems="center"
                            width="30px"
                            height="30px"
                            backgroundColor="transparent"
                            borderRadius="50%"
                            cursor="pointer"
                            transition="all 0.3s ease"
                            _hover={{
                                transform: 'scale(1.2)',
                                backgroundColor: 'white',
                                color: 'black'
                            }}
                        >
                            <FontAwesomeIcon icon={faYoutube} size="md" />
                        </Box>
                    </Box>


                </Box>
            </Box>

            <Text color='white' fontSize='15px' fontWeight='light' ml={135} mt={50}>MOST SEARCHED KEYWORDS</Text>

            <Box width='80%' margin='auto'>

                <Text fontSize='10px' color='white' mt={10} cursor='pointer'>Perfume |
                    Best perfume for men |
                    attar |
                    Ittar |
                    attar perfume |
                    oud attar |
                    best attar for women |
                    best attar for men |
                    Perfume for men |
                    Vitamin C Face Wash |
                    Perfume for women |
                    Best perfume for women |
                </Text>

                <Text fontSize='10px' color='white' mt={5} cursor='pointer' whiteSpace='nowrap'>
                    Perfume set for women |
                    Gift for Men |
                    Face wash for oily skin |
                    Body scrub |
                    Dark circle |
                    Perfume for girls |
                    Dark circles removal cream |
                    Acne face wash |
                    under eye cream |
                    Gift sets for women |
                    Body wash for women |
                </Text>

                <Text fontSize='10px' color='white' mt={5} cursor='pointer' whiteSpace='nowrap' >
                    Pocket perfume for men |
                    De tan face pack |
                    Pimple removal cream |
                    Lip scrub |
                    Tan removal face pack |
                    Face wash for acne |
                    Exfoliate scrub |
                    Gift set for men |
                    Coffee Body Scrub |
                    Best long lasting perfume for men |
                </Text>

                <Text fontSize='10px' color='white' mt={5} cursor='pointer' whiteSpace='nowrap'>
                    Perfumes for men under 500 |
                    Perfumes for women under 500 |
                    Perfume gift sets |
                    Oud perfume |
                    Ceo perfume |
                    Under eye cream for dark circles |
                    Acne cream |
                    Vitamin c cream for face |
                    Body lotion for women |
                </Text>

                <Text fontSize='10px' color='white' mt={5} cursor='pointer' whiteSpace='nowrap'>
                    Long lasting perfume for women |
                    Perfume gift pack for her |
                    Perfume gift pack for him |
                    Charcoal face wash |
                    Body wash for men |
                    Best shower gel for women |
                    Shower Gel for men and Women |
                    Body lotion for dry skin |
                </Text>

                <Text fontSize='10px' color='white' mt={5} cursor='pointer' whiteSpace='nowrap'>
                    Body Lotion for men |
                    Body Lotion for women |
                    Shower Gel and Perfume Combo |
                    Shower Travel Kit |
                    Travel Mini Kit |
                    Birthday Gift for Women/Girls |
                    Wedding Gifts for Couples |
                    Gifts for Men Under 500 |
                </Text>

                <Text fontSize='10px' color='white' mt={5} cursor='pointer' whiteSpace='nowrap'>
                    Gifts for Women Under 500 |
                    Diwali Gift Ideas |
                    Gifts for Men Under 500 |
                    Gifts for Women Under 500 |
                    Corporate Gifts |
                    Diwali Gifts for Family and Friends |
                    Diwali Gifts for Friends |
                    Diwali Gifts Under 500 |
                </Text>

                <Text fontSize='10px' color='white' mt={5} cursor='pointer'>
                    Diwali Gifts Under 1000 |
                    Diwali Premium Gifts |
                    Best Diwali Gifts |
                </Text>
            </Box> <br /> <br /> <br />

            <Text color='white' fontSize='12px' fontWeight='light' ml={135}>© 2024, Bella Vita Organic (IDAM Natural Wellness Pvt. Ltd.).</Text> <br /> <br />
        </Box>

    );
}

export default Footer;
