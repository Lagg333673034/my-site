import PageMain from '../pages/PageMain';

export const PAGE_MAIN_ROUTE = '/';

export const notAuthRoutes = [
    {path: PAGE_MAIN_ROUTE, component: <PageMain/>, exact: true},
    {path: '*', component: <PageMain/>, exact: true},
];
