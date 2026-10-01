import {
    CreditCard,
    Wallet,
    ShieldCheck,
    LockKeyhole,
    ArrowRight,
} from "lucide-react";

import { NavBar } from "../components/navbar";
import { Footer } from "../components/footer";
const paymentMethods = [
    {
        title: "Credit & Debit Cards",
        description:
            "Pay securely using supported credit or debit cards.",
        icon: <CreditCard size={25} />,
        methods: ["VISA", "Mastercard", "AMEX"],
    },
    {
        title: "GCash",
        description:
            "Use your GCash wallet for a fast and convenient checkout.",
        icon: <Wallet size={25} />,
        methods: ["GCash"],
    },
    {
        title: "PayPal",
        description:
            "Complete your purchase securely using your PayPal account.",
        icon: <Wallet size={25} />,
        methods: ["PayPal"],
    },
];

const paymentSteps = [
    {
        number: "01",
        title: "Add your products",
        description:
            "Choose the products you want and add them to your cart.",
    },
    {
        number: "02",
        title: "Choose a payment method",
        description:
            "Select the payment option that works best for you.",
    },
    {
        number: "03",
        title: "Complete checkout",
        description:
            "Confirm your details and securely complete your payment.",
    },
];

export const PaymentMethods = () => {
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
                            Payment Methods
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
                            Simple.
                            <br />
                            Secure.
                            <br />
                            Flexible.
                        </h1>

                        <p className="
                            mt-6
                            max-w-xl
                            text-sm
                            md:text-base
                            leading-relaxed
                            text-gray-500
                        ">
                            Choose the payment option that works best for
                            you and complete your Techora purchase with
                            a simple checkout experience.
                        </p>
                    </div>

                    {/* Right visual */}
                    <div className="
                        relative
                        min-h-[300px]
                        sm:min-h-[380px]
                        rounded-3xl
                        border
                        border-gray-200
                        bg-gray-50
                        overflow-hidden
                        flex
                        items-center
                        justify-center
                    ">
                        <div className="
                            absolute
                            w-64
                            h-64
                            sm:w-80
                            sm:h-80
                            rounded-full
                            bg-blue-100
                            blur-3xl
                            opacity-70
                        " />

                        <div className="
                            relative
                            z-10
                            flex
                            flex-col
                            items-center
                            gap-5
                        ">
                            <div className="
                                flex
                                items-center
                                justify-center
                                w-20
                                h-20
                                rounded-2xl
                                bg-white
                                border
                                border-gray-200
                                shadow-sm
                                text-blue-500
                            ">
                                <CreditCard size={38} />
                            </div>

                            <p className="
                                text-2xl
                                sm:text-3xl
                                font-semibold
                                tracking-tight
                            ">
                                Secure Checkout
                            </p>

                            <p className="
                                text-xs
                                sm:text-sm
                                text-gray-500
                                text-center
                                max-w-xs
                            ">
                                Multiple payment options designed
                                for a smooth shopping experience.
                            </p>
                        </div>
                    </div>

                </div>
            </section>


            {/* Payment Options */}
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
                        Available Options
                    </p>

                    <h2 className="
                        mt-3
                        text-3xl
                        md:text-4xl
                        font-bold
                        tracking-tight
                    ">
                        Choose how you pay.
                    </h2>

                    <p className="
                        mt-3
                        text-sm
                        text-gray-500
                        max-w-xl
                    ">
                        Select from the available payment methods
                        during checkout.
                    </p>
                </div>


                <div className="
                    grid
                    grid-cols-1
                    md:grid-cols-3
                    gap-4
                ">

                    {paymentMethods.map((method, index) => (
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
                                w-12
                                h-12
                                rounded-xl
                                bg-blue-50
                                text-blue-500
                                transition-all
                                duration-300
                                group-hover:bg-blue-500
                                group-hover:text-white
                            ">
                                {method.icon}
                            </div>

                            <h3 className="
                                mt-5
                                text-base
                                font-semibold
                            ">
                                {method.title}
                            </h3>

                            <p className="
                                mt-2
                                text-sm
                                leading-relaxed
                                text-gray-500
                            ">
                                {method.description}
                            </p>

                            <div className="
                                mt-5
                                flex
                                flex-wrap
                                gap-2
                            ">
                                {method.methods.map((item) => (
                                    <span
                                        key={item}
                                        className="
                                            rounded-md
                                            border
                                            border-gray-200
                                            bg-gray-50
                                            px-3
                                            py-1.5
                                            text-[10px]
                                            font-semibold
                                            text-gray-500
                                        "
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                        </div>
                    ))}

                </div>
            </section>


            {/* Secure Payment */}
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
                                Your Security
                            </p>

                            <h2 className="
                                mt-3
                                text-3xl
                                sm:text-4xl
                                font-bold
                                tracking-tight
                            ">
                                Payment made
                                <br />
                                with confidence.
                            </h2>

                            <p className="
                                mt-5
                                text-sm
                                leading-relaxed
                                text-gray-500
                                max-w-lg
                            ">
                                We keep the checkout experience simple
                                while helping protect your payment and
                                account information.
                            </p>

                        </div>


                        {/* Right */}
                        <div className="
                            grid
                            grid-cols-1
                            sm:grid-cols-2
                            gap-4
                        ">

                            <div className="
                                rounded-2xl
                                border
                                border-gray-200
                                bg-white
                                p-6
                            ">
                                <ShieldCheck
                                    size={25}
                                    className="text-blue-500"
                                />

                                <h3 className="
                                    mt-4
                                    text-sm
                                    font-semibold
                                ">
                                    Secure Transactions
                                </h3>

                                <p className="
                                    mt-2
                                    text-xs
                                    leading-relaxed
                                    text-gray-500
                                ">
                                    Payment information should be
                                    handled through secure checkout
                                    processes.
                                </p>
                            </div>


                            <div className="
                                rounded-2xl
                                border
                                border-gray-200
                                bg-white
                                p-6
                            ">
                                <LockKeyhole
                                    size={25}
                                    className="text-blue-500"
                                />

                                <h3 className="
                                    mt-4
                                    text-sm
                                    font-semibold
                                ">
                                    Protected Checkout
                                </h3>

                                <p className="
                                    mt-2
                                    text-xs
                                    leading-relaxed
                                    text-gray-500
                                ">
                                    Your checkout experience is designed
                                    to keep your purchase information
                                    protected.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* How Payment Works */}
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
                        Checkout
                    </p>

                    <h2 className="
                        mt-3
                        text-3xl
                        md:text-4xl
                        font-bold
                        tracking-tight
                    ">
                        How payment works.
                    </h2>
                </div>


                <div className="
                    grid
                    grid-cols-1
                    md:grid-cols-3
                    gap-8
                ">

                    {paymentSteps.map((step, index) => (
                        <div
                            key={index}
                            className="
                                border-t
                                border-gray-200
                                pt-6
                            "
                        >

                            <p className="
                                text-xs
                                font-semibold
                                text-blue-500
                                tracking-widest
                            ">
                                {step.number}
                            </p>

                            <h3 className="
                                mt-3
                                text-base
                                font-semibold
                            ">
                                {step.title}
                            </h3>

                            <p className="
                                mt-2
                                text-sm
                                leading-relaxed
                                text-gray-500
                            ">
                                {step.description}
                            </p>

                        </div>
                    ))}

                </div>
            </section>


            {/* Payment Summary */}
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
                        flex
                        flex-col
                        lg:flex-row
                        lg:items-center
                        lg:justify-between
                        gap-8
                    ">

                        <div>
                            <p className="
                                text-xs
                                font-semibold
                                uppercase
                                tracking-[0.2em]
                                text-blue-500
                            ">
                                Ready to shop?
                            </p>

                            <h2 className="
                                mt-3
                                text-2xl
                                sm:text-3xl
                                md:text-4xl
                                font-bold
                                tracking-tight
                            ">
                                Find your next device.
                            </h2>

                            <p className="
                                mt-3
                                text-sm
                                text-gray-500
                                max-w-lg
                            ">
                                Browse Techora and choose the payment
                                option that works for you.
                            </p>
                        </div>


                        <button
                            type="button"
                            className="
                                inline-flex
                                items-center
                                justify-center
                                gap-2
                                w-fit
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
                            Browse Products
                            <ArrowRight size={16} />
                        </button>

                    </div>

                </div>

            </section>
            <Footer />
        </main>
    );
};