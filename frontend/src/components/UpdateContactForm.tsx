import { useState } from "react";
import { BsPersonFillAdd } from "react-icons/bs";

const UpdateContactForm = ({ handleUpdateContact, updateFormData }: any) => {
  const [name, setName] = useState(updateFormData.name);
  const [phone, setPhone] = useState(updateFormData.phone);
  const [email, setEmail] = useState(updateFormData.email);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = {
      name: name,
      phone: phone,
      email: email,
    };

    handleUpdateContact(updateFormData._id, formData);
  };
  
  return (
    <form className="p-5 w-96" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600 font-semibold tracking-wide">
          Name:
        </label>
        <div id="name" className="w-full">
          <input
            required
            name="name"
            placeholder="Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-gray-600 focus:bg-white focus:ring-1 focus:ring-gray-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="leading-7 text-sm text-gray-600 font-semibold tracking-wide">
          Phone:
        </label>
        <div id="phone" className="w-full">
          <input
            required
            name="phone"
            type="number"
            placeholder="phone: {9876789876}"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-gray-600 focus:bg-white focus:ring-1 focus:ring-gray-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600 font-semibold tracking-wide">
          Email:
        </label>
        <div id="email" className="w-full">
          <input
            required
            name="email"
            placeholder="email: {xyz@gmail.com}"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-gray-600 focus:bg-white focus:ring-1 focus:ring-gray-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>

      <button className="w-full flex items-center justify-center gap-3 mt-3 cursor-pointer rounded-md border-2 border-solid border-black bg-black text-white hover:bg-transparent px-4 py-2 text-base hover:text-black transition-all duration-300 ease-in-out">
        <BsPersonFillAdd className="text-xl" /> Update Contact
      </button>
    </form>
  );
};

export default UpdateContactForm;
