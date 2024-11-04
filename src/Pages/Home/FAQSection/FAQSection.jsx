import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
const FAQSection = () => {
  return (
    <>
      <div className="py-20 space-y-10">
        <SectionTitle heading="FAQ section" subHeading="" />
        <div className="collapse bg-base-200 border dark:border-white border-black dark:bg-gray-700">
          <input type="radio" name="my-accordion-1" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What payment methods do you accept?
          </div>
          <div className="collapse-content">
            <p>Answer:</p>
            <p>
              *Credit/Debit Cards: Visa, MasterCard, American Express, and
              Discover{" "}
            </p>
            <p>*Digital Wallets: PayPal, Apple Pay, and Google Pay </p>
            <p>
              *Bank Transfers: Available for select regions (contact customer
              support for more information)
            </p>
            <p>
              All payments are securely processed, and no payment information is
              stored on our site.
            </p>
          </div>
        </div>
        <div className="collapse bg-base-200  dark:bg-gray-700  ">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">
            How can I track my order?
          </div>
          <div className="collapse-content">
            <p>Answer:</p>
            <p>
              Once your order has been shipped, you’ll receive a confirmation
              email with a tracking link. You can click this link to view the
              status and estimated delivery date of your package. If you have an
              account with us, you can also log in and check your order status
              under the “My Orders” section.
            </p>
          </div>
        </div>
        <div className="collapse bg-base-200 dark:bg-gray-700 ">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">
            Can I modify or cancel my order?
          </div>
          <div className="collapse-content">
            <p>Answer:</p>
            <p>
              Yes, you can modify or cancel your order within 1 hour of placing
              it. After this window, our fulfillment process begins, and we can
              no longer make changes. Please contact our customer service team
              immediately if you wish to cancel or adjust your order.
            </p>
          </div>
        </div>
        <div className="collapse bg-base-200 dark:bg-gray-700 ">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">
            What shipping options are available?
          </div>
          <div className="collapse-content">
            <p>Answer:</p>
            <p>We offer several shipping options:</p>
            <p>*Standard Shipping: 5–7 business days</p>
            <p>*Express Shipping: 2–3 business days</p>
            <p>
              *<span className="font-bold">Express Shipping:</span>1 business
              day (available in select locations) Shipping costs vary depending
              on the option you choose and your delivery address. You can see
              the exact shipping costs during checkout.
            </p>
          </div>
        </div>
        <div className="collapse bg-base-200 dark:bg-gray-700 ">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">
            How long will it take to receive my order?
          </div>
          <div className="collapse-content">
            <p>Answer:</p>
            <p>
              Delivery times vary based on the shipping method you select at
              checkout and your location. On average:
            </p>
            <p>*Standard Shipping: 5–7 business days</p>
            <p>*Express Shipping: 2–3 business days</p>
            <p>
              *<span className="font-bold">Overnight Shipping: </span>1 business
              day (if available in your area) Once shipped, you’ll receive a
              tracking link to monitor your order’s progress.
            </p>
          </div>
        </div>
        <div className="collapse bg-base-200 dark:bg-gray-700 ">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">
            What is your return policy?
          </div>
          <div className="collapse-content">
            <p>Answer:</p>
            <p>
              We offer a 30-day return policy on all products. Items must be
              unused, in their original packaging, and in the same condition as
              when they were received. To initiate a return, please contact our
              customer support team with your order details. Refunds will be
              issued to the original payment method within 7–10 business days
              after we receive and inspect the returned item.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQSection;
