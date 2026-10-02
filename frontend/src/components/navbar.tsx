import { Search, ShoppingCart } from "lucide-react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
type OptionData = {
  id: number;
  title: string;
};

const ShopOptionsData: OptionData[] = [
  {
    id: 1,
    title: "Gaming",
  },
  {
    id: 2,
    title: "Wearables",
  },
  {
    id: 3,
    title: "Iphones",
  },
  {
    id: 4,
    title: "Android Phones",
  },
  {
    id: 5,
    title: "Accessories",
  },
];

export const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [selectedNav, setSelectedNav] = useState('home')
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/10 backdrop-blur-sm
        transition-opacity duration-300
        ${activeMenu ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setActiveMenu(false)}
      />

      <div className="relative shadow-md z-50 bg-[#F5F5F7] flex justify-around text-xs max-md:hidden">
        <img className="w-24" src="./imgs/logo.png" alt="logo" />
        {/*options */}
        <div className="flex items-center gap-10">
          <p onClick={()=>{setSelectedNav("home"); navigate('/');}} className={`cursor-pointer ${selectedNav === "home"? "text-blue-600 underline underline-offset-4 ":null}`}>HOME</p>
          <p
            className="cursor-pointer hover:text-blue-600"
            onMouseEnter={() => setActiveMenu(true)}
          >
            Shop
          </p>
          <p className="cursor-pointer 
                        hover:text-blue-600" >Order Track</p>
          <p className="cursor-pointer
                        hover:text-blue-600">Wishlist</p>
        </div>

        <div className="flex items-center gap-5">
          <div className="group flex items-center hover:border-b transition-all duration-300 py-1">
            <Search size={15} className="cursor-pointer" />
            <input
              type="search"
              aria-label="Search"
              placeholder="Search"
              className="w-0  border-transparent bg-transparent px-0 py-1 text-xs outline-none opacity-0 transition-all duration-300 placeholder:text-gray-500 group-hover:ml-2 group-hover:w-32 group-hover:border-gray-400 group-hover:px-1 group-hover:opacity-100 focus:ml-2 focus:w-32 focus:border-gray-400 focus:px-1 focus:opacity-100"
            />
          </div>
          <ShoppingCart className="cursor-pointer" size={15} />

          <div>
            <button onClick={()=>navigate('/register')} className="border-r pr-1 cursor-pointer">Sign Up</button>
            <button onClick={()=>navigate('/login')}  className=" pl-1 cursor-pointer">Login</button>
          </div>
        </div>

        <div  className={`absolute left-0 top-full w-full h-20 items-center bg-[#F5F5F7] flex justify-around transition-all duration-300
                ${activeMenu ? "translate-y-0 opacity-100 shadow-md pointer-events-auto" : "-translate-y-2 opacity-0 pointer-events-none"}`}
              onMouseLeave={() => setActiveMenu(false)}
        >
          {ShopOptionsData.map((data, index) => (
            <p
              key={data.id}
              className={`mb-4 text-sm text-black transition-all duration-300 ease-out
              cursor-pointer hover:text-blue-600
        ${
          activeMenu
            ? "translate-y-0 opacity-100 blur-0"
            : "-translate-y-2 opacity-0 blur-sm"
        }`}
              style={{
                transitionDelay: activeMenu ? `${index * 100}ms` : "0ms",
              }}
            >
              {data.title}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};
