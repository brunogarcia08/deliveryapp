import Link from 'next/link'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import style from '../styles/signup.module.css'

export const Signup = () => {

  return (
    <section className={style.container}>
        <div className='md:h-full m-auto block md:max-w-[500px]'>
            <h1 className='text-xl text-center text-title mb-4 font-semibold'>SIGN UP</h1>
            <p className='text-text text-center mb-4'>Complete this step for best adjustment.</p>

            <form className='w-full mb-4'>
                <div className='mb-1'>
                    <Input 
                        label='E-mail' 
                        type="email" id="email" placeholder='Digite seu e-mail'/>
                </div>
                <div className='mb-1'>
                    <Input 
                        label='Password' 
                        type="password" id="password" placeholder='Digite seu password'/>
                </div>              
                <div className='mb-1'>
                    <Input 
                        label='Phone' 
                        type="tel" id="phone" placeholder='Digite seu telefone'/>
                </div>
            </form>

            <div className='gap-4 flex flex-col mb-4 w-full'>
                <Button className='bg-black'>Sign up</Button>
            </div>

            <p className='text-center text-text'>
            I already have a account?  
            <Link className='text-primary' href='/signin'>
                {' '} Sign In
            </Link>
            </p>
      </div>
    </section>
  )

}


export default Signup