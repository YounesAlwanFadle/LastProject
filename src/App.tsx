import Example from './components/Example';
import Geographicaldistribution from './components/Geographicaldistribution';
import Operationsstatistics from './components/Operationsstatistics';

export default function App() {
  return (
    <main className='md:px-32 px-6 my-12'>
      <Operationsstatistics />
      <section className='flex flex-col md:flex-row justify-center my-4 gap-4'>
        <Geographicaldistribution />
        <Example />
      </section>
    </main>
  );
}
  