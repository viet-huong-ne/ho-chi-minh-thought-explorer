import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import QuoteCard from "@/components/QuoteCard";
import ImageGrid from "@/components/ImageGrid";
import TimelineItem from "@/components/TimelineItem";

import revolutionScene from "@/assets/cach-mang.jpg";
import culturalHeritage from "@/assets/bac-ho.png";
import journeyMap from "@/assets/hanhtrinhraditimduongcuunuoc.jpg";
import theoryBooks from "@/assets/marx-lenin-hcm.jpg";
import patternBg from "@/assets/pattern-bg.jpg";

const Index = () => {
  const historyImages = [
    {
      src: revolutionScene,
      alt: "Phong trào cách mạng",
      caption: "Phong trào cách mạng thế giới đầu thế kỷ XX"
    },
    {
      src: culturalHeritage,
      alt: "Di sản văn hóa",
      caption: "Truyền thống văn hóa Việt Nam"
    },
    {
      src: theoryBooks,
      alt: "Lý luận Mác-Lênin",
      caption: "Chủ nghĩa Mác-Lênin"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection 
        title="Phần 1: Cơ sở hình thành tư tưởng Hồ Chí Minh"
        subtitle="Nền tảng lịch sử, văn hóa, tư tưởng và chủ quan hình thành nên hệ tư tưởng cách mạng vĩ đại."
      />
      
      <main className="container mx-auto px-4 py-16">
        {/* Tổng quan */}
        <ContentSection 
          title="1. Tổng quan ngắn gọn"
          subtitle="Hệ thống quan điểm toàn diện về cách mạng Việt Nam"
        >
          <div className="rounded-xl bg-card p-8 shadow-medium border border-border">
            <p className="text-lg text-foreground leading-relaxed">
              <strong className="text-primary">Tư tưởng Hồ Chí Minh</strong> là hệ thống quan điểm, 
              đường lối cách mạng hình thành trên nền tảng <strong className="text-primary">chủ nghĩa Mác-Lênin</strong>, 
              hấp thu tinh hoa văn hoá dân tộc và các giá trị tiến bộ của thế giới, được cụ thể hoá qua thực tiễn cách mạng Việt Nam.
            </p>
          </div>
        </ContentSection>

        <QuoteCard 
          quote="Không có gì quý hơn độc lập, tự do."
        />

        {/* Cơ sở khách quan */}
        <ContentSection 
          title="2. Cơ sở khách quan"
          subtitle="Bối cảnh lịch sử - xã hội hình thành tư tưởng"
          image={revolutionScene}
          imageAlt="Bối cảnh lịch sử"
        >
          <div className="space-y-6">
            <div className="rounded-lg bg-muted/50 p-6 border-l-4 border-primary">
              <h3 className="text-xl font-bold text-foreground mb-3">Ách thống trị thực dân</h3>
              <p className="text-foreground leading-relaxed">
                Việt Nam nửa cuối thế kỷ XIX — đầu thế kỷ XX dưới ách đô hộ Pháp; kinh tế, xã hội bị khai thác; 
                phong trào yêu nước truyền thống không còn phù hợp để giải quyết vấn đề cơ bản — độc lập dân tộc. 
                Hoàn cảnh đó tạo tiền đề khách quan để Hồ Chí Minh tìm đường cứu nước mới.
              </p>
            </div>

            <div className="rounded-lg bg-muted/50 p-6 border-l-4 border-accent">
              <h3 className="text-xl font-bold text-foreground mb-3">Phong trào cách mạng thế giới</h3>
              <p className="text-foreground leading-relaxed">
                Sự phát triển của phong trào vô sản quốc tế, Cách mạng Tháng Mười Nga (1917) và hoạt động của Quốc tế Cộng sản cung cấp một học thuyết cách mạng khoa học, 
                hữu hiệu để giải quyết vấn đề dân tộc - dân chủ - xã hội ở các nước thuộc địa. Hồ Chí Minh tiếp cận và vận dụng chủ nghĩa Mác-Lênin trong bối cảnh này.
              </p>
            </div>
          </div>
        </ContentSection>

        {/* Image Grid */}
        <ImageGrid images={historyImages} />

        {/* Cơ sở văn hóa */}
        <ContentSection 
          title="3. Cơ sở văn hóa - tư tưởng"
          subtitle="Tinh hoa dân tộc và nước ngoài"
          image={culturalHeritage}
          imageAlt="Văn hóa dân tộc"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl bg-card p-6 shadow-soft border border-border hover:shadow-medium transition-all">
              {/* <div className="mb-3 h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-2xl text-primary-foreground">🏛️</span>
              </div> */}
              <h3 className="text-xl font-bold text-foreground mb-3">Truyền thống văn hóa dân tộc</h3>
              <p className="text-muted-foreground leading-relaxed">
                Những giá trị như tinh thần yêu nước, tinh thần cộng đồng, đạo đức “nhân nghĩa”, lòng hiếu học, tính cần cù, tinh thần kháng chiến được Hồ Chí Minh tiếp nhận từ gia đình, quê hương và lịch sử dân tộc. 
                Ông thường vận dụng truyền thống này khi kêu gọi đoàn kết, nâng cao đạo đức cán bộ, phát động phong trào quần chúng.
              </p>
            </div>

            <div className="rounded-xl bg-card p-6 shadow-soft border border-border hover:shadow-medium transition-all">
              {/* <div className="mb-3 h-12 w-12 rounded-lg bg-gradient-accent flex items-center justify-center">
                <span className="text-2xl text-accent-foreground">📚</span>
              </div> */}
              <h3 className="text-xl font-bold text-foreground mb-3">Ảnh hưởng Nho giáo</h3>
              <p className="text-muted-foreground leading-relaxed">
                Các yếu tố nhân bản, tu dưỡng đạo đức, trách nhiệm trước dân (trọng nghĩa, liêm khiết) 
                tác động đến quan niệm đạo đức chính trị của ông.
              </p>
            </div>

            <div className="rounded-xl bg-card p-6 shadow-soft border border-border hover:shadow-medium transition-all">
              {/* <div className="mb-3 h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-2xl text-primary-foreground">☸️</span>
              </div> */}
              <h3 className="text-xl font-bold text-foreground mb-3">Ảnh hưởng Phật giáo</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yếu tố nhân văn (lòng thương người), tinh thần vị tha, ý thức cứu khổ ban vui 
                góp phần định hình cách tiếp cận đạo đức và giáo dục.
              </p>
            </div>

            <div className="rounded-xl bg-card p-6 shadow-soft border border-border hover:shadow-medium transition-all">
              {/* <div className="mb-3 h-12 w-12 rounded-lg bg-gradient-accent flex items-center justify-center">
                <span className="text-2xl text-accent-foreground">🌍</span>
              </div> */}
              <h3 className="text-xl font-bold text-foreground mb-3">Tư tưởng dân chủ phương Tây</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tư tưởng Tự do - Bình đẳng - Bác ái, phong trào lao động và dân quyền được tiếp thu 
                có chọn lọc, phù hợp mục tiêu giải phóng dân tộc.
              </p>
            </div>
          </div>
        </ContentSection>

        <QuoteCard 
          quote="Đạo đức cách mạng không phải từ trên trời rơi xuống. Nó do đấu tranh, rèn luyện bền bỉ hằng ngày mà phát triển và củng cố. Cũng như ngọc càng mài càng sáng, vàng càng luyện càng trong"
        />

        {/* Cơ sở lý luận */}
        <ContentSection 
          title="4. Cơ sở lý luận trực tiếp"
          subtitle="Chủ nghĩa Mác-Lênin"
          image={theoryBooks}
          imageAlt="Lý luận Mác-Lênin"
        >
          <div className="rounded-xl bg-gradient-primary p-8 shadow-large">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">Vai trò quyết định</h3>
            <p className="text-lg text-primary-foreground/90 leading-relaxed mb-4">
              Cung cấp nền tảng lý luận khoa học để xác định <strong>con đường cách mạng vô sản</strong>, 
              mối quan hệ độc lập dân tộc và CNXH, vai trò của Đảng Cộng sản, chiến lược vận động quần chúng.
            </p>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Được vận dụng sáng tạo vào hoàn cảnh Việt Nam: kết hợp dân tộc với giai cấp, 
              coi nông dân là lực lượng chủ yếu.
            </p>
          </div>
        </ContentSection>

        {/* Timeline */}
        <ContentSection 
          title="5. Cơ sở chủ quan"
          subtitle="Hành trình và trải nghiệm cá nhân"
        >
          <div className="space-y-0">
            <TimelineItem 
              year="1890"
              title="Xuất thân và giáo dục ban đầu"
              description="Sinh ra trong gia đình có truyền thống nho học; chịu ảnh hưởng nhà nho yêu nước; được đi học, tiếp nhận tinh thần dân tộc và học vấn."
            />
            <TimelineItem 
              year="1911"
              title="Hành trình ra đi"
              description="Nguyễn Tất Thành ra đi tìm đường cứu nước; làm nhiều nghề; hoạt động ở Pháp, Mỹ, Trung Quốc, Liên Xô; tiếp cận nhiều học thuyết và phong trào công nhân."
              image={journeyMap}
              onImageClick={() => window.open(journeyMap, '_blank')}
            />
            <TimelineItem 
              year="1920"
              title="Tính cách, đạo đức cách mạng"
              description="Khiêm tốn, giản dị, cần kiệm; đạo đức cao; tinh thần phục vụ nhân dân; đặt đạo đức cách mạng và trách nhiệm cán bộ lên hàng đầu."
            />
          </div>
        </ContentSection>

        {/* Kết luận */}
        <section className="my-16">
          <div 
            className="relative rounded-2xl overflow-hidden p-12 shadow-large"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${patternBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              6. Tương tác giữa các yếu tố
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-4xl">
              Tư tưởng Hồ Chí Minh là sản phẩm tổng hợp giữa hoàn cảnh lịch sử - xã hội, 
              lý luận Mác - Lênin, tinh hoa văn hóa dân tộc và tư tưởng nhân văn toàn cầu, 
              cùng với trải nghiệm thực tiễn và phẩm cách cá nhân; từ đó định hình đường lối 
              <strong className="text-accent"> "độc lập dân tộc gắn liền với chủ nghĩa xã hội"</strong>.
            </p>
          </div>
        </section>

        <QuoteCard 
          quote="Dân ta có một lòng nồng nàn yêu nước. Đó là một truyền thống quý báu của ta. Từ xưa đến nay, mỗi khi tổ quốc bị xâm lăng, thì tinh thần ấy lại sôi nổi, nó có sức mạnh to lớn làm rung chuyển núi sông."
        />
      </main>

      <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© 2025 – Trang đọc tài liệu lịch sử về Tư tưởng Hồ Chí Minh</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
