import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../components/Button'
import style from '../styles/onboarding3.module.css'

export const Onboarding3 = () => {

  return (
    <section className={style.container}>
      <div className='md:w-1/2'>
        <Image
          src="/images/onboarding3.svg"
          alt="Entregas"
          width={540}
          height={540}
          sizes="(max-width: 640px) 100%,
                (max-width: 1200px) 50vw,
                33vw"
        />
      </div>

      <div className='md:h-full md:w-1/2'>

        <h2 className='text-xl text-center text-title mb-4 font-semibold'>Quick Food Delivery</h2>

        <p className='text-text text-center mb-4'>
          Loved the class! Such beautiful land and collective impact infrastructure social entrepreneur.
        </p>

        <div className='gap-4 flex flex-col mb-4 w-full'>
          <Button className={style.buttonFacebook}>Sign in with Facebook</Button>
          <Button className='bg-black'>Sign in</Button>
        </div>

        <p className='text-center text-text'>
          Or Start to 
          <Link className='text-primary' href='#'>
            {' '} Search Now
          </Link>
        </p>
      </div>
    </section>
  )

}


export default Onboarding3
