import Image from "next/image"
import React from "react";
interface ProjProps {
    image: string;
    
  }
const Work: React.FC<ProjProps> = ({ image }) => {
    return(
        <>
        <div className="flex  p-4 mb-4">
        <div className="pr-4">
            <Image src={image} alt="unable to load" width={246} height={184}/>
        </div>
        <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold ">Designing Dashboard</h1>
            <div className="flex gap-8">
                <p className="bg-[#F98585] text-sm pl-4 pr-4  flex items-center rounded-2xl text-white bold">2020</p>
                <p>Dashboard</p>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat neque suscipit distinctio laboriosam voluptas!</p>
        </div>
        </div>
        </>
    )
}
export default Work;