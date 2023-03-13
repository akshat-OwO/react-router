import { useState } from "react";
import { Navigate } from "react-router-dom";

const About = () => {
    const [user, setUser] = useState('mario');

    if (!user) {
        return <Navigate to='/' replace={true} />
    }

    return (
        <div className="about">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, repellendus aliquid cumque animi praesentium iste omnis sunt eligendi expedita doloremque. Tempore fugiat temporibus impedit adipisci animi illo? Commodi odio non quos natus quaerat vel perferendis corporis ullam delectus, beatae iure doloribus sint quasi. Placeat vitae ut doloremque vero non quisquam!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, repellendus aliquid cumque animi praesentium iste omnis sunt eligendi expedita doloremque. Tempore fugiat temporibus impedit adipisci animi illo? Commodi odio non quos natus quaerat vel perferendis corporis ullam delectus, beatae iure doloribus sint quasi. Placeat vitae ut doloremque vero non quisquam!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, repellendus aliquid cumque animi praesentium iste omnis sunt eligendi expedita doloremque. Tempore fugiat temporibus impedit adipisci animi illo? Commodi odio non quos natus quaerat vel perferendis corporis ullam delectus, beatae iure doloribus sint quasi. Placeat vitae ut doloremque vero non quisquam!</p>

            <button onClick={() => setUser(null)}>Logout</button>
        </div>
    );
}
 
export default About;