import Link from 'next/link'
import { Button } from '../components/Button'
import style from '../styles/signin.module.css'
import { Input } from '../components/Input'

export const Signin = () => {

  return (
    <section className={style.container}>
        <div className='md:h-full m-auto block md:max-w-[500px]'>
            <h1 className='text-xl text-center text-title mb-4 font-semibold'>SIGN IN</h1>
            <p className='text-text text-center mb-4'>Complete this step for best adjustment.</p>

            <form className='w-full mb-4'>
                <div className='mb-2'>
                    <Input 
                        label='Your e-mail'
                        type="email" id="email" placeholder='E-mail'/>
                </div>
                <div  className='mb-2'>
                    <Input
                        // errorMessage='Campo obrigatório'
                        label='Password'
                        type="password" id="password" placeholder='Password'/>
                </div>
            </form>

            <div className='gap-4 flex flex-col mb-4 w-full'>
                <Button className='bg-black'>Sign in</Button>
                <Button variant='facebook'>Sign in with Facebook</Button>
            </div>

            <p className='text-center text-text'>
            I don&apos;t have account? 
            <Link className='text-primary' href='signup'>
                {' '} Sign Up
            </Link>
            </p>
      </div>
    </section>
  )

}


export default Signin