/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import appstore from '../assets/app-store.png'
import playstore from '../assets/play.png'
import Link from 'next/link'


export default function Home() {

  const emailAddress = 'sherifibesim@gmail.com';
  const subject = '';

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;


  return (
    <>
      <div className="flex items-center justify-center h-screen font-pt-sans ">
        <div>
          <div className="text-center my-4">
            <h1 class="text-4xl font-medium ">Besim Sherifi</h1>
            <h4 className='font-light text-[lightslategray]'>full stack & mobile developer </h4>
          </div>
          <p className="max-w-lg font-light mx-5">Hello, I'm full-stack and mobile developer with experience in different technologies like NodeJs, Angular, React and Next and in the mobile development landscape, I am proficient in crafting native and cross-platform applications using Swift and Flutter (Dart)</p>
          <p className="text-center my-10 font-light">selected work:</p>
          <div className="text-center font-medium">
            {/* <p className='max-w-fit mx-auto text-center text-sm font-medium transition-colors underline-animation cursor-pointer mb-2'>dejabijoux</p> */}
            <div className="flex mx-auto text-center justify-center items-center mb-3" >
              <Link href='https://dejabijoux.ch/' target='_blank'><p className='max-w-fit  text-sm font-medium transition-colors underline-animation cursor-pointer'>dejabijoux</p></Link>
              <Link href='https://apps.apple.com/us/app/dejabijoux/id6477193818' target='_blank'>
                <Image
                  className='ml-2 cursor-pointer'
                  src={appstore}
                  width={20}
                  height={20}
                  alt="appstore"
                />
              </Link>
            </div>
            {/* <p className='max-w-fit mx-auto text-center text-sm font-medium transition-colors underline-animation cursor-pointer mb-2'>kika storen</p> */}


            <div className='flex mx-auto text-center justify-center mb-3'>
              <Link href='https://www.dj-raumausstatter.de/' target='_blank'>
                <p className='max-w-fit mx-auto text-center text-sm font-medium transition-colors underline-animation cursor-pointer '>d.j raumausstatter</p>
              </Link>
              <Link href='https://apps.apple.com/mk/app/dj-raumausstatter/id6475651787' target='_blank'>
                <Image
                  className='cursor-pointer  ml-2'
                  src={appstore}
                  width={20}
                  height={20}
                  alt="appstore"
                />
              </Link>
            </div>


            <div className="flex mx-auto text-center justify-center items-center mb-2" >
              <Link href='https://kikastoren.ch/' target='_blank'><p className='max-w-fit  text-sm font-medium transition-colors underline-animation cursor-pointer'>kika storen</p></Link>
              <Link href='https://apps.apple.com/app/kika-storen/id6448458335?platform=iphone' target='_blank'>
                <Image
                  className='cursor-pointer mr-4 ml-2'
                  src={appstore}
                  width={20}
                  height={20}
                  alt="appstore"
                />
              </Link>
              <Link href='https://play.google.com/store/apps/details?id=com.kikastoren.kikastoren' target='_blank'>
                <Image
                  className='cursor-pointer'
                  src={playstore}
                  width={20}
                  height={20}
                  alt="playstore"
                />
              </Link>
            </div>




            <div className='flex mx-auto text-center justify-center mb-3'>
              <Link href='' className='cursor-default'>
                <p className='max-w-fit mx-auto text-center text-sm font-medium transition-colors '>ferati transporte</p>
              </Link>
              <Link href='https://apps.apple.com/us/app/ferati-transporte/id6476165489?platform=iphone' target='_blank'>
                <Image
                  className='cursor-pointer  ml-2'
                  src={appstore}
                  width={20}
                  height={20}
                  alt="appstore"
                />
              </Link>
            </div>


            <Link href='https://www.besi-storen.ch/' target='_blank'><p className='max-w-fit mx-auto text-center text-sm font-medium transition-colors underline-animation cursor-pointer mb-2'>besi storen</p></Link>
            <Link href='https://neo.swiss/home' target='_blank'><p className='max-w-fit mx-auto text-center text-sm font-medium transition-colors underline-animation cursor-pointer mb-2'>neo swiss</p></Link>



            {/* <Link href='https://sa-autotoss.ch/' target='_blank'><p className='max-w-fit mx-auto text-center text-sm font-medium transition-colors underline-animation cursor-pointer mb-2'>sa autotoss</p></Link> */}
          </div>

          <div className='flex justify-center text-[lightslategray] mt-10'>
            <div className='mr-4'>
              <Link href={mailtoLink}>
                <p className=' font-light cursor-pointer'>email</p>
              </Link>
            </div>
            <div>
              <Link href='https://www.linkedin.com/in/besim-sherifi-019328193/' target="_blank">
                <p className='font-light cursor-pointer'>linkedin</p>
              </Link>
            </div>
            {/* <br /> */}
          </div>
          <p className='text-center text-[12px] mt-20'>ja kem nis nOpel Cors tash na ki nApple Stores</p>

        </div>

      </div >


    </>
  )
}


