import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Phần 1" },
    { path: "/phan2", label: "Phần 2" },
    { path: "/phan3", label: "Phần 3" },
    { path: "/quiz", label: "Trắc nghiệm" }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gradient-primary p-1 shadow-medium">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-card">
                <span className="text-xl font-bold text-primary">HCM</span>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-foreground">Tư tưởng Hồ Chí Minh</h1>
              <p className="text-sm text-muted-foreground">Hệ thống tư tưởng cách mạng</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-2" aria-label="Điều hướng chính">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? "bg-gradient-primary text-primary-foreground shadow-medium"
                    : "text-foreground hover:bg-muted hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
