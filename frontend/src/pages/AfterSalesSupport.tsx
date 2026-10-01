import {
    Headset,
    RotateCcw,
    ShieldCheck,
    PackageCheck,
    MessageCircle,
    ArrowRight,
} from "lucide-react";

import { NavBar } from "../components/navbar";
import { Footer } from "../components/footer";
const supportOptions = [
    {
        icon: <RotateCcw size={24} />,
        title: "Returns & Exchanges",
        description:
            "Need to return or exchange an eligible product? Get help with the next steps.",
    },
    {
        icon: <ShieldCheck size={24} />,
        title: "Warranty Assistance",
        description:
            "Find information about product warranty coverage and how to request support.",
    },
    {
        icon: <PackageCheck size={24} />,
        title: "Order Issues",
        description:
            "Report problems with your order, delivery, or received product.",
    },
    {
        icon: <Headset size={24} />,
        title: "Product Support",
        description:
            "Get assistance when you need help using or troubleshooting your device.",
    },
];

const supportSteps = [
    {
        number: "01",
        title: "Tell us what happened",
        description:
            "Provide your order details and explain the issue you're experiencing.",
    },
    {
        number: "02",
        title: "We'll review your request",
        description:
            "Our support team can review the details and determine the appropriate next step.",
    },
    {
        number: "03",
        title: "Get the next steps",
        description:
            "You'll receive the relevant instructions for your return, replacement, warranty, or support request.",
    },
];

const faqs = [
    {
        question: "How do I request a return?",
        answer:
            "Contact support with your order details and explain why you would like to return the product. Eligibility depends on the applicable return policy.",
    },
    {
        question: "How do I make a warranty request?",
        answer:
            "Provide your order information and product details to support. Warranty coverage depends on the product and brand.",
    },
    {
        question: "What should I do if my order arrives damaged?",
        answer:
            "Contact support as soon as possible and provide your order information along with details about the issue.",
    },
    {
        question: "Can I get help after my purchase?",
        answer:
            "Yes. After-sales support is available for product questions, order issues, and eligible warranty or return requests.",
    },
];

export const AfterSalesSupport = () => {
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
                    gap-12
                    lg:gap-20
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
                            After-Sales Support
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
                            We're here
                            <br />
                            after you buy.
                        </h1>

                        <p className="
                            mt-6
                            max-w-xl
                            text-sm
                            md:text-base
                            leading-relaxed
                            text-gray-500
                        ">
                            Need help with an order, return, warranty,
                            or product? Techora's after-sales support
                            is here to help you through the next step.
                        </p>

                        <button
                            type="button"
                            onClick={() => console.log("Open support")}
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
                            Contact Support
                            <ArrowRight size={16} />
                        </button>

                    </div>


                    {/* Right visual */}
                    <div className="
                        relative
                        min-h-[320px]
                        sm:min-h-[400px]
                        lg:min-h-[460px]
                        overflow-hidden
                        rounded-3xl
                        border
                        border-gray-200
                        bg-gray-50
                    ">

                        {/* Blue glow */}
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

                        {/* Main icon */}
                        <div className="
                            absolute
                            inset-0
                            flex
                            items-center
                            justify-center
                        ">

                            <div className="
                                flex
                                items-center
                                justify-center
                                w-24
                                h-24
                                sm:w-28
                                sm:h-28
                                rounded-[2rem]
                                bg-white
                                border
                                border-gray-200
                                shadow-sm
                                text-blue-500
                            ">
                                <Headset
                                    size={48}
                                    strokeWidth={1.7}
                                />
                            </div>

                        </div>

                        {/* Small labels */}
                        <div className="
                            absolute
                            left-5
                            bottom-5
                            sm:left-7
                            sm:bottom-7
                            flex
                            flex-wrap
                            gap-2
                        ">

                            <span className="
                                rounded-full
                                border
                                border-gray-200
                                bg-white/90
                                backdrop-blur
                                px-3
                                py-1.5
                                text-[10px]
                                text-gray-500
                            ">
                                Orders
                            </span>

                            <span className="
                                rounded-full
                                border
                                border-gray-200
                                bg-white/90
                                backdrop-blur
                                px-3
                                py-1.5
                                text-[10px]
                                text-gray-500
                            ">
                                Returns
                            </span>

                            <span className="
                                rounded-full
                                border
                                border-gray-200
                                bg-white/90
                                backdrop-blur
                                px-3
                                py-1.5
                                text-[10px]
                                text-gray-500
                            ">
                                Warranty
                            </span>

                        </div>

                    </div>

                </div>
            </section>


            {/* Support Options */}
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
                        Support Options
                    </p>

                    <h2 className="
                        mt-3
                        text-3xl
                        md:text-4xl
                        font-bold
                        tracking-tight
                    ">
                        What can we help with?
                    </h2>

                    <p className="
                        mt-3
                        max-w-xl
                        text-sm
                        text-gray-500
                    ">
                        Choose the type of help you need and we'll
                        guide you toward the next step.
                    </p>

                </div>


                <div className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-4
                    gap-4
                ">

                    {supportOptions.map((option, index) => (

                        <div
                            key={index}
                            className="
                                group
                                rounded-2xl
                                border
                                border-gray-200
                                bg-white
                                p-6
                                cursor-pointer
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
                                {option.icon}
                            </div>

                            <h3 className="
                                mt-5
                                text-base
                                font-semibold
                            ">
                                {option.title}
                            </h3>

                            <p className="
                                mt-2
                                text-sm
                                leading-relaxed
                                text-gray-500
                            ">
                                {option.description}
                            </p>

                            <div className="
                                mt-5
                                flex
                                items-center
                                gap-1.5
                                text-xs
                                font-medium
                                text-blue-500
                            ">
                                Learn more
                                <ArrowRight
                                    size={14}
                                    className="
                                        transition-transform
                                        duration-300
                                        group-hover:translate-x-1
                                    "
                                />
                            </div>

                        </div>

                    ))}

                </div>

            </section>


            {/* Support Process */}
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

                        {/* Left */}
                        <div>

                            <p className="
                                text-xs
                                font-semibold
                                uppercase
                                tracking-[0.2em]
                                text-blue-500
                            ">
                                How It Works
                            </p>

                            <h2 className="
                                mt-3
                                text-3xl
                                sm:text-4xl
                                font-bold
                                tracking-tight
                            ">
                                Getting support
                                <br />
                                should be simple.
                            </h2>

                            <p className="
                                mt-5
                                max-w-lg
                                text-sm
                                leading-relaxed
                                text-gray-500
                            ">
                                We've kept the support process simple
                                so you can spend less time figuring out
                                what to do next.
                            </p>

                        </div>


                        {/* Right */}
                        <div className="space-y-8">

                            {supportSteps.map((step, index) => (

                                <div
                                    key={index}
                                    className="
                                        flex
                                        items-start
                                        gap-5
                                    "
                                >

                                    <div className="
                                        shrink-0
                                        w-12
                                        h-12
                                        rounded-xl
                                        border
                                        border-gray-200
                                        bg-white
                                        flex
                                        items-center
                                        justify-center
                                    ">
                                        <span className="
                                            text-xs
                                            font-semibold
                                            text-blue-500
                                        ">
                                            {step.number}
                                        </span>
                                    </div>

                                    <div>

                                        <h3 className="
                                            text-sm
                                            md:text-base
                                            font-semibold
                                        ">
                                            {step.title}
                                        </h3>

                                        <p className="
                                            mt-2
                                            text-xs
                                            md:text-sm
                                            leading-relaxed
                                            text-gray-500
                                            max-w-lg
                                        ">
                                            {step.description}
                                        </p>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* Returns & Warranty */}
            <section className="
                w-full
                max-w-7xl
                mx-auto
                px-6
                md:px-10
                lg:px-0
                py-16
                md:py-20
            ">

                <div className="mb-10">

                    <p className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-blue-500
                    ">
                        Important Information
                    </p>

                    <h2 className="
                        mt-3
                        text-3xl
                        md:text-4xl
                        font-bold
                        tracking-tight
                    ">
                        Know your options.
                    </h2>

                </div>


                <div className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    gap-5
                ">

                    {/* Returns */}
                    <div className="
                        rounded-3xl
                        border
                        border-gray-200
                        bg-white
                        p-7
                        sm:p-8
                    ">

                        <div className="
                            flex
                            items-center
                            justify-center
                            w-12
                            h-12
                            rounded-xl
                            bg-blue-50
                            text-blue-500
                        ">
                            <RotateCcw size={25} />
                        </div>

                        <h3 className="
                            mt-6
                            text-xl
                            font-semibold
                        ">
                            Returns & Exchanges
                        </h3>

                        <p className="
                            mt-3
                            text-sm
                            leading-relaxed
                            text-gray-500
                        ">
                            Return and exchange requests may depend on
                            product condition, eligibility, and the
                            applicable Techora return policy.
                        </p>

                        <button
                            type="button"
                            className="
                                mt-6
                                text-sm
                                font-medium
                                text-blue-500
                                inline-flex
                                items-center
                                gap-1.5
                                hover:gap-2.5
                                transition-all
                            "
                        >
                            View return policy
                            <ArrowRight size={15} />
                        </button>

                    </div>


                    {/* Warranty */}
                    <div className="
                        rounded-3xl
                        border
                        border-gray-200
                        bg-white
                        p-7
                        sm:p-8
                    ">

                        <div className="
                            flex
                            items-center
                            justify-center
                            w-12
                            h-12
                            rounded-xl
                            bg-blue-50
                            text-blue-500
                        ">
                            <ShieldCheck size={25} />
                        </div>

                        <h3 className="
                            mt-6
                            text-xl
                            font-semibold
                        ">
                            Warranty Support
                        </h3>

                        <p className="
                            mt-3
                            text-sm
                            leading-relaxed
                            text-gray-500
                        ">
                            Warranty coverage varies by product and
                            manufacturer. Check the product information
                            or contact support for assistance.
                        </p>

                        <button
                            type="button"
                            className="
                                mt-6
                                text-sm
                                font-medium
                                text-blue-500
                                inline-flex
                                items-center
                                gap-1.5
                                hover:gap-2.5
                                transition-all
                            "
                        >
                            Learn about warranty
                            <ArrowRight size={15} />
                        </button>

                    </div>

                </div>

            </section>


            {/* FAQ */}
            <section className="
                border-t
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
                        lg:grid-cols-3
                        gap-10
                        lg:gap-16
                    ">

                        {/* FAQ Heading */}
                        <div>

                            <p className="
                                text-xs
                                font-semibold
                                uppercase
                                tracking-[0.2em]
                                text-blue-500
                            ">
                                Support FAQ
                            </p>

                            <h2 className="
                                mt-3
                                text-3xl
                                md:text-4xl
                                font-bold
                                tracking-tight
                            ">
                                Need some
                                <br />
                                answers?
                            </h2>

                            <p className="
                                mt-4
                                text-sm
                                leading-relaxed
                                text-gray-500
                                max-w-sm
                            ">
                                Here are some common questions about
                                after-sales support.
                            </p>

                        </div>


                        {/* Questions */}
                        <div className="
                            lg:col-span-2
                            space-y-3
                        ">

                            {faqs.map((faq, index) => (

                                <details
                                    key={index}
                                    className="
                                        group
                                        rounded-2xl
                                        border
                                        border-gray-200
                                        bg-white
                                        overflow-hidden
                                    "
                                >

                                    <summary className="
                                        list-none
                                        cursor-pointer
                                        flex
                                        items-center
                                        justify-between
                                        gap-4
                                        px-5
                                        sm:px-6
                                        py-5
                                    ">

                                        <span className="
                                            text-sm
                                            sm:text-base
                                            font-medium
                                            text-gray-900
                                        ">
                                            {faq.question}
                                        </span>

                                        <span className="
                                            shrink-0
                                            flex
                                            items-center
                                            justify-center
                                            w-8
                                            h-8
                                            pb-1
                                            rounded-full
                                            border
                                            border-gray-200
                                            text-gray-500
                                            group-open:rotate-45
                                            transition-transform
                                            duration-300
                                        ">
                                            +
                                        </span>

                                    </summary>

                                    <div className="
                                        px-5
                                        sm:px-6
                                        pb-5
                                    ">
                                        <p className="
                                            text-xs
                                            sm:text-sm
                                            leading-relaxed
                                            text-gray-500
                                        ">
                                            {faq.answer}
                                        </p>
                                    </div>

                                </details>

                            ))}

                        </div>

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
                py-16
                md:py-20
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
                    md:py-14
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
                            We're Here to Help
                        </p>

                        <h2 className="
                            mt-3
                            text-3xl
                            sm:text-4xl
                            font-bold
                            tracking-tight
                        ">
                            Still need assistance?
                        </h2>

                        <p className="
                            mt-4
                            max-w-lg
                            text-sm
                            leading-relaxed
                            text-gray-500
                        ">
                            Get in touch with Techora support and
                            tell us what you need help with.
                        </p>

                        <button
                            type="button"
                            onClick={() => console.log("Open support")}
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
                            Contact Support
                            <MessageCircle size={16} />
                        </button>

                    </div>

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