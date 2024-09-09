import { useContext } from "react";
import { CartContext } from "../context/context";

const CustomerAddress = () => {
    const { user } = useContext(CartContext);
    return (
        <div>
            <h1>Name: {user?.xcus}</h1>
            <p>Email: {user?.zemail}</p>
            <address >
                <span>Address: {user?.xaddress1}</span>
                <span>{user?.xaddress2 ? ", " + user?.xaddress2 : ""}</span>
                <span>{user?.xcity ? ", " + user?.xcity : ""}</span>
                <span>{user?.xcountry ? ", " + user?.xcountry + "." : ""}</span>
            </address>
            <p>Contact: {user?.xcontact}</p>
        </div>
    );
};

export default CustomerAddress;