import Hero from "./Components/Hero-section/Hero";
import Link from "next/link";
import Post from "./Components/Post/Post";
import Work from "./Components/Work/Work";
export default function Home(){
  return(
    <>
    <div className="flex justify-center align-middle mt-24 ">
    <Hero />
    </div>

    <div className="w-full bg-[#F4E2E2] p-4">
      <div className="flex justify-center w-full align-middle gap-[63%] ">
      <p className="font-bold">Recent Post</p>
      <Link href="#" className="text-[#F98585] underline">view all</Link>
      </div>
      <div className="flex justify-evenly p-4 mt-2">
        <Post />
        <Post />
      </div>

    </div>
    <div className="w-1/2 justify-center align-middle mt-24   ml-[25%]">
      <h1 className="flex font-bold text-xl">Featured Works</h1>
      <div className="mt-12">
        <Work image="/images/Rectangle 30.png"/>
        <Work image="/images/Rectangle 32.png"/>
        <Work image="/images/Rectangle 34.png"/>
      </div>
    </div>
    </>
  )
}