import images from '../../asset';
import Docs from '../../components/docs';
const DATA = [
    {
        header: 'MEMBERSHIP',
    },
    {
        src: images.memberImg1,
    },
    {
        mainTitle: ' CHƯƠNG TRÌNH KHÁCH HÀNG THÂN THIẾT CAMELIA BRAND',
    },
    {
        content: [
            'Từ những',
            { tag: 'b', text: 'sự ưu ái hết sức đặc biệt' },
            'của các bạn đã dành cho Camelia trong thời gian vừa qua khi có rất nhiều khách hàng đã sở hữu nhiều sản phẩm, ủng hộ và yêu thích Camelia Brand. Chúng mình thật sự trân trọng điều đó.',
        ],
    },
    {
        content: [
            'Chương trình khách hàng thân thiết ra đời, với mục tiêu nâng cao trải nghiệm khách hàng và ',
            { tag: 'b', text: 'tri ân nhiều' },
            'khách hàng đã đồng hành cùng Camelia Brand từ những ngày đầu tiên.',
        ],
    },
    {
        content: [{ tag: 'strong', text: '1. Cách thức hoạt động' }],
    },
    {
        content: [
            ' - Bạn sẽ được',
            {
                tag: 'span',
                text: 'tự động cập nhật',
            },
            'chi tiêu tích lũy khách hàng thân thiết ngay khi mua sản phẩm bất kỳ từ Camelia Brand.',
        ],
    },
    {
        content: [
            ' - Camelia Brand quản lý chi tiêu tích lũy của bạn theo số điện thoại đặt hàng, điện thoại đặt hàng,',
            {
                tag: 'span',
                text: '  thẻ Membership và Voucher sẽ được phát hành và gửi đến tận tay',
            },
            'điện thoại đặt hàng, bạn hoàn toàn miễn phí khi bạn đủ điều kiện sở hữu.',
        ],
    },
    {
        content:
            '- Khách hàng mua hàng tại cửa hàng xuất trình thẻ hoặc chỉ cần đọc số điện thoại là có thể tích luỹ điểm.',
    },
    {
        content: [
            ' - Khách hàng mua hàng online trên Website/Facebook/Instagram đều được',
            {
                tag: 'span',
                text: 'tích luỹ điểm tự động',
            },
            'để thăng hạng giống như mua tại cửa hàng.',
        ],
    },
    {
        content: [
            '- Khách hàng mua hàng online trên website chỉ cần nhập',
            {
                tag: 'span',
                text: "số điện thoại mua hàng của mình vào ô 'Code'",
            },
            "tại Trang thanh toán là có thể nhận được Quyền lợi đúng của hạng thẻ mình đang sở hữu. (Trong trường hợp khách hàng chưa trở thành thành viên của Membership Program, các bạn đặt đơn hàng không cần nhập số điện thoại vào ô 'Code' chúng mình sẽ tự động cập nhật tích luỹ)",
        ],
    },
    {
        content: [{ tag: 'strong', text: '2. Quy định sử dụng' }],
    },
    {
        content: [
            '- Điểm tích lũy có giá trị từ ngày',
            {
                tag: 'b',
                text: '01/06/2020 đến hết ngày 01/06/2021',
            },
        ],
    },
    {
        content:
            ' - Tất cả đơn hàng trước đây từ trước khi chương trình khách hàng thân thiết ra đời đều được tính tích luỹ điểm nhằm tri ân những khách hàng đã đồng hành cùng Camelia từ những ngày đầu tiên.',
    },
    {
        content:
            '- Những ưu đãi của hạng thẻ được áp dụng kèm với các chương trình khuyến mãi khác.',
    },
    {
        content: '',
    },
    {
        content: [{ tag: 'strong', text: '3. Các ưu đãi và hạng mức thẻ' }],
    },
    {
        content:
            ' Điểm tích luỹ được tính theo giá trị đơn hàng, mỗi giá trị tích luỹ khác nhau tương ứng với các hạng thẻ khác nhau.',
    },
    {
        content: [{ tag: 'strong', text: '3.1. Loyal Member: ' }],
    },
    {
        content: [
            'Điểm tích luỹ: Tổng giá trị đơn hàng đạt mức',
            {
                tag: 'u',
                text: '2.000.000 VNĐ.',
            },
        ],
    },
    {
        content: [
            'Ưu đãi',
            {
                tag: 'span',
                text: 'giảm giá 10%',
            },
            'toàn bộ đơn hàng.',
        ],
    },
    {
        content: 'Ưu đãi giảm giá 20% vào ngày sinh nhật.',
    },
    {
        content: 'Nhận voucher trị giá 100.000VNĐ khi thăng hạng.',
    },
    {
        content:
            'Và còn nhiều phần quà bí ẩn khác sẽ được gửi đến bạn trong suốt quá trình trở thành Loyal Member.',
    },
    {
        content: [{ tag: 'strong', text: '3.2. Premium Member :' }],
    },
    {
        content: [
            '- Điểm tích luỹ : Tổng giá trị đơn hàng đạt mức',
            {
                tag: 'u',
                text: '5.000.000 VNĐ.',
            },
        ],
    },
    {
        content: [
            ' - Ưu đãi giảm giá',
            {
                tag: 'span',
                text: '15%',
            },
            'toàn bộ đơn hàng.',
        ],
    },
    {
        content: '- Ưu đãi giảm giá 30% vào ngày sinh nhật.',
    },
    {
        content: '- Nhận voucher trị giá 300.000VNĐ khi thăng hạng.',
    },
    {
        content: '- Nhận quà tri ân khách hàng cao cấp từ Camelia Brand.',
    },
    {
        content:
            'Và còn nhiều phần quà bí ẩn khác sẽ được gửi đến bạn trong suốt quá trình trở thành Loyal Member.',
    },
    {
        content: [{ tag: 'strong', text: '3.3. VIP Member: ' }],
    },
    {
        content: [
            '- Điểm tích luỹ: Tổng giá trị đơn hàng đạt mức',
            { tag: 'u', text: '10.000.000 VNĐ.' },
        ],
    },
    {
        content: [
            '- Ưu đãi',
            {
                tag: 'span',
                text: 'giảm giá 20%',
            },
            'toàn bộ đơn hàng.',
        ],
    },
    {
        content: '- Ưu đãi giảm giá 40% vào ngày sinh nhật.',
    },
    {
        content: '- Nhận voucher trị giá 500.000VNĐ khi thăng hạng.',
    },
    {
        content: [
            'Nhận',
            {
                tag: 'span',
                text: ' quà tri ân khách hàng VIP hằng năm',
            },
            'từ Camelia Brand.',
        ],
    },
    {
        content:
            ' Và còn nhiều phần quà bí ẩn khác sẽ được gửi đến bạn trong suốt quá trình trở thành Loyal Member.',
    },
    {
        content: '',
    },
    {
        separate: true,
    },
    {
        content: [
            {
                tag: 'strong',
                text: '"Chúng mình biết các bạn có rất nhiều sự lựa chọn, cảm ơn thật nhiều vì đã chọn chúng mình hôm nay "',
            },
        ],
    },
    {
        content:
            ' Nếu quý khách có bất kỳ yêu cầu hay thắc mắc nào hoặc không hài lòng về sản phẩm/dịch vụ của Camelia, hãy liên hệ với chúng tôi tại thecameliavn@gmail.com hoặc 0909140170.',
    },
    { content: '' },
];
const MemberPage = () => {
    return (
        <div className="container">
            <div className="content">
                <Docs data={DATA} />
            </div>
        </div>
    );
};

export default MemberPage;
