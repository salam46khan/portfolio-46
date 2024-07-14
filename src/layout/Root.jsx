import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <p>head</p>
            <Outlet></Outlet>
            <p>footer</p>
        </div>
    );
};

export default Root;