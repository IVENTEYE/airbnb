import { IExplorerData } from '@/interfaces'
import Image from 'next/image'

const SmallCard: React.FC<IExplorerData> = ({ img, location, distance }) => {
  return (
    <div className='flex items-center space-x-4 rounded-xl cursor-pointer transition transform ease-out duration-200 hover:bg-gray-100 hover:scale-105 will-change-transform'>
        <Image src={img} alt={location} width={64} height={64} className='rounded-lg'/>
        <div>
            <h3 className='font-medium'>{location}</h3>
            <p className='text-gray-500'>{distance}</p>
        </div>
    </div>
  )
}

export default SmallCard