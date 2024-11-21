import { useState, useEffect } from "react";
import { Box, Text, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const NavSlider = () => {
    const texts = [
        "Buy 1 Get 1 Free Sitewide*",
        "🎁FREE Gift on all PREPAID Orders",
        "Mega Diwali Sale is Here!",
    ];

    // States to manage the current index, sliding status, direction, and timeLeft
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const [slideDirection, setSlideDirection] = useState("");
    const [timeLeft, setTimeLeft] = useState("");

    // Set sale end time (2 hours, 40 minutes, 45 seconds)
    const totalTime = (2 * 60 * 60 + 40 * 60 + 45) * 1000;
    const saleEndTime = new Date().getTime() + totalTime;

    // Function to calculate time left for the sale
    const calculateTimeLeft = () => {

        const now = new Date().getTime();
        const difference = saleEndTime - now;

        if (difference > 0) {
            const hours = Math.floor(difference / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
        } else {
            setTimeLeft("Sale ended");
        }
    };

    // Update time every second
    useEffect(() => {
        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, []);


    // Automatically change text every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // Handle previous text and slide to the right
    const handlePrev = () => {
        setSlideDirection("right");
        setIsSliding(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? texts.length - 1 : prevIndex - 1));
            setIsSliding(false);
        }, 500);
    };

    // Handle next text and slide to the left
    const handleNext = () => {
        setSlideDirection("left");
        setIsSliding(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
            setIsSliding(false);
        }, 500);
    };

    return (

        <Box position="relative" textAlign="center" p={2} bg="blackAlpha.900" width="100%" mx="auto" overflow="hidden">

            {/* Text container with sliding animation based on direction */}
            <Text
                fontSize={{ base: "10px", md: "11px", lg: "12px" }}
                color='white'
                fontWeight="medium"
                position="relative"
                transform={
                    isSliding
                        ? slideDirection === "left"
                            ? "translateX(-100%)"
                            : "translateX(100%)"
                        : "translateX(0)"
                }
                transition="transform 0.7s ease-in-out"
                key={currentIndex}
            >
                {texts[currentIndex]}
            </Text>

            {/* Left button */}
            <IconButton
                icon={<ChevronLeftIcon />}
                fontWeight='bold'
                fontSize={{ base: '18px', md: '25px' }}
                onClick={handlePrev}
                position="absolute"
                left={{ base: "20px", md: "50px", lg: "100px" }}
                color='white'
                top="50%"
                transform="translateY(-50%)"
                bg="transparent"
                _hover={{ bg: "gray.300", color: 'black' }}
                aria-label="Previous"
            />

            {/* Right button */}
            <IconButton
                icon={<ChevronRightIcon />}
                color='white'
                fontSize={{ base: '18px', md: '25px' }}
                fontWeight='bold'
                onClick={handleNext}
                position="absolute"
                right={{ base: "20px", md: "50px", lg: "100px" }}
                top="50%"
                transform="translateY(-50%)"
                bg="transparent"
                _hover={{ bg: "gray.300", color: 'black' }}
                aria-label="Next"
            />

            {/* Sale time countdown */}
            <Text fontSize={{ base: "12px", md: "15px", lg: "16px" }} color="yellow.200" fontWeight="medium" mt={2}>
                🪫Hurry! Sale Ends In :
                <Text as="span" color="red" fontWeight='medium' ml={2}>
                    {timeLeft}
                </Text>
            </Text>
        </Box>
    );
};

export default NavSlider;
