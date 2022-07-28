import React, { useState } from "react";
import ShowCollection from "./ShowCollection";
import { v4 as uuidv4 } from "uuid";

const AddCollection = () => {
  const [receipt, setReceipt] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReceipt = {
      id: uuidv4(),
      date: e.target.date.value,
      amount: e.target.amount.value,
      mode: e.target.mode.value,
      remark: e.target.remark.value,
    };
    setReceipt([newReceipt, ...receipt]);
  };

  return (
    <div className="bg-[#f8f6f6] p-6">
      <h2 className="underline text-2xl py-1">Receipt Details</h2>
      <form onSubmit={handleSubmit}>
        <label className="flex items-end justify-start">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-slate-700 w-28 md:w-52">
            Date
          </span>
          <input
            type="date"
            name="date"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1 1/3"
            placeholder="Enter Date"
            required
          />
        </label>
        <label className="flex items-end justify-start">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-slate-700 w-28 md:w-52">
            Amount
          </span>
          <input
            type="number"
            name="amount"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1 w-2/3"
            placeholder="Enter Amount (in INR)"
            required
          />
        </label>
        <label className="flex items-end justify-start">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-slate-700 w-28 md:w-52">
            Payment Mode
          </span>
          <select
            name="mode"
            id="mode"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1 w-1/2"
          >
            <option value="cash">Cash</option>
          </select>
        </label>
        <label className="flex items-end justify-start">
          <span className="text-sm font-medium text-slate-700 w-28 md:w-52">Remark</span>
          <input
            type="text"
            name="remark"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1 w-2/3"
            placeholder="Enter Remark"
          />
        </label>
        <div className="flex justify-end py-9 md:w-4/5">
          <button className="text-sm px-6 py-2 uppercase  text-center rounded-lg text-red-500 mr-12 border border-red-300">
            <span>cancel</span>
            <span className="flex items-center">(esc)</span>
          </button>
          <button
            type="submit"
            className="text-sm bg-[#599636] px-6 py-2 uppercase  text-center font-semibold rounded-lg text-white"
          >
            <span>submit</span>
            <span className="flex items-center underline">(⌘ s)</span>
          </button>
        </div>
      </form>
      <section>
        <h2 className="text-2xl pt-6 pb-4 text-center text-[#3d797a] font-bold uppercase">
          Shows All Received Collection
        </h2>
        <table className="table-auto border border-slate-300 text-lg text-left w-full">
          <thead className="">
            <tr className="border border-slate-500 shadow text-lg">
              <th className="px-3 py-1">Date</th>
              <th className="px-3 py-1">Amount</th>
              <th className="px-3 py-1">Payment Mode</th>
              <th className="px-3 py-1">Remark</th>
            </tr>
          </thead>
          {receipt && receipt.map((data) => <ShowCollection key={data.id} data={data}></ShowCollection>)}
        </table>
      </section>
    </div>
  );
};

export default AddCollection;
