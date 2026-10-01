import { LegalLayout, LegalList, LegalP } from "../components/LegalLayout";
import type { LegalSection } from "../components/LegalLayout";

const sections: LegalSection[] = [
    {
        id: "acceptance",
        title: "Acceptance of terms",
        body: (
            <LegalP>
                By browsing or buying from Techora, you agree to these Terms &
                Conditions. If you don't agree with any part of them, please don't use
                our website.
            </LegalP>
        ),
    },
    {
        id: "eligibility",
        title: "Eligibility and accounts",
        body: (
            <>
                <LegalP>
                    You must be at least 18 years old, or have the permission of a
                    parent or guardian, to place an order. When you create an account or
                    check out, you agree to:
                </LegalP>
                <LegalList
                    items={[
                        "Provide accurate and complete information.",
                        "Keep your login details confidential.",
                        "Be responsible for all activity under your account.",
                    ]}
                />
            </>
        ),
    },
    {
        id: "products-pricing",
        title: "Products and pricing",
        body: (
            <>
                <LegalP>
                    We do our best to show accurate product descriptions, images, and
                    prices. Colors may look slightly different on your screen, and
                    specifications may change when manufacturers update their products.
                </LegalP>
                <LegalP>
                    Prices are shown in Philippine pesos and may change without notice.
                    If a price is listed incorrectly, we may cancel the order and refund
                    any payment made.
                </LegalP>
            </>
        ),
    },
    {
        id: "orders-payment",
        title: "Orders and payment",
        body: (
            <>
                <LegalP>
                    Placing an order is an offer to buy. An order is only accepted once
                    we confirm it, and we may decline or cancel an order because of
                    stock availability, payment problems, or suspected fraud.
                </LegalP>
                <LegalP>
                    We accept the payment methods shown at checkout, including major
                    cards, GCash, and PayPal. Payment must be completed before your
                    order is shipped.
                </LegalP>
            </>
        ),
    },
    {
        id: "shipping",
        title: "Shipping and delivery",
        body: (
            <LegalP>
                Delivery times are estimates and may be affected by courier delays,
                weather, or other events outside our control. Risk of loss passes to you
                once the order is delivered to the address you provided, so please make
                sure your delivery details are correct.
            </LegalP>
        ),
    },
    {
        id: "returns-warranty",
        title: "Returns and warranty",
        body: (
            <LegalP>
                Returns, refunds, and exchanges are covered by our Return & Refund
                Policy. Product warranties are provided by the manufacturer or brand
                and vary by product.
            </LegalP>
        ),
    },
    {
        id: "intellectual-property",
        title: "Intellectual property",
        body: (
            <LegalP>
                All content on this website, including text, graphics, logos, and
                layouts, belongs to Techora or its licensors. Product names and brand
                logos belong to their respective owners. You may not copy, reproduce, or
                reuse our content without written permission.
            </LegalP>
        ),
    },
    {
        id: "acceptable-use",
        title: "Acceptable use",
        body: (
            <>
                <LegalP>You agree not to:</LegalP>
                <LegalList
                    items={[
                        "Use the website for any unlawful or fraudulent purpose.",
                        "Attempt to gain unauthorized access to our systems or other accounts.",
                        "Interfere with the website's operation, or introduce harmful code.",
                        "Scrape or copy site content without permission.",
                    ]}
                />
            </>
        ),
    },
    {
        id: "liability",
        title: "Limitation of liability",
        body: (
            <LegalP>
                To the fullest extent permitted by law, Techora isn't liable for
                indirect or consequential losses arising from your use of the website
                or products. Nothing in these terms limits any rights you have under
                Philippine consumer protection laws.
            </LegalP>
        ),
    },
    {
        id: "governing-law",
        title: "Governing law",
        body: (
            <LegalP>
                These terms are governed by the laws of the Republic of the Philippines.
                Any dispute will be handled by the proper courts of the Philippines.
            </LegalP>
        ),
    },
    {
        id: "changes",
        title: "Changes to these terms",
        body: (
            <LegalP>
                We may update these terms from time to time. The "Last updated" date at
                the top of this page shows the latest version, and continued use of the
                website means you accept the changes.
            </LegalP>
        ),
    },
];

export const TermsAndConditions = () => {
    return (
        <LegalLayout
            current="terms"
            eyebrow="Terms & Conditions"
            title={
                <>
                    The ground rules,
                    <br />
                    in plain words.
                </>
            }
            intro="Please read these terms before you shop with Techora. They explain how orders, payments, delivery, and website use work."
            lastUpdated="October 1, 2026"
            sections={sections}
        />
    );
};