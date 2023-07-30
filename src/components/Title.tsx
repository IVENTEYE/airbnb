import { ReactNode } from "react"

const Title: React.FC<any> = ({ children }) => {
  return (
    <h2 className='text-3xl font-bold mb-10'>{children}</h2>
  )
}

export default Title