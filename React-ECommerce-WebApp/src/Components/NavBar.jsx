import {BsSearch} from 'react-icons/bs';
import { AiOutlineUser } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import CartCount from './CartCount';

const NavBar = () => {
  return (
    <>
      <div className="sticky top-0 bg-white z-10">
         <div className="container hidden lg:block">
            <div className="flex justify-between items-center p-8">
                <h1 className="text-4xl font-medium">Logo</h1>
                <div className="relativ w-full max-w[280px]">
                    <input className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[38px]"  
                    type="text" 
                    placeholder="search product..."/>
                    <BsSearch className='absolute top-0 right-0 mt-4 mr-5 text-gray-500'  size={20}/>
                </div> 
        <div className="flex gap-4">
            <div className="icon_wrapper">
              <AiOutlineUser />
            </div>
            <div className="icon_wrapper relative">
              <IoCartOutline />
              <CartCount size="w-[25px] h-[25px]"/>
            </div>
        </div>   

            </div>
         </div>
      </div>
    </>
  )
}

export default NavBar