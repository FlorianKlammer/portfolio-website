"use client";

import Head from 'next/head';
import Image from 'next/image';
import {BsMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai';
import deved from "../../public/dev-ed-wave.png";
import design from '../../public/design.png';
import code from '../../public/code.png';
import consulting from '../../public/consulting.png';
import web1 from '../../public/web1.png';
import web2 from '../../public/web2.png';
import web3 from '../../public/web3.png';
import web4 from '../../public/web4.png';
import web5 from '../../public/web5.png';
import web6 from '../../public/web6.png';
import {useState} from 'react';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Florian Klammer Portfolio</title>
      </Head>


      <main className='bg-white text-black px-10 md:px-20 lg:px-40 dark:bg-gray-800 dark:text-white'>

        <section className='py-20'>
          <nav className=' py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>Florian Klammer</h1>
            <ul className="flex items-center">
              <li><BsMoonStarsFill className='cursor-pointer text-2xl' onClick={() => setDarkMode(!darkMode)} /></li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 dark:text-teal-400 font-medium md:text-6xl max-w-lg mx-auto'>Florian Klammer</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Technically an Artist.</h3>
            <p className="text-md py-5 leading-8 text-gray-600 dark:text-gray-400 md:text-xl">Sample Text</p>
          </div>

          <div className='text-5xl flex justify-center gap-16'>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillInstagram />
          </div>

          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={deved} layout='fill' objectFit='cover'/>
          </div>
        </section>


        <section className=''>
          <div>
            <h3 className='text-3xl py-1'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-600 dark:text-gray-400'>
              Sample Text
            </p>
            <p className='text-md py-2 leading-8 text-gray-600 dark:text-gray-400'>
              Sample Text Part 2
            </p>
            
          </div>

          <div className='lg:flex gap-10 '>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white dark:text-black'>
              <div className='flex justify-center '>
                <Image src={design} width={100} height={100} />
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>Creating elegant design suited for your needs following core design theory</p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white dark:text-black'>
              <div className='flex justify-center'>
                <Image src={code} width={100} height={100} />
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>Creating elegant design suited for your needs following core design theory</p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white dark:text-black'>
              <div className='flex justify-center'>
                <Image src={consulting} width={100} height={100} />
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>Creating elegant design suited for your needs following core design theory</p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>
          </div>
        </section>

        <section className=''>
          <div>
            <h3 className='text-3xl py-1'>Portfolio</h3>
            <p className=''></p>
          </div>

          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={web1} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web2} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web3} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web4} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web5} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web6} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"/>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
