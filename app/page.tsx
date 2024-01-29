import Hero from "@/components/Hero";
import "./animations.css"
import Features from "@/components/Features";
import MiddleSections from "@/components/MiddleSections";
import ManageOrders from "@/components/ManageOrders";
import Trends from "@/components/Trends";
import FormSection from "@/components/formSection/FormSection";


// export const revalidate  = 0
export const revalidate = 0; // revalidate at most 30 seconds

type MyType = {
  name: string;
  age: number
}

const person: MyType = {
  name: "Nick",
  age: 22
}


function withExtraProps<E>(obj: E) {

  return {
    ...obj,
    isMale: true
  }
}

const res = withExtraProps(person)


const arr = [1,2,3]

function arrFunc<T>(arr: T){
  return arr
}

const x = arrFunc(arr)

export default function Home() {
  return (
    <>
      <Hero />
      <Features   bgColor={null}/>

      <MiddleSections />
      <ManageOrders />
      <Trends />
      {/* <FormSection /> */}
    </>
  );
}



