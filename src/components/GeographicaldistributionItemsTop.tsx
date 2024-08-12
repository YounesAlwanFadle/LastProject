import Geographic from '../../dbjson.json'

export default function GeographicaldistributionItemsTop() {
    const totalNumb = Geographic.Geographic.reduce((total, item) => total + item.numb, 0);
    
    return (
    <article className='px-6 py-4 border-2 border-[#E5E5E5]  rounded-3xl '>
    <h1 className='pb-4'> التوزيع الجغرافي</h1>
    <section className='flex justify-between gap-0.5 border-b-2 pb-2 border-[#E5E5E5]'>
      {
        Geographic.Geographic.map((items: any) => {
          const widthPercentage = (items.numb / totalNumb) * 100 + '%';

          return (
            <article
              key={items.id}
              className="h-[1.2rem] rounded"
              style={{ backgroundColor: items.color, width: widthPercentage }}
            ></article>
          );
        })
      }
    </section>

    

    {Geographic.Geographic.map((items: any) => (
      <section key={items.id}>
        <br />
        <article className='flex justify-between'>
        <GeographicaldistributionItemsOneprop {...items} />
        </article>
      </section>
    ))}
  </article>
  )
}

interface GeographicaldistributionItemsOnepropProps {
    color: string;
    name: string;
    numb: number;
}


export function GeographicaldistributionItemsOneprop (items: GeographicaldistributionItemsOnepropProps) {
    return(
        <>
        <section className='flex items-center justify-center gap-4'>
          <i className="pi pi-align-left w-1rem h-1rem" style={{ color: items.color }}></i>
          <h4>{items.name}</h4>
        </section>
        <section>
            <h1 className='text-[#3C70F5]'>{items.numb}</h1>
        </section>
        </>
    )
}