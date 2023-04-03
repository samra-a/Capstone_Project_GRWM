import { useState } from "react";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [subscribedUsers, setSubscribedUsers] = useState([]);

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    if (email.includes("@")) {
      alert(`You have subscribed with ${email}`);
      setSubscribedUsers([...subscribedUsers, email]);
      setEmail("");
    } else {
      alert(`Please enter a valid email address`);
    }
  };

  return (
    <div className="bg-gray-900 py-16 text-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="md:text-5xl sm:text-4xl text-2xl font-bold py-2">
            Want tips on how to style your next outing?
          </h2>
          <p className="text-lg">
            Subscribe to the GRWM Newsletter and stay up to date.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between w-full">
          <form onSubmit={handleEmailSubmit}>
            <label className="sr-only">Email:</label>
            <div className="flex flex-col sm:flex-row">
              <input
                className="p-3 sm:w-64 rounded-md text-black bg-gray-200 mb-4 sm:mb-0"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-orange-300 hover:bg-orange-400 text-white font-medium py-2 px-4 rounded-md"
              >
                Notify Me
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;
