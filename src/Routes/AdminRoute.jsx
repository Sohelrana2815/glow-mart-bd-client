import { useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({children}) => {

    const location = useLocation();
    const {user,loading} = useAuth();
    
    return (
        <div>
            
        </div>
    );
};

export default AdminRoute;