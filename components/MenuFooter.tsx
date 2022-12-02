import Link from 'next/link'
import { AiOutlineHome, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineOrderedList } from 'react-icons/ai'
import { VscAccount } from 'react-icons/vsc'

export const MenuFooter = () => {
  
    return (
        <ul className='flex space-x-4 p-2'>
            <li className='w-16 h-16 flex justify-center'>
                <Link href='/'>
                  <AiOutlineHome className='w-8 h-8 m-auto'/>
                  Home
                </Link>
            </li>
            <li className='w-16 h-16 flex justify-center'>
                <Link href='/search'>
                  <AiOutlineSearch className='w-8 h-8 m-auto'/>
                  Search
                </Link>
            </li>
            <li className='w-16 h-16 flex justify-center'>
                <Link href='/comprar'>
                  <AiOutlineShoppingCart className='w-8 h-8 m-auto'/>
                  Purchase
                </Link>
            </li>
            <li className='w-16 h-16 flex justify-center'>
                <Link href='/order'>
                  <AiOutlineOrderedList className='w-8 h-8 m-auto'/>
                  Order
                </Link>
            </li>
            <li className='w-16 h-16'>
                <Link href='/account'>
                  <VscAccount className='w-8 h-8 m-auto'/>
                  Account
                </Link>
            </li>
        </ul>
  
    )
  }