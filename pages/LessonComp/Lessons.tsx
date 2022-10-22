import Navbar from "../Components/Navbar";
import { GetServerSideProps } from "next";
import { Box,  ChakraProvider,  useMediaQuery, Input, Button, Text } from '@chakra-ui/react';
import Link from "next/link";
import {SearchBox} from "../SearchBox";
import {useState} from 'react';
// import {QueryClientProvider, QueryClient} from 'react-query'



// const queryClient= new QueryClient()

interface LessonsData{
    test: {id: string,
    attributes :{
     lessonName: string,
    lessonDescription: string}
      
      }[];
}
interface Lesson{
    id: string,
    attributes :{
     lessonName: string,
    lessonDescription: string}
      
}

export default function Lessons ({test}:LessonsData){
    // const [getLesson, setGetLesson] = useState<LessonsData>(test.attributes.lessonName)
   
  const handleSearch = (term:string) => {
    fetch("http://localhost:1337/api/lesson-plans", {
        method:"test",
        body: JSON.stringify({
           term,
        }),
    })
    .then((res) =>res.json())
    .then(console.log)
    .catch(console.log);
  };

     
   
 return(
        <>
        <ChakraProvider>
        <div>
            <Navbar />
        </div>
        {/* <Box>
            <SearchBox onSearch={handleSearch}/>
        </Box> */}
       
        <Box position={'absolute'} left={'500px'} marginTop={'300px'}>
            
               <ul>    
                 {test.map((item:Lesson ) =>( 
                   <Box borderRadius={'25px'} marginBottom={'20px'}  alignItems={'center'} width={'550px'} height={'150px'} boxShadow='inner' p='6' rounded='md' bg='white'> 
                   
                  <Link href={'/LessonComp/' + item.id} key={item.id}><a><h6>Lesson Plan:{item.attributes.lessonName}</h6>
                  <p>{item.attributes.lessonDescription}</p></a></Link>   
                  
                  </Box>
                 ))}    
                 </ul> 
                 
             </Box>
             </ChakraProvider>
             </>
       
    )

}
export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch("http://localhost:1337/api/lesson-plans")
    const data = await res.json()
    let test = data.data
    console.log("data",test)
    return {
        props:{
            test
        }
    }
}