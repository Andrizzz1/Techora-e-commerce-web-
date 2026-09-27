import { Search, ShoppingCart } from "lucide-react";
import { useState } from "react";

type OptionData = {
  id: number;
  title: String;
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
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/10 backdrop-blur-sm
        transition-opacity duration-300
        ${activeMenu ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setActiveMenu(false)}
      />

      <div className="relative shadow-md z-50 bg-[#F5F5F7] flex justify-around text-xs max-md:hidden">
        <img className="w-15" src="./imgs/logo.png" alt="logo" />
        {/*options */}
        <div className="flex items-center gap-10">
          <p onClick={()=>setSelectedNav("home")} className={`cursor-pointer ${selectedNav === "home"? "text-blue-600 underline underline-offset-4 ":null}`}>HOME</p>
          <p
            className="cursor-pointer"
            onMouseEnter={() => setActiveMenu(true)}
          >
            Shop
          </p>
          <p className="cursor-pointer">Order Track</p>
          <p className="cursor-pointer">Wishlist</p>
        </div>

        <div className="flex items-center gap-5">
          <Search size={15} />
          <ShoppingCart size={15} />

          <div>
            <button className="border-r pr-1">Sign Up</button>
            <button className=" pl-1">Login</button>
          </div>
        </div>

        <div
          className={`absolute left-0 top-full w-full h-20 items-center bg-[#F5F5F7] flex justify-around transition-all duration-300
                ${
                  activeMenu
                    ? "translate-y-0 opacity-100 shadow-md pointer-events-auto"
                    : "-translate-y-2 opacity-0 pointer-events-none"
                }
  `}
          onMouseLeave={() => setActiveMenu(false)}
        >
          {ShopOptionsData.map((data, index) => (
            <p
              key={data.id}
              className={`mb-4 text-sm text-black transition-all duration-300 ease-out
        cursor-pointer
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
