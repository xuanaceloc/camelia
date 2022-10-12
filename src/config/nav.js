import { publicRoutes } from './routes';
import images from '../asset';
import { faPhoneFlip, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const headerNav = {
    left: [
        {
            path: publicRoutes.aboutUs,
            title: 'about us',
        },
        {
            path: publicRoutes.address,
            title: 'Address',
        },
    ],

    right: [
        {
            path: publicRoutes.blog,
            title: 'Blog',
        },
        {
            path: publicRoutes.membership,
            title: 'membership',
        },
    ],
};

export const headerNavImg = [
    {
        path: publicRoutes.backpacks,
        title: 'Backpacks',
        src: images.navBachpackImg,
        srcActive: images.navBachpackImgActive,
    },
    {
        path: publicRoutes.wallets,
        title: 'Wallets',
        src: images.navWalletImg,
        srcActive: images.navWalletImgActive,
    },
    {
        path: publicRoutes.accessories,
        title: 'Tote & Accessories',
        src: images.navTuiXachImg,
        srcActive: images.navTuiXachImgActive,
    },
    {
        path: publicRoutes.crossbodyBags,
        title: 'Crossbody bags',
        src: images.navBagImg,
        srcActive: images.navBagImgActive,
    },
];

export const menuMobile = [
    {
        path: publicRoutes.aboutUs,
        title: 'about us',
    },
    {
        path: publicRoutes.address,
        title: 'camelia store',
    },
    {
        path: publicRoutes.blog,
        title: 'blog',
    },
    {
        path: publicRoutes.membership,
        title: 'membership',
    },
];

export const menuAction = [
    {
        path: publicRoutes.tel,
        title: '19001052',
        icon: faPhoneFlip,
    },
    {
        path: publicRoutes.gmail,
        title: 'thecameliavn@gmail.com',
        icon: faEnvelope,
    },
];
