/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import appstore from '../assets/app-store.png'
import playstore from '../assets/play.png'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center h-screen font-pt-sans ">
        <div>
          <div className="text-center my-4">
            <h1 class="text-4xl font-medium ">Besim Sherifi</h1>
            <h4 className='font-medium text-[lightslategray]'>full stack & mobile developer </h4>
          </div>
          <p className="max-w-lg font-light">Hello, I'm full-stack and mobile developer with experience in different technologies like NodeJs, Angular, React and Next and in the mobile development landscape, I am proficient in crafting native and cross-platform applications using Swift and Flutter (Dart)</p>
          <p className="text-center my-10 font-light">selected work:</p>
          <div className="text-center font-medium">
            {/* <p className='max-w-fit mx-auto text-center text-sm font-medium transition-colors underline-animation cursor-pointer mb-2'>dejabijoux</p> */}
            <div className="flex mx-auto text-center justify-center items-center mb-3" >
              <Link href='https://deja-store-besimsherifi.vercel.app/' target='_blank'><p className='max-w-fit  text-sm font-medium transition-colors underline-animation cursor-pointer'>dejabijoux</p></Link>
              <Image
                className='ml-2 cursor-pointer'
                src={appstore}
                width={20}
                height={20}
                alt="appstore"
              />
            </div>
            {/* <p className='max-w-fit mx-auto text-center text-sm font-medium transition-colors underline-animation cursor-pointer mb-2'>kika storen</p> */}
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
            <Link href='https://www.besi-storen.ch/' target='_blank'><p className='max-w-fit mx-auto text-center text-sm font-medium transition-colors underline-animation cursor-pointer mb-2'>besi storen</p></Link>
            <Link href='https://neo.swiss/home' target='_blank'><p className='max-w-fit mx-auto text-center text-sm font-medium transition-colors underline-animation cursor-pointer mb-2'>neo swiss</p></Link>
            <Link href='https://www.dj-raumausstatter.de/' target='_blank'><p className='max-w-fit mx-auto text-center text-sm font-medium transition-colors underline-animation cursor-pointer mb-2'>d.j raumausstatter</p></Link>
            <Link href='https://sa-autotoss.ch/' target='_blank'><p className='max-w-fit mx-auto text-center text-sm font-medium transition-colors underline-animation cursor-pointer mb-2'>sa autotoss</p></Link>
          </div>

        </div>

      </div >


    </>
  )
}
