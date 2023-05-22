import {Route, Routes} from "react-router-dom";
import {ROUTES} from "../shared/const/routes";
import {AboutMe} from "./AboutMe/AboutMe";
import {Header} from "../widget/ui/Header/Header";

export const Routing = () => {
    return (
        <div className='wrapper'>
            <Header/>
            <Routes>
                <Route path={ROUTES.MAIN} element={<div>ASD</div>}/>
                <Route path={ROUTES.ABOUT} element={<AboutMe/>}/>
                <Route path={ROUTES.USER} element={<div>ASD</div>}/>
            </Routes>
        </div>

    );
};