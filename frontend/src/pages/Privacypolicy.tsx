import { LegalLayout, LegalList, LegalP } from "../components/LegalLayout";
import type { LegalSection } from "../components/LegalLayout";

const sections: LegalSection[] = [
    {
        id: "introduction",
        title: "Introduction",
        body: (
            <LegalP>
                Techora respects your privacy. This policy explains what personal
                information we collect when you use our website, how we use it, and
                the choices you have. We handle personal data in line with the Data
                Privacy Act of 2012 (Republic Act No. 10173) of the Philippines.
            </LegalP>
        ),
    },
    {
        id: "information-we-collect",
        title: "Information we collect",
        body: (
            <>
                <LegalP>We collect only what we need to serve you:</LegalP>
                <LegalList
                    items={[
                        "Contact details, such as your name, email address, and phone number.",
                        "Delivery and billing addresses.",
                        "Order history and the products you view or save.",
                        "Messages you send to our support team.",
                        "Device and usage data, such as browser type, pages visited, and approximate location.",
                    ]}
                />
                <LegalP>
                    We don't store your full card number. Payments are handled by our
                    payment providers.
                </LegalP>
            </>
        ),
    },
    {
        id: "how-we-use-it",
        title: "How we use your information",
        body: (
            <LegalList
                items={[
                    "To process, ship, and track your orders.",
                    "To provide customer and after-sales support.",
                    "To send order updates and, with your consent, offers and news.",
                    "To prevent fraud and keep our website secure.",
                    "To understand how our store is used so we can improve it.",
                    "To meet legal and regulatory obligations.",
                ]}
            />
        ),
    },
    {
        id: "sharing",
        title: "Who we share it with",
        body: (
            <>
                <LegalP>
                    We don't sell your personal information. We share it only with
                    trusted partners who help us run the store, such as:
                </LegalP>
                <LegalList
                    items={[
                        "Payment providers that process your transactions.",
                        "Couriers and logistics partners that deliver your orders.",
                        "Hosting, analytics, and email service providers.",
                        "Government or regulatory bodies, when the law requires it.",
                    ]}
                />
                <LegalP>
                    These partners may only use your data to perform services for us.
                </LegalP>
            </>
        ),
    },
    {
        id: "cookies",
        title: "Cookies",
        body: (
            <LegalP>
                We use cookies and similar technologies to keep your cart, remember your
                preferences, and understand site traffic. You can control or disable
                cookies in your browser settings, though some parts of the store may not
                work properly without them.
            </LegalP>
        ),
    },
    {
        id: "security-retention",
        title: "Security and retention",
        body: (
            <>
                <LegalP>
                    We use reasonable technical and organizational measures to protect
                    your information from unauthorized access, loss, or misuse. No
                    online service can be completely secure, so we encourage you to use
                    a strong, unique password.
                </LegalP>
                <LegalP>
                    We keep your information only as long as needed to provide our
                    services, resolve disputes, and meet legal requirements.
                </LegalP>
            </>
        ),
    },
    {
        id: "your-rights",
        title: "Your rights",
        body: (
            <>
                <LegalP>Under Philippine data privacy law, you have the right to:</LegalP>
                <LegalList
                    items={[
                        "Be informed about how your data is processed.",
                        "Access the personal data we hold about you.",
                        "Correct inaccurate or outdated information.",
                        "Object to processing or withdraw your consent.",
                        "Request deletion or blocking of your data, where applicable.",
                        "File a complaint with the National Privacy Commission.",
                    ]}
                />
                <LegalP>
                    To use any of these rights, email us at webreach2026@gmail.com.
                </LegalP>
            </>
        ),
    },
    {
        id: "children",
        title: "Children's privacy",
        body: (
            <LegalP>
                Our store isn't intended for children under 18, and we don't knowingly
                collect their personal information. If you believe a child has given us
                their data, contact us and we'll remove it.
            </LegalP>
        ),
    },
    {
        id: "changes",
        title: "Changes to this policy",
        body: (
            <LegalP>
                We may update this policy from time to time. When we do, we'll change
                the "Last updated" date at the top of this page. Continued use of our
                website means you accept the updated policy.
            </LegalP>
        ),
    },
];

export const PrivacyPolicy = () => {
    return (
        <LegalLayout
            current="privacy"
            eyebrow="Privacy Policy"
            title={
                <>
                    Your data,
                    <br />
                    your control.
                </>
            }
            intro="We only collect what we need to deliver your order and support you, and we're clear about how it's used."
            lastUpdated="October 1, 2026"
            sections={sections}
        />
    );
};