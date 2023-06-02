import React, { useState, useEffect, useReducer, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import * as Api from './api';
// import { loginReducer } from './reducer';

// import Header from './src/sections/header';
// import Footer from './src/sections/footer';

import LoginForm from './src/pages/login/loginform';
import RegisterForm from './src/pages/register/registerform';
// import MainPage from './src/pages/mainpage/mainpage.jsx';
// import Rank from './src/pages/rank/rank';
// import PostDetail from './src/pages/postdetail/postdetail.jsx';

export const UserStateContext = createContext(null);
export const DispatchContext = createContext(null);

function App() {
    // // useReducer 훅을 통해 userState 상태와 dispatch함수를 생성함.
    // const [userState, dispatch] = useReducer(loginReducer, {
    //     user: null,
    // });

    // // 아래의 fetchCurrentUser 함수가 실행된 다음에 컴포넌트가 구현되도록 함.
    // // 아래 코드를 보면 isFetchCompleted 가 true여야 컴포넌트가 구현됨.
    // const [isFetchCompleted, setIsFetchCompleted] = useState(false);

    // const fetchCurrentUser = async () => {
    //     try {
    //         // 이전에 발급받은 토큰이 있다면, 이를 가지고 유저 정보를 받아옴.
    //         const res = await Api.get('user/current');
    //         const currentUser = res.data;

    //         // dispatch 함수를 통해 로그인 성공 상태로 만듦.
    //         dispatch({
    //             type: 'LOGIN_SUCCESS',
    //             payload: currentUser,
    //         });

    //         console.log('%c sessionStorage에 토큰 있음.', 'color: #d93d1a;');
    //     } catch (err) {
    //         console.log('%c SessionStorage에 토큰 없음.', 'color: #d93d1a;');
    //     }
    //     // fetchCurrentUser 과정이 끝났으므로, isFetchCompleted 상태를 true로 바꿔줌
    //     setIsFetchCompleted(true);
    // };

    // // useEffect함수를 통해 fetchCurrentUser 함수를 실행함.
    // useEffect(() => {
    //     fetchCurrentUser();
    // }, []);

    // if (!isFetchCompleted) {
    //     return 'loading...';
    // }

    return (
        // <DispatchContext.Provider value={dispatch}>
        //     <UserStateContext.Provider value={userState}>
        //         <Router>
        //             <Header />
        //             <Routes>
        //                 <Route path="/" exact element={<MainPage />} />
        //                 <Route path="/login" element={<LoginForm />} />
        //                 <Route path="/register" element={<RegisterForm />} />
        //                 <Route path="/story" element={<Story />} />
        //                 <Route path="/story/:postId" element={<PostDetail />} />
        //                 <Route path="*" element={<Rank />} />
        //             </Routes>
        //             <Footer />
        //         </Router>
        //     </UserStateContext.Provider>
        // </DispatchContext.Provider>
        <p>xxxx</p>
    );
}

export default App;
