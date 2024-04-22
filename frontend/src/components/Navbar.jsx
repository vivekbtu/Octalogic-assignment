import { NavLink } from "react-router-dom";

const links = [
    {
        path: "/allbookings",
        title: "Bookings"
    }
];

const Navbar = () => {
    return (
        <div
            style={{
                // position: "fixed",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
                height: "70px",
                backgroundColor: 'skyblue',
                fontSize: '20px',
                fontWeight: 'bold',
                // marginTop: '-80px'
                marginBottom: '10%'
            }}
        >
            <img src='https://www.shutterstock.com/image-vector/car-sale-icon-on-sold-260nw-1921966967.jpg' alt="App Logo" style={{ height: "50px" }} />
            {links.map((e) => (
                <NavLink key={e.path} to={e.path} style={{ textDecoration: 'none' }} >
                    {e.title}
                </NavLink>
            ))}
        </div>
    );
};

export default Navbar;