import logo from '../assets/logo/logo.png'
const Navbar = ({ handleShowModal, handleSearchItem,handleIsOpenSidebar,isOpenSidebar }) => {
  const onChange = (e) => {
    handleSearchItem(e.target.value);
  };
  return (
    <>
      <div className="nav-container z-40 sticky top-0 sm:col-start-1 sm:col-end-9 sm:row-span-1 rounded-full ">
        <div className=" items-center backdrop-blur-lg bg-white/70 shadow-md h-16 flex justify-between">
        <button onClick={handleIsOpenSidebar} className=" duration-300  transition-transform sm:-translate-x-full translate-x-4">
          {isOpenSidebar?<svg className="w-7 h-7 text-violet-900   " viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" >
                            <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                          </svg>
                        :<svg className="w-7 h-7 text-violet-900   " viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" >
                          <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
                        </svg>
           }</button>
          
          <div className="flex justify-end items-center ">
          <div className=" bg-violet-300 rounded rounded-r-none p-1 w-8 h-8 "><svg className=" text-gray-200  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
          </svg></div>
          <input
            type="text"
            placeholder="search..."
            onChange={onChange}
            className="sm:w-80 lg:mr-96  w-2/5 shadow-lg p-1 outline-none border border-gray-200 rounded-lg rounded-l-none"

          />
          </div>

          <div className="flex items-center md:me-10 md:text-2xl text-lg text-violet-900 font-bold "><img className="w-16 " src={logo} alt="" /> <span>TO DO LIST</span></div>
          
        </div>
        
      </div>
    </>
  );
};
export default Navbar;
