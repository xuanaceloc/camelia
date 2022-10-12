import {
    faLocationDot,
    faPhoneFlip,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import { publicRoutes } from './routes';
import images from '../asset';

export const footerLocation = [
    {
        path: publicRoutes.cuaHang,
        title: 'Store 1: 633 Nguyễn Đình Chiểu, P.2, Q.3. HCM',
        icon: faLocationDot,
    },
    {
        path: publicRoutes.cuaHang,
        title: 'Store 2: 71 Trần Quang Diệu, P14, Q3, HCM',
        icon: faLocationDot,
    },
    {
        href: publicRoutes.tel,
        title: 'Hotline : 19001052',
        icon: faPhoneFlip,
    },
    {
        href: publicRoutes.gmail,
        title: 'thecameliavn@gmail.com',
        icon: faEnvelope,
    },
];

export const footerNav = [
    {
        path: publicRoutes.aboutUs,
        title: 'Giới thiệu',
    },
    {
        path: publicRoutes.phuongThucGiaoHang,
        title: 'Phương thức giao hàng',
    },
    {
        path: publicRoutes.phuongThucThanhToan,
        title: 'Phương thức thanh toán',
    },
    {
        path: publicRoutes.chinhSachbaoHanh,
        title: 'Chính sách bảo hành',
    },
    {
        path: publicRoutes.chinhSachDoiTra,
        title: 'Chính sách đổi trả',
    },
    {
        path: publicRoutes.chinhSachBaoMat,
        title: 'Chính sách bảo mật',
    },
];

export const footerSocial = [
    {
        path: publicRoutes.facebook,
        icon: images.facebook,
    },
    {
        path: publicRoutes.instagram,
        icon: images.instagram,
    },
    {
        path: publicRoutes.youtube,
        icon: images.youtube,
        color: '#ff0000',
    },
];
