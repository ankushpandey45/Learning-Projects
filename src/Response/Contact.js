import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("_replyto", email);
    formData.append("message", message);

    try {
      const response = await fetch("https://formspree.io/f/xleqzpbw", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };
  return (
    <div>
      <div className="cntctus_div">
        <form onSubmit={handleSubmit}>
          <div className="scnd_cntct_div">
            <h1 style={{ color: "white", fontStyle: "italic" }}>Contact us</h1>
            <div className="inpt_div">
              <div style={{ padding: "20px" }}>
                <input
                  placeholder="Enter your name "
                  type="text"
                  className="cntct_input"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <input
                  placeholder="Enter your Em@il"
                  type="email"
                  className="cntct_input"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <input
                placeholder="Type your message here"
                className="mgs_input"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button className="sub_btn1">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
