import { NavBar } from "../components/navbar"
import CategoryCarousel from "../components/CategoryCarousel";
import Countdown from "react-countdown";
import { Truck, HandCoins, WalletCards, Headset, Umbrella  } from "lucide-react"
import type{ ReactNode } from "react";
import { use, useEffect, useRef, useState } from "react";
//for the 3d
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scene } from "../components/Scene";
import { DealsofTheDay } from "../components/DealsOftheDayholder";

gsap.registerPlugin(ScrollTrigger)
type service ={
    name: string,
    desc: string,
    logo: ReactNode
}

type newDeal ={
    product_id:number,
    title:string,
    description:string,
    price:number,
    image_url:string,
    product_type:string,
    created_at:string,
    discounted_price:number,
    discounr_percent:number
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



export const LandingPage =()=>{
    const mainRef=useRef(null)
    const sceneRef=useRef(null)
    const [progress,setProgress]=useState(0)
    const [newDeals,setNewDeals]=useState<newDeal[]>([])
    const [expiryDate, setExpiryDate] = useState<number | null>(null);

    async function fetch_Deals(){
        try{
            const response = await fetch('http://localhost:3000/RefreshDeals')
            const data = await response.json()
            setNewDeals(data.product)
            setExpiryDate(data.expiresAt);
        }catch(err){
            console.log(err)
        }

    }

    {/*for gsap */}
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

    {/*for new deal */}
    useEffect(()=>{
        fetch_Deals()
    },[])
    console.log(newDeals)
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
        <div key={i} className="border border-gray-200 rounded-sm text-center px-10 py-2 flex items-center gap-1">
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
<div ref={sceneRef} className="relative h-screen ">
   
      {/* BIG TEXT BEHIND THE 3D MODEL */}
  <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none">
    <h1
      className="
        text-[18vw]
        font-black
        tracking-[-0.05em]
        text-gray-200
        whitespace-nowrap
        
        h-80
        lg:h-full
      "
    >
      KEYBOARD
    </h1>
  </div>    
    <div className="relative z-10 h-full">
    <Canvas gl={{ alpha: true }} > {/*    gl={{ alpha: true }}  tells Three.js to make the Canvas background transparent.*/}
        <Scene progress={progress}/>
    </Canvas>

    </div>
</div>

{/*Welcome to Techora */}
<div className="bg-blue-500 text-xs w-full max-w-7xl mx-auto my-10 min-h-5 text-center text-white md:rounded-sm">
    <p className="p-2"><span className="font-semibold">Welcome to techora</span> Wrap new offers / gift every single day on weekends</p>
</div>

{/*Deals of the day/Refresh everyDay */}
<div>
    <h2 className="mb-6 text-center text-xl font-semibold tracking-wide">Deals of the Day
    <span className="mt-1 block mx-auto h-0.5 w-10 bg-blue-500" />
    </h2> 
    <p className="text-xs text-center text-blue-500">Hurry up/Offer end in:</p>
    <div className="flex justify-center ">
        {expiryDate && (
        
        <Countdown
            date={expiryDate}
            onComplete={() => {
                fetch_Deals();
            }}
            renderer={({ hours, minutes, seconds, completed }) => {
                if (completed) {
                    return <p>Refreshing deals...</p>;
                }

                return (
                    <div className="flex gap-4">
                        <div className="text-center">
                            <p className="text-2xl font-bold">
                                {hours}
                            </p>
                        
                            <p className="text-xs text-gray-400">
                                HRS
                            </p>
                            
                        </div>
                        
                        <div className="text-center">
                            <p className="text-2xl font-bold">
                                {minutes}
                            </p>
                            <p className="text-xs text-gray-400">
                                MINS
                            </p>
                        </div>

                        <div className="text-center">
                            <p className="text-2xl font-bold">
                                {seconds}
                            </p>
                            <p className="text-xs text-gray-400">
                                SECS
                            </p>
                        </div>
                    </div>
                );
            }}
        />
        )}
    </div>
    
    <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-1 mt-15">
        {newDeals.map((deal)=>(
            <DealsofTheDay 
                sourceImg={deal.image_url} 
                altimg={deal.title}
                title={deal.title}
                OriginalPrice={deal.price}
                discountedPrice={deal.discounted_price}/>
        ))}

    </div>
</div>

</main>
}