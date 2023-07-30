import bannerImage from '@/assets/banner.webp'
import Image from 'next/image'

const Banner: React.FC = () => {
  return (
    <div className='max-w-[1920px] flex justify-center items-center mx-auto h-[300px] relative sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
        <Image src={bannerImage} alt="banner" layout='fill' objectFit='cover'/>
        <div className='static z-30 text-center'>
            <p className='text-sm sm:text-lg mb-3 font-bold'>Не знаете, куда отправиться? Отлично.</p>
            <button className='mx-auto block text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold hover:shadow-xl transition-all duration-300 active:scale-90' type='button'>
                Гибкий поиск
            </button>
        </div>
    </div>
  )
}

export default Banner