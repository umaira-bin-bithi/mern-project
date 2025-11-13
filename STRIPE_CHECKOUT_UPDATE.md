## Stripe Checkout Update

We updated the payment flow to keep up with Stripe's API changes and resolve checkout errors.

- **Frontend (`frontend/src/pages/Cart.js`)**
  - Removed the deprecated `stripe.redirectToCheckout`.
  - After creating a checkout session, the browser now redirects with `window.location.href` using the URL returned by the backend.
  - Added robust error handling around the payment request so users see clear feedback if a session cannot be created.

- **Backend (`backend/controller/order/paymentController.js`)**
  - Dropped the hard-coded shipping rate ID that no longer existed in Stripe.
  - Switched the checkout response to HTTP 200 so the frontend treats it as a successful call.

With these changes in place, clicking the "Payment" button forwards the shopper straight to Stripe Checkout, and completed sessions still trigger the existing webhook flow (order creation and cart cleanup). Make sure your environment variables include valid Stripe keys before running the app.

