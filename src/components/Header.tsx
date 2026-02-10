import Button from './Button'
import './styles/header.css'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <span className="brand-mark" />
          Minh Nguyen Studio
        </div>
        <nav className="nav-links">
          <a href="#services">Dịch vụ</a>
          <a href="#solutions">Giải pháp</a>
          <a href="#work">Dự án</a>
          <a href="#contact">Liên hệ</a>
        </nav>
        <div className="header-actions">
          <Button className="ghost">Đăng nhập</Button>
          <Button className="primary">Bắt đầu</Button>
        </div>
      </div>
    </header>
  )
}
