import style from '../styles/welcome.module.css'
import { Input } from '../components/Input'
import { CardSmall } from '../components/CardSmall'
import { CardGret } from '../components/CardGret'
import { MenuFooter } from '../components/MenuFooter'
import { VscListFlat } from 'react-icons/vsc'

export const Welcome = () => {

    return (
      <section className={style.container}>
        <div className='flex w-auto justify-center'>
            <div>
                <button className='text-black'>
                    <VscListFlat className='w-10 h-10'/>
                </button>
            </div>
            <div className='w-full'>
                <div>
                    <p className='text-black text-center'>Deliver to</p>
                </div>
                <div>
                    <p className='text-primary text-center'>Parijat, Housing Estate</p>
                </div>
            </div>
            <div>
                <img className='w-14 h-14 rounded-full' src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80"/>
            </div>
        </div>
        <div className='mt-8'>
            <div className='mb-4'>
                <h1 className='text-black font-bold'>Welcome Foody!</h1>
            </div>
            <div>
                <Input className='p-2 bg-gray-200 w-auto text-black' placeholder='Find Your Food'/>
            </div>
        </div>
        <div>
            <div className="mt-6">
                <h2 className='font-bold text-black'>Nearby Place</h2>
            </div>
            <CardSmall/>
            <CardSmall/>
            <CardSmall/>
        </div>
        <div>
            <div className="mt-6">
                <h2 className='font-bold text-black'>Popular Restaurants</h2>
            </div>
            <div className='flex'>
                <CardGret/>
            </div>
        </div>
            <div className='mt-4 flex justify-center fixed bottom-0 left-1/2 -translate-x-1/2 bg-white w-full border-t-2 border-gray-300'>
                <MenuFooter/>
            </div>
      </section>
      
    )
  
  }
  
  
export default Welcome