import { Link } from "react-router-dom";
import './Logout.css'

//if the users enters a variation of our page that does not exit they will see this error page
//a link back to the homepage is included to get them back on track

const Logout = () => {
    return ( 
        <div className="not-found">
            <h2>You have succesfully Logged out!</h2>
            <p>We're sorry to see you go</p>
            <div className="re-route">
            <Link to="/">Click here to sign back in!</Link>
            </div>
        </div>
     );
}
 
export default Logout;