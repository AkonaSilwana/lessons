import { Box, Button, Img , Text } from "@chakra-ui/react";
import Link from "next/link";

const LandingPage = () => {

    return (
        <>
         <Box>
            <Img  src='/Images/danlogo.png' alt='logo' width={'600px'} height={'300px'} position={'absolute'} alignItems={'center'} left={430}/>
            </Box>
            <Text color={'grey'} position={'absolute'} alignItems={'center'} left={450} fontSize={'40px'} marginTop={'350px'} fontFamily={'cursive'}>Start your journey to success</Text>
             <Link href="/LessonComp/Lessons">
            <a>
          <Button colorScheme='orange' position={'absolute'} alignItems={'center'} left={650}  marginTop={'450px'} >Get Started</Button>
          </a> 
          </Link>
        </>
    )

}

export default LandingPage;