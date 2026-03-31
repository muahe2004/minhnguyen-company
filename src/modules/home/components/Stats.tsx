import './styles/stats.css';

export default function Stats() {

    return (
        <section>
            <div className="container home-stats">
                <div className='home-stats__about'>
                    <h1 className='home-stats__title'>
                        Doanh nghiệp <span className='home-stats__accent'>Uy tín</span> và{' '}
                        <span className='home-stats__accent'>Chuyên nghiệp</span>
                    </h1>
                    <p className='home-stats__subtitle'>
                        Minh Nguyên chuyên thi công, lắp đặt, tháo dỡ và bảo trì hệ thống giá kệ công nghiệp với giải pháp an toàn, hiệu quả, tối ưu chi phí.
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
