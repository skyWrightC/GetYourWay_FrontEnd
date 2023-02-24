import NotFound from '../ErrorNotFound/ErrorNotFound'
import Navbar from '../Navbar/Navbar';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Contact from '../Contact/Contact';
import Register from '../Register/Register';
import KingsLanding from '../SkyShows/HOTD/HOTD';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './Routes.css';
import Thelastofus from '../SkyShows/TLOU/TLOU.js';
import Thewhitelotus from '../SkyShows/TWL/TWL';
import Comingsoon from '../Comingsoon/Comingsoon';


const Routing = () => {
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
						<Route exact path="/houseofthedragon" element={<KingsLanding />}>
						</Route>
						<Route exact path="/thelastofus" element={<Thelastofus />}>
						</Route>
						<Route exact path="/thewhitelotus" element={<Thewhitelotus />}>
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
			</div>
		</Router>
	);
};

export default Pathway;
