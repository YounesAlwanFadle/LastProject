import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ProductService from '../../dbjson.json'; 
import 'primeicons/primeicons.css';

export default function GeographicaldistributionItemsBottom() {
    const products = ProductService.ProductService;

    const columns = products.length > 0 
        ? Object.keys(products[0]).filter(key => key !== 'id')
        : [];

    return (
        <article className="px-6 py-4 border-2 border-[#E5E5E5] rounded-3xl ">
            <section className="flex items-center justify-between">
                <h1 className="font-bold">اخر العمليات</h1>
                <button className="bg-white font-bold text-black px-4 py-1 rounded-md border-2 border-black">عرض التفاصيل</button>
            </section>
            <section className='card my-4'>
                <DataTable
                    value={products}
                    tableStyle={{ minWidth: '50rem', borderRadius: '8px', overflow: 'hidden' }}
                    className="custom-data-table overflow-y-auto h-72 scro pl-4">
                    {columns.map((col) => (
                        <Column
                            key={col}
                            field={col}
                            header={formatHeader(col)}
                            headerStyle={{
                                textAlign: 'center',
                                backgroundColor: '#f5f5f5',
                                fontWeight: 'bold'
                            }}
                            bodyStyle={{ textAlign: 'center', padding: '0.5rem' , borderBottom: '1px solid #E5E5E5' }}
                            bodyClassName={col === 'Status' ? 'status-column' : ''}
                            body={(rowData) => col === 'Status' ? renderStatusCell(rowData) : rowData[col]}
                        />
                    ))}
                </DataTable>
            </section>
        </article>
    );
}

function formatHeader(field: string): string {
    const headers: { [key: string]: string } = {
        code: "رقم العملية",
        NamePerson: "اسم الشخص",
        DocumentNumber: "رقم الوثيقة",
        PhoneNumber: "رقم الهاتف",
        NameServers: "اسم الخدمة",
        Status: "الحالة"
    };
    return headers[field] || field;
}

function renderStatusCell(rowData: any) {
    const status = rowData.Status;
    let backgroundColor = '#FFFFFF'; 
    let icon = null;
    let textColor = '#000000'; 

    switch (status) {
        case 'تمت العملية بنجاح':
            backgroundColor = '#22C55E1A'; 
            textColor = '#22C55E'; 
            icon = <i className="pi pi-verified mr-2 text-[#22C55E]"></i>; 
            break;
        case 'قيد المراجعة':
            backgroundColor = '#D2B0561A'; 
            textColor = '#D2B056'; 
            icon = <i className="pi pi-info-circle mr-2 text-[#D2B056]"></i>; 
            break;
        case 'تم الرفض':
            backgroundColor = '#EF44441A';
            textColor = '#EF4444';
            icon = <i className="pi pi-times-circle mr-2 text-[#EF4444]"></i>;
            break;
        default:
            backgroundColor = '#FFFFFF';
            break;
    }

    return (  
        <div className="flex items-center justify-between" style={{ backgroundColor, padding: '0.2rem', borderRadius: '4px', color: textColor }}>  
            <h2>{icon}</h2>  
            <h2 className="flex-grow text-center">{status}</h2>
        </div>  
    );
}
