import './header.jsx'
import './rewards.css'
import Header from "./header.jsx";
import {Link} from "react-router-dom";
function rewards(){
    return(
        <div className={"container"}>
            <Header />
            <div id="top" className={"rewards-grid"}>
                <h1>test text</h1>
                <h3 className={"reward-title"}>Welcome to Our Rewards Program!</h3>
                <h4>At Capulus, we love treating our loyal customers!
                    Join our Rewards Program and enjoy exclusive perks with every purchase.</h4>


                <h3 className={"reward-title"}>How It Works</h3>
                <ul  className={"reward-box"}>
                    <li>Sign Up for Free – Create an account in-store or online.</li>
                    <li>Earn Points – Get 1 point for every $1 spent.</li>
                    <li>Redeem Rewards – Use points to get discounts, free drinks, and special offers.</li>

                </ul>

                <h3 className={"reward-title"}>Exclusive Perks</h3>
                <ul  className={"reward-box"}>
                    <li>Free Drink on Your Birthday – Celebrate with your favorite coffee on us!</li>
                    <li>Member-Only Discounts – Enjoy exclusive promotions and early access to new menu items.</li>
                    <li>Surprise Rewards – Get occasional bonus points and special treats just for being a valued member.</li>
                </ul>
                <h3 className={"reward-title"}>Reward Tiers</h3>
                <ul  className={"reward-box"}>
                    <li>Bronze (0-100 points) – 10% off your next drink.</li>
                    <li>Silver (101-300 points) – One free medium coffee.</li>
                    <li>Gold (301+ points) – 20% off all drinks for a month.</li>
                </ul>
            </div>



            <footer id="sign">
                <p>Join Today! Signing up is quick and easy. Visit us in-store or sign up online <Link to="/signup" >here</Link>. Start earning rewards every time you sip your favorite coffee!
                    Have questions? Contact us at support_coffe_shop@java.com. or ask one of our baristas in-store.</p>
            </footer>
        </div>
    )
}
export default rewards;