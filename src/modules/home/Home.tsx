import Button from '../../components/Button'
import './home.css'

export default function Home() {
  return (
    <main className="home">
      <section className="hero" id="services">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Đồng hành cùng doanh nghiệp Việt</p>
            <h1>
              Thiết kế thương hiệu, sản phẩm số và trải nghiệm khách hàng một
              cách có hệ thống.
            </h1>
            <p className="lead">
              Chúng tôi giúp đội ngũ tăng tốc ra mắt, tối ưu vận hành và tạo ra
              câu chuyện thương hiệu nhất quán từ online đến offline.
            </p>
            <div className="hero-actions">
              <Button className="primary">Nhận tư vấn miễn phí</Button>
              <Button className="outline">Xem hồ sơ năng lực</Button>
            </div>
            <div className="hero-meta">
              <div className="meta-item">
                <span className="meta-number">48h</span>
                <span className="meta-label">Thời gian phản hồi</span>
              </div>
              <div className="meta-item">
                <span className="meta-number">120+</span>
                <span className="meta-label">Dự án đã triển khai</span>
              </div>
              <div className="meta-item">
                <span className="meta-number">4.9/5</span>
                <span className="meta-label">Đánh giá khách hàng</span>
              </div>
            </div>
          </div>
          <div className="hero-art">
            <div className="card card-primary">
              <p className="card-label">Gói khởi động</p>
              <h3>Brand Sprint</h3>
              <p>Tập trung vào định vị, thông điệp và bộ nhận diện cốt lõi.</p>
              <div className="card-footer">
                <span>2 tuần</span>
                <span>08 deliverables</span>
              </div>
            </div>
            <div className="card card-accent">
              <p className="card-label">Tăng trưởng</p>
              <h3>Digital Launch</h3>
              <p>
                Thiết kế landing page, nội dung đa kênh và chiến dịch ra mắt.
              </p>
              <div className="card-footer">
                <span>4 tuần</span>
                <span>15 deliverables</span>
              </div>
            </div>
            <div className="card card-neutral">
              <p className="card-label">Trải nghiệm số</p>
              <h3>Product UX</h3>
              <p>
                Tối ưu hành trình người dùng với nghiên cứu, prototype và UI.
              </p>
              <div className="card-footer">
                <span>6 tuần</span>
                <span>20 deliverables</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="solutions">
        <div className="container">
          <div className="section-head">
            <h2>Giải pháp trọn gói cho đội ngũ tăng trưởng</h2>
            <p>
              Từ chiến lược đến triển khai, mọi thứ được thiết kế để giảm tải cho
              team nội bộ và tạo ra kết quả rõ ràng.
            </p>
          </div>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Chiến lược thương hiệu</h3>
              <p>
                Định vị, kiến trúc thương hiệu, bộ thông điệp và hướng dẫn triển
                khai.
              </p>
            </div>
            <div className="feature-card">
              <h3>Thiết kế sản phẩm số</h3>
              <p>
                UX/UI, thiết kế hệ thống, prototype và thử nghiệm trước khi
                build.
              </p>
            </div>
            <div className="feature-card">
              <h3>Marketing đa kênh</h3>
              <p>
                Landing page, social content, video ngắn và chiến dịch chuyển
                đổi.
              </p>
            </div>
            <div className="feature-card">
              <h3>Vận hành & tối ưu</h3>
              <p>
                Dashboard theo dõi, workflow đội ngũ và cải tiến liên tục theo
                dữ liệu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt" id="work">
        <div className="container split">
          <div className="split-copy">
            <h2>Những con số tạo khác biệt</h2>
            <p>
              Chúng tôi làm việc sâu với từng team để đảm bảo mọi quyết định đều
              phục vụ mục tiêu tăng trưởng và trải nghiệm khách hàng.
            </p>
            <Button className="dark">Tải brochure</Button>
          </div>
          <div className="stats">
            <div className="stat-card">
              <span className="stat-number">32%</span>
              <span className="stat-label">Tăng trưởng leads trung bình</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">18</span>
              <span className="stat-label">Ngành hàng đã phục vụ</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">7 ngày</span>
              <span className="stat-label">Chu kỳ tối ưu đầu tiên</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta" id="contact">
        <div className="container cta-inner">
          <div>
            <h2>Sẵn sàng tạo cú hích mới cho thương hiệu?</h2>
            <p>
              Chia sẻ mục tiêu của bạn, chúng tôi sẽ phản hồi trong 48 giờ với
              bản đề xuất phù hợp.
            </p>
          </div>
          <div className="cta-actions">
            <Button className="light">Đặt lịch tư vấn</Button>
            <Button className="outline light">Gửi brief nhanh</Button>
          </div>
        </div>
      </section>
    </main>
  )
}
