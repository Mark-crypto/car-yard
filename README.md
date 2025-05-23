#  Car Yard

A sleek and modern car dealership frontend built with **React**, integrated with an external cars API and powered by **Stripe** for payment processing. This project demonstrates a full shopping experience from browsing to checkout.

---

##  Technologies Used

- **React** – for building the user interface
- **Redux** – for global state management
- **React Router** – for seamless page navigation
- **Node.js** – for handling backend Stripe integration
- **Stripe (Test Mode)** – for secure checkout flow
- **FreeTestAPI** – as the source of car listings

---

##  Features

-  **Quick Search with Debouncing**
  - Instant search powered by `useCallback` and debounce for performance.
  
-  **Filter Options**
  - Filter cars based on different attributes like make, model, etc.
  
-  **Shopping Cart**
  - Add/remove cars from your cart and view total price.

-  **Pagination**
  - Browse cars in pages for a smoother user experience.

-  **Stripe Checkout Integration**
  - Test mode checkout using Stripe's secure payment gateway.

-  **Routing**
  - Navigation through different views using React Router.

---

##  Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mark-crypto/car-yard.git
   cd car-yard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the frontend react**
   ```bash
   npm run dev
   ```

4. **Access the Car API**
   Visit the API endpoint:  
   👉 [https://www.freetestapi.com/apis/cars](https://www.freetestapi.com/apis/cars)

5. **Start the Stripe Backend (Optional)**
   If you're running a backend server for Stripe:
   ```bash
   cd backend
   node index.js
   ```
6. **Using stripe test environment**
   - To simulate different outcomes you will need to provide different card numbers:
  
   - **Successful payment:** 4242 4242 4242 4242
   - **Declined card:**	4000 0000 0000 0002
   - **Insufficient funds:**	4000 0000 0000 9995
   - **Card requires authentication (3DS):**	4000 0025 0000 3155
   - **Incorrect CVC:**	4000 0000 0000 0127

   Other card information:
   - **Expiry Date:** Any future date (e.g., 12/34)
   - **CVC:** Any 3-digit number (e.g., 123)
   - **ZIP:** Any 5-digit number (e.g., 12345)

---

##  Future Improvements

-  Switch from **test** to **live Stripe** integration  
-  Connect cart to a **real database** for persistence  
-  Add **user authentication** and profiles  
-  Build and use a **custom API** for more robust and secure data  
-  Implement **fuzzy search logic** for more user-friendly searching  

---

## 📷 Screenshots

_Coming soon..._

---

## 📬 Feedback

Have suggestions or feedback? Feel free to open an issue or fork the project!

---

