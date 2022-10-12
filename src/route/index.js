import config from '../config';
import HomePage from '../pages/homePage';
import AboutUsPage from '../pages/aboutUsPage';
import AddressPage from '../pages/addressPage';
import BlogPage from '../pages/blogPage';
import MemberPage from '../pages/memberPage';
import ProductPage from '../pages/productPage';
import ProductDetail from '../components/productDetail';

const routes = [
    {
        path: config.publicRoutes.home,
        component: HomePage,
    },
    {
        path: config.publicRoutes.aboutUs,
        component: AboutUsPage,
    },
    {
        path: config.publicRoutes.address,
        component: AddressPage,
    },
    {
        path: config.publicRoutes.blog,
        component: BlogPage,
    },
    {
        path: config.publicRoutes.membership,
        component: MemberPage,
    },
    {
        path: config.publicRoutes.backpacks,
        component: ProductPage,
    },
    {
        path: config.publicRoutes.wallets,
        component: ProductPage,
    },
    {
        path: config.publicRoutes.accessories,
        component: ProductPage,
    },
    {
        path: config.publicRoutes.crossbodyBags,
        component: ProductPage,
    },
    {
        path: '/product',
        component: ProductDetail,
    },
];

export default routes;
