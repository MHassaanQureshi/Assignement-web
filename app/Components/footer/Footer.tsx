import Image from "next/image"
export default function Footer(){
    return(
        <>
        <div className="w-full flex flex-col items-center p-4 mt-36">
        <div className="flex  gap-10 w-1/2 justify-center">
            <Image src="/images/fb.png" alt="" width={30} height={30}/>
            <Image src="/images/insta.png" alt="" width={30} height={30}/>
            <Image src="/images/twitter.png" alt="" width={30} height={30}/>
            <Image src="/images/Linkedin.png" alt="" width={30} height={30}/>
        </div>
            <p className="p-4 justify-center">copyright @2020 All right reserved</p>
        </div>
        </>
    )
}