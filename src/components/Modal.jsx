import ShowModal from "./ShowModal";
const Modal = ({handleCloseModal,children}) => {

  return (
    <div className="grid fixed z-50 top-0 left-0 w-full h-full bg-gray-900 bg-opacity-70">
      <div className="grid place-self-center w-1/2 md:w-1/3 h-2/3 md:h-auto overflow-y-auto p-3 bg-white rounded-lg">
        <button onClick={handleCloseModal} className="place-self-end border border-red-400  hover:bg-red-100  rounded-lg mb-2">
          <svg className="w-6 h-6 text-red-400   " viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" >
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
          </svg>
        </button>
        {children}
        
      </div>
    </div>
  );
};
export default Modal;
