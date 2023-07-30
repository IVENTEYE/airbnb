import { ru } from 'date-fns/locale';
import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { HiUsers } from 'react-icons/hi';
import cl from 'clsx';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation'

interface IDatePicker {
    searchState: string;
    setSearchState: (state: string) => void;
}

const Datepicker: React.FC<IDatePicker> = ({ searchState, setSearchState }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  const router = useRouter();

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const onSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchState,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests: numberOfGuests,
      }, 
    });
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  return (
    <div className={cl(("header-datepicker max-w-[558px] w-full absolute left-[50%] translate-x-[-50%] bg-white rounded-b-2xl shadow-lg"), searchState.length ? 'active' : '')}>
      <DateRangePicker
        ranges={[selectionRange]}
        minDate={new Date()}
        rangeColors={['#FF385C']}
        onChange={handleSelect}
        locale={ru}
      />
      <div className="flex items-center mx-2 border-b mb-4">
        <h2 className="text-xl md:text-2xl font-semibold flex-grow">Количество гостей</h2>
        <HiUsers />
        <input
          type="number"
          value={numberOfGuests}
          onChange={(e) => {
            setNumberOfGuests(Number(e.target.value));
          }}
          min={1}
          max={10}
          className="w-12 pl-2 text-lg outline-none text-red-400"
        />
      </div>
      <div className='flex mb-3'>
        <button 
            className='flex-grow text-gray-500'
            onClick={() => setSearchState('')}
        >
            Отмена
        </button>
        <button 
            className='flex-grow text-red-400'
            onClick={onSearch}
        >
            Поиск
        </button>
      </div>
    </div>
  );
};

export default Datepicker;
