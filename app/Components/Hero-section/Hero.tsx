import Image from "next/image"
export default function Hero(){
    return(
        <>
        <div className="flex w-4/5 p-4">
            <div className="flex flex-col align-middle">
                <h1 className="text-4xl font-extrabold w-[27rem] pb-4">Hi, I am John, Creative Technologist</h1>
                <p className="flex w-3/5 pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor magnam voluptate eaque quia in reprehenderit, voluptatibus maxime repellendus. Deserunt blanditiis iure numquam amet, accusantium suscipit? Quos obcaecati laudantium saepe quasi laborum nam esse.</p>
                <button className="flex justify-center items-center w-52 bg-[#F98585] p-2 text-white shadow-xl">Download Resume</button>


            </div>
            <div className="w-3/4">
                <Image src="/images/hero-image.png" alt="unable to load" width={600} height={300}/>
            </div>
        </div>
        </>
    )
}