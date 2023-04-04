import { useState } from 'react';

const SubscribeForm = () => {
    const [email, setEmail] = useState("");
    const [subscribedUsers, setSubscribedUsers] =useState([]);

    const handleEmailSubmit = (event) => {
        event.preventDefault();
        if(email.includes("@")){
            alert(`You have subscribed with ${email}`);
            setSubscribedUsers([...subscribedUsers, email]);
            setEmail("");
        } else {
            alert(`Please enter a valid email address`);
        }
    }

    const subscribersList = subscribedUsers.map(user => <li key={user}>{user}</li>)

    return (
        <div className="subscribe">
            <div className="subscribe-form">
                <h2>Do you want to be the best styled at every event?</h2>
                <p>Subscribe to our GRWM Newsletter</p>
                <form onSubmit={handleEmailSubmit}>
                    <label>
                        <input type="text" value={email} placeholder="Enter Email" onChange={e => setEmail(e.target.value)}/>
                    </label>
                    <input type="submit" value="Subscribe" />
                </form>
            </div>

            <div className="subscribed-users">
                <ul></ul>
            </div>
        </div>
    )
};

export default SubscribeForm;