import images from '../../asset';

const AddressPage = () => {
    return (
        <div className="container">
            <div className="content">
                <h1 className="header">CỬA HÀNG</h1>
                <p className="text">
                    Hãy ghé thăm cửa hàng của Camelia Brand để xem trực tiếp các
                    sản phẩm nhé!
                </p>
                <p className="separate"></p>
                <p className="text">
                    <strong>Hệ thống cửa hàng Camelia Brand: </strong>
                </p>
                <p className="text">
                    <ul>
                        <li>
                            <strong>
                                Store HCM : 71 Trần Quang Diệu, Phường 14, Quận
                                3
                            </strong>
                        </li>
                        <li>
                            <strong>
                                Store HCM : 633 Nguyễn Đình Chiểu, Phường 2,
                                Quận 3
                            </strong>
                        </li>
                    </ul>
                </p>
                <p className="text">
                    <strong>
                        Giờ mở cửa: từ 9AM đến 10PM các ngày trong tuần.
                    </strong>
                </p>
                <p className="text text-red">
                    Chi nhánh 1 tại HCM: 71 Trần Quang Diệu, Phường 14, Quận 3,
                    TP Hồ Chí Minh.
                </p>
                <p className="text">
                    <img src={images.addressImg1} alt="" />
                </p>
                <p className="text">
                    <img src={images.addressImg2} alt="" />
                </p>
                <p className="text"></p>
                <p className="text"></p>
                <p className="text text-red">
                    Chi nhánh 2 tại HCM: 633 Nguyễn Đình Chiểu, Phường 2, Quận
                    3.
                </p>
                <p className="text">
                    <img src={images.addressImg3} alt="" />
                </p>
                <p className="text">
                    <img src={images.addressImg4} alt="" />
                </p>
                <p className="separate"></p>
                <p className="text">
                    Nếu quý khách có bất kỳ yêu cầu hay thắc mắc nào hoặc không
                    hài lòng về sản phẩm/dịch vụ của Camelia Brand, hãy liên hệ
                    với chúng tôi tại thecameliavn@gmail.com hoặc 0909140170.
                </p>
            </div>
        </div>
    );
};

export default AddressPage;
