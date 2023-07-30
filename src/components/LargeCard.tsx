import { ILargeCard } from '@/interfaces'
import Image from 'next/image'

const LargeCard: React.FC<ILargeCard> = ({ img, title, description, buttonText }) => {
  return (
    <section className='mb-10 cursor-pointer'>
        <div className='max-w-7xl mx-auto px-3 sm:px-10'>
            <div className="poster h-96 min-w-[300px] bg-contain rounded-2xl" style={{background: `url(${img}) 60% 100%`}}>
            <div className='pt-24 pl-4 md:pl-10'>
                <h3 className='mb-3 max-w-[335px] font-bold text-2xl md:text-4xl'>{title}</h3>
                <p className='font-medium'>{description}</p>
                <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5'>{buttonText}</button>
            </div>
            </div>
        </div>
    </section>
  )
}

export default LargeCard