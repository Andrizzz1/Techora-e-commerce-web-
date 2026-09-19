import { NavBar } from "../components/navbar"

export const LandingPage = ()=>{
    return<>
    <NavBar />
    {/*Hero Section */}
<section
  className="relative z-0 min-h-[92vh] bg-cover bg-center px-46 pt-46"
  style={{ backgroundImage: "url('/imgs/heroSection_bg.png')" }}
>
    <h1 className="font-semibold text-8xl font">Discover <br /> What’s Next.</h1>
    <p className="mt-5 text-gray-700">Explore premium technology, from everyday essentials to the devices that power your world.</p>
</section> 
    </>
}