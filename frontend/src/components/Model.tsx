import { RxCross2 } from "react-icons/rx";

const Model = ({ isVisible, onClose, title, children }: any) => {
  if (!isVisible) return null;
  return (
    <>
      <div className="fixed inset-0 bg-primary-1000 bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50 text-gray-700">
        <div className="flex flex-col gap-2 h-auto w-auto">
          <div className="relative h-full w-full bg-white rounded-b rounded-t-md flex items-center px-4 py-2 text-primary-1000 font-medium text-lg shadow-lg">
            <div>{title}</div>
            <span className="absolute w-8 h-8 bg-white rounded-md -right-2 -top-1 shadow-lg flex items-center justify-center hover:right-0 hover:top-1 modalClose cursor-pointer transition-all" onClick={onClose}>
              <RxCross2 />
            </span>
          </div>
          <div className="h-full w-full rounded-t bg-white rounded-b-md px-4 py-5 text-primary-1000 shadow-lg">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Model;
