import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <p>footer</p>
        </div>
    );
};

export default Root;