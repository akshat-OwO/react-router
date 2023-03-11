import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h2>Page not found!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid perspiciatis id, pariatur earum a in nihil animi tempora exercitationem ea ratione ut quo. Voluptate quidem facilis iure sint labore alias?</p>

            <p>Go to the <Link to='/'>Homepage</Link>.</p>
        </div>
    );
}
 
export default NotFound;