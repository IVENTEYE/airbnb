import Header from '@/components/Header'
import Banner from '@/components/Banner'
import { IExplorerData, ILiveData } from '@/interfaces'
import SmallCard from '@/components/SmallCard'
import Title from '@/components/Title'
import MediumCard from '@/components/MediumCard'
import LargeCard from '@/components/LargeCard'

export default function Home({ explorerData, cardsData }: any) {

  return (
    <>
      <Header />
      <Banner />
      <main>
        <section className='my-10'>
          <div className="max-w-7xl mx-auto px-3 sm:px-10">
            <Title>Исследуйте Поблизости</Title>
            <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
              {explorerData?.map((data: IExplorerData) => {
                return <SmallCard key={data.location} img={data.img} location={data.location} distance={data.distance}/>
              })}
            </div>
          </div>
        </section>
        <section className='mb-14'>
          <div className="max-w-7xl mx-auto px-3 sm:px-10">
            <Title>Живи где угодно</Title>
            <div className='flex py-3 gap-3 overflow-x-scroll scrollbar-hide p-3 -ml-3'>
              {cardsData?.map((card: ILiveData) => {
                return <MediumCard key={card.title} img={card.img} title={card.title}/>
              })}
            </div>
          </div>
        </section>
        <LargeCard 
          img="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
          title='Лучший отдых на открытом воздухе'
          description='Списки желаний, созданные Airbnb'
          buttonText='Вперёд'
        />
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const explorerData = await fetch('https://www.jsonkeeper.com/b/4G1G')
    .then(res => res.json());

  const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT')
    .then(res => res.json());  

  return {
    props: {
      explorerData,
      cardsData
    }
  };
}
