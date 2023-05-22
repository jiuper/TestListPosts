import {Suspense} from 'react';
import {BrowserRouter} from 'react-router-dom';

export const withRouter = (component: () => JSX.Element) => (): JSX.Element =>
    (
        <BrowserRouter>
            <Suspense fallback="Loader...">{component()}</Suspense>
        </BrowserRouter>
    );