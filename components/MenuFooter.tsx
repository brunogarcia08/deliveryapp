import Link from 'next/link'

export const MenuFooter = () => {
  
    return (
        <ul className='flex space-x-4 absolut'>
            <li>
                <Link href='/'>
                 Home
               </Link>
            </li>
            <li>
                <Link href='/search'>
                 Search
               </Link>
            </li>
            <li>
                <Link href='/comprar'>
                 Comprar
               </Link>
            </li>
            <li>
                <Link href='/order'>
                 Order
               </Link>
            </li>
            <li>
                <Link href='/account'>
                 Account
               </Link>
            </li>
        </ul>
  
    )
  }