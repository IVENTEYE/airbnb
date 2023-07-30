import { ILiveData } from "@/interfaces"
import Image from "next/image"

const MediumCard: React.FC<ILiveData> = ({ img, title }) => {
  return (
    <div>
        <div className="relative w-80 h-80 cursor-pointer hover:scale-105 transition transform duration-300 ease-linear">
            <Image src={img} alt={title} layout="fill" className="rounded-xl"/>
        </div>
        <h3 className="text-2xl font-medium mt-3">{title}</h3>
    </div>
  )
}

export default MediumCard