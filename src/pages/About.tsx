import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import aboutHero from "@/assets/about-hero.jpg";
import { Users, Code, BookOpen, Sparkles } from "lucide-react";

const About = () => {
  const teamMembers = [
    { name: "Hường", role: "Phát triển Web", icon: Code },
    { name: "Hậu", role: "Phát triển Web", icon: Code },
    { name: "Hiền", role: "Nội dung", icon: BookOpen },
    { name: "Hy", role: "Nội dung", icon: BookOpen },
  ];

  const technologies = [
    { name: "Lovable", description: "Nền tảng phát triển web AI-powered" },
    { name: "ChatGPT", description: "Nền tảng được dùng để tạo ra một số ảnh và làm lại ảnh" },
  ];

  const sources = [
    "Giáo trình Tư tưởng Hồ Chí Minh - Đại học Quốc gia Hà Nội",
    "Sách giáo khoa Tư tưởng Hồ Chí Minh - NXB Chính trị Quốc gia",
    "Tài liệu học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh",
    "Website chính thức về Chủ tịch Hồ Chí Minh",
    "Bảo tàng Hồ Chí Minh - Tài liệu lịch sử",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <HeroSection 
        title="Giới thiệu về Dự án"
        subtitle=""
        imageSrc={aboutHero}
      />

      <main className="container mx-auto px-4 py-12">
        {/* Giới thiệu dự án */}
        <ContentSection
          title="Về Dự án"
          subtitle="Sứ mệnh và mục tiêu"
        >
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              Dự án website <strong>"Tư tưởng Hồ Chí Minh"</strong> được xây dựng nhằm mục đích tóm tắt về tư tưởng cách mạng của Chủ tịch Hồ Chí Minh, 
              giúp sinh viên và người học dễ dàng tiếp cận, tìm hiểu về hệ thống tư tưởng cách mạng của Chủ tịch Hồ Chí Minh.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Website cung cấp nội dung được tổ chức theo từng phần: cơ sở hình thành, quá trình phát triển, giá trị và ý nghĩa, 
              cùng với bài trắc nghiệm giúp củng cố kiến thức.
            </p>
          </div>
        </ContentSection>

        {/* Đội ngũ */}
        <ContentSection
          title="Đội ngũ thực hiện"
          subtitle="4 thành viên"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {teamMembers.map((member, index) => {
              const IconComponent = member.icon;
              return (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-large transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-gradient-primary p-1 shadow-medium group-hover:scale-110 transition-transform duration-300">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-card">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ContentSection>

        {/* Công nghệ */}
        <ContentSection
          title="Công nghệ sử dụng"
          subtitle="Xây dựng với Lovable và công nghệ hiện đại"
        >
          <div className="space-y-6">
            <div className="rounded-xl bg-gradient-primary p-8 shadow-large animate-fade-in">
              <div className="flex items-start gap-4">
                <Sparkles className="h-12 w-12 text-primary-foreground flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary-foreground mb-3">Lovable - AI Development</h3>
                  <p className="text-lg text-primary-foreground/90 leading-relaxed">
                    Website được xây dựng bằng <strong>Lovable</strong>. Sử dụng trí tuệ nhân tạo để hỗ trợ tạo giao diện đẹp mắt, responsive và hiện đại chỉ trong thời gian ngắn.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {technologies.map((tech, index) => (
                <div 
                  key={index}
                  className="rounded-lg bg-card border border-border p-6 shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <h4 className="text-lg font-bold text-foreground mb-2">{tech.name}</h4>
                  <p className="text-muted-foreground">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ContentSection>

        {/* Nguồn tài liệu */}
        <ContentSection
          title="Nguồn tài liệu tham khảo"
          subtitle="Các nguồn học liệu chính thức và uy tín"
        >
          <div className="space-y-4">
            {sources.map((source, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <p className="text-foreground leading-relaxed flex-1">{source}</p>
              </div>
            ))}
          </div>
        </ContentSection>

        {/* Lời cảm ơn */}
        <div className="mt-16 mb-8 text-center animate-fade-in">
          <div className="inline-block rounded-2xl bg-gradient-primary p-8 shadow-large">
            <Users className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary-foreground mb-3">Lời cảm ơn</h3>
            <p className="text-lg text-primary-foreground/90 max-w-2xl">
              Chúng tôi xin chân thành cảm ơn thầy cô và bạn bè đã dành thờI gian xem dự án của chúng tôi.
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-border bg-card/50 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 - Dự án Tư tưởng Hồ Chí Minh</p>
        </div>
      </footer>
    </div>
  );
};

export default About;