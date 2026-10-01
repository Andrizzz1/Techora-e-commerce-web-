import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";

import { NavBar } from "./navbar";
import { Footer } from "./footer";

export type LegalSection = {
    id: string;
    title: string;
    body: ReactNode;
};

type LegalLayoutProps = {
    eyebrow: string;
    title: ReactNode;
    intro: string;
    lastUpdated: string;
    sections: LegalSection[];
    current: "returns" | "privacy" | "terms";
};

const relatedPages = [
    { key: "returns", label: "Return & Refund Policy", to: "/return-and-refund-policy" },
    { key: "privacy", label: "Privacy Policy", to: "/privacy-policy" },
    { key: "terms", label: "Terms & Conditions", to: "/terms-and-conditions" },
];

/* Reusable text helpers so each page stays easy to edit */
export const LegalP = ({ children }: { children: ReactNode }) => (
    <p className="text-sm md:text-[15px] leading-relaxed text-gray-500">
        {children}
    </p>
);

export const LegalList = ({ items }: { items: ReactNode[] }) => (
    <ul className="space-y-2.5">
        {items.map((item, index) => (
            <li
                key={index}
                className="flex items-start gap-3 text-sm md:text-[15px] leading-relaxed text-gray-500"
            >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                <span>{item}</span>
            </li>
        ))}
    </ul>
);

export const LegalLayout = ({
    eyebrow,
    title,
    intro,
    lastUpdated,
    sections,
    current,
}: LegalLayoutProps) => {
    return (
        <main className="overflow-hidden bg-white">
            <NavBar />

            {/* Hero */}
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
                    pb-12
                    md:pb-16
                "
            >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
                    {eyebrow}
                </p>

                <h1
                    className="
                        mt-4
                        max-w-3xl
                        text-4xl
                        sm:text-5xl
                        md:text-6xl
                        font-bold
                        tracking-tight
                        leading-[0.95]
                    "
                >
                    {title}
                </h1>

                <p className="mt-6 max-w-xl text-sm md:text-base leading-relaxed text-gray-500">
                    {intro}
                </p>

                <span className="mt-6 inline-block rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-[11px] text-gray-500">
                    Last updated {lastUpdated}
                </span>
            </section>

            {/* Content */}
            <section className="border-y border-gray-200 bg-gray-50">
                <div
                    className="
                        w-full
                        max-w-7xl
                        mx-auto
                        px-6
                        md:px-10
                        lg:px-0
                        py-12
                        md:py-16
                        grid
                        grid-cols-1
                        lg:grid-cols-[260px_1fr]
                        gap-8
                        lg:gap-16
                        items-start
                    "
                >
                    {/* Mobile: collapsible contents */}
                    <details className="group lg:hidden rounded-2xl border border-gray-200 bg-white overflow-hidden">
                        <summary className="list-none cursor-pointer flex items-center justify-between gap-4 px-5 py-4">
                            <span className="text-sm font-medium text-gray-900">
                                On this page
                            </span>
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 pb-1 text-gray-500 transition-transform duration-300 group-open:rotate-45">
                                +
                            </span>
                        </summary>

                        <nav className="flex flex-col gap-1 px-5 pb-4">
                            {sections.map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className="py-1.5 text-sm text-gray-500 transition-colors hover:text-blue-500"
                                >
                                    {section.title}
                                </a>
                            ))}
                        </nav>
                    </details>

                    {/* Desktop: sticky contents */}
                    <aside className="hidden lg:block sticky top-28">
                        <p className="text-sm font-semibold">On this page</p>

                        <nav className="mt-4 flex flex-col gap-1 border-l border-gray-200">
                            {sections.map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className="
                                        -ml-px
                                        border-l
                                        border-transparent
                                        py-1.5
                                        pl-4
                                        text-sm
                                        text-gray-500
                                        transition-colors
                                        hover:border-blue-500
                                        hover:text-blue-500
                                    "
                                >
                                    {section.title}
                                </a>
                            ))}
                        </nav>
                    </aside>

                    {/* Sections */}
                    <div className="rounded-3xl border border-gray-200 bg-white px-6 py-4 sm:px-10 sm:py-6">
                        {sections.map((section, index) => (
                            <article
                                key={section.id}
                                id={section.id}
                                className={`scroll-mt-28 py-8 sm:py-10 ${
                                    index !== 0 ? "border-t border-gray-200" : ""
                                }`}
                            >
                                <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                                    {section.title}
                                </h2>

                                <div className="mt-4 space-y-4">{section.body}</div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related policies + contact */}
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {/* Other policies */}
                    <div className="rounded-3xl border border-gray-200 bg-white p-7 sm:p-8">
                        <h2 className="text-xl font-semibold">Other policies</h2>

                        <div className="mt-5 flex flex-col">
                            {relatedPages
                                .filter((page) => page.key !== current)
                                .map((page) => (
                                    <Link
                                        key={page.key}
                                        to={page.to}
                                        className="
                                            group
                                            flex
                                            items-center
                                            justify-between
                                            border-t
                                            border-gray-200
                                            py-4
                                            text-sm
                                            font-medium
                                            text-gray-900
                                            transition-colors
                                            hover:text-blue-500
                                        "
                                    >
                                        {page.label}
                                        <ArrowRight
                                            size={16}
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                    </Link>
                                ))}

                            <Link
                                to="/about-us"
                                className="
                                    group
                                    flex
                                    items-center
                                    justify-between
                                    border-t
                                    border-gray-200
                                    py-4
                                    text-sm
                                    font-medium
                                    text-gray-900
                                    transition-colors
                                    hover:text-blue-500
                                "
                            >
                                About Techora
                                <ArrowRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-blue-50 p-7 sm:p-8">
                        <div className="relative z-10 max-w-md">
                            <h2 className="text-xl font-semibold">Questions?</h2>

                            <p className="mt-3 text-sm leading-relaxed text-gray-500">
                                If anything on this page is unclear, reach out and
                                the Techora team will be glad to help.
                            </p>

                            <a
                                href="mailto:webreach2026@gmail.com"
                                className="
                                    mt-6
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
                                Email support
                                <Mail size={16} />
                            </a>
                        </div>

                        <div className="absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full border border-blue-200 sm:h-80 sm:w-80" />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};