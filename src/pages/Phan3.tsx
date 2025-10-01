import Header from "@/components/Header";
import ContentSection from "@/components/ContentSection";
import QuoteCard from "@/components/QuoteCard";

import valueHero from "@/assets/value-hero.jpg";

const Phan3 = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative h-[400px] overflow-hidden">
        <img 
          src={valueHero} 
          alt="Giá trị tư tưởng Hồ Chí Minh" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in">
            Phần 3: Giá trị và ý nghĩa của tư tưởng HCM
          </h1>
          <p className="text-xl text-primary-foreground/90 animate-fade-in">
            Từ cách mạng Việt Nam đến tầm vóc thời đại và toàn cầu.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="rounded-xl bg-card p-8 shadow-medium border border-border mb-12 animate-fade-in">
          <p className="text-lg text-foreground leading-relaxed">
            Tư tưởng Hồ Chí Minh là <strong className="text-primary">tài sản tinh thần của dân tộc Việt Nam</strong> và 
            có giá trị đối với phong trào giải phóng dân tộc, cũng như sự phát triển của nhân loại tiến bộ.
          </p>
        </div>

        <ContentSection 
          title="1. Giá trị đối với cách mạng Việt Nam"
          subtitle="Nền tảng cho sự phát triển của dân tộc"
        >
          <div className="space-y-8">
            <div className="rounded-xl bg-muted/50 p-6 border-l-4 border-primary animate-fade-up">
              <h3 className="text-xl font-bold text-foreground mb-4">a) Xác định con đường phát triển của dân tộc</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Khẳng định <strong>độc lập dân tộc gắn liền với chủ nghĩa xã hội</strong> là con đường đúng đắn.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Giúp vượt qua khủng hoảng đường lối đầu thế kỷ XX, đưa cách mạng đi từ thắng lợi này đến thắng lợi khác.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-muted/50 p-6 border-l-4 border-accent animate-fade-up" style={{ animationDelay: "100ms" }}>
              <h3 className="text-xl font-bold text-foreground mb-4">b) Xây dựng lực lượng cách mạng</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Khẳng định vai trò <strong>Đảng Cộng sản Việt Nam</strong> là nhân tố lãnh đạo.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Đề cao sức mạnh đại đoàn kết dân tộc; coi nhân dân là gốc của cách mạng.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-muted/50 p-6 border-l-4 border-primary animate-fade-up" style={{ animationDelay: "200ms" }}>
              <h3 className="text-xl font-bold text-foreground mb-4">c) Tư tưởng về Nhà nước, dân chủ và pháp quyền</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Đặt nền móng cho mô hình <strong>"Nhà nước của dân, do dân, vì dân"</strong>.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Là nền tảng xây dựng và hoàn thiện Nhà nước pháp quyền XHCN Việt Nam.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-muted/50 p-6 border-l-4 border-accent animate-fade-up" style={{ animationDelay: "300ms" }}>
              <h3 className="text-xl font-bold text-foreground mb-4">d) Tư tưởng về đạo đức cách mạng</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Đề cao: cần, kiệm, liêm, chính, chí công vô tư.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Xây dựng con người mới XHCN có tài và có đức, trong đó đạo đức là gốc.</span>
                </li>
              </ul>
            </div>
          </div>
        </ContentSection>

        <QuoteCard 
          quote="Đạo đức là gốc của cách mạng. Có tài mà không có đức, như nhà không có móng, chẳng làm được việc gì."
        />

        <ContentSection 
          title="2. Giá trị đối với phong trào cách mạng thế giới"
          subtitle="Đóng góp cho phong trào giải phóng dân tộc"
        >
          <div className="space-y-8">
            <div className="rounded-xl bg-card p-6 shadow-soft border border-border hover:shadow-medium transition-all">
              <div className="mb-3 h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-2xl text-primary-foreground">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">a) Cống hiến cho lý luận giải phóng dân tộc</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Khẳng định cách mạng thuộc địa có thể thắng <strong>trước</strong> cách mạng vô sản ở chính quốc.</li>
                <li>• Kết hợp sức mạnh dân tộc với sức mạnh thời đại để giành thắng lợi.</li>
              </ul>
            </div>

            <div className="rounded-xl bg-card p-6 shadow-soft border border-border hover:shadow-medium transition-all">
              <div className="mb-3 h-12 w-12 rounded-lg bg-gradient-accent flex items-center justify-center">
                <span className="text-2xl text-accent-foreground">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">b) Tấm gương đấu tranh giải phóng dân tộc</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Thắng lợi Cách mạng Tháng Tám 1945, Điện Biên Phủ (1954), kháng chiến chống Mỹ... là nguồn cổ vũ cho các dân tộc thuộc địa.</li>
                <li>• Hồ Chí Minh là biểu tượng chống thực dân, vì độc lập, công lý và bình đẳng.</li>
              </ul>
            </div>

            <div className="rounded-xl bg-card p-6 shadow-soft border border-border hover:shadow-medium transition-all">
              <div className="mb-3 h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-2xl text-primary-foreground">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">c) Thúc đẩy tinh thần đoàn kết quốc tế</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Tư tưởng "giúp bạn là tự giúp mình"; tinh thần quốc tế vô sản; đoàn kết các dân tộc bị áp bức.</li>
              </ul>
            </div>
          </div>
        </ContentSection>

        <QuoteCard 
          quote="Giúp bạn là tự giúp mình. Càng giúp bạn vững, thì mình càng vững."
        />

        <ContentSection 
          title="3. Giá trị thời đại và ý nghĩa hiện nay"
          subtitle="Áp dụng trong thời kỳ đổi mới và hội nhập"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl bg-card p-6 shadow-soft border border-border hover:shadow-medium transition-all">
              <div className="mb-4 h-16 w-16 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto">
                <span className="text-3xl text-primary-foreground">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 text-center">Trong công cuộc đổi mới</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tư tưởng Hồ Chí Minh tiếp tục là kim chỉ nam cho đổi mới, hội nhập và phát triển bền vững. 
                Mục tiêu: <strong>"Dân giàu, nước mạnh, dân chủ, công bằng, văn minh"</strong>.
              </p>
            </div>

            <div className="rounded-xl bg-card p-6 shadow-soft border border-border hover:shadow-medium transition-all">
              <div className="mb-4 h-16 w-16 rounded-lg bg-gradient-accent flex items-center justify-center mx-auto">
                <span className="text-3xl text-accent-foreground">👥</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 text-center">Xây dựng con người mới</h3>
              <p className="text-muted-foreground leading-relaxed">
                Chuẩn mực xây dựng đội ngũ cán bộ, đảng viên và thế hệ trẻ. 
                Phong trào học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh diễn ra sâu rộng.
              </p>
            </div>

            <div className="rounded-xl bg-card p-6 shadow-soft border border-border hover:shadow-medium transition-all">
              <div className="mb-4 h-16 w-16 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto">
                <span className="text-3xl text-primary-foreground">🌏</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 text-center">Ý nghĩa toàn cầu</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tư tưởng về <strong>hòa bình, độc lập, tự do, hợp tác hữu nghị</strong> có giá trị bền vững. 
                Tính nhân văn sâu sắc góp phần vào giá trị chung của nhân loại.
              </p>
            </div>
          </div>
        </ContentSection>

        <section className="my-16">
          <div className="relative rounded-2xl overflow-hidden p-12 shadow-large bg-gradient-primary">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Kết luận
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-4xl mb-4">
              Tư tưởng Hồ Chí Minh không chỉ là di sản quý báu của dân tộc Việt Nam mà còn là 
              đóng góp to lớn cho kho tàng lý luận cách mạng của nhân loại.
            </p>
            <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-4xl">
              Trong thời đại mới, việc học tập, nghiên cứu và vận dụng sáng tạo tư tưởng Hồ Chí Minh 
              có ý nghĩa đặc biệt quan trọng đối với sự nghiệp xây dựng và bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© 2025 – Trang đọc tài liệu lịch sử về Tư tưởng Hồ Chí Minh</p>
        </div>
      </footer>
    </div>
  );
};

export default Phan3;
