import { Routes, Route } from 'react-router-dom';
import elementRouter from './router';
import { DefaultLayout } from './layouts';
import './App.less';

function App() {
    return (
        <Routes>
            {elementRouter.map((item, index) => {
                const Page = item.component;
                return (
                    <Route
                        key={index}
                        path={item.path}
                        element={
                            <DefaultLayout>
                                <Page />
                            </DefaultLayout>
                        }
                    />
                );
            })}
        </Routes>
    );
}

export default App;
