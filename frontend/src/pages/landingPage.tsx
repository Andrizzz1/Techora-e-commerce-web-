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

type ProductItems={
    name: string,
    Image: string,
    price: number  
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


const iphonedealItems:ProductItems[] = [
    {name:"Iphone 17", Image:"/imgs/products/iphone17.png",price:69990},
    {name:"Iphone 16(Pink)", Image:"/imgs/products/Iphone16_Pink.png",price:48490},
    {name:"Iphone 16 Pro", Image:"/imgs/products/Iphone16_pro.png",price:78990},
    {name:"Iphone 15 Pro", Image:"/imgs/products/Iphone_15_pro.png",price:36990},
    {name:"Iphone 15", Image:"/imgs/products/Iphone_15.png",price:31790},
    {name:"Iphone 17 Pro", Image:"/imgs/products/Iphone_17_pro.jpg",price:96790},
    {name:"Iphone 14 Pro", Image:"/imgs/products/Iphone_14_Pro.png",price:32290},
    {name:"Iphone 11 Pro", Image:"/imgs/products/Iphone_11_Pro.png",price:25014},
    {name:"Iphone 11", Image:"/imgs/products/Iphone_11.png",price:15300},
    {name:"Iphone 13", Image:"/imgs/products/Iphone_13.png",price:20700},
]

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

<hr className="text-gray-300  w-full max-w-7xl mx-auto mt-20"/>

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
<div className="bg-blue-500 text-xs w-full max-w-7xl mx-auto my-10 min-h-5 text-center text-white md:rounded-sm overflow-hidden ">
    <p className="p-2 animate-marquee"><span className="font-semibold">Welcome to techora</span> Wrap new offers / gift every single day on weekends</p>
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
    
    <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-1 mt-15
                     w-full max-w-7xl mx-auto">
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

<hr className="text-gray-300  w-full max-w-7xl mx-auto mt-20"/>

{/*Latest iphone deals */}
<p className="max-sm:ml-8 md:text-center lg:text-left text-2xl font-bold mt-20 w-full max-w-7xl md:mx-auto">Latest iphone Deals</p>
<p className="max-sm:ml-8 md:text-center lg:text-left text-gray-500 w-full max-w-7xl mx-auto mb-5 text-xs">Grab the newest iPhone models at exclusive prices</p>
<div className="flex flex-col lg:grid md:grid-cols-4 w-full max-w-7xl mx-auto ">
    <div className="col-span-1 max-lg:hidden ">
        <img className="rounded-sm" src="/imgs/iphoneDeals_ad.png" alt="iphone ad" />
    </div>
    <div className="col-span-3 md:ml-10 flex flex-wrap 
                    max-lg:mt-10 max-sm:gap-3 justify-center 
                    max-md:grid max-md:grid-cols-2 max-lg:px-4">
        {iphonedealItems.map((item,i)=>(
            <div key={i} className="text-center bg-white 
                        h-56 md:w-44 md:mx-1 my-1 
                        flex flex-col items-center justify-center 
                        cursor-pointer rounded-sm shadow-md
                        hover:scale-105 transition-all duration-600 
                        w-full max-w-7xl mx-auto
                        
                        ">
                <img className="w-28" src={item.Image} alt={item.name}/>
                <p className="text-sm">{item.name}</p>
                <p className="font-semibold">₱{item.price}</p>
            </div>

        ))
        }
     
    </div>
</div>

<hr className="text-gray-300  w-full max-w-7xl mx-auto mt-20"/>
{/*Latest iphone deals */}

<p className="max-sm:ml-8 text-2xl font-bold mt-20 
              md:text-center lg:text-left w-full max-w-7xl mx-auto">Top Picks For You</p>
<p className="max-sm:ml-8 md:text-center text-gray-500 
                w-full max-w-7xl mx-auto mb-5 text-xs
                lg:text-left">Grab the newest iPhone models at exclusive prices</p>
<div className="flex flex-col lg:grid md:grid-cols-4 w-full max-w-7xl mx-auto ">
    <div className="col-span-3 md:mr-10 flex flex-wrap 
                    max-sm:mt-10 max-sm:gap-3 justify-center
                    max-md:grid max-md:grid-cols-2 max-lg:px-4">
        {iphonedealItems.map((item,i)=>(
            <div key={i} className="text-center bg-white 
                                     h-56 md:w-44 md:mx-1 my-1
                                    flex flex-col items-center justify-center 
                                    cursor-pointer rounded-sm shadow-md
                                    hover:scale-105 transition-all duration-600 
                                    w-full max-w-7xl mx-auto">
                <img className="w-28" src={item.Image} alt={item.name}/>
                <p className="text-sm">{item.name}</p>
                <p className="font-semibold">₱{item.price}</p>
            </div>

        ))
        }
    </div>
    <div className="col-span-1  max-lg:hidden ">
        <img className="rounded-sm" src="/imgs/TopPicksAd.png" alt="Mousead" />
    </div>
</div>



{/* Build Your Setup */}
<section className="w-full max-w-7xl mx-auto mt-24 px-4 sm:px-6 lg:px-0">

    {/* Section Header */}
    <div className="mb-8">
        <p className="text-xs font-semibold tracking-[0.2em] text-blue-500 uppercase">
            Curated For You
        </p>

        <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
            Build Your Setup.
        </h2>

        <p className="mt-2 text-sm text-gray-500 max-w-xl">
            Discover the essentials to create a setup that works,
            sounds, and looks exactly the way you want.
        </p>
    </div>

    {/* Collection Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {/* Work Smarter */}
        <div className="
            group relative overflow-hidden
            min-h-[380px]
            rounded-3xl
            border border-gray-200
            bg-gray-50
            cursor-pointer
            transition-all duration-500
            hover:shadow-xl
            hover:-translate-y-1
        ">
            <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">

                <div>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">
                        Laptops
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                        Work Smarter.
                    </h3>

                    <p className="mt-2 text-sm text-gray-500 max-w-[220px]">
                        Powerful devices for productivity, study, and everyday work.
                    </p>
                </div>

                <div className="
                    w-10 h-10
                    rounded-full
                    bg-white
                    border border-gray-200
                    flex items-center justify-center
                    text-lg
                    transition-transform duration-300
                    group-hover:translate-x-1
                ">
                    →
                </div>
            </div>

            <img
                src={categories[1].image}
                alt={categories[1].name}
                className="
                    absolute
                    w-[75%]
                    right-[-5%]
                    bottom-[-2%]
                    object-contain
                    transition-transform duration-700
                    group-hover:scale-110
                "
            />
        </div>


        {/* Audio */}
        <div className="
            group relative overflow-hidden
            min-h-[380px]
            rounded-3xl
            border border-gray-200
            bg-gray-50
            cursor-pointer
            transition-all duration-500
            hover:shadow-xl
            hover:-translate-y-1
        ">
            <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">

                <div>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">
                        Audio
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                        Hear More.
                    </h3>

                    <p className="mt-2 text-sm text-gray-500 max-w-[220px]">
                        Immersive sound for music, gaming, and everything in between.
                    </p>
                </div>

                <div className="
                    w-10 h-10
                    rounded-full
                    bg-white
                    border border-gray-200
                    flex items-center justify-center
                    text-lg
                    transition-transform duration-300
                    group-hover:translate-x-1
                ">
                    →
                </div>
            </div>

            <img
                src={categories[4].image}
                alt={categories[4].name}
                className="
                    absolute
                    w-[70%]
                    right-[0%]
                    bottom-[2%]
                    object-contain
                    transition-transform duration-700
                    group-hover:scale-110
                "
            />
        </div>


        {/* Computers */}
        <div className="
            group relative overflow-hidden
            min-h-[380px]
            rounded-3xl
            border border-gray-200
            bg-gray-50
            cursor-pointer
            transition-all duration-500
            hover:shadow-xl
            hover:-translate-y-1
        ">
            <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">

                <div>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">
                        Computers
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                        Power Your Setup.
                    </h3>

                    <p className="mt-2 text-sm text-gray-500 max-w-[220px]">
                        Build a clean, powerful workspace made for your workflow.
                    </p>
                </div>

                <div className="
                    w-10 h-10
                    rounded-full
                    bg-white
                    border border-gray-200
                    flex items-center justify-center
                    text-lg
                    transition-transform duration-300
                    group-hover:translate-x-1
                ">
                    →
                </div>
            </div>

            <img
                src={categories[3].image}
                alt={categories[3].name}
                className="
                    absolute
                    w-[78%]
                    right-[-8%]
                    bottom-[0%]
                    object-contain
                    transition-transform duration-700
                    group-hover:scale-110
                "
            />
        </div>

    </div>
</section>


{/* Techora AI Support */}
<section className="sticky top-0 w-full max-w-7xl mx-auto mt-24 px-4 sm:px-6 lg:px-0">
    <div
        className="
            relative overflow-hidden
            rounded-3xl
            border border-gray-200
            bg-gray-50
            px-6 py-14
            sm:px-10 sm:py-16
            md:px-16 md:py-20
            text-center
        "
    >

        {/* Decorative background */}
        <div className="
            pointer-events-none
            absolute
            -top-20
            left-1/2
            -translate-x-1/2
            w-72 h-72
            rounded-full
            bg-blue-100/60
            blur-3xl
        " />

        <div className="relative z-10 mx-auto max-w-2xl">

            <p className="
                text-xs
                font-semibold
                tracking-[0.2em]
                uppercase
                text-blue-500
            ">
                Techora Support
            </p>

            <h2 className="
                mt-3
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-bold
                tracking-tight
            ">
                Not sure what to buy?
            </h2>

            <p className="
                mt-4
                text-sm
                sm:text-base
                leading-relaxed
                text-gray-500
                max-w-xl
                mx-auto
            ">
                Tell us what you need and get personalized help
                finding the right technology for your setup.
            </p>

            {/* Chatbot Button */}
            <button
                type="button"
                onClick={() => console.log("Open Techora AI")}
                className="
                    mt-8
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-blue-500
                    px-7
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    shadow-sm
                    transition-all
                    duration-300
                    hover:bg-blue-600
                    hover:shadow-lg
                    hover:-translate-y-0.5
                    active:translate-y-0
                "
            >
                <span className="text-base">✦</span>
                Ask Techora AI
                <span
                    className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                    "
                >
                    →
                </span>
            </button>

            <p className="mt-4 text-[11px] text-gray-400">
                Shopping help • Product recommendations • Support
            </p>

        </div>
    </div>
</section>


</main>
}