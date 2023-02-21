import NotFound from '../ErrorNotFound/ErrorNotFound';
import Navbar from '../Navbar/Navbar';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import Login from '../../Pages/Login/Login';
import Contact from '../../Pages/Contact/Contact';
import About from '../../Pages/About/About';
import Register from '../../Pages/Register/Register';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './Routes.css';


const Pathway = () => {
	return (
		<Router>
			<div className="app">
				<Navbar />
				<div className="content">
					<Routes>
						<Route exact path="/" element={<Dashboard />}>
						</Route>
						<Route exact path="/login" element={<Login />}>
						</Route>
						<Route exact path='/register' element={<Register />}>
            			</Route>
						<Route exact path="/contact" element={<Contact />}>
						</Route>
						<Route exact path="/about" element={<About />}>
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
