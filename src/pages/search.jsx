import Header from '@/components/Header'
import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import moment from 'moment'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { ru } from 'date-fns/locale'
import InfoCard from '@/components/InfoCard'

const Search = ({ searchResults }) => {
    const router = useRouter();
    const { location, startDate, endDate, noOfGuests } = router.query;
    
    const formattedStartDate = startDate && format(new Date((startDate)), "dd MMMM yyyy", {locale: ru});
    const formattedEndDate = endDate && format(new Date(endDate), "dd MMMM yyyy", {locale: ru});

    const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
        <Header placeholder={`${location} | ${range} | ${noOfGuests}`}/>
        <main className='flex'>
            <section className='flex-grow pt-14 px-6'>
                <p className='text-xs'>300+ мест - {range} - для {noOfGuests} гостей</p>
                <h1 className='text-3xl font-semibold mt-2 mb-6'>Результаты по запросу: {location}</h1>
                <div className='hidden lg:inline-flex gap-2 mb-5 text-gray-800 whitespace-nowrap'>
                    <p className='tag'>Гибкая отмена</p>
                    <p className='tag'>Тип места</p>
                    <p className='tag'>Цена</p>
                    <p className='tag'>Комнаты и кровати</p>
                    <p className='tag'>Больше фильтров</p>
                </div>
                <div className=''>
                    {searchResults.map((res) => (
                        <InfoCard 
                            key={res.img}
                            img={res.img}
                            description={res.description}
                            lat={res.lat}
                            location={res.location}
                            long={res.long}
                            price={res.price}
                            star={res.star}
                            title={res.title}
                            total={res.total}
                        />
                    ))}
                </div>
            </section>
        </main>
    </div>
  )
}

export default Search

export async function getServerSideProps() {
    const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS")
        .then(res => res.json());

    return {
        props: {
            searchResults,
        }
    }
}