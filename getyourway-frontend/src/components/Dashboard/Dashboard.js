import MultiActionAreaCard from '../Cards/Cards'
import './Dashboard.css'

function Home() {

  return (
    <div className="container">
      <div className='dashboard-nav'>
      <h1>Dashboard</h1>
      <br />
      <h2>Sky Shows</h2>
      <br />
      <MultiActionAreaCard />
      <br />
      </div>
    </div>
  );
}

export default Home