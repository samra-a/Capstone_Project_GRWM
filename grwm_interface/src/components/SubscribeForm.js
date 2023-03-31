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

    return (
        <div className="subscribe">
            <div className="subscribe-form">
                <h2>Subscribe to the GRWM Newsletter</h2>
                <form onSubmit={handleEmailSubmit}>
                    <label>Email:
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    </label>
                    <input type="submit" value="Subscribe" />
                </form>
            </div>

            <div className="subscribed-users">
                <ul>{subscribedUsers.map(user => <li key={user}>{user}</li>)}</ul>
            </div>
        </div>
    )
};

export default SubscribeForm;