import images from '../../asset';
import Docs from '../../components/docs';

const DATA = [
    {
        header: 'GIỚI THIỆU',
    },
    {
        mainTitle: 'Welcome to Camelia',
        center: true,
    },
    {
        content:
            ' "Camelia puts its heart and soul into every product, giving people minimalism from the smallest things."',
        center: true,
    },
    {
        separate: true,
    },
    {
        content:
            'Chắc hẳn chúng ta đều đã và đang gặp phải những rắc rối nhỏ nhặt trong cuộc sống hàng ngày từ việc túi áo quần bị quá tải bởi nhiều vật dụng cho tới việc chìa khóa, tai nghe, điện thoại bị thất lạc trong chính chiếc balo, túi xách mà chúng ta bỏ vào một cách lộn xộn. Nhưng rồi chúng ta dần cho đó là thói quen và sống chung với những vấn đề "nhỏ nhặt"  này...',
    },
    {
        content:
            'Hãy trải nghiệm và cảm nhận sự thay đổi của bản thân bạn cùng với Camelia nhé!',
    },
    {
        src: images.aboutUsImg,
    },
    {
        separate: true,
    },
    {
        mainTitle: 'Have a good day!',
        center: true,
    },
];

const AboutUsPage = () => {
    return (
        <div className="container">
            <div className="content">
                <Docs data={DATA} />
            </div>
        </div>
    );
};

export default AboutUsPage;
