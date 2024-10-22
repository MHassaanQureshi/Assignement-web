import Hero from "./Components/Hero-section/Hero";
import Link from "next/link";
export default function Home(){
  return(
    <>
    <div className="flex justify-center align-middle mt-24 ">
    <Hero />
    </div>

    <div className="w-full bg-[#F4E2E2] p-4">
      <div className="flex justify-center w-full align-middle gap-[50%] ">
      <p className="font-bold">Recent Post</p>
      <Link href="#" className="text-[#F98585]">view all</Link>
      </div>

    </div>
    </>
  )
}