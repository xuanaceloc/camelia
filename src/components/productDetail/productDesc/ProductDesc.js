import classNames from 'classnames/bind';

import style from './ProductDesc.module.scss';
import Docs from '../../docs';
const cx = classNames.bind(style);

const DATA = [
    {
        title: 'NEW ORIGINAL BACKPACK',
    },
    {
        src: 'https://file.hstatic.net/1000365849/file/concept_1.5_a54de6794b104020a772d990c0e15a9e.jpg',
    },
    {
        content:
            'Chiếc balo form cổ điển mang phong cách tối giản được cách điệu bởi Camelia cùng với phối màu mới Beige Color đã trở nên hiện đại, trẻ trung và sang trọng hơn.',
    },
    {
        src: 'https://file.hstatic.net/1000365849/file/outdoor_new_original_7cb810fcb80d46a49f5f7b3980ee3c27.jpg',
    },
    {
        content:
            "Được thiết kế với kích thước vừa phải, New Original Backpack sỡ hữu 6 ngăn dây kéo đủ rộng rãi để có thể cùng bạn ''cân'' mọi thứ trên vai - thiết kế đa ngăn thông minh dành cho những người trẻ đa nhiệm.",
    },
    {
        content: 'Laptop Sleeve Size : 15inch',
    },
    {
        content: 'Chất liệu Polyester cao cấp chống thấm nước',
    },
    {
        src: 'https://file.hstatic.net/1000365849/file/outdoor_2_e65f3d5a199f440d8b5f121f7db6fd0e.jpg',
    },
    {
        content: '',
    },
    {
        content: 'Về Camelia Brand®',
    },
    {
        content:
            'Với thông điệp "More than Simplicity", Camelia dành trọn tâm huyết để làm ra các sản phẩm của mình. Không chỉ là sự đơn giản ở thiết kế bên ngoài giúp cho người dùng luôn cảm thấy dễ dàng trong cách phối đồ, mà còn là sự chăm chút tỉ mỉ để mỗi sản phẩm đều thể hiện sự tinh gọn, tạo ra sự tiện lợi và ngăn nắp cho người sử dụng.',
    },
    {
        content: 'Chính sách bảo hành - BẢO HÀNH TRỌN ĐỜI',
    },
    {
        content:
            '- Các sản phẩm của Camelia Brand được bảo hành TRỌN ĐỜI đối với những lồi từ nhà sản xuất',
    },
    {
        content:
            '- Trong 7 ngày đầu tiên khi sử dụng sản phẩm, Camelia hỗ trợ đổi trả dành cho những sản phẩm còn nguyên hộp, chưa bóc ra sử dụng và có giữ lại hoá đơn mua hàng tại Camelia',
    },
    {
        content:
            '- Camelia hỗ trợ bảo hành miễn phí với những lỗi người dùng như: đứt dây quai, bung đường chỉ, dây kéo lỏng với các dòng sản phẩm balo và ví .',
    },
    {
        content: '',
    },
    {
        content: 'LƯU Ý: Chính sách bảo hành KHÔNG áp dụng với:',
    },
    {
        content: '- Sản phẩm xuống màu sau một thời gian dài sử dụng',
    },
];

const ProductDesc = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('btn-wrapper')}>
                <button className={cx('btn', 'active')}>Mô tả sản phẩm</button>
                <button className={cx('btn')}>Video sản phẩm</button>
            </div>
            <div className={cx('content')}>
                <Docs data={DATA} className={'content-desc'} />
            </div>
        </div>
    );
};

export default ProductDesc;
