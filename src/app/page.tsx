import { Button } from "@/components/ui/moving-border";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { RiPlayCircleLine } from "react-icons/ri";
import {
  PiStarFourBold,
  PiCubeTransparentLight,
  PiStarFourFill,
} from "react-icons/pi";
import { TbHexagon3D } from "react-icons/tb";
import { MdCircleNotifications } from "react-icons/md";
import { Spotlight } from "@/components/ui/Spotlight";


export default function Home() {
  return (
    <main className='min-h-screen md:max-w-5xl md:mx-auto px-6 md:px-0'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/*Grid - 1 */}
        <div className='relative flex flex-col gap-5 mt-14'>
          <Spotlight
            className='-top-40 left-0 md:left-60 md:-top-20'
            fill='#ff5555'
          />
          <h1 className='text-5xl font-bold z-20'>
            Make The Best
            <br />
            Financial Decisions
          </h1>
          <p className='text-[14px] text-gray-600 dark:text-gray-400 font-medium'>
            Cum Et Convallis Risus Placerat Aliquam, Nuno. Scelerisque Aliquet
            Faucibus Tincidunt Eu Adipiscing Socils Arcu Lorem Porttiton
          </p>
          <div className='flex justify-start gap-10'>
            <Button
              borderRadius='4px'
              className='bg-black text-white border-slate-800 rounded-[3px]'
            >
              Get Started <IoIosArrowRoundForward className='w-7 h-5' />
            </Button>
            <span className='flex justify-center items-center gap-1 text-xl'>
              <RiPlayCircleLine className='h-7 w-7' /> Watch Video
            </span>
          </div>
          <Image
            src='/Group35924.png'
            alt='hero image'
            width={420}
            height={250}
            className='-mt-5'
          />
        </div>
        {/*Grid - 2 */}
        <div>
          <div className='max-h-[400px] max-w-[400px] relative md:top-14 left-24 z-10'>
            <div className='h-[360px] w-[360px] border-solid border-[1px] border-black dark:border-white absolute top-0 right-0 rounded-full rounded-tl-[3000px] rounded-br-[3000px]'></div>
            <div className='h-[360px] w-[360px] border-solid border-[1px] border-black dark:border-white absolute top-7 right-5 rounded-full rounded-tl-[3000px] rounded-br-[3000px]'></div>
            <div className='h-[360px] w-[360px] border-solid border-[1px] border-black dark:border-white absolute top-14 right-10 rounded-full rounded-tl-[3000px] rounded-br-[3000px]'></div>
          </div>
          
          <div className='md:max-h-[500px] md:max-w-[600px] h-[500px] w-[600px] relative'>
            <Image
              src='/iPhone-1.png'
              alt='I-Phone 13 pro'
              width={400}
              height={500}
              className='absolute top-0 left-0 z-40'
            />
            <Image
              src='/iPhone-2.png'
              alt='I-Phone 13 pro'
              width={400}
              height={500}
              className='absolute top-10 left-20 z-30'
            />
            <Image
              src='/iPhone-1.png'
              alt='I-Phone 13 pro'
              width={400}
              height={500}
              className='absolute top-20 left-40 z-20'
            />
          </div>
        </div>
        {/*Grid - 3 */}
        <div className='ml-16 md:ml-0'>
          <div className='max-h-[400px] max-w-[400px] relative z-10'>
            <div className='h-[370px] w-[380px] border-solid border-[1px] border-black dark:border-white absolute top-0 right-0 rounded-full rounded-tl-[3000px] rounded-br-[3000px]'></div>
            <div className='h-[370px] w-[380px] border-solid border-[1px] border-black dark:border-white absolute top-5 right-5 rounded-full rounded-tl-[3000px] rounded-br-[3000px]'></div>
            <div className='h-[370px] w-[380px] border-solid border-[1px] border-black dark:border-white absolute top-10 right-10 rounded-full rounded-tl-[3000px] rounded-br-[3000px]'></div>
          </div>
          <div className='md:max-h-[500px] md:max-w-[600px] h-[500px] w-[600px] relative z-20'>
            <Image
              src='/iPhone-3.png'
              alt='I-Phone 13 pro'
              width={355}
              height={380}
              className='absolute -top-9 left-12 z-30'
            />
          </div>
        </div>
        {/*Grid - 4 */}
        <div className='flex flex-col gap-5 -mt-12 md:-mt-0'>
          <div>
            <h3 className='text-lg font-semibold text-[#ff5555] tracking-widest'>
              FEATURES
            </h3>
            <h1 className='text-5xl font-bold'>Uifry Premium</h1>
          </div>
          <div>
            <span className='flex justify-start items-center gap-1'>
              <PiStarFourBold className='w-5 h-5 text-[#ff5555]' />
              <h2 className='font-bold  text-xl'>Budgeting Intervals</h2>
            </span>
            <p className='text-[14px] text-gray-600 dark:text-gray-400 font-medium'>
              Cum Et Convallis Risus Placerat Aliquam, Nuno. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Socils Arcu Lorem Porttiton
            </p>
          </div>
          <div>
            <span className='flex justify-start items-center gap-1'>
              <TbHexagon3D className='w-5 h-5 text-[#ff5555]' />
              <h2 className='font-bold  text-xl'>Budgeting Intervals</h2>
            </span>
            <p className='text-[14px] text-gray-600 dark:text-gray-400 font-medium'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              eos impedit reiciendis explicabo labore debitis a nihil.
            </p>
          </div>
          <div>
            <span className='flex justify-start items-center gap-1'>
              <PiCubeTransparentLight className='w-5 h-5 text-[#ff5555]' />
              <h2 className='font-bold  text-xl'>Budgeting Intervals</h2>
            </span>
            <p className='text-[14px] text-gray-600 dark:text-gray-400 font-medium'>
              Cum Et Convallis Risus Placerat Aliquam, Nuno. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Socils Arcu Lorem Porttiton
            </p>
          </div>
        </div>
        {/*Grid - 5 */}
        <div className='flex items-center justify-center flex-col gap-3'>
          <h3 className='text-lg font-semibold text-[#ff5555] tracking-widest'>
            ADVATNAGES
          </h3>
          <h1 className='text-5xl font-bold '>Why Choose Uifry?</h1>

          <span className='flex justify-start items-center gap-1'>
            <MdCircleNotifications className='w-8 h-8 text-[#ff5555]' />
            <h2 className='font-bold text-xl'>Clever Notifications</h2>
          </span>
          <p className='text-[14px] text-gray-600 dark:text-gray-400 font-medium'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa quis
            fugit veritatis doloribus praesentium eos quaerat dolorum vel,
            consequuntur dolorem ab adipisci dolores sit numquam? Quibusdam
            maxime nisi adipisci eos. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Suscipit, dolores repellat deserunt alias fugit
            accusamus voluptate ratione facere consequatur non. Ratione dolorem
            adipisci voluptate tempore cumque mollitia laboriosam expedita
            placeat.
          </p>
        </div>
        {/*Grid - 6 */}
        <div className='ml-14 md:ml-0'>
          <div className='max-h-[400px] max-w-[400px] relative z-10'>
            <div className='h-[370px] w-[380px] border-solid border-[1px] border-black dark:border-white absolute top-0 right-0 rounded-full rounded-tl-[3000px] rounded-br-[3000px]'></div>
            <div className='h-[370px] w-[380px] border-solid border-[1px] border-black dark:border-white absolute top-5 right-5 rounded-full rounded-tl-[3000px] rounded-br-[3000px]'></div>
            <div className='h-[370px] w-[380px] border-solid border-[1px] border-black dark:border-white absolute top-10 right-10 rounded-full rounded-tl-[3000px] rounded-br-[3000px]'></div>
          </div>
          <div className='md:max-h-[500px] md:max-w-[600px] h-[500px] w-[600px] relative z-20'>
            <Image
              src='/iPhone-4.png'
              alt='I-Phone 13 pro'
              width={355}
              height={380}
              className='absolute -top-9 left-12 z-30'
            />
            <Image
              src='/OnHold.png'
              alt='I-Phone 13 pro'
              width={200}
              height={80}
              className='absolute top-40 left-40 z-40'
            />
          </div>
        </div>
        {/*Grid - 7 */}
        <div className='ml-14 md:ml-0'>
          <div className='max-h-[400px] max-w-[400px] relative z-10'>
            <div className='h-[370px] w-[380px] border-solid border-[1px] border-black dark:border-white absolute top-0 right-0 rounded-full rounded-tl-[3000px] rounded-br-[3000px]'></div>
            <div className='h-[370px] w-[380px] border-solid border-[1px] border-black dark:border-white absolute top-5 right-5 rounded-full rounded-tl-[3000px] rounded-br-[3000px]'></div>
            <div className='h-[370px] w-[380px] border-solid border-[1px] border-black dark:border-white absolute top-10 right-10 rounded-full rounded-tl-[3000px] rounded-br-[3000px]'></div>
          </div>
          <div className='md:max-h-[500px] md:max-w-[600px] h-[500px] w-[600px] relative z-20'>
            <Image
              src='/iPhone-3.png'
              alt='I-Phone 13 pro'
              width={355}
              height={380}
              className='absolute -top-9 left-12 z-30'
            />
            <Image
              src='/card.png'
              alt='card'
              width={200}
              height={60}
              className='absolute top-24 left-[110px] z-40'
            />
          </div>
        </div>
        {/*Grid - 8 */}
        <div className=' flex items-center justify-center flex-col gap-3'>
          <span className='flex justify-start items-center gap-1'>
            <div className='w-8 h-8 rounded-full bg-[#ff5555] flex justify-center items-center'>
              <PiStarFourFill className='w-4 h-4 text-white' />
            </div>

            <h2 className='font-bold text-xl'>Fully Customizable</h2>
          </span>
          <p className='text-[14px] text-gray-600 dark:text-gray-400 font-medium'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa quis
            fugit veritatis doloribus praesentium eos quaerat dolorum vel,
            consequuntur dolorem ab adipisci dolores sit numquam? Quibusdam
            maxime nisi adipisci eos. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Suscipit, dolores repellat deserunt alias fugit
            accusamus voluptate ratione facere consequatur non. Ratione dolorem
            adipisci voluptate tempore cumque mollitia laboriosam expedita
            placeat.
          </p>
        </div>
      </div>
      <div className=''>
        <h3 className='text-lg font-semibold tracking-widest text-center'>
          TESTIMONIAL
        </h3>
        <h1 className='text-5xl font-bold text-center'>
          What Our Users <br /> Say About Us?
        </h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className='md:mt-20 mt-12 ml-14 md:ml-0'>
          <div className='max-h-[400px] max-w-[400px] relative z-10'>
            <div className='h-[350px] w-[350px] border-solid border-[1px] border-black dark:border-white absolute top-0 right-0 rounded-full rounded-tl-[3000px] rounded-br-[3000px]'></div>
            <div className='h-[350px] w-[350px] border-solid border-[1px] border-black dark:border-white absolute top-5 right-5 rounded-full rounded-tl-[3000px] rounded-br-[3000px]'></div>
            <div className='h-[350px] w-[350px] border-solid border-[1px] border-black dark:border-white absolute top-10 right-10 rounded-full rounded-tl-[3000px] rounded-br-[3000px]'></div>
          </div>
          <div className='md:max-h-[500px] md:max-w-[600px] h-[500px] w-[600px] relative z-20'>
            <Image
              src='/Group28.png'
              alt='profile pic'
              width={100}
              height={100}
              className='absolute top-40 left-40 z-30 border-solid border-[1px] border-black dark:border-white rounded-full'
            />
            <Image
              src='/Group27.png'
              alt='profile pic'
              width={50}
              height={50}
              className='absolute top-6 left-10 z-30 border-solid border-[1px] border-black dark:border-white rounded-full'
            />
            <Image
              src='/Group29.png'
              alt='profile pic'
              width={50}
              height={50}
              className='absolute top-[310px] right-[214px] z-30 border-solid border-[1px] border-black dark:border-white rounded-full'
            />
            <Image
              src='/Group30.png'
              alt='profile pic'
              width={50}
              height={50}
              className='absolute top-60 left-10 z-30 border-solid border-[1px] border-black dark:border-white rounded-full'
            />
            <Image
              src='/Group31.png'
              alt='profile pic'
              width={50}
              height={50}
              className='absolute top-28 right-52 z-30 border-solid border-[1px] border-black dark:border-white rounded-full'
            />
            <div className='w-10 h-10 rounded-full bg-[#ff5555] flex justify-center items-center absolute top-[190px] left-[235px] z-40'>
              <span className='font-bold text-white dark:text-black text-4xl mt-3'>
                ❝
              </span>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center flex-col gap-5 md:mt-24'>
          <h2 className='font-bold text-xl'>
            The Best Financial Accounting
            <br />
            App Ever!
          </h2>
          <p className='text-[14px] text-gray-600 dark:text-gray-400 font-medium'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa quis
            fugit veritatis doloribus praesentium eos quaerat dolorum vel,
            consequuntur dolorem ab adipisci dolores sit numquam? Quibusdam
            maxime nisi adipisci eos. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Suscipit, dolores repellat deserunt alias fugit
            accusamus voluptate ratione facere consequatur non. Ratione dolorem
            adipisci voluptate tempore cumque mollitia laboriosam expedita
            placeat.
          </p>
          <div className='flex justify-start gap-2'>
            <Image
              src='/Group28.png'
              alt='profile pic'
              width={40}
              height={40}
            />
            <div className='flex justify-start gap-2 py-1'>
              <Image
                src='/Group27.png'
                alt='profile pic'
                width={30}
                height={30}
                className='opacity-50'
              />
              <Image
                src='/Group29.png'
                alt='profile pic'
                width={30}
                height={30}
                className='opacity-50'
              />
              <Image
                src='/Group30.png'
                alt='profile pic'
                width={30}
                height={30}
                className='opacity-50'
              />
              <Image
                src='/Group31.png'
                alt='profile pic'
                width={30}
                height={30}
                className='opacity-50'
              />
            </div>
          </div>
          <h3 className='font-medium text-md'>Nick Jonas</h3>
        </div>
      </div>
      <div className='md:mt-0 mt-12'>
        <h3 className='text-lg font-semibold text-[#ff5555] tracking-widest'>
          FAQ
        </h3>
        <h1 className='text-5xl font-bold'>
          Frequently Asked
          <br />
          Questions
        </h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
        <div className='flex flex-col gap-3 p-5 bg-[#ff5555] rounded-md'>
          <h2 className='font-bold text-xl'>
            The Best Financial Accounting
            <br />
            App Ever!
          </h2>
          <p className='text-[14px] text-gray-600 dark:text-gray-400 font-medium'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            aliquam voluptas deserunt, quidem commodi.
          </p>
        </div>
        <div className='flex flex-col gap-3 p-5 '>
          <h2 className='font-bold text-xl'>
            The Best Financial Accounting
            <br />
            App Ever!
          </h2>
          <p className='text-[14px] text-gray-600 dark:text-gray-400 font-medium'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            aliquam voluptas deserunt, quidem commodi.
          </p>
        </div>
        <div className='flex flex-col gap-3 p-5 '>
          <h2 className='font-bold text-xl'>
            The Best Financial Accounting
            <br />
            App Ever!
          </h2>
          <p className='text-[14px] text-gray-600 dark:text-gray-400 font-medium'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            aliquam voluptas deserunt, quidem commodi.
          </p>
        </div>
        <div className='flex flex-col gap-3 p-5 bg-[#ff5555] rounded-md'>
          <h2 className='font-bold text-xl'>
            The Best Financial Accounting
            <br />
            App Ever!
          </h2>
          <p className='text-[14px] text-gray-600 dark:text-gray-400 font-medium'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            aliquam voluptas deserunt, quidem commodi.
          </p>
        </div>
        <div className='flex flex-col gap-3 p-5 bg-[#ff5555] rounded-md'>
          <h2 className='font-bold text-xl'>
            The Best Financial Accounting
            <br />
            App Ever!
          </h2>
          <p className='text-[14px] text-gray-600 dark:text-gray-400 font-medium'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            aliquam voluptas deserunt, quidem commodi.
          </p>
        </div>
        <div className='flex flex-col gap-3 p-5 '>
          <h2 className='font-bold text-xl'>
            The Best Financial Accounting
            <br />
            App Ever!
          </h2>
          <p className='text-[14px] text-gray-600 dark:text-gray-400 font-medium'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            aliquam voluptas deserunt, quidem commodi.
          </p>
        </div>
      </div>
      <Image
        src='/Frame.png'
        alt='frame'
        width={1000}
        height={150}
        className='my-20'
      />
    </main>
  );
}
