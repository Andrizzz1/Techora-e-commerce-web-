import { LegalLayout, LegalList, LegalP } from "../components/LegalLayout.tsx";
import type { LegalSection } from "../components/LegalLayout.tsx";

const sections: LegalSection[] = [
    {
        id: "overview",
        title: "Overview",
        body: (
            <>
                <LegalP>
                    We want you to be happy with every Techora purchase. If something
                    isn't right, this policy explains when you can return an item,
                    how to ask for a refund or exchange, and what to expect along the
                    way.
                </LegalP>
            </>
        ),
    },
    {
        id: "eligibility",
        title: "Return eligibility",
        body: (
            <>
                <LegalP>
                    You may request a return within 7 days of receiving your order,
                    provided that:
                </LegalP>
                <LegalList
                    items={[
                        "The item is unused, undamaged, and in its original condition.",
                        "It comes with its original packaging, accessories, manuals, and free items.",
                        "You can show proof of purchase, such as your order number or receipt.",
                        "Any seals, serial numbers, and tags are intact.",
                    ]}
                />
            </>
        ),
    },
    {
        id: "non-returnable",
        title: "Items we can't accept back",
        body: (
            <>
                <LegalP>For hygiene, security, and fairness, we can't accept:</LegalP>
                <LegalList
                    items={[
                        "Items with signs of use, physical damage, or water damage not present on arrival.",
                        "Opened earphones, headphones, and other personal-care accessories, unless defective.",
                        "Software, digital codes, and gift cards once redeemed or revealed.",
                        "Products with missing parts, removed serial numbers, or tampered seals.",
                        "Items marked as final sale at the time of purchase.",
                    ]}
                />
            </>
        ),
    },
    {
        id: "how-to-return",
        title: "How to request a return",
        body: (
            <>
                <LegalList
                    items={[
                        "Email us at webreach2026@gmail.com with your order number and the reason for the return.",
                        "Attach clear photos or a short video if the item is damaged or defective.",
                        "Wait for our team to review your request and confirm the next steps.",
                        "Pack the item securely with all original contents and ship it as instructed.",
                    ]}
                />
                <LegalP>
                    Please don't send an item back before your request is approved, as
                    we may not be able to process unapproved returns.
                </LegalP>
            </>
        ),
    },
    {
        id: "refunds",
        title: "Refunds",
        body: (
            <>
                <LegalP>
                    Once we receive and inspect your return, we'll let you know
                    whether the refund is approved. Approved refunds are sent to your
                    original payment method, such as your card, GCash, or PayPal
                    account.
                </LegalP>
                <LegalP>
                    Processing usually takes 7 to 14 business days after approval.
                    Your bank or payment provider may need additional time to show
                    the funds in your account.
                </LegalP>
            </>
        ),
    },
    {
        id: "exchanges",
        title: "Exchanges",
        body: (
            <LegalP>
                If you'd like a different color, size, or model, contact us within the
                return window. Exchanges depend on stock availability. If the item you
                want is unavailable, we'll offer a refund instead.
            </LegalP>
        ),
    },
    {
        id: "damaged",
        title: "Damaged, defective, or wrong items",
        body: (
            <>
                <LegalP>
                    If your order arrives damaged, doesn't work properly, or isn't what
                    you ordered, contact us within 48 hours of delivery with your order
                    number and photos. We'll arrange a replacement or refund and cover
                    the return shipping for these cases.
                </LegalP>
                <LegalP>
                    Products may also be covered by the manufacturer's warranty.
                    Coverage varies by brand and product.
                </LegalP>
            </>
        ),
    },
    {
        id: "shipping-costs",
        title: "Return shipping costs",
        body: (
            <LegalP>
                If you're returning an item because you changed your mind, return
                shipping is your responsibility, and original shipping fees are
                non-refundable. We cover return shipping when the error was ours or the
                item arrived defective.
            </LegalP>
        ),
    },
];

export const ReturnAndRefundPolicy = () => {
    return (
        <LegalLayout
            current="returns"
            eyebrow="Return & Refund Policy"
            title={
                <>
                    Returns made
                    <br />
                    simple.
                </>
            }
            intro="Here's everything you need to know about returning an item, getting a refund, or exchanging a product from Techora."
            lastUpdated="October 1, 2026"
            sections={sections}
        />
    );
};