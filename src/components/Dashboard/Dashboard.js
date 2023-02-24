import Cards from '../Cards/Cards'
import './Dashboard.css'

function Dashboard() {

  return (
    <div className="container">
      <div className='dashboard-nav'>
      <h1>Dashboard</h1>
      <br />
      <h2>Sky Shows</h2>
      <br />
      <Cards />
      <br />
      </div>
    </div>
  );
}

export default Dashboard;