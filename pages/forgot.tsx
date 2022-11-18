import Link from 'next/link'
import { Button } from '../components/Button'
import style from '../styles/forgot.module.css'
import { Input } from '../components/Input'

export const Forgot = () => {

  return (
    <section className={style.container}>
        <div className='md:h-full m-auto block md:max-w-[500px]'>
            <h1 className='text-xl text-center text-title mb-4 font-semibold'>FORGOT PASSWORD</h1>
            <p className='text-text text-center mb-4'>Enter your e-mail to request a password reset.</p>

            <form className='w-full mb-4'>
                <div className='mb-1'>
                    <Input type='email' placeholder='E-mail'/>
                </div>
            </form>

            <div className='gap-4 flex flex-col mb-4 w-full'>
                <Button className='bg-black'>Send now</Button>
            </div>

            <p className='text-center text-text'>
            Having Problem?  
            <Link className='text-primary' href='#'>
                {' '} Need Help
            </Link>
            </p>
      </div>
    </section>
  )

}


export default Forgot