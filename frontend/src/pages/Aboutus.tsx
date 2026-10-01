import { Link } from "react-router-dom";
import {
    ArrowRight,
    BadgeCheck,
    Tag,
    Headset,
    Truck,
} from "lucide-react";

import { NavBar } from "../components/navbar";
import { Footer } from "../components/footer";

const values = [
    {
        icon: <BadgeCheck size={24} />,
        title: "Quality you can trust",
        description:
            "We carefully choose the devices and accessories we sell, so you can buy with confidence.",
    },
    {
        icon: <Tag size={24} />,
        title: "Honest pricing",
        description:
            "Clear prices and regular deals, with no confusing extras at checkout.",
    },
    {
        icon: <Truck size={24} />,
        title: "Reliable delivery",
        description:
            "Safely packed and shipped across the Philippines, with updates along the way.",
    },
    {
        icon: <Headset size={24} />,
        title: "Support that stays",
        description:
            "We're here before and after you buy, whenever you have a question or an issue.",
    },
];

export const AboutUs = () => {
    return (
        <main className="overflow-hidden bg-white">
            <NavBar />

            {/* Hero / short intro */}
            <section
                className="
                    w-full
                    max-w-7xl
                    mx-auto
                    px-6
                    md:px-10
                    lg:px-0
                    pt-24
                    md:pt-32
                    pb-16
                "
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
                            About Us
                        </p>

                        <h1
                            className="
                                mt-4
                                text-4xl
                                sm:text-5xl
                                md:text-6xl
                                font-bold
                                tracking-tight
                                leading-[0.95]
                            "
                        >
                            Technology,
                            <br />
                            made personal.
                        </h1>

                        <p className="mt-6 max-w-xl text-sm md:text-base leading-relaxed text-gray-500">
                            Techora is an online store based in the Philippines. We
                            bring together phones, laptops, gaming gear, and everyday
                            accessories, so finding the right device feels simple and
                            enjoyable.
                        </p>

                        <Link
                            to="/"
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
                            Start shopping
                            <ArrowRight size={16} />
                        </Link>
                    </div>

                    {/* Right visual: product collage using existing images */}
                    <div
                        className="
                            relative
                            min-h-[320px]
                            sm:min-h-[400px]
                            lg:min-h-[460px]
                            overflow-hidden
                            rounded-3xl
                            border
                            border-gray-200
                            bg-gray-50
                        "
                    >
                        <div className="absolute right-[-80px] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-100 opacity-70 blur-3xl sm:h-96 sm:w-96" />

                        <div className="absolute inset-0 flex items-center justify-center gap-4 px-6">
                            <img
                                src="/imgs/products/Iphone16_Pink.png"
                                alt="iPhone"
                                className="h-44 w-auto object-contain sm:h-60 lg:h-72"
                            />
                            <img
                                src="/imgs/products/Asus_ROG_Strix_G16.png"
                                alt="Gaming laptop"
                                className="hidden h-36 w-auto object-contain sm:block sm:h-44 lg:h-52"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="border-y border-gray-200 bg-gray-50">
                <div
                    className="
                        w-full
                        max-w-7xl
                        mx-auto
                        px-6
                        md:px-10
                        lg:px-0
                        py-16
                        md:py-20
                        grid
                        grid-cols-1
                        lg:grid-cols-2
                        gap-10
                        lg:gap-20
                    "
                >
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                        Better tech shopping,
                        <br />
                        start to finish.
                    </h2>

                    <div className="space-y-5 text-sm md:text-base leading-relaxed text-gray-500">
                        <p>
                            We started Techora because buying technology online
                            shouldn't be stressful. Too many stores make you guess
                            about quality, delivery, and what happens if something
                            goes wrong.
                        </p>
                        <p>
                            So we focus on the basics: products worth buying, clear
                            information, secure payments through methods like GCash,
                            cards, and PayPal, and a team you can actually reach.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section
                className="
                    w-full
                    max-w-7xl
                    mx-auto
                    px-6
                    md:px-10
                    lg:px-0
                    py-16
                    md:py-20
                "
            >
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        What we stand for.
                    </h2>

                    <p className="mt-3 max-w-xl text-sm text-gray-500">
                        A few simple promises guide how we run the store.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {values.map((value) => (
                        <div
                            key={value.title}
                            className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-500 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                                {value.icon}
                            </div>

                            <h3 className="mt-5 text-base font-semibold">
                                {value.title}
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-gray-500">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section
                className="
                    w-full
                    max-w-7xl
                    mx-auto
                    px-6
                    md:px-10
                    lg:px-0
                    pb-16
                    md:pb-20
                "
            >
                <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-blue-50 px-6 py-12 sm:px-10 md:px-14 md:py-14">
                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                            Have a question for us?
                        </h2>

                        <p className="mt-4 max-w-lg text-sm leading-relaxed text-gray-500">
                            Whether it's about a product, an order, or just saying
                            hello, we'd love to hear from you.
                        </p>

                        <Link
                            to="/after-sales-support"
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
                            Get in touch
                            <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full border border-blue-200 sm:h-80 sm:w-80" />
                </div>
            </section>

            <Footer />
        </main>
    );
};