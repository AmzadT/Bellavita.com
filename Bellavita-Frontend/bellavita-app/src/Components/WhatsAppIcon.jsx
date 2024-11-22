import { Box, Image, Link } from "@chakra-ui/react";

const WhatsAppIcon = () => {
    return (
        <Link href="https://wa.me/+91-8298101008" isExternal>
            <Box
                position="fixed"
                bottom="50px"
                right="20px"
                zIndex="1000"
                cursor="pointer"
                _hover={{ transform: "scale(1.1)" }}
                transition="transform 0.3s ease"
            >
                <Image
                    src="https://s3.ap-south-1.amazonaws.com/cdn.limechat.ai/packs/js/whatsapp_widget/media/LC_WA.png"
                    alt="WhatsApp Logo"
                    width="50px"
                    height="auto"
                />
            </Box>
        </Link>
    );
};

export default WhatsAppIcon;
