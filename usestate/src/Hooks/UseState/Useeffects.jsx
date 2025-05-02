import React, { useState, useEffect } from "react";
import './UseEffect.css'

function SubscribeButton() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isSubscribed) {
      setMessage("You are now subscribed!");
    } else {
      setMessage("You are not subscribed.");
    }
  }, [isSubscribed]);

  const Subscribe = () => {
    setIsSubscribed(!isSubscribed);
  };


  return (
    <div style={{ padding: "20px" }} className="Class">
      <h2>Share Market</h2>
      <button onClick={Subscribe} className="Button">{isSubscribed ? "Unsubscribe" : "Subscribe"}</button>
      <p>{message}</p>
    </div>
  );
}


export default SubscribeButton;