import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Main from '../page/Main';
import Login from '../page/user/01';
import RestaurantList from '../page/restaurant/01';
import Restaurant from "../page/restaurant/02";
import RestaurantFilter from '../page/restaurant/03';
import TermsOfService from '../page/term/01';
import PrivacyPolicy from "../page/term/02";
import QuestionUpdate from "../page/question/04";
import ReviewUpdate from "../page/review/03";
import ReviewCreate from "../page/review/04";

const rootRouter = createBrowserRouter([
    {
        path: '/',
        element: <Suspense><Main/></Suspense>
    },
    {
        path: '/login',
        element: <Suspense><Login/></Suspense>
    },
    {
        path: '/restaurantList',
        element: <Suspense><RestaurantList/></Suspense>
    },
    {
        path: '/restaurant',
        element: <Suspense><Restaurant/></Suspense>
    },
    {
        path: '/restaurantFilter',
        element: <Suspense><RestaurantFilter/></Suspense>
    },
    {
        path: '/termsOfService',
        element: <Suspense><TermsOfService/></Suspense>
    },
    {
        path: '/privacyPolicy',
        element: <Suspense><PrivacyPolicy/></Suspense>
    },
    {
        path: '/questionUpdate',
        element: <Suspense><QuestionUpdate/></Suspense>
    },
    {
        path: '/reviewUpdate',
        element: <Suspense><ReviewUpdate/></Suspense>
    },
    {
        path: '/reviewCreate',
        element: <Suspense><ReviewCreate/></Suspense>
    }
])

export default rootRouter