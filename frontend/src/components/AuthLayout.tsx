import { useState } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import { Eye, EyeOff, ShieldCheck, Truck, RotateCcw } from "lucide-react";

import { NavBar } from "./navbar";
import { Footer } from "./footer";

/* ---------- Layout ---------- */

type AuthLayoutProps = {
    eyebrow: string;
    title: ReactNode;
    description: string;
    children: ReactNode;
    footer: ReactNode;
};

const perks = [
    { icon: <Truck size={16} />, label: "Nationwide delivery" },
    { icon: <ShieldCheck size={16} />, label: "Secure payments" },
    { icon: <RotateCcw size={16} />, label: "Easy returns" },
];

export const AuthLayout = ({
    eyebrow,
    title,
    description,
    children,
    footer,
}: AuthLayoutProps) => {
    return (
        <main className="overflow-hidden bg-white">
            <NavBar />

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
                    {/* Form column */}
                    <div className="w-full max-w-md mx-auto lg:mx-0">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
                            {eyebrow}
                        </p>

                        <h1
                            className="
                                mt-4
                                text-4xl
                                sm:text-5xl
                                font-bold
                                tracking-tight
                                leading-[0.95]
                            "
                        >
                            {title}
                        </h1>

                        <p className="mt-5 text-sm md:text-base leading-relaxed text-gray-500">
                            {description}
                        </p>

                        <div className="mt-8">{children}</div>

                        <p className="mt-8 text-sm text-gray-500">{footer}</p>
                    </div>

                    {/* Visual column (desktop only) */}
                    <div
                        className="
                            relative
                            hidden
                            lg:block
                            min-h-[560px]
                            overflow-hidden
                            rounded-3xl
                            border
                            border-gray-200
                            bg-gray-50
                        "
                    >
                        <div className="absolute right-[-80px] top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-100 opacity-70 blur-3xl" />
                        <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full border border-blue-200" />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <img
                                src="/imgs/products/iphone17.png"
                                alt="Featured device"
                                className="h-80 w-auto object-contain drop-shadow-xl"
                            />
                        </div>

                        <div className="absolute bottom-7 left-7 right-7 flex flex-wrap gap-2">
                            {perks.map((perk) => (
                                <span
                                    key={perk.label}
                                    className="
                                        inline-flex
                                        items-center
                                        gap-1.5
                                        rounded-full
                                        border
                                        border-gray-200
                                        bg-white/90
                                        backdrop-blur
                                        px-3
                                        py-1.5
                                        text-[11px]
                                        text-gray-500
                                    "
                                >
                                    <span className="text-blue-500">{perk.icon}</span>
                                    {perk.label}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

/* ---------- Form field ---------- */

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    icon?: ReactNode;
    error?: string;
    hint?: string;
};

export const Field = ({ label, icon, error, hint, id, type, ...rest }: FieldProps) => {
    const [visible, setVisible] = useState(false);
    const isPassword = type === "password";
    const inputType = isPassword && visible ? "text" : type;

    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-900">
                {label}
            </label>

            <div className="relative mt-2">
                {icon && (
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        {icon}
                    </span>
                )}

                <input
                    id={id}
                    type={inputType}
                    aria-invalid={error ? true : undefined}
                    className={`
                        w-full
                        rounded-xl
                        border
                        bg-white
                        py-3
                        text-sm
                        text-gray-900
                        placeholder:text-gray-400
                        outline-none
                        transition-all
                        duration-300
                        focus:ring-4
                        ${icon ? "pl-11" : "pl-4"}
                        ${isPassword ? "pr-12" : "pr-4"}
                        ${
                            error
                                ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                                : "border-gray-200 focus:border-blue-500 focus:ring-blue-100"
                        }
                    `}
                    {...rest}
                />

                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setVisible((v) => !v)}
                        aria-label={visible ? "Hide password" : "Show password"}
                        className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-gray-400 transition-colors hover:text-gray-900"
                    >
                        {visible ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                )}
            </div>

            {error ? (
                <p className="mt-1.5 text-xs text-red-500">{error}</p>
            ) : hint ? (
                <p className="mt-1.5 text-xs text-gray-400">{hint}</p>
            ) : null}
        </div>
    );
};