import { useAccordionItemState } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";


interface Lesson{
    id: string,
    attributes :{
     lessonName: string,
    lessonDescription: string}
      
}

export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:1337/api/lesson-plans")
    const data = await res.json()
    let test = data.data
    console.log("data",test)

    const paths= test.map((item: Lesson) => {
      return {
        params: {id: item.id.toString()}
      }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context: any) => {
    const id= context.params.id;
    const res = await fetch("http://localhost:1337/api/lesson-plans" + id)
    const data = await res.json()
    let test = data.data
    console.log('hello',test)
    return {
        props:{
           lessonDetails: test
        }
    }
}

const Details = (lessonDetails:Lesson) => {
  console.log('get details', lessonDetails)
    return (
      <>
      <div>
       <Navbar/>
      </div>
      <div>
       {/* <h2>Lesson Plan:{lessonDetails.attributes.lessonName}</h2>
      <h3>Lesson Description</h3>
      <p>{lessonDetails.attributes.lessonDescription}</p>  */}
      </div>
      </>
    )
}

export default Details;