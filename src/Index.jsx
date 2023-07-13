import React from 'react'
import App from './App'
import { createContext, useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { HomePage } from './pages/LadingPage/HomePage';
import { CasePage } from './pages/LadingPage/CasePage';
import { ComentsPage } from './pages/LadingPage/ComentsPage';
import { LoginPage } from './pages/LadingPage/LoginPage';
import { PageCase } from './pages/LadingPage/Cases/PageCase';
import { Case1 } from './pages/LadingPage/Cases/Case1';
import { Case2 } from './pages/LadingPage/Cases/Case2';
import { Case3 } from './pages/LadingPage/Cases/Case3';
import { Case4 } from './pages/LadingPage/Cases/Case4';

export const AuthContext = createContext();

export const Index = () => {
    const [dataUser, setDataUser] = useState({
        name: '',
        username: '',
        role: ''
    });

    const [loggedIn, setLoggedIn] = useState(false)

    useEffect( () => {
        let token = localStorage.getItem('token')
        if(token) setLoggedIn(true)
    })

    useEffect(() => {
        let data = dataUser
        if (data) setDataUser(data)
    }, [])

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <App></App>,
            errorElement: <NotFoundPage></NotFoundPage>,
            children: [
                {
                    path: '/',
                    element: <HomePage></HomePage>
                },
                {
                    path: '/case',
                    element: <PageCase></PageCase>,
                    children: [
                        {
                            path: '',
                            element: <CasePage></CasePage>,
                        },
                        {
                            path: 'caseOne',
                            element: <Case1></Case1>
                        },
                        {
                            path: 'caseTwo',
                            element: <Case2></Case2>
                        },
                        {
                            path: 'caseThree',
                            element: <Case3></Case3>
                        },
                        {
                            path: 'caseFour',
                            element: <Case4></Case4>
                        }
                    ]
                },
                {
                    path: '/coments',
                    element: <ComentsPage></ComentsPage>
                },
                {
                    path: '/login',
                    element: <LoginPage></LoginPage>
                }
            ]
        }
    ])
  return (
        <AuthContext.Provider value={{ loggedIn, setLoggedIn, dataUser, setDataUser }}>
            <RouterProvider router={routes} />
        </AuthContext.Provider>
  )
}
