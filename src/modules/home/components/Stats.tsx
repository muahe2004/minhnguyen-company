import './styles/stats.css';

export default function Stats() {

    return (
        <section>
            <div className="container home-stats">
                <div className='home-stats__about'>
                    <h1 className='home-stats__title'>Công ty TNHH MTV TBCN và Xây dựng Minh Nguyen</h1>
                    <p className='home-stats__subtitle'>
                        Công ty TNHH MTV TBCN và Xây dựng Minh Nguyen là đơn vị uy tín trong lĩnh vực thi công, lắp đặt, tháo dỡ và bảo trì hệ thống giá kệ công nghiệp. 
                        Với đội ngũ kỹ thuật viên lành nghề và kinh nghiệm thực tiễn lâu năm, chúng tôi cam kết mang đến giải pháp an toàn, hiệu quả và tối ưu chi phí.
                        Bên cạnh lắp đặt giá kệ kho hàng, kệ siêu thị và kết cấu thép, Minh Nguyen còn cung cấp dịch vụ di dời, cải tạo và bảo trì định kỳ, đảm bảo hệ thống vận hành bền vững và ổn định theo thời gian.
                    </p>
                </div>
                <ul className='home-stats__list'>
                    <li className='home-stats__item'>
                        <h2 className='home-stats__number'>15+</h2>
                        <p className='home-stats__desc'>Kinh nghiệm thực tế</p>
                    </li>
                    <li className='home-stats__item'>
                        <h2 className='home-stats__number'>8500+</h2>
                        <p className='home-stats__desc'>Dự án hoàn thành</p>
                    </li>
                    <li className='home-stats__item'>
                        <h2 className='home-stats__number'>2000+</h2>
                        <p className='home-stats__desc'>Kết cấu lắp đặt</p>
                    </li>
                    <li className='home-stats__item'>
                        <h2 className='home-stats__number'>1000000+</h2>
                        <p className='home-stats__desc'>Hệ thống giá kệ thi công</p>
                    </li>
                </ul>
            </div>
        </section>
    )
};