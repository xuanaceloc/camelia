import images from '../../asset';
import Docs from '../../components/docs';
const DATA = [
    {
        header: 'CỬA HÀNG',
    },
    {
        content:
            ' Hãy ghé thăm cửa hàng của Camelia Brand để xem trực tiếp các sản phẩm nhé!',
    },
    {
        separate: true,
    },
    {
        content: [
            {
                tag: 'strong',
                text: ' Hệ thống cửa hàng Camelia Brand: ',
            },
        ],
    },
    {
        list: [
            'Store HCM : 71 Trần Quang Diệu, Phường 14, Quận 3',
            'Store HCM : 633 Nguyễn Đình Chiểu, Phường 2, Quận 3',
        ],
    },
    {
        content: '',
    },
    {
        content: [
            {
                tag: 'strong',
                text: ' Giờ mở cửa: từ 9AM đến 10PM các ngày trong tuần.',
            },
        ],
    },
    {
        content: '',
    },
    {
        content:
            'Chi nhánh 1 tại HCM: 71 Trần Quang Diệu, Phường 14, Quận 3, TP Hồ Chí Minh.',
        color: 'red',
    },
    {
        src: images.addressImg1,
    },
    {
        src: images.addressImg2,
    },
    {
        content: '',
    },
    {
        content: '',
    },
    {
        content:
            ' Chi nhánh 2 tại HCM: 633 Nguyễn Đình Chiểu, Phường 2, Quận 3.',
        color: 'red',
    },
    {
        src: images.addressImg3,
    },
    {
        src: images.addressImg4,
    },
    {
        separate: true,
    },
    {
        content:
            'Nếu quý khách có bất kỳ yêu cầu hay thắc mắc nào hoặc không hài lòng về sản phẩm/dịch vụ của Camelia Brand, hãy liên hệ với chúng tôi tại thecameliavn@gmail.com hoặc 0909140170.',
    },
];
const AddressPage = () => {
    return (
        <div className="container">
            <div className="content">
                <Docs data={DATA} />
            </div>
        </div>
    );
};

export default AddressPage;
