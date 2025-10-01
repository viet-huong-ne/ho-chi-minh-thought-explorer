import { useState } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("phan1");

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gradient-primary p-1 shadow-medium">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-card">
                <span className="text-xl font-bold text-primary">HCM</span>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-foreground">Tư tưởng Hồ Chí Minh</h1>
              <p className="text-sm text-muted-foreground">Hệ thống tư tưởng cách mạng</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-2" aria-label="Điều hướng chính">
            {["Phần 1", "Phần 2", "Phần 3"].map((item, idx) => {
              const id = `phan${idx + 1}`;
              return (
                <button
                  key={id}
                  onClick={() => setActiveSection(id)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === id
                      ? "bg-gradient-primary text-primary-foreground shadow-medium"
                      : "text-foreground hover:bg-muted hover:text-primary"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
