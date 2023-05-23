import {useState} from "react";
import './index.scss'
import {HREFS} from "../../const/hrefs";
import {Image} from "react-bootstrap";
import {GroupButtons} from "../../../shared/ui/GroupButtons/GroupButtons";
import {MenuUserInfo} from "../../../shared/ui/MenuUserInfo/MenuUserInfo";

export const HamburgerMenu = () => {

    const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false)

    return (
        <div className='hamburger-menu'>
            <div className={`hamburger-menu_icon ${!isActiveMenu ? 'hamburger-menu_active' : 'hamburger-menu_close'}`}
                 onClick={() => setIsActiveMenu(prevState => !prevState)}>
            </div>
            <div className={`menu-active ${isActiveMenu ? 'active' : 'no-active'}`}>
                <MenuUserInfo
                    icon='https://cdn.icon-icons.com/icons2/1371/PNG/512/batman_90804.png'
                    email='jiuper52@gmail.com'
                    firstName='Кирилл'/>
                <GroupButtons
                    listsButtons={HREFS}/>
            </div>
        </div>
    );
};