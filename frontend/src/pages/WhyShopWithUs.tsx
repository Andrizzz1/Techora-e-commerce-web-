import {
    BadgeCheck,
    Truck,
    ShieldCheck,
    Headset,
    CreditCard,
    RotateCcw,
    Sparkles,
    ArrowRight,
} from "lucide-react";

import { NavBar } from "../components/navbar";
import { Footer } from "../components/footer";
const reasons = [
    {
        icon: <BadgeCheck size={24} />,
        title: "Authentic Products",
        description:
            "Shop with confidence with genuine products from trusted brands and sellers.",
    },
    {
        icon: <Truck size={24} />,
        title: "Fast & Reliable Shipping",
        description:
            "Get your orders delivered quickly and safely with dependable shipping options.",
    },
    {
        icon: <ShieldCheck size={24} />,
        title: "Secure Shopping",
        description:
            "Your account, payments, and personal information are protected throughout your shopping experience.",
    },
    {
        icon: <Headset size={24} />,
        title: "Dedicated Support",
        description:
            "Need help choosing a product or checking an order? We're here when you need us.",
    },
];

const values = [
    {
        icon: <Sparkles size={22} />,
        title: "Quality First",
        description:
            "We focus on technology that offers useful features, reliable performance, and lasting value.",
    },
    {
        icon: <BadgeCheck size={22} />,
        title: "Trusted Selection",
        description:
            "Our catalog is curated around products that fit everyday needs, work, entertainment, and gaming.",
    },
    {
        icon: <CreditCard size={22} />,
        title: "Easy Checkout",
        description:
            "A simple checkout experience with convenient payment options makes buying easier.",
    },
    {
        icon: <RotateCcw size={22} />,
        title: "After-Sales Care",
        description:
            "Our relationship with customers doesn't end after the order is delivered.",
    },
];

export const WhyShopWithUs = () => {
    return (
        <main className="overflow-hidden bg-white">

            <NavBar />

            {/* Hero */}
            <section className="
                w-full
                max-w-7xl
                mx-auto
                px-6
                md:px-10
                lg:px-0
                pt-24
                md:pt-32
                pb-16
            ">

                <div className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-10
                    lg:gap-16
                    items-center
                ">

                    {/* Left */}
                    <div>

                        <p className="
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[0.2em]
                            text-blue-500
                        ">
                            Why Shop With Us
                        </p>

                        <h1 className="
                            mt-4
                            text-4xl
                            sm:text-5xl
                            md:text-6xl
                            font-bold
                            tracking-tight
                            leading-[0.95]
                        ">
                            More than
                            <br />
                            just tech.
                        </h1>

                        <p className="
                            mt-6
                            max-w-xl
                            text-sm
                            md:text-base
                            leading-relaxed
                            text-gray-500
                        ">
                            At Techora, we want technology shopping to
                            feel simple, reliable, and enjoyable — from
                            discovering a product to receiving it at
                            your door.
                        </p>

                        <button
                            type="button"
                            className="
                                mt-8
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                bg-blue-500
                                px-6
                                py-3
                                text-sm
                                font-semibold
                                text-white
                                transition-all
                                duration-300
                                hover:bg-blue-600
                                hover:-translate-y-0.5
                                hover:shadow-lg
                            "
                        >
                            Explore Products
                            <ArrowRight size={16} />
                        </button>

                    </div>


                    {/* Right - image placeholder */}
                    <div className="
                        relative
                        min-h-[320px]
                        sm:min-h-[420px]
                        lg:min-h-[500px]
                        rounded-3xl
                        overflow-hidden
                        border
                        border-gray-200
                        bg-gray-50
                    ">

                        {/* Soft blue glow */}
                        <div className="
                            absolute
                            w-72
                            h-72
                            sm:w-96
                            sm:h-96
                            rounded-full
                            bg-blue-100
                            blur-3xl
                            opacity-70
                            right-[-80px]
                            top-1/2
                            -translate-y-1/2
                        " />

                        {/* Placeholder image */}
                        <img
                            src="/imgs/popularcategories/headphone.png"
                            alt="Technology products"
                            className="
                                absolute
                                inset-0
                                w-full
                                h-full
                                object-contain
                                p-10
                                sm:p-14
                                lg:p-16
                            "
                        />

                        {/* Small label */}
                        <div className="
                            absolute
                            left-5
                            bottom-5
                            sm:left-7
                            sm:bottom-7
                            rounded-full
                            border
                            border-gray-200
                            bg-white/90
                            backdrop-blur
                            px-4
                            py-2
                        ">
                            <p className="text-xs text-gray-500">
                                Technology made simpler
                            </p>
                        </div>

                    </div>

                </div>

            </section>


            {/* Main Reasons */}
            <section className="
                w-full
                max-w-7xl
                mx-auto
                px-6
                md:px-10
                lg:px-0
                py-16
            ">

                <div className="mb-10">

                    <p className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-blue-500
                    ">
                        The Techora Difference
                    </p>

                    <h2 className="
                        mt-3
                        text-3xl
                        md:text-4xl
                        font-bold
                        tracking-tight
                    ">
                        Why choose Techora?
                    </h2>

                    <p className="
                        mt-3
                        max-w-xl
                        text-sm
                        text-gray-500
                    ">
                        Everything we do is built around making
                        technology shopping easier and more dependable.
                    </p>

                </div>


                <div className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-4
                    gap-4
                ">

                    {reasons.map((reason, index) => (

                        <div
                            key={index}
                            className="
                                group
                                rounded-2xl
                                border
                                border-gray-200
                                bg-white
                                p-6
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:shadow-lg
                            "
                        >

                            <div className="
                                flex
                                items-center
                                justify-center
                                w-11
                                h-11
                                rounded-xl
                                bg-blue-50
                                text-blue-500
                                transition-all
                                duration-300
                                group-hover:bg-blue-500
                                group-hover:text-white
                            ">
                                {reason.icon}
                            </div>

                            <h3 className="
                                mt-5
                                text-base
                                font-semibold
                            ">
                                {reason.title}
                            </h3>

                            <p className="
                                mt-2
                                text-sm
                                leading-relaxed
                                text-gray-500
                            ">
                                {reason.description}
                            </p>

                        </div>

                    ))}

                </div>

            </section>


            {/* Quality / Values */}
            <section className="
                border-y
                border-gray-200
                bg-gray-50
            ">

                <div className="
                    w-full
                    max-w-7xl
                    mx-auto
                    px-6
                    md:px-10
                    lg:px-0
                    py-16
                    md:py-20
                ">

                    <div className="
                        grid
                        grid-cols-1
                        lg:grid-cols-2
                        gap-12
                        lg:gap-20
                    ">

                        {/* Heading */}
                        <div>

                            <p className="
                                text-xs
                                font-semibold
                                uppercase
                                tracking-[0.2em]
                                text-blue-500
                            ">
                                Built Around You
                            </p>

                            <h2 className="
                                mt-3
                                text-3xl
                                sm:text-4xl
                                font-bold
                                tracking-tight
                            ">
                                A better way
                                <br />
                                to shop tech.
                            </h2>

                            <p className="
                                mt-5
                                max-w-lg
                                text-sm
                                leading-relaxed
                                text-gray-500
                            ">
                                We keep the experience straightforward:
                                useful products, clear information,
                                secure transactions, and support when
                                you need it.
                            </p>

                        </div>


                        {/* Values */}
                        <div className="space-y-7">

                            {values.map((value, index) => (

                                <div
                                    key={index}
                                    className="
                                        flex
                                        items-start
                                        gap-4
                                    "
                                >

                                    <div className="
                                        shrink-0
                                        flex
                                        items-center
                                        justify-center
                                        w-11
                                        h-11
                                        rounded-xl
                                        bg-white
                                        border
                                        border-gray-200
                                        text-blue-500
                                    ">
                                        {value.icon}
                                    </div>

                                    <div>

                                        <h3 className="
                                            text-sm
                                            md:text-base
                                            font-semibold
                                        ">
                                            {value.title}
                                        </h3>

                                        <p className="
                                            mt-1
                                            text-xs
                                            md:text-sm
                                            leading-relaxed
                                            text-gray-500
                                        ">
                                            {value.description}
                                        </p>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* Stats */}
            <section className="
                w-full
                max-w-7xl
                mx-auto
                px-6
                md:px-10
                lg:px-0
                py-16
            ">

                <div className="
                    grid
                    grid-cols-2
                    md:grid-cols-4
                    divide-x
                    divide-gray-200
                    border-y
                    border-gray-200
                ">

                    <div className="px-4 py-7 sm:px-6 md:px-8">
                        <p className="
                            text-3xl
                            sm:text-4xl
                            font-bold
                            tracking-tight
                        ">
                            100+
                        </p>

                        <p className="
                            mt-1
                            text-xs
                            text-gray-400
                        ">
                            Products
                        </p>
                    </div>


                    <div className="px-4 py-7 sm:px-6 md:px-8">
                        <p className="
                            text-3xl
                            sm:text-4xl
                            font-bold
                            tracking-tight
                        ">
                            24/7
                        </p>

                        <p className="
                            mt-1
                            text-xs
                            text-gray-400
                        ">
                            Support
                        </p>
                    </div>


                    <div className="px-4 py-7 sm:px-6 md:px-8">
                        <p className="
                            text-3xl
                            sm:text-4xl
                            font-bold
                            tracking-tight
                        ">
                            Secure
                        </p>

                        <p className="
                            mt-1
                            text-xs
                            text-gray-400
                        ">
                            Checkout
                        </p>
                    </div>


                    <div className="px-4 py-7 sm:px-6 md:px-8">
                        <p className="
                            text-3xl
                            sm:text-4xl
                            font-bold
                            tracking-tight
                        ">
                            Fast
                        </p>

                        <p className="
                            mt-1
                            text-xs
                            text-gray-400
                        ">
                            Delivery
                        </p>
                    </div>

                </div>

            </section>


            {/* Final CTA */}
            <section className="
                w-full
                max-w-7xl
                mx-auto
                px-6
                md:px-10
                lg:px-0
                pb-24
            ">

                <div className="
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-gray-200
                    bg-blue-50
                    px-6
                    py-12
                    sm:px-10
                    md:px-14
                    md:py-16
                ">

                    <div className="
                        relative
                        z-10
                        max-w-2xl
                    ">

                        <p className="
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[0.2em]
                            text-blue-500
                        ">
                            Your Tech. Your Way.
                        </p>

                        <h2 className="
                            mt-3
                            text-3xl
                            sm:text-4xl
                            font-bold
                            tracking-tight
                        ">
                            Shop smarter with Techora.
                        </h2>

                        <p className="
                            mt-4
                            max-w-lg
                            text-sm
                            leading-relaxed
                            text-gray-500
                        ">
                            Discover technology selected for work,
                            entertainment, gaming, and everyday life.
                        </p>

                        <button
                            type="button"
                            className="
                                mt-7
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                bg-black
                                px-6
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
                        >
                            Start Shopping
                            <ArrowRight size={16} />
                        </button>

                    </div>

                    {/* Decorative circle */}
                    <div className="
                        absolute
                        w-64
                        h-64
                        sm:w-80
                        sm:h-80
                        rounded-full
                        border
                        border-blue-200
                        right-[-80px]
                        top-1/2
                        -translate-y-1/2
                    " />

                </div>

            </section>
            <Footer />
        </main>
    );
};