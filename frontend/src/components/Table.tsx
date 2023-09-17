import TableRow from "./TableRow";
import { BiSortAlt2 } from "react-icons/bi";

const Table = ({ contacts, handleSort, handleDelete, handleUpdate }: any) => {
  return (
    <>
      <table className="w-[98%] table-auto mx-auto mb-8">
        <thead>
          <tr className="bg-gray-800">
            <th className="px-4 py-2 tracking-wide font-semibold text-sm text-left">
              <span className="text-gray-200">S. No.</span>
            </th>
            <th className="px-4 py-2 tracking-wide font-semibold text-sm text-left">
              <button className="text-gray-200 flex items-center gap-2 hover:text-gray-400" onClick={handleSort}>
                Name
                <span className="text-lg">
                  <BiSortAlt2 />
                </span>
              </button>
            </th>
            <th className="px-4 py-2 tracking-wide font-semibold text-sm text-left">
              <span className="text-gray-200">Phone No.</span>
            </th>
            <th className="px-4 py-2 tracking-wide font-semibold text-sm text-left">
              <span className="text-gray-200">Email</span>
            </th>
            <th className="px-4 py-2 tracking-wide font-semibold text-sm text-left">
              <span className="text-gray-200">Created Date</span>
            </th>
            <th className="px-4 py-2 tracking-wide font-semibold text-sm text-left">
              <span className="text-gray-200">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-600 mb-4">
          {contacts.length > 0 && contacts.map((obj: any, i: number) => <TableRow {...obj} sno={i + 1} key={i} handleDelete={handleDelete} handleUpdate={handleUpdate} />)}
        </tbody>
      </table>
      {contacts.length === 0 && <h1 className="w-full text-center py-2 text-xl my-5">No Contact Data Found</h1>}
    </>
  );
};

export default Table;
