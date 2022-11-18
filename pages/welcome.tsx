import style from '../styles/welcome.module.css'
import { Input } from '../components/Input'
import { CardSmall } from '../components/CardSmall'
import { CardGret } from '../components/CardGret'
import { MenuFooter } from '../components/MenuFooter'

export const Welcome = () => {

    return (
      <section className={style.container}>
        <div className='border-solid border-2 border-red-800 flex w-auto justify-center'>
            <div className='border-solid border-2 border-blue-800'>
                <button className='text-black'>botao</button>
            </div>
            <div className='border-solid border-2 border-green-800 w-screen'>
                <div>
                    <p className='text-black text-center'>Deliver to</p>
                </div>
                <div>
                    <p className='text-primary text-center'>Parijat, Housing Estate</p>
                </div>
            </div>
            <div className='border-solid border-2 border-orange-800 text-black'>
                IMG
            </div>
        </div>
        <div className='mt-8 border-2 border-red-800'>
            <div className='mb-4'>
                <h1 className='text-black font-bold'>Welcome Foody!</h1>
            </div>
            <div>
                <Input className='p-2 bg-gray-200 w-auto text-black' placeholder='Find Your Food'/>
            </div>
        </div>
        <div>
            <div className="mt-6 border-2 border-blue-800">
                <h2 className='font-bold text-black'>Nearby Place</h2>
            </div>
            <CardSmall/>
            <CardSmall/>
            <CardSmall/>
        </div>
        <div>
            <div className="mt-6 border-2 border-blue-800">
                <h2 className='font-bold text-black'>Popular Restaurants</h2>
            </div>
            <div className='flex'>
                <CardGret/>
                
            </div>
        </div>
        <div className='border-2 border-red-800 mt-4 flex justify-center'>
            <MenuFooter/>
        </div>

      </section>
    )
  
  }
  
  
export default Welcome