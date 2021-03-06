import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { CgShoppingBag } from "react-icons/cg";

const ProductCustomization = () => {
  return (
    <>
      <section id="prodCustSection" className="min-w-full px-4">
        <div id="prodCustHeader" className="flex flex-row justify-between items-center mt-8">
          <a className="inline-block bg-whiteColor p-2  rounded-md">
            <IoIosArrowBack className="text-smokyBlack" />
          </a>

          <div id="addCartBtn" className="flex flex-row item-center py-2 px-4 rounded-md bg-primary text-smokyBlack">
            <span className="flex justify-center items-center">
              <CgShoppingBag className="inline-block  mr-4 text-center" />
            </span>
            <span className="bg-whiteColor flex justify-center items-center h-5 w-5 rounded-full">0</span>
          </div>
        </div>

        <h1 className="text-sm font-bold text-smokyBlack mt-6">Classic Pepporoni</h1>

        {/* size slection start */}

        <div id="sizeSelection" className="mt-6">
          {/* sizeSelection Header start */}
          <div id="sizeSelectionHeader" className="flex justify-between items-center">
            <h2 className="text-sm text-smokyBlack font-bold">Choose Size</h2>
            <p className="text-xs text-smokyBlack font-medium bg-primary uppercase p-1 rounded-md">required</p>
          </div>
          {/* sizeSelection Header  ends */}

          <div id="selectSize" className="mt-4 flex flex-col gap-2 divide-y-2">
            {/* SingelSelect size start*/}
            <div id="sizeInfo" className="flex flex-row justify-between items-center">
              <div id="sizeInputContainer">
                <input
                  type="radio"
                  name="size"
                  id=""
                  className="h-3 w-3 m-2 p-0 text-primary ring-2 ring-offset-1  ring-white checked:ring-2 checked:ring-offset-1 checked:ring-primary"
                />
                <label htmlFor="name" className="text-sm text-gray-600">
                  Small-6"
                </label>
              </div>

              <p className="text-sm text-gray-600">$8</p>
            </div>
            {/* SingelSelect size end*/}

            {/* SingelSelect size start*/}
            <div id="sizeInfo" className="flex flex-row justify-between items-center">
              <div id="sizeInputContainer">
                <input
                  type="radio"
                  name="size"
                  id=""
                  className="h-3 w-3 m-2 p-0 text-primary ring-2 ring-offset-1  ring-white checked:ring-2 checked:ring-offset-1 checked:ring-primary"
                />
                <label htmlFor="name" className="text-sm text-gray-600">
                  Medium-8"
                </label>
              </div>

              <p className="text-sm text-gray-600">$12</p>
            </div>
            {/* SingelSelect size end*/}

            {/* SingelSelect size start*/}
            <div id="sizeInfo" className="flex flex-row justify-between items-center">
              <div id="sizeInputContainer">
                <input
                  type="radio"
                  name="size"
                  id=""
                  className="h-3 w-3 m-2 p-0 text-primary ring-2 ring-offset-1  ring-white checked:ring-2 checked:ring-offset-1 checked:ring-primary"
                />
                <label htmlFor="name" className="text-sm text-gray-600">
                  Large-14"
                </label>
              </div>

              <p className="text-sm text-gray-600">$16</p>
            </div>
            {/* SingelSelect size end*/}
          </div>
        </div>
        {/* size slection end */}

        {/* crust slection start*/}
        <div id="crustSelection" className="mt-6">
          {/* curstSelection Header start */}
          <div id="crustSelectionHeader" className="flex justify-between items-center">
            <h2 className="text-sm text-smokyBlack font-bold">Select Curst</h2>
            <p className="text-xs text-smokyBlack font-medium bg-primary uppercase p-1 rounded-md">required</p>
          </div>
          {/* curstSelection Header Ends */}

          <div id="selectCrust" className="mt-4 flex flex-col gap-2 divide-y-2">
            {/* SingelSelect crust start*/}
            <div id="crustInfo" className="flex flex-row justify-between items-center">
              <div id="crustInputContainer">
                <input
                  type="radio"
                  name="crust"
                  id=""
                  className="h-3 w-3 m-2 p-0 text-primary ring-2 ring-offset-1  ring-white checked:ring-2 checked:ring-offset-1 checked:ring-primary"
                />
                <label htmlFor="name" className="text-sm text-gray-600">
                  Classic Hand tossed
                </label>
              </div>

              <p className="text-sm text-gray-600"></p>
            </div>
            {/* SingelSelect crust end*/}

            {/* SingelSelect crust start*/}
            <div id="crustInfo" className="flex flex-row justify-between items-center">
              <div id="crusttInputContainer">
                <input
                  type="radio"
                  name="crust"
                  id=""
                  className="h-3 w-3 m-2 p-0 text-primary ring-2 ring-offset-1  ring-white checked:ring-2 checked:ring-offset-1 checked:ring-primary"
                />
                <label htmlFor="name" className="text-sm text-gray-600">
                  Thin Crust
                </label>
              </div>

              <p className="text-sm text-gray-600"></p>
            </div>
            {/* SingelSelect crust end*/}

            {/* SingelSelect crust start*/}
            <div id="crustInfo" className="flex flex-row justify-between items-center">
              <div id="crustInputContainer">
                <input
                  type="radio"
                  name="crust"
                  id=""
                  className="h-3 w-3 m-2 p-0 text-primary ring-2 ring-offset-1  ring-white checked:ring-2 checked:ring-offset-1 checked:ring-primary"
                />
                <label htmlFor="name" className="text-sm text-gray-600">
                  Cheese Brust
                </label>
              </div>

              <p className="text-sm text-gray-600">+$1.50</p>
            </div>
            {/* SingelSelect crust end*/}
          </div>
        </div>

        {/* {Addons Section start} */}
        <div id="addOnsSection" className="mt-6">
          {/* addonsSelection Header start */}
          <div id="addonsSelectionHeader" className="flex justify-between items-center">
            <h2 className="text-sm text-smokyBlack font-bold">Add ons</h2>
            <p className="text-xs text-smokyBlack font-medium bg-whiteColor uppercase p-1 rounded-md">Optional</p>
          </div>
          {/* addonsSelection Header Ends */}

          <div id="addons" className="flex flex-col gap-2 divide-y-2">
            {/* SingelSelect addons start*/}
            <div id="addOnsInfo" className="flex flex-row justify-between items-center">
              <div id="curstInputContainer">
                <input
                  type="checkbox"
                  name="crust"
                  id=""
                  className="h-3 w-3 m-2 p-0 text-primary ring-2 ring-offset-1  ring-white checked:ring-2 checked:ring-offset-1 checked:ring-primary"
                />
                <label htmlFor="name" className="text-sm text-gray-600">
                  Add Extra Cheese
                </label>
              </div>

              <p className="text-sm text-gray-600">+$1.50</p>
            </div>
            {/* SingelSelect addons end*/}

            {/* SingelSelect addons start*/}
            <div id="addOnsInfo" className="flex flex-row justify-between items-center">
              <div id="curstInputContainer">
                <input
                  type="checkbox"
                  name="crust"
                  id=""
                  className="h-3 w-3 m-2 p-0 text-primary ring-2 ring-offset-1  ring-white checked:ring-2 checked:ring-offset-1 checked:ring-primary"
                />
                <label htmlFor="name" className="text-sm text-gray-600">
                  Add Mushrooms
                </label>
              </div>

              <p className="text-sm text-gray-600">+$1.50</p>
            </div>
            {/* SingelSelect addons end*/}
          </div>
        </div>
        {/* {Addons Section end} */}

        {/* total Bill */}
        <div id="totalBill" className="mt-3 flex flex-row justify-between gap-10">
          <a href="" className=" flex-five py-4 bg-primary text-center text-sm rounded-3xl">
            Add to cart
          </a>
          <div className="">
            <p className="text-smokyBlack text-sm">Item Total</p>
            <p className="text-dark font-bold text-xl">$13.50</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCustomization;
