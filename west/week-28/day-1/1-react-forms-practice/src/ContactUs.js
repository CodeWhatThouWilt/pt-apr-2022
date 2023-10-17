import { useState } from "react";

function ContactUs() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        const contactUsInformation = {
            name,
            email,
            phone,
            submittedOn: new Date(),
        };

        console.log(contactUsInformation);
        setName("");
        setEmail("");
        setPhone("");
    };

    return (
        <div>
            <h2>Contact Us</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        id="phone"
                        type="text"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default ContactUs;
