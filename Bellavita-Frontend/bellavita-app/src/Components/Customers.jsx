import { Box, Text } from "@chakra-ui/react"

const Customers = () => {
    return (
        <Box>
            <Text fontSize='2xl' mb={10} textAlign='center' mt={20} color='black'>WHAT OUR CUSTOMERS HAVE TO SAY</Text>

            <Box width='80%' display='flex' gap='50px' margin='auto' justifyContent='center'>
                <img
                    style={{
                        borderRadius: '50%',
                        width: '80px',
                        height: '80px',
                        transition: 'transform 0.4s ease-in-out',
                        cursor: 'pointer'
                    }}
                    src="https://bellavitaorganic.com/cdn/shop/files/t-4.webp?v=1725617641&width=150"
                    alt="Image 1"
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <img
                    style={{
                        borderRadius: '50%',
                        width: '100px',
                        height: '100px',
                        marginTop: '10px',
                        transition: 'transform 0.4s ease-in-out',
                        cursor: 'pointer'
                    }}
                    src="https://bellavitaorganic.com/cdn/shop/files/t-5.webp?v=1725617641&width=150"
                    alt="Image 2"
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <img
                    style={{
                        borderRadius: '50%',
                        transition: 'transform 0.4s ease-in-out',
                        cursor: 'pointer'
                    }}
                    src="https://bellavitaorganic.com/cdn/shop/files/t-1.webp?v=1725617641&width=150"
                    alt="Image 3"
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <img
                    style={{
                        borderRadius: '50%',
                        width: '100px',
                        height: '100px',
                        marginTop: '10px',
                        transition: 'transform 0.4s ease-in-out',
                        cursor: 'pointer'
                    }}
                    src="https://bellavitaorganic.com/cdn/shop/files/t-2.webp?v=1725617641&width=150"
                    alt="Image 4"
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <img
                    style={{
                        borderRadius: '50%',
                        width: '80px',
                        height: '80px',
                        transition: 'transform 0.4s ease-in-out',
                        cursor: 'pointer'
                    }}
                    src="https://bellavitaorganic.com/cdn/shop/files/t-3.webp?v=1725617640&width=150"
                    alt="Image 5"
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />


            </Box>

            <Box display='flex' flexDirection='column' alignItems='center'>

                <img width='200px' src="https://png.pngtree.com/png-clipart/20230819/original/pngtree-five-star-rating-icon-picture-image_8056322.png" />
            </Box>

            <Text textAlign='center' color={"gray.600"} mt={-5}>BELLAVITA has raised the bar of the Perfume industry, such good quality at very affortable price</Text>
        </Box>
    )
}

export default Customers
