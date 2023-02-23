import NotFound from '../ErrorNotFound/ErrorNotFound'
import Navbar from '../Navbar/Navbar';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Contact from '../Contact/Contact';
import Register from '../Register/Register';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './Pathway.css'
import TLOU from '../SkyShows/TLOU/TLOU.js';
import TWL from '../SkyShows/TWL/TWL';
import Comingsoon from '../Comingsoon/Comingsoon';
import HOTD from '../SkyShows/HOTD/HOTD';
import { Link } from 'react-router-dom';


const Pathway = () => {
	return (
		<Router>
			<div className="app">
				<Navbar />
				<div className="content">
					<Routes>
						<Route exact path="/" element={<Login />}>
						</Route>
						<Route exact path="/dashboard" element={<Dashboard />}>
						</Route>
						<Route exact path="/houseofthedragon" element={<HOTD />}>
						</Route>
						<Route exact path="/thelastofus" element={<TLOU />}>
						</Route>
						<Route exact path="/thewhitelotus" element={<TWL />}>
						</Route>
						<Route exact path='/register' element={<Register />}>
            			</Route>
						<Route exact path="/contact" element={<Contact />}>
						</Route>
						<Route exact path="/comingsoon" element={<Comingsoon />}>
						</Route>
						{/* ''*'' to catch any other route. this is at the bottom so the above routes can function properly.
            if the user enters a wrong path on the website this should show an error page to re-route them back--
            -- to the homepage.  */}
						<Route exact path="*" element={<NotFound />}>
						</Route>
					</Routes>
				</div>
				{/* <Link to="/dashboard">Dashboard</Link>
        <Link to="/Comingsoon">Coming Soon</Link> */}
			</div>
		</Router>
	);
};

export default Pathway;
