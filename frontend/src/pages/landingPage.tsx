import { NavBar } from "../components/navbar";
import {Footer }from "../components/footer";
import CategoryCarousel from "../components/CategoryCarousel";
import Countdown from "react-countdown";
import { Truck, HandCoins, WalletCards, Headset, Umbrella} from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import {useNavigate} from "react-router-dom";
//for the 3d
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scene } from "../components/Scene";
import { DealsofTheDay } from "../components/DealsOftheDayholder";

gsap.registerPlugin(ScrollTrigger);
type service = {
  name: string;
  desc: string;
  logo: ReactNode;
};

type ProductItems = {
  name: string;
  Image: string;
  price: number;
};

type newDeal = {
  product_id: number;
  title: string;
  description: string;
  price: number;
  image_url: string;
  product_type: string;
  created_at: string;
  discounted_price: number;
  discounr_percent: number;
};

const services: service[] = [
  {
    name: "Free Services",
    desc: "From 99.00",
    logo: <Truck size={35} />,
  },
  {
    name: "Money Guarantee",
    desc: "20 days back",
    logo: <HandCoins size={35} />,
  },
  {
    name: "Payment Method",
    desc: "Secure System",
    logo: <WalletCards size={35} />,
  },
  {
    name: "Online Support",
    desc: "24 hours",
    logo: <Headset size={35} />,
  },
  {
    name: "100% Sale",
    desc: "Secure Shipping",
    logo: <Umbrella size={35} />,
  },
];

const categories = [
  { name: "Smartphones", image: "./imgs/popularcategories/smartphone.png" },
  { name: "Laptops", image: "./imgs/popularcategories/laptop.png" },
  { name: "TV & Audio", image: "./imgs/popularcategories/Tv.png" },
  { name: "Computers", image: "/imgs/popularcategories/computer.png" },
  { name: "Headphones", image: "/imgs/popularcategories/headphone.png" },
  { name: "Cameras", image: "/imgs/popularcategories/camera.png" },
];

const iphonedealItems: ProductItems[] = [
  { name: "Iphone 17", Image: "/imgs/products/iphone17.png", price: 69990 },
  {
    name: "Iphone 16(Pink)",
    Image: "/imgs/products/Iphone16_Pink.png",
    price: 48490,
  },
  {
    name: "Iphone 16 Pro",
    Image: "/imgs/products/Iphone16_pro.png",
    price: 78990,
  },
  {
    name: "Iphone 15 Pro",
    Image: "/imgs/products/Iphone_15_pro.png",
    price: 36990,
  },
  { name: "Iphone 15", Image: "/imgs/products/Iphone_15.png", price: 31790 },
  {
    name: "Iphone 17 Pro",
    Image: "/imgs/products/Iphone_17_pro.jpg",
    price: 96790,
  },
  {
    name: "Iphone 14 Pro",
    Image: "/imgs/products/Iphone_14_Pro.png",
    price: 32290,
  },
  {
    name: "Iphone 11 Pro",
    Image: "/imgs/products/Iphone_11_Pro.png",
    price: 25014,
  },
  { name: "Iphone 11", Image: "/imgs/products/Iphone_11.png", price: 15300 },
  { name: "Iphone 13", Image: "/imgs/products/Iphone_13.png", price: 20700 },
];

const TopPicksItems: ProductItems[] = [
    { name: "steamdeck oled", Image: "/imgs/products/steamdeck_oled.png", price: 54995 },
  {
    name: "Sony WH-1000XM6",
    Image: "/imgs/products/Sony WH-1000XM6.png",
    price: 19996,
  },
  {
    name: "nintendo switch 2",
    Image: "/imgs/products/nintendo_switch2.png",
    price: 31995,
  },
  {
    name: "nintendo switch oled",
    Image: "/imgs/products/nintendo_switch_oled.png",
    price: 24150,
  },
  { name: "Asus ROG Strix G16", Image: "/imgs/products/Asus_ROG_Strix_G16.png", price: 103064 },
  {
    name: "Redragon K617GG FIZZ RGB Wired",
    Image: "/imgs/products/redragon-k617gg-rgb-fizz-keyboard.png",
    price: 1395,
  },
  {
    name: "Xbox Wireless Controller",
    Image: "/imgs/products/Xbox-Wireless-Controller.png",
    price: 3495,
  },
  {
    name: "SteelSeries QcK Mini Mouse Pad",
    Image: "/imgs/products/steelseries-mousepad.png",
    price: 470,
  },
  { name: "SteelSeries Aerox 3 Gen2 TrueMove Ultra Lightweight Gaming Wireless Mouse", Image: "/imgs/products/steelseries-aerox-3-wireless-gen-2-mouse.png", price: 4753 },
  { name: "Sony WH-CH520 Wireless Bluetooth Headphones", Image: "/imgs/products/Sony-WH-CH520-Wireless-Bluetooth-Headphones.png", price: 3495 },
];

const FAQ = [
  {
    question: "How long does shipping take?",
    answer:
      "Orders are processed within 24 hours. Standard shipping typically takes 3–7 business days depending on your location.",
  },
  {
    question: "Do your products come with a warranty?",
    answer:
      "Warranty coverage depends on the product and brand. Check the product details for the warranty included with your purchase.",
  },
  {
    question: "Can I return or exchange a product?",
    answer:
      "Eligible products may be returned or exchanged according to Techora's return policy. Product condition and return period may apply.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Shipping availability depends on the destination and product. Available shipping options will be shown during checkout.",
  },
  {
    question: "Are the products original?",
    answer:
      "Techora products are listed with their corresponding brand and product information. Check the product page for specific details.",
  },
];
export const LandingPage = () => {
  const mainRef = useRef(null);
  const sceneRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [newDeals, setNewDeals] = useState<newDeal[]>([]);
  const [expiryDate, setExpiryDate] = useState<number | null>(null);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const navigate = useNavigate();

  async function fetch_Deals() {
    try {
      const response = await fetch("http://localhost:3000/RefreshDeals");
      const data = await response.json();
      setNewDeals(data.product);
      setExpiryDate(data.expiresAt);
    } catch (err) {
      console.log(err);
    }
  }

  {
    /*for gsap */
  }
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          onUpdate: (self) => {
            setProgress(self.progress);
          },
        },
      })

      .to(sceneRef.current, {
        ease: "none",
        // x:'25vw',
        // y:'100vh'
      });
  }, []);

  {
    /*for new deal */
  }
  useEffect(() => {
    fetch_Deals();
  }, []);

  return (
    <main className="overflow-hidden">
      <NavBar />
      {/*Hero Section */}
      <section
        className="relative z-0 min-h-[92vh] bg-cover bg-center px-10 md:px-24 lg:px-46 max-sm:pt-60 pt-46"
        style={{ backgroundImage: "url('/imgs/heroSection_bg.png')" }}
      >
        <h1 className="font-bold text-5xl md:text-8xl font">
          Discover <br /> What’s Next.
        </h1>
        <p className="mt-5 text-gray-700">
          Explore premium technology, from everyday essentials to the devices
          that power your world.
        </p>
      </section>

      {/*Services */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-10 md:px-24 lg:px-[11.5rem]">
        {services.map((serv, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-sm text-center px-10 py-2 flex items-center gap-1"
          >
            {serv.logo}
            <div>
              <p className="text-sm font-semibold">{serv.name}</p>
              <p className="text-xs text-gray-600">{serv.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/*Popular categories */}
      <div ref={mainRef}>
        <CategoryCarousel
          categories={categories}
          onSelect={(name) => console.log(name)}
        />
      </div>

      <hr className="text-gray-300  w-full max-w-7xl mx-auto mt-20" />

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
          <Canvas gl={{ alpha: true }}>
            {" "}
            {/*    gl={{ alpha: true }}  tells Three.js to make the Canvas background transparent.*/}
            <Scene progress={progress} />
          </Canvas>
        </div>
      </div>

      {/*Welcome to Techora */}
      <div className="bg-blue-500 text-xs w-full max-w-7xl mx-auto my-10 min-h-5 text-center text-white md:rounded-sm overflow-hidden ">
        <p className="p-2 animate-marquee">
          <span className="font-semibold">Welcome to techora</span> Wrap new
          offers / gift every single day on weekends
        </p>
      </div>

      {/*Deals of the day/Refresh everyDay */}
      <div>
        <h2 className="mb-6 text-center text-xl font-semibold tracking-wide">
          Deals of the Day
          <span className="mt-1 block mx-auto h-0.5 w-10 bg-blue-500" />
        </h2>
        <p className="text-xs text-center text-blue-500">
          Hurry up/Offer end in:
        </p>
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
                      <p className="text-2xl font-bold">{hours}</p>

                      <p className="text-xs text-gray-400">HRS</p>
                    </div>

                    <div className="text-center">
                      <p className="text-2xl font-bold">{minutes}</p>
                      <p className="text-xs text-gray-400">MINS</p>
                    </div>

                    <div className="text-center">
                      <p className="text-2xl font-bold">{seconds}</p>
                      <p className="text-xs text-gray-400">SECS</p>
                    </div>
                  </div>
                );
              }}
            />
          )}
        </div>

        <div
          className="grid grid-cols-2 max-sm:grid-cols-1 gap-1 mt-15
                     w-full max-w-7xl mx-auto"
        >
          {newDeals.map((deal) => (
            <DealsofTheDay
              sourceImg={deal.image_url}
              altimg={deal.title}
              title={deal.title}
              OriginalPrice={deal.price}
              discountedPrice={deal.discounted_price}
            />
          ))}
        </div>
      </div>

      <hr className="text-gray-300  w-full max-w-7xl mx-auto mt-20" />

      {/*Latest iphone deals */}
      <p className="max-sm:ml-8 md:text-center lg:text-left text-3xl font-bold mt-20 w-full max-w-7xl md:mx-auto tracking-tigh">
        Latest iphone Deals
      </p>
      <p className="max-sm:ml-8 md:text-center lg:text-left text-gray-500 w-full max-w-7xl mx-auto mb-5 text-xs">
        Grab the newest iPhone models at exclusive prices
      </p>
      <div className="flex flex-col lg:grid lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto px-4 lg:px-0">
        <div className="lg:col-span-1 max-lg:hidden ">
          <img
            className="rounded-lg h-full w-full object-cover"
            src="/imgs/iphoneDeals_ad.png"
            alt="iphone ad"
          />
        </div>
        <div
          className="col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-4 
                    max-sm:mt-10"
        >
          {iphonedealItems.map((item, i) => (
            <div
              key={i}
              className="group text-center bg-white p-4
                        h-full min-h-72 
                        flex flex-col 
                        cursor-pointer rounded-lg shadow-md 
                        transition-all duration-600 
                        hover:-translate-y-1 hover:shadow-xl
                        "
            >
            <div className="flex h-36 items-center justify-center">
              <img className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105" src={item.Image} alt={item.name} />
            </div>
            <div className="mt-4 flex flex-1 flex-col">
              <p className="h-10 leading-5 line-clamp-2 text-sm">{item.name}</p>
              <p className="font-semibold">₱{item.price}</p>
            </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="text-gray-300  w-full max-w-7xl mx-auto mt-20" />
      {/*Latest iphone deals */}

      <p
        className="max-sm:ml-8 text-3xl font-bold mt-20 
              md:text-center lg:text-left w-full max-w-7xl mx-auto tracking-tigh">Top Picks For You</p>
      <p className="max-sm:ml-8 md:text-center text-gray-500 
                w-full max-w-7xl mx-auto mb-5 text-xs
                lg:text-left">
        Grab the newest iPhone models at exclusive prices
      </p>
      <div className="flex flex-col lg:grid lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto px-4 lg:px-0">
        <div
          className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-4 max-sm:mt-10"
        >
          {TopPicksItems.map((item, i) => (
            <div
              key={i}
              className="group flex h-full min-h-72 flex-col overflow-hidden rounded-lg bg-white p-4 text-center shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-36 items-center justify-center">
                <img className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105" src={item.Image} alt={item.name} />
              </div>
              <div className="mt-4 flex flex-1 flex-col">
              <p className="h-10 overflow-hidden text-sm leading-5 line-clamp-2">{item.name}</p>
              <p className="font-semibold">₱{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:col-span-1 max-lg:hidden">
          <img
            className="h-full w-full rounded-lg object-cover"
            src="/imgs/TopPicksAd.png"
            alt="Mousead"
          />
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
            Discover the essentials to create a setup that works, sounds, and
            looks exactly the way you want.
          </p>
        </div>

        {/* Collection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Work Smarter */}
          <div
            className="
            group relative overflow-hidden
            min-h-[380px]
            rounded-3xl
            border border-gray-200
            bg-gray-50
            cursor-pointer
            transition-all duration-500
            hover:shadow-xl
            hover:-translate-y-1
        "
          >
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

              <div
                className="
                    w-10 h-10
                    rounded-full
                    bg-white
                    border border-gray-200
                    flex items-center justify-center
                    text-lg
                    transition-transform duration-300
                    group-hover:translate-x-1
                "
              >
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
          <div
            className="
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

              <div
                className="
                    w-10 h-10
                    rounded-full
                    bg-white
                    border border-gray-200
                    flex items-center justify-center
                    text-lg
                    transition-transform duration-300
                    group-hover:translate-x-1
                "
              >
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
          <div
            className="
            group relative overflow-hidden
            min-h-[380px]
            rounded-3xl
            border border-gray-200
            bg-gray-50
            cursor-pointer
            transition-all duration-500
            hover:shadow-xl
            hover:-translate-y-1
        "
          >
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

              <div
                className="
                    w-10 h-10
                    rounded-full
                    bg-white
                    border border-gray-200
                    flex items-center justify-center
                    text-lg
                    transition-transform duration-300
                    group-hover:translate-x-1
                "
              >
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

      {/* Techora Experience */}
      <section className="w-full max-w-7xl mx-auto mt-24 px-4 sm:px-6 lg:px-0">
        {/* Header */}
        <div
          className="
        flex flex-col
        lg:flex-row
        lg:items-end
        lg:justify-between
        gap-6
        mb-8
    "
        >
          <div>
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-blue-500
            "
            >
              The Techora Experience
            </p>

            <h2
              className="
                mt-2
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-bold
                tracking-tight
                leading-tight
                max-w-2xl
            "
            >
              Technology that fits
              <br className="hidden sm:block" />
              into your everyday.
            </h2>
          </div>

          <p
            className="
            text-xs
            sm:text-sm
            text-gray-500
            leading-relaxed
            max-w-md
            lg:text-right
        "
          >
            From powerful devices to everyday essentials, Techora brings the
            technology you need together in one simple shopping experience.
          </p>
        </div>

        {/* Main Image */}
        <div
          className="
        relative
        overflow-hidden
        rounded-3xl
        border border-gray-200
        bg-gray-50
        min-h-[360px]
        sm:min-h-[430px]
        md:min-h-[500px]
    "
        >
          {/* Soft decorative glow */}
          <div
            className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-64 h-64
            sm:w-80 sm:h-80
            md:w-[28rem] md:h-[28rem]
            rounded-full
            bg-blue-100/70
            blur-3xl
        "
          />

          {/* Background text */}
          <div
            className="
            absolute
            top-6
            left-6
            sm:top-10
            sm:left-10
            z-10
        "
          >
            <p
              className="
                text-[10px]
                sm:text-xs
                uppercase
                tracking-[0.25em]
                text-gray-400
            "
            >
              Designed for everyday life
            </p>

            <h3
              className="
                mt-2
                text-2xl
                sm:text-4xl
                md:text-5xl
                font-semibold
                tracking-tight
            "
            >
              Better tech.
              <br />
              Simpler life.
            </h3>
          </div>

          {/* Image */}
          <div
            className="
            absolute
            inset-0
            flex
            items-end
            justify-center
            overflow-hidden
        "
          >
            <img
              src="/imgs/personad.png"
              alt="Techora technology"
              className="
                    relative
                    z-10
                    w-[65%]
                    sm:w-[50%]
                    md:w-[60%]
                    max-h-full
                    object-contain
                    transition-transform
                    duration-700
                "
            />
          </div>

          {/* Small bottom label */}
          <div
            className="
            absolute
            bottom-5
            left-5
            sm:bottom-8
            sm:left-8
            z-20
            rounded-full
            border border-gray-200
            bg-white/90
            backdrop-blur-md
            px-4
            py-2
        "
          >
            <p
              className="
                text-[10px]
                sm:text-xs
                text-gray-500
            "
            >
              Curated technology by Techora
            </p>
          </div>
        </div>

        {/* Bottom Stats */}
        <div
          className="
        grid
        grid-cols-2
        md:grid-cols-4
        mt-6
        divide-x
        divide-gray-200
        border-y
        border-gray-200
        text-center
    "
        >
          <div className="px-4 py-6 sm:px-6 md:px-8">
            <p
              className="
                text-3xl
                sm:text-4xl
                font-semibold
                tracking-tight
            "
            >
              100+
            </p>

            <p className="mt-1 text-xs text-gray-400">Products to Explore</p>
          </div>

          <div className="px-4 py-6 sm:px-6 md:px-8">
            <p
              className="
                text-3xl
                sm:text-4xl
                font-semibold
                tracking-tight
            "
            >
              24/7
            </p>

            <p className="mt-1 text-xs text-gray-400">Customer Support</p>
          </div>

          <div className="px-4 py-6 sm:px-6 md:px-8">
            <p
              className="
                text-3xl
                sm:text-4xl
                font-semibold
                tracking-tight
            "
            >
              100%
            </p>

            <p className="mt-1 text-xs text-gray-400">Secure Checkout</p>
          </div>

          <div className="px-4 py-6 sm:px-6 md:px-8">
            <p
              className="
                text-3xl
                sm:text-4xl
                font-semibold
                tracking-tight
            "
            >
              Fast
            </p>

            <p className="mt-1 text-xs text-gray-400">Delivery Experience</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="FAQ" className="w-full max-w-7xl mx-auto mt-24 px-4 sm:px-6 lg:px-0">
        <div
          className="
        grid
        grid-cols-1
        lg:grid-cols-3
        gap-10
        lg:gap-16
    "
        >
          {/* Left side */}
          <div className="lg:col-span-1">
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-blue-500
            "
            >
              Support
            </p>

            <h2
              className="
                mt-3
                text-4xl
                sm:text-5xl
                font-bold
                tracking-tight
                leading-tight
            "
            >
              Frequently
              <br />
              Asked Questions
            </h2>

            <p
              className="
                mt-4
                text-sm
                text-gray-500
                leading-relaxed
                max-w-sm
            "
            >
              Find answers to common questions about orders, products, payments,
              and support.
            </p>

            <button
              type="button"
              className="
                    mt-7
                    rounded-full
                    bg-black
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-white
                    transition-all
                    duration-300
                    hover:bg-gray-800
                    hover:-translate-y-0.5
                    hover:shadow-lg
                "
              onClick={() => console.log("Open support")}
            >
              Contact Support
            </button>
          </div>

          {/* Right side */}
          <div className="lg:col-span-2">
            <div className="space-y-3">
              {FAQ.map((faq, index) => {
                const isOpen = faqOpen === index;
                return (
                  <div
                    key={index}
                    className={`
                                rounded-2xl
                                border
                                transition-all
                                duration-300
                                overflow-hidden
                                ${
                                  isOpen
                                    ? "border-gray-200 bg-white shadow-sm"
                                    : "border-gray-200 bg-gray-50 hover:bg-white"
                                }
                            `}
                  >
                    {/* Question */}
                    <button
                      type="button"
                      onClick={() => setFaqOpen(isOpen ? null : index)}
                      className="
                                    w-full
                                    flex
                                    items-center
                                    justify-between
                                    gap-4
                                    px-5
                                    sm:px-6
                                    py-5
                                    text-left
                                "
                    >
                      <span
                        className="
                                    text-sm
                                    sm:text-base
                                    font-medium
                                    text-gray-900
                                "
                      >
                        {faq.question}
                      </span>

                      <span
                        className="
                                    shrink-0
                                    w-8
                                    h-8
                                    rounded-full
                                    border
                                    border-gray-200
                                    bg-white
                                    flex
                                    pt-0.5
                                    justify-center
                                    text-gray-500
                                    cursor-pointer
                                "
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {/* Answer */}
                    <div
                      className={`
                                    grid
                                    transition-[grid-template-rows]
                                    duration-300
                                    ${
                                      isOpen
                                        ? "grid-rows-[1fr]"
                                        : "grid-rows-[0fr]"
                                    }
                                `}
                    >
                      <div className="overflow-hidden">
                        <p
                          className="
                                        px-5
                                        sm:px-6
                                        pb-5
                                        text-xs
                                        sm:text-sm
                                        leading-relaxed
                                        text-gray-500
                                        max-w-2xl
                                    "
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};
