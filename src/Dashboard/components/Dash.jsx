import React from "react";
import { Link } from "react-router-dom";
import { Chart } from "./Chart";
import LeadsBarCard from "./Chart2";

const Dash = () => {
  return (
    <>
      <div className="grid grid-cols-1  md:grid-cols-3 grid-rows-auto gap-4 w-full px-2 md:px-4">
        <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700">
   <i class="fi fi-br-folder-upload text-2xl"></i>
          <div className="flex flex-col-2 justify-between ">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white inline">
            Total Users

          </h2>
          
            <p className="text-2xl font-semibold">30</p>
          </div>
          <Link
            to="/admin/customers"
            className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline dark:text-blue-500"
          >
            view
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </Link>
        </div>
        <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700">
         <i className="fi fi-rr-users text-2xl"></i>
          <div className="flex flex-col-2 justify-between ">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white inline">
            Total PDFs

          </h2>
          
            <p className="text-2xl font-semibold">30</p>
          </div>

          <Link
            to="/admin/product"
            className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline dark:text-blue-500"
          >
            view
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </Link>
         
        </div>
        <div className="md:row-span-2 bg-white border border-gray-200 shadow-2xs rounded-xl p-4 dark:bg-neutral-900 dark:border-neutral-700">
          <Chart />
        </div>

        {/* <div className="min-w-4xl md:col-span-2 bg-white border border-gray-200 shadow-2xs rounded-xl p-4 dark:bg-neutral-900 dark:border-neutral-700">
          <LeadsBarCard />
        </div> */}

        <div className=" w-4xl max-w-full md:col-span-2 bg-white border border-gray-200 shadow-2xs rounded-xl  p-3 sm:p-4 md:p-6  dark:bg-neutral-900  dark:border-neutral-700">
          <LeadsBarCard />
        </div>


      </div>
    </>
  );
};

export default Dash;
