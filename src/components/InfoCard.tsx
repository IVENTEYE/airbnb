import { ISearchData } from "@/interfaces"
import Image from "next/image"
import { AiOutlineHeart, AiFillStar } from "react-icons/ai"

const InfoCard: React.FC<ISearchData> = ({ img, description, lat, long, location, price, star, title, total }) => {
  return (
    <div className="block sm:flex py-7 px-2 lg:pr-4 border-b transition duration-150 ease-out hover:opacity-80 hover:shadow-lg first:border-t">
        <div className="relative h-72 w-full mb-5 sm:h-24 sm:w-40 sm:mb-0 md:h-52 md:w-80 flex-shrink-0">
            <Image src={img} alt={title} layout="fill" objectFit="cover" className="rounded-xl"/>
        </div>
        <div className="flex flex-col flex-grow sm:pl-5">
          <div className="flex justify-between items-center">
            <p>{location}</p>
            <button className="cursor-pointer">
              <AiOutlineHeart className="w-[25px] h-[25px]"/>
            </button>
          </div>
          <h4 className="text-xl relative after:w-10 after:border-b after:h-[1px] after:absolute after:left-0 after:bottom-[-5px]">{title}</h4>
          <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
          <div className="flex justify-between items-end pt-5">
            <p className="flex items-center gap-1">
              <AiFillStar className="w-5 h-5 text-red-400"/>
              {star}
            </p>
            <div>
              <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
              <p className="text-right font-extralight">{total}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default InfoCard