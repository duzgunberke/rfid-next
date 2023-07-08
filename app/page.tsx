import TopCards from './components/TopCards';
import BarChart from './components/BarChart';
import PaymentHistory from './components/PaymentHistory';

export default function Home() {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <TopCards />
      <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
        <BarChart />
        <PaymentHistory/>
      </div>
    </div>
  )
}
