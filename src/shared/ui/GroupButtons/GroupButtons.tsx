import {Link} from "react-router-dom";
import {IGroupButtons} from "../../types/type";
import './index.scss'

interface GroupButtons {
    listsButtons:IGroupButtons[]
}

export const GroupButtons = ({listsButtons}:GroupButtons) => {
    return (
        <div className='navigation'>
            {
                listsButtons.map(el => <Link key={el.href} className='button' to={el.href}>{el.name}</Link>)
            }
        </div>
    );
};