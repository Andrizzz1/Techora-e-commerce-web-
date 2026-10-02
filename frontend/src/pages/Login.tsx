import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Lock, Mail } from "lucide-react";

import { AuthLayout, Field } from "../components/AuthLayout.tsx";

type Errors = {
    email?: string;
    password?: string;
};

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(true);
    const [errors, setErrors] = useState<Errors>({});
    const [loading, setLoading] = useState(false);

    const validate = (): Errors => {
        const next: Errors = {};

        if (!email.trim()) {
            next.email = "Enter your email address.";
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            next.email = "Enter a valid email address.";
        }

        if (!password) {
            next.password = "Enter your password.";
        }

        return next;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const next = validate();
        setErrors(next);
        if (Object.keys(next).length > 0) return;

        setLoading(true);

        try {
            // TODO: connect to your backend login endpoint, e.g.
            // await fetch("http://localhost:3000/login", { method: "POST", ... })
            const login = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password,
                    remember
                })
            });
            console.log("Login", { email, password, remember });
            if(login.ok){
                alert("success")
            }else{
                alert("error")
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout
            eyebrow="Welcome back"
            title={
                <>
                    Log in to
                    <br />
                    Techora.
                </>
            }
            description="Track your orders, save your wishlist, and check out faster."
            footer={
                <>
                    New to Techora?{" "}
                    <Link
                        to="/register"
                        className="font-medium text-blue-500 transition-colors hover:text-blue-600"
                    >
                        Create an account
                    </Link>
                </>
            }
        >
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <Field
                    id="email"
                    label="Email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    icon={<Mail size={18} />}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={errors.email}
                />

                <Field
                    id="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    icon={<Lock size={18} />}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={errors.password}
                />

                <div className="flex items-center justify-between gap-4">
                    <label className="flex cursor-pointer items-center gap-2.5 text-sm text-gray-500">
                        <input
                            type="checkbox"
                            checked={remember}
                            onChange={(e) => setRemember(e.target.checked)}
                            className="h-4 w-4 rounded border-gray-300 accent-blue-500"
                        />
                        Remember me
                    </label>

                    <a
                        href="#"
                        className="text-sm font-medium text-blue-500 transition-colors hover:text-blue-600"
                    >
                        Forgot password?
                    </a>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="
                        inline-flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        bg-blue-500
                        px-6
                        py-3.5
                        text-sm
                        font-semibold
                        text-white
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-blue-600
                        hover:shadow-lg
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                        disabled:hover:translate-y-0
                        disabled:hover:shadow-none
                    "
                >
                    {loading ? "Logging in..." : "Log in"}
                    {!loading && <ArrowRight size={16} />}
                </button>
            </form>
        </AuthLayout>
    );
};