import {Mail,Phone,MapPin} from "lucide-react";
import {useNavigate} from "react-router-dom";
export const Footer = () => {
    const navigate = useNavigate();
    return (
        <>
        <footer className="mt-24 border-t border-gray-200 bg-gray-50">
        {/* Main Footer */}
        <div
          className="
        w-full
        max-w-7xl
        mx-auto
        px-6
        py-12
        sm:px-8
        lg:px-0
    ">
    <div
    className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-4
    gap-10
    lg:gap-16
    ">
    {/* Brand */}
        <div>
            <div className="w-24">
              <img className="w-full" src="/imgs/logo.png" alt="brand" />
            </div>
              <p
                className="
                    mt-4
                    max-w-xs
                    text-sm
                    leading-relaxed
                    text-gray-500
                "
              >
                Premium technology for everyday life. Discover devices,
                accessories, and essentials made to fit your world.
              </p>

              {/* Socials */}
              <div className="flex items-center gap-2 mt-6">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="
                            flex items-center justify-center
                            w-9 h-9
                            rounded-lg
                            border border-gray-200
                            bg-white
                            text-xs font-semibold
                            text-gray-600
                            transition-all duration-300
                            hover:border-blue-200
                            hover:text-blue-500
                            hover:shadow-sm
                        "
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="
                            flex items-center justify-center
                            w-9 h-9
                            rounded-lg
                            border border-gray-200
                            bg-white
                            text-xs font-semibold
                            text-gray-600
                            transition-all duration-300
                            hover:border-blue-200
                            hover:text-blue-500
                            hover:shadow-sm
                        "
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>

                <a
                  href="#"
                  aria-label="YouTube"
                  className="
                            flex items-center justify-center
                            w-9 h-9
                            rounded-lg
                            border border-gray-200
                            bg-white
                            text-xs font-semibold
                            text-gray-600
                            transition-all duration-300
                            hover:border-blue-200
                            hover:text-blue-500
                            hover:shadow-sm
                        "
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>

                <a
                  href="#"
                  aria-label="TikTok"
                  className="
                            flex items-center justify-center
                            w-9 h-9
                            rounded-lg
                            border border-gray-200
                            bg-white
                            text-xs font-semibold
                            text-gray-600
                            transition-all duration-300
                            hover:border-blue-200
                            hover:text-blue-500
                            hover:shadow-sm
                        "
                >
                 <i className="fa-brands fa-tiktok"></i>
                </a>
              </div>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-sm font-semibold">Contact Us</h3>

              <div
                className="
                    mt-5
                    space-y-4
                    text-sm
                    text-gray-500
                "
              >
                <a
                  href="mailto:support@techora.com"
                  className="
                            flex items-start gap-3
                            hover:text-gray-900
                            transition-colors
                        "
                >
                  <span className="text-gray-400"><Mail size={20}/></span>

                  <span>webreach2026@gmail.com</span>
                </a>

                <a href="tel:+639000000000"
                  className="
                            flex items-start gap-3
                            hover:text-gray-900
                            transition-colors
                        "
                >
                  <span className="text-gray-400"><Phone size={20}/></span>

                  <span>+63 945 326 3014</span>
                </a>

                <div className="flex items-start gap-3">
                  <span className="text-gray-400"><MapPin size={20}/></span>

                  <span>Philippines</span>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-sm font-semibold">Useful Links</h3>

              <div
                className="
                    mt-5
                    flex flex-col
                    gap-3
                    text-sm
                    text-gray-500
                "
              >
                <a onClick={() => navigate("/why-shop-with-us")} className="hover:text-blue-500 transition-colors cursor-pointer">
                  Why Shop With Us
                </a>

                <a onClick={() => navigate("/payment-methods")} className="hover:text-blue-500 transition-colors cursor-pointer">
                  Payment Methods
                </a>

                <a onClick={() => navigate("/after-sales-support")} className="hover:text-blue-500 transition-colors cursor-pointer">
                  After Sales Support
                </a>

                <a href="#FAQ" className="hover:text-blue-500 transition-colors cursor-pointer">
                  FAQ
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold">Quick Links</h3>

              <div
                className="
                    mt-5
                    flex flex-col
                    gap-3
                    text-sm
                    text-gray-500
                "
              >
                <a onClick={() => navigate("/return-and-refund-policy")} className="hover:text-blue-500 transition-colors cursor-pointer">
                  Return & Refund Policy
                </a>

                <a onClick={() => navigate("/privacy-policy")} className="hover:text-blue-500 transition-colors cursor-pointer">
                  Privacy Policy
                </a>

                <a onClick={() => navigate("/terms-and-conditions")} className="hover:text-blue-500 transition-colors cursor-pointer">
                  Terms & Conditions
                </a>

                <a onClick={() => navigate("/about-us")} className="hover:text-blue-500 transition-colors cursor-pointer">
                  About Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200">
          <div
            className="
            w-full
            max-w-7xl
            mx-auto
            px-6
            py-5
            sm:px-8
            lg:px-0
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
        "
          >
            {/* Copyright */}
            <p
              className="
                text-xs
                text-gray-400
                text-center
                md:text-left
            "
            >
              © {new Date().getFullYear()} Techora. All rights reserved.
            </p>

            {/* Payment Methods */}
            <div
              className="
                flex
                items-center
                gap-2
                flex-wrap
                justify-center
            "
            >
              <span
                className="
                    rounded-md
                    border border-gray-200
                    bg-white
                    px-2.5
                    py-1.5
                    text-[10px]
                    font-semibold
                    text-gray-500
                "
              >
                VISA
              </span>

              <span
                className="
                    rounded-md
                    border border-gray-200
                    bg-white
                    px-2.5
                    py-1.5
                    text-[10px]
                    font-semibold
                    text-gray-500
                "
              >
                AMEX
              </span>

              <span
                className="
                    rounded-md
                    border border-gray-200
                    bg-white
                    px-2.5
                    py-1.5
                    text-[10px]
                    font-semibold
                    text-gray-500
                "
              >
                MC
              </span>

              <span
                className="
                    rounded-md
                    border border-gray-200
                    bg-white
                    px-2.5
                    py-1.5
                    text-[10px]
                    font-semibold
                    text-gray-500
                "
              >
                GCash
              </span>

              <span
                className="
                    rounded-md
                    border border-gray-200
                    bg-white
                    px-2.5
                    py-1.5
                    text-[10px]
                    font-semibold
                    text-gray-500
                "
              >
                PayPal
              </span>
            </div>
          </div>
        </div>
      </footer>
        </>
    )
}