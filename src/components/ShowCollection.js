import React from "react";

const ShowCollection = ({ data }) => {
  const { date, amount, mode, remark } = data;

  return (
    <tbody>
      <tr className="border border-slate-300 shadow">
        <td className="px-3 py-1">{date}</td>
        <td className="px-3 py-1">{amount}</td>
        <td className="px-3 py-1">{mode}</td>
        <td className="px-3 py-1">{remark}</td>
      </tr>
    </tbody>
  );
};

export default ShowCollection;
