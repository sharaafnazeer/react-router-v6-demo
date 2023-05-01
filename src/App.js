import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./components/Root";
import Error from "./components/Error";
import Contact from "./components/Contact";
import CreateEdit from "./components/CreateEdit";

function App() {

    const router = createBrowserRouter(
        [
            {
                path: '/',
                element: <Root/>,
                id: "root",
                errorElement: <Error/>,
                // loader: getContactsAllLoader,
                // action: createContactAction,
                children: [
                    {
                        path: "contacts/create",
                        element: <CreateEdit/>,
                    },
                    {
                        path: "contacts/:id",
                        element: <Contact/>
                    }
                ]
            },

        ]
    );

    return (
        <RouterProvider router={router}/>
    );
}

export default App;
