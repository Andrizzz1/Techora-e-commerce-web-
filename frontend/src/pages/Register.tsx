import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Lock, Mail, Phone, User } from "lucide-react";

import { AuthLayout, Field } from "../components/AuthLayout.tsx";

type Errors = {
    firstName?: string;
    lastName?: string;
    email?: string;
    mobile?: string;
    password?: string;
    confirmPassword?: string;
    terms?: string;
};

/* 0–4 score based on length and character variety */
const getStrength = (password: string) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return score;
};

const strengthLabels = ["Too weak", "Weak", "Fair", "Good", "Strong"];
const strengthColors = [
    "bg-gray-200",
    "bg-red-400",
    "bg-orange-400",
    "bg-blue-400",
    "bg-green-500",
];

export const Register = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
    });
    const [terms, setTerms] = useState(false);
    const [errors, setErrors] = useState<Errors>({});
    const [loading, setLoading] = useState(false);

    const update =
        (key: keyof typeof form) =>
        (e: ChangeEvent<HTMLInputElement>) =>
            setForm((prev) => ({ ...prev, [key]: e.target.value }));

    const strength = getStrength(form.password);

    const validate = (): Errors => {
        const next: Errors = {};

        if (!form.firstName.trim()) next.firstName = "Enter your first name.";
        if (!form.lastName.trim()) next.lastName = "Enter your last name.";

        if (!form.email.trim()) {
            next.email = "Enter your email address.";
        } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
            next.email = "Enter a valid email address.";
        }

        // Accepts 09XXXXXXXXX or +639XXXXXXXXX
        if (form.mobile.trim() && !/^(\+63|0)9\d{9}$/.test(form.mobile.replace(/\s|-/g, ""))) {
            next.mobile = "Enter a valid PH mobile number, like 0917 123 4567.";
        }

        if (!form.password) {
            next.password = "Create a password.";
        } else if (form.password.length < 8) {
            next.password = "Use at least 8 characters.";
        }

        if (!form.confirmPassword) {
            next.confirmPassword = "Confirm your password.";
        } else if (form.confirmPassword !== form.password) {
            next.confirmPassword = "Passwords don't match.";
        }

        if (!terms) {
            next.terms = "Accept the Terms & Conditions and Privacy Policy to continue.";
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
            // TODO: connect to your backend register endpoint, e.g.
            await fetch("http://localhost:3000/register", { method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstName: form.firstName,
                    lastName: form.lastName,
                    email: form.email,
                    mobile: form.mobile,
                    password: form.password,
                })
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout
            eyebrow="Create account"
            title={
                <>
                    Join
                    <br />
                    Techora.
                </>
            }
            description="Create a free account to save your wishlist, track orders, and check out faster."
            footer={
                <>
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="font-medium text-blue-500 transition-colors hover:text-blue-600"
                    >
                        Log in
                    </Link>
                </>
            }
        >
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field
                        id="firstName"
                        label="First name"
                        autoComplete="given-name"
                        placeholder="Juan"
                        icon={<User size={18} />}
                        value={form.firstName}
                        onChange={update("firstName")}
                        error={errors.firstName}
                    />

                    <Field
                        id="lastName"
                        label="Last name"
                        autoComplete="family-name"
                        placeholder="Dela Cruz"
                        value={form.lastName}
                        onChange={update("lastName")}
                        error={errors.lastName}
                    />
                </div>

                <Field
                    id="email"
                    label="Email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    icon={<Mail size={18} />}
                    value={form.email}
                    onChange={update("email")}
                    error={errors.email}
                />

                <Field
                    id="mobile"
                    label="Mobile number (optional)"
                    type="tel"
                    autoComplete="tel"
                    placeholder="0917 123 4567"
                    icon={<Phone size={18} />}
                    value={form.mobile}
                    onChange={update("mobile")}
                    error={errors.mobile}
                    hint="Used for delivery updates."
                />

                <div>
                    <Field
                        id="password"
                        label="Password"
                        type="password"
                        autoComplete="new-password"
                        placeholder="At least 8 characters"
                        icon={<Lock size={18} />}
                        value={form.password}
                        onChange={update("password")}
                        error={errors.password}
                    />

                    {form.password && (
                        <div className="mt-3">
                            <div className="flex gap-1.5">
                                {[1, 2, 3, 4].map((step) => (
                                    <span
                                        key={step}
                                        className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                                            strength >= step
                                                ? strengthColors[strength]
                                                : "bg-gray-200"
                                        }`}
                                    />
                                ))}
                            </div>
                            <p className="mt-1.5 text-xs text-gray-400">
                                Password strength: {strengthLabels[strength]}
                            </p>
                        </div>
                    )}
                </div>

                <Field
                    id="confirmPassword"
                    label="Confirm password"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Re-enter your password"
                    icon={<Lock size={18} />}
                    value={form.confirmPassword}
                    onChange={update("confirmPassword")}
                    error={errors.confirmPassword}
                />

                <div>
                    <label className="flex cursor-pointer items-start gap-2.5 text-sm leading-relaxed text-gray-500">
                        <input
                            type="checkbox"
                            checked={terms}
                            onChange={(e) => setTerms(e.target.checked)}
                            className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 accent-blue-500"
                        />
                        <span>
                            I agree to the{" "}
                            <Link
                                to="/terms-and-conditions"
                                className="font-medium text-blue-500 hover:text-blue-600"
                            >
                                Terms & Conditions
                            </Link>{" "}
                            and{" "}
                            <Link
                                to="/privacy-policy"
                                className="font-medium text-blue-500 hover:text-blue-600"
                            >
                                Privacy Policy
                            </Link>
                            .
                        </span>
                    </label>

                    {errors.terms && (
                        <p className="mt-1.5 text-xs text-red-500">{errors.terms}</p>
                    )}
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
                    {loading ? "Creating account..." : "Create account"}
                    {!loading && <ArrowRight size={16} />}
                </button>
            </form>
        </AuthLayout>
    );
};