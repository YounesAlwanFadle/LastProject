import { useState } from 'react';
import user from '../../dbjson.json';
import { Dropdown } from 'primereact/dropdown'

export default function Operationsstatistics() {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
      { name: 'Aug 20, 2043', code: 'NY' },
      { name: 'sep 30, 2023', code: 'RM' },
      { name: 'Nov 30, 2023', code: 'LDN' },
      { name: 'jon 30, 2023', code: 'IST' },
      { name: 'Julay 30, 2023', code: 'PRS' }
  ];
  
  return (
    <section className="border-2 border-#E5E5E5 px-6 py-2 rounded-3xl">
      <section className='flex items-center justify-between'>
        <article className='flex items-center'>
          <h1 className='text-1rem font-bold'>إحصائيات العمليات</h1>
          <i className="pi pi-info-circle mr-2 mt-2 text-[#c9c9c9]"></i>
        </article>
        <article>
          <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
            placeholder="Aug 30, 2023" className="w-fit md:w-14rem" checkmark={true} highlightOnSelect={false} />
        </article>
      </section>
      <section className="flex justify-between flex-col md:flex-row">
      {
        user.users.map((item) => 

          <OperationsstatisticsItemsItems 
            key={item.id}
            name={item.name} 
            num={item.num}
            />
        )
      }
      </section>
    </section>
  );
}

interface OperationsstatisticsItemsItemsProps {
  name: string;
  num: number;
}

export function OperationsstatisticsItemsItems({ name , num }: OperationsstatisticsItemsItemsProps) {
  return (
    <article className='space-y-2 md:border-l-2 border-b-2 md:border-b-0 sm:py-4 flex-1 px-4'>
      <h4> {name} </h4>
      <h1 className='text-3xl'>{num}</h1>
    </article>
  );
}
