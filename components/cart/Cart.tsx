import { IoIosArrowBack } from "react-icons/io";
import CartItem from "./CartItem";
import { AiOutlinePlus } from "react-icons/ai";

const Cart = () => {
  return (
    <>
      <section id="cartSection" className="min-w-full px-4">
        {/* {cart header} */}
        <div id="cartHeader" className="mt-8 flex flex-row items-center">
          <div className="flex-four">
            <span className=" inline-block  bg-whiteColor p-2  rounded-xl shadow-lg">
              <IoIosArrowBack className="text-smokyBlack text-lg" />
            </span>
          </div>

          <h1 className="font-bold text-xl flex-six text-smokyBlack">Cart</h1>
        </div>

        {/* cart delivery address */}

        <div id="deliveryAdress" className="bg-whiteColor mt-8 px-4 py-2 rounded-2xl shadow-lg">
          <p className="text-gray-500 text-sm mb-2">Diliver to</p>
          <h2 className="text-smokyBlack">Table 7</h2>
        </div>

        {/* carts section */}

        <div id="cartsSection" className="mt-8 flex flex-col gap-5">
          <CartItem />

          <CartItem />
        </div>

        {/* promo code */}

        <div
          id="promoCodeSection"
          className="flex flex-row justify-between items-center mt-8 px-4 py-4 bg-whiteColor rounded-2xl shadow-lg"
        >
          <h1 className="text-smokyBlack text-sm font-bold">Promo Code</h1>
          <span className="flex justify-center items-center px-2">
            <AiOutlinePlus className="text-secondary" />
          </span>
        </div>

        {/* divider */}
        <div className="border-b-2 mt-6" />

        {/* Bill section */}

        <div id="billSection" className="mt-4 flex flex-col gap-3">
          <div id="itemTotal" className="flex flex-row justify-between items-center">
            <p className="text-smokyBlack text-sm">Item total</p>
            <p className="text-smokyBlack text-sm">$605</p>
          </div>

          <div id="discount" className="flex flex-row justify-between items-center">
            <p className="text-smokyBlack text-sm">Discount</p>
            <p className="text-smokyBlack text-sm">-$10</p>
          </div>

          <div id="tax" className="flex flex-row justify-between items-center">
            <p className="text-smokyBlack text-sm">Tax</p>
            <p className="text-smokyBlack text-sm">$2</p>
          </div>

          <div id="totalBill" className="mt-3 flex flex-row justify-between gap-10">
            <a href="" className=" flex-five py-4 bg-primary text-center text-sm rounded-3xl">
              Checkout
            </a>
            <div className="">
              <p className="text-smokyBlack text-sm">Item Total</p>
              <p className="text-dark font-bold text-xl">$13.50</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
