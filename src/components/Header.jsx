import React, { useEffect, useState } from 'react';
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import useDebounce from '../hooks/useDebounce';
import { useDispatch } from 'react-redux';
import { searchMobiles } from '../Redux/slices/mobile.slice';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [search , setSearch]  =useState("");
    const deBouncedCallback = useDebounce(( e => setSearch(e.target.value)));
    const handleApiCall = async() => {
        await dispatch(searchMobiles(search))
    }

    useEffect(() => {
        handleApiCall();

    }, [search])
  return (
        <header className='flex flex-col gap-3 justify-between p-6 items-center bg-white   '>
           <div className='flex w-full  justify-between items-center'>
           <div className='font-semibold text-2xl tracking-widest ' >
                Exclusive
            </div>
            <div className='sm:flex hidden items-center  gap-3 border p-2 border-black/10   '>
                <input name='search'  onChange={deBouncedCallback} className='bg-inherit focus:outline-none' type="text" placeholder='What are you looking for ?  ' />
                <button>
                    <CiSearch/>
                </button>
            </div>

            
            <div className='flex  gap-3'>
                
                
                <div onClick={()=> navigate("/cart")} className='text-2xl cursor-pointer    '>
                    <  CiShoppingCart/>   
                </div>
            </div>
           </div>
           <div>
                <div className='flex sm:hidden items-center  gap-3 border p-2 border-black/10   '>
                        <input className='bg-inherit focus:outline-none' type="text" placeholder='What are you looking for ?  ' />
                        <button>
                            <CiSearch/>
                        </button>
                </div>
           </div>
        </header>
    );
};

export default Header;