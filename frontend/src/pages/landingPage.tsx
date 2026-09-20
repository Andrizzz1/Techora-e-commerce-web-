import { NavBar } from "../components/navbar"
import CategoryCarousel from "../components/CategoryCarousel";

import { Truck, HandCoins, WalletCards, Headset, Umbrella  } from "lucide-react"
import type{ ReactNode } from "react";
import { use, useEffect, useRef, useState } from "react";
//for the 3d
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scene } from "../components/Scene";

gsap.registerPlugin(ScrollTrigger)
type service ={
    name: string,
    desc: string,
    logo: ReactNode
}


const services:service[] = [
    {
        name:'Free Services',
        desc: 'From 99.00',
        logo: <Truck size={35}/>
    },
    {
        name:'Money Guarantee',
        desc: '20 days back',
        logo: <HandCoins size={35}/>
    },
    {
        name:'Payment Method',
        desc: 'Secure System',
        logo: <WalletCards  size={35}/>
    },
    {
        name:'Online Support',
        desc: '24 hours',
        logo: <Headset size={35}/>
    },
    {
        name:'100% Sale',
        desc: 'Secure Shipping',
        logo: <Umbrella size={35} />
    },
]



const categories = [
  { name: "Smartphones", image: "./imgs/popularcategories/smartphone.png" },
  { name: "Laptops", image: "./imgs/popularcategories/laptop.png" },
  { name: "TV & Audio", image: "./imgs/popularcategories/Tv.png" },
  { name: "Computers", image: "/imgs/popularcategories/computer.png" },
  { name: "Headphones", image: "/imgs/popularcategories/headphone.png" },
  { name: "Cameras", image: "/imgs/popularcategories/camera.png" },
];

export const LandingPage = ()=>{
    const mainRef=useRef(null)
    const sceneRef=useRef(null)
    const [progress,setProgress]=useState(0)

    useEffect(()=>{
        gsap.timeline({
            scrollTrigger:{
                trigger:mainRef.current,
                start:"top top",
                end:"bottom bottom",
                scrub:1,
                onUpdate:(self)=>{
                    setProgress(self.progress)
                }
            }
        })

        .to(sceneRef.current,{
            ease:'none',
            // x:'25vw',
            // y:'100vh'
        })
    },[])
    return<main  className="overflow-hidden">
    <NavBar />
    {/*Hero Section */}
<section
  className="relative z-0 min-h-[92vh] bg-cover bg-center px-10 md:px-24 lg:px-46 max-sm:pt-60 pt-46"
  style={{ backgroundImage: "url('/imgs/heroSection_bg.png')" }}
>
    <h1 className="font-bold text-5xl md:text-8xl font">Discover <br /> What’s Next.</h1>
    <p className="mt-5 text-gray-700">Explore premium technology, from everyday essentials to the devices that power your world.</p>
</section> 

{/*Services */}
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-10 md:px-24 lg:px-[11.5rem]">
    {services.map((serv, i)=>(
        <div className="border border-gray-200 rounded-sm text-center px-10 py-2 flex items-center gap-1">
            {serv.logo}
            <div>
                <p className="text-sm font-semibold" >{serv.name}</p>
                <p className="text-xs text-gray-600" >{serv.desc}</p>
            </div>
        </div>
    ))}
</div>

{/*Popular categories */}
<div ref={mainRef}>
     <CategoryCarousel categories={categories} onSelect={(name) => console.log(name)} />
</div>


{/*For the 3d model section */}
<div ref={sceneRef} className="h-screen ">
    <Canvas >
        <Scene progress={progress}/>
    </Canvas>
</div>
</main>
}