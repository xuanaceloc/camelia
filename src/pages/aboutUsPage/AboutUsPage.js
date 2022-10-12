import images from '../../asset';

const AboutUsPage = () => {
    return (
        <div className="container">
            <div className="content">
                <h1 className="header">GIỚI THIỆU</h1>
                <p className="text center">
                    <span className="main-title">Welcome to Camelia</span>
                </p>
                <p className="text center">
                    "Camelia puts its heart and soul into every product, giving
                    people minimalism from the smallest things."
                </p>
                <p className="separate"></p>
                <p className="text">
                    Chắc hẳn chúng ta đều đã và đang gặp phải những rắc rối nhỏ
                    nhặt trong cuộc sống hàng ngày từ việc túi áo quần bị quá
                    tải bởi nhiều vật dụng cho tới việc chìa khóa, tai nghe,
                    điện thoại bị thất lạc trong chính chiếc balo, túi xách mà
                    chúng ta bỏ vào một cách lộn xộn. Nhưng rồi chúng ta dần cho
                    đó là thói quen và sống chung với những vấn đề "nhỏ nhặt"
                    này...
                </p>
                <p className="text">
                    Với thông điệp "More than Simplicity", Camelia dành trọn tâm
                    huyết để làm ra các sản phẩm của mình. Không chỉ là sự đơn
                    giản ở thiết kế bên ngoài giúp cho người dùng đỡ mất thời
                    gian suy nghĩ đến việc lựa chọn quần áo phù hợp, mà thiết kế
                    bên trong của mỗi sản phẩm đều được chăm chút, tinh gọn nhằm
                    tạo ra sự tiện lợi và ngăn nắp cho người sử dụng.
                </p>
                <p className="text">
                    Hãy trải nghiệm và cảm nhận sự thay đổi của bản thân bạn
                    cùng với Camelia nhé!
                </p>
                <p className="text center">
                    <img src={images.aboutUsImg} alt="" />
                </p>
                <p className="separate"></p>
                <p className="text center">
                    <span className="main-title">Have a good day!</span>
                </p>
            </div>
        </div>
    );
};

export default AboutUsPage;
