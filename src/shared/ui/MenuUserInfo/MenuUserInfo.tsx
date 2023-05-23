import {Image} from "react-bootstrap";
import './index.scss'

interface MenuUserInfo {
    icon: string;
    firstName: string;
    email: string;
}

export const MenuUserInfo = ({icon, firstName, email}:MenuUserInfo) => {
    return (
        <div className='menu-user-info'>
            <div className='menu-user-avatar'>
                <Image src={icon}/>
            </div>
            <div className='menu-user-items'>
                <span>{firstName}</span>
                <span>{email}</span>
            </div>
        </div>
    );
};