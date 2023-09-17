import React from "react";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import moment from "moment";

const TableRow = ({ _id, name, phone, email, createdAt, sno, handleDelete, handleUpdate }: any) => {
  const formData = { _id, name, phone, email };
  return (
    <tr className="bg-gray-600 text-center text-gray-200 border-b-2 border-b-gray-800 hover:bg-gray-500">
      <td className="px-4 py-2 text-left font-semibold">
        <span>{sno || "Unknown"}</span>
      </td>
      <td className="px-4 py-2 text-left font-semibold capitalize">
        <span>{name || "Unknown"}</span>
      </td>
      <td className="px-4 py-2 text-left font-semibold">
        <span>{phone || "Unknown"}</span>
      </td>
      <td className="px-4 py-2 text-left font-semibold">
        <span>{email || "Unknown"}</span>
      </td>
      <td className="px-4 py-2 text-left font-semibold">
        <span>{moment(createdAt).format("ll") || "Unknown"}</span>
      </td>
      <td className="px-4 py-2 flex gap-5">
        <button className="cursor" onClick={() => handleUpdate(formData)}>
          <BiEdit size={25} color={"rgb(34,197,94)"}></BiEdit>
        </button>
        <button className="cursor" onClick={() => handleDelete(_id)}>
          <BiTrashAlt size={25} color={"rgb(244,63,94)"}></BiTrashAlt>
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
