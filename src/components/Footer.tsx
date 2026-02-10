import './styles/footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="brand">
            <span className="brand-mark" />
            Minh Nguyen Studio
          </div>
          <p>
            Studio thiết kế và chiến lược cho các đội ngũ đang tăng trưởng nhanh
            tại Việt Nam.
          </p>
          <div className="footer-social">
            <a href="#">Behance</a>
            <a href="#">LinkedIn</a>
            <a href="#">Facebook</a>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Về chúng tôi</h4>
            <a href="#">Câu chuyện</a>
            <a href="#">Đội ngũ</a>
            <a href="#">Tuyển dụng</a>
          </div>
          <div>
            <h4>Dịch vụ</h4>
            <a href="#">Branding</a>
            <a href="#">Product UX</a>
            <a href="#">Growth Design</a>
          </div>
          <div>
            <h4>Liên hệ</h4>
            <a href="mailto:hello@minhnguyen.studio">hello@minhnguyen.studio</a>
            <a href="tel:+84900111222">+84 900 111 222</a>
            <span>Quận 1, TP.HCM</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Minh Nguyen Studio. All rights reserved.</span>
        <div className="footer-legal">
          <a href="#">Chính sách</a>
          <a href="#">Điều khoản</a>
        </div>
      </div>
    </footer>
  )
}
