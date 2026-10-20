# KẾ HOẠCH DỰ ÁN EVERGREEN REAL ESTATE VIỆT NAM
*(Tài liệu Kiến trúc Kỹ thuật & Kế hoạch Phát triển Frontend)*

---

## 1. TỔNG QUAN DỰ ÁN

### 1.1. Bối cảnh & Tầm nhìn
**LumiNest** (thương hiệu demo tạm thời, lấy cảm hứng từ EverGreen) là website giới thiệu và tìm kiếm bất động sản cao cấp, sinh thái (Eco-luxury & Biophilic Living) hướng tới thị trường Việt Nam. 

Dự án lấy cảm hứng thiết kế nguyên bản từ mẫu **EverGreen Real Estate Template** (Dribbble shot: 25548322), nhưng được tái định hình toàn diện để phản ánh văn hóa, thị hiếu và chuẩn mực thị trường bất động sản Việt Nam:
- Định vị phân khúc: Bất động sản nghỉ dưỡng, căn hộ xanh cao cấp, biệt thự ven sông/ven biển, dinh thự sinh thái.
- Trải nghiệm người dùng: Tối giản (Minimalist), tinh tế (Refined), cảm giác an tâm (Trustworthy), mang đậm hơi thở kiến trúc bền vững.
- Bản địa hóa 100%: Ngôn ngữ tiếng Việt, tiền tệ VNĐ (Tỷ / Triệu m²), số đo m², pháp lý chuẩn Việt Nam (Sổ hồng lâu dài, quy hoạch 1/500, sở hữu 50 năm có thời hạn).

### 1.2. Mục tiêu kỹ thuật & Trải nghiệm
- **Frontend-First**: Ưu tiên độ tương đồng bố cục với ảnh tham chiếu trong phạm vi asset được phép sử dụng. Kiểm tra trực quan qua screenshot; không cam kết pixel-accurate khi chưa có Figma/asset gốc.
- **Responsive toàn diện**: Tối ưu trải nghiệm liền mạch trên Desktop (1440px+), Laptop (1024px - 1280px), Tablet (768px - 1023px) và Mobile (375px - 767px).
- **SEO & Web Vitals**: Cấu trúc ngữ nghĩa (Semantic HTML5), đặt mục tiêu Core Web Vitals tốt (LCP ≤ 2.5s, CLS ≤ 0.1, INP ≤ 200ms khi đo bằng dữ liệu phù hợp); chưa coi đây là kết quả đã đạt.
- **Kiến trúc Clean & Type-safe**: Viết hoàn toàn bằng TypeScript strict mode, dễ bảo trì, module hóa tối đa.

---

## 2. PHÂN TÍCH THỊ TRƯỜNG & ĐỐI TƯỢNG NGƯỜI DÙNG

### 2.1. Chân dung người dùng mục tiêu (Personas)
1. **Khách hàng thượng lưu & Gia đình tìm tổ ấm (Home Buyers)**:
   - Độ tuổi: 32 - 55 tuổi.
   - Nhu cầu: Tìm kiếm không gian sống trong lành, đầy đủ tiện ích sinh thái, an ninh khép kín, thiết kế sang trọng cho gia đình.
   - Yêu cầu UI/UX: Hình ảnh trực quan lớn, xem mặt bằng chi tiết, thông số rõ ràng (diện tích, số phòng, tiện ích cảnh quan, khoảng cách tới trường học/bệnh viện).
2. **Nhà đầu tư cá nhân (Real Estate Investors)**:
   - Nhu cầu: Đánh giá tiềm năng tăng giá, tỷ suất lợi nhuận cho thuê (Rental Yield), tiến độ thi công và uy tín chủ đầu tư.
   - Yêu cầu UI/UX: Lọc giá nhanh chóng, thông tin pháp lý minh bạch, bản đồ vị trí hạ tầng giao thông kết nối.
3. **Chuyên viên tư vấn & Đối tác (Brokers & Partners)**:
   - Nhu cầu: Chia sẻ liên kết dự án đẹp mắt, gửi thông số nhanh cho khách qua Zalo/Facebook, giao diện di động tra cứu tức thì.

### 2.2. Điểm khác biệt bản địa hóa so với bản mẫu quốc tế
| Tiêu chí | Mẫu Quốc tế (EverGreen Dribbble) | Bản EverGreen Việt Nam |
| :--- | :--- | :--- |
| **Tiền tệ** | USD ($3,567.00, $256K) | VNĐ (VD: 6.8 Tỷ, 15.2 Tỷ, 75 Triệu/m²) |
| **Đơn vị diện tích** | sq ft | m² (Mét vuông sàn / Mét vuông đất) |
| **Địa danh** | New York, Denver, Austin, v.v. | Hà Nội (Tây Hồ, Ciputra), TP.HCM (Thủ Thiêm, Thảo Điền), Đà Nẵng, Phú Quốc |
| **Loại hình BĐS** | Single-family, Townhome, Condo | Biệt thự đơn lập, Shophouse khối đế, Sky Villa, Penthouse, Căn hộ dịch vụ cao cấp |
| **Hạ tầng tiện ích** | Gần metro NY, trường công lập Mỹ | Gần tuyến Metro số 1/số 2, trường quốc tế BIS/UNIS, sân bay Long Thành/Nội Bài |
| **Kênh liên hệ nhanh** | Form email truyền thống | Bản demo chỉ trình bày CTA/link liên hệ; không khẳng định có hotline hoặc chuyên viên tư vấn thật |

---

## 3. TECH STACK & QUY CHUẨN KỸ THUẬT

### 3.1. Danh mục công nghệ cốt lõi
- **Framework**: [Next.js](https://nextjs.org/) phiên bản stable tương thích tại thời điểm khởi tạo (App Router, Server Components + Client Components khi cần tương tác); ghi rõ version thực tế trong README.
- **Ngôn ngữ**: TypeScript 5.x (Strict mode, No `any` type, Interface-driven).
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4 với cấu hình CSS-first (`@import "tailwindcss"`, `@theme inline` kết hợp CSS Variables). Không tạo `tailwind.config.ts` theo mẫu Tailwind v3 trừ khi có lý do tương thích cụ thể.
- **UI Primitives**: [shadcn/ui](https://ui.shadcn.com/) (xây dựng trên nền [Radix UI](https://www.radix-ui.com/)) - Đảm bảo khả năng truy cập (WAI-ARIA accessibility) và tùy biến CSS 100%.
- **Iconography**: [Lucide React](https://lucide.dev/) (Bộ icon đường nét tinh tế, đồng nhất stroke 1.5px/2px, đồng bộ với thiết kế EverGreen).
- **Animation / Micro-interactions**: `framer-motion` (Motion) cho hiệu ứng xuất hiện mềm mại, scroll reveal, carousel slide, accordion expand.
- **Form & Validation**: React Hook Form + Zod (sẵn sàng cho form liên hệ, lọc nâng cao).
- **Quản lý trạng thái client**: React Hooks chuẩn (`useState`, `useReducer`, `useContext`) hoặc Zustand nếu mở rộng giỏ dự án yêu thích / bộ lọc phức tạp.

### 3.2. Tiêu chuẩn tổ chức mã nguồn (Code Standards)
- **Component-Driven Development**: Mỗi component độc lập, kèm file test/mock data riêng khi cần.
- **Naming Conventions**:
  - Components: PascalCase (`PropertyCard.tsx`, `HeroSearch.tsx`).
  - Hooks: camelCase bắt đầu bằng use (`usePropertyFilter.ts`).
  - Types / Interfaces: PascalCase có tiền tố hoặc suffix rõ nghĩa (`Property`, `FilterParams`).
  - Constants & Configs: UPPER_SNAKE_CASE hoặc camelCase.
- **Tối ưu hình ảnh**: Sử dụng `next/image` với responsive `sizes`, placeholder blur, WebP/AVIF format.

---

## 4. CẤU TRÚC THƯ MỤC DỰ ÁN (PROJECT STRUCTURE)

```
batDongSan/
├── docs/                               # Tài liệu thiết kế & phát triển
│   ├── PROJECT_PLAN.md                 # Kế hoạch & Kiến trúc dự án
│   ├── DESIGN_SYSTEM.md                # Hệ thống Design Tokens & Components
│   ├── HOMEPAGE_SPEC.md                # Đặc tả chi tiết từng section Homepage
│   └── TASKS.md                        # Checklist công việc phân rã
├── public/                             # Tài nguyên tĩnh
│   ├── images/
│   │   ├── hero/                       # Ảnh kiến trúc hero
│   │   ├── properties/                 # Ảnh dự án mẫu (biệt thự, căn hộ)
│   │   ├── bento/                      # Ảnh section bento
│   │   ├── testimonials/               # Ảnh chân dung khách hàng
│   │   └── map/                        # Bản đồ minh họa vector/light map
│   ├── icons/                          # Favicon, app icons, vector SVGs
│   └── fonts/                          # Local web fonts (nếu không dùng Google Fonts)
├── src/
│   ├── app/                            # Next.js App Router
│   │   ├── layout.tsx                  # Root layout (Fonts, Meta, ThemeProvider)
│   │   ├── page.tsx                    # Trang chủ (Homepage)
│   │   ├── globals.css                 # CSS Variables & Tailwind v4 theme
│   │   ├── loading.tsx                 # Loading skeleton toàn trang
│   │   ├── not-found.tsx               # Trang 404 tùy biến cao cấp
│   │   ├── bat-dong-san/               # Route: /bat-dong-san (Property Listing)
│   │   │   ├── page.tsx
│   │   │   └── [slug]/                 # Route: /bat-dong-san/[slug] (Detail)
│   │   │       └── page.tsx
│   │   ├── ve-chung-toi/               # Route: /ve-chung-toi (About Us)
│   │   │   └── page.tsx
│   │   └── lien-he/                    # Route: /lien-he (Contact Us)
│   │       └── page.tsx
│   ├── components/                     # Hệ thống Components tái sử dụng
│   │   ├── common/                     # Component dùng chung toàn site
│   │   │   ├── Navbar.tsx              # Thanh điều hướng Pill phong cách EverGreen
│   │   │   ├── Footer.tsx              # Chân trang quy chuẩn
│   │   │   ├── SectionHeader.tsx       # Tiêu đề section đồng nhất
│   │   │   ├── PillBadge.tsx           # Badge bo tròn phong cách EverGreen
│   │   │   └── Container.tsx           # Wrapper giới hạn max-width chuẩn
│   │   ├── ui/                         # shadcn/ui primitives
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   ├── accordion.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── badge.tsx
│   │   │   └── card.tsx
│   │   ├── sections/                   # Sections riêng biệt của Homepage
│   │   │   ├── HeroSection.tsx         # Section 1: Hero Banner + Badge
│   │   │   ├── HeroSearchWidget.tsx    # Section 1b: Khối tìm kiếm nổi
│   │   │   ├── BentoFeatureSection.tsx # Section 2: Khối Bento 3 cột
│   │   │   ├── StatsSection.tsx        # Section 3: 4 cột chỉ số ấn tượng
│   │   │   ├── ValueMapSection.tsx     # Section 4: Bản đồ & Giá trị vị trí
│   │   │   ├── PremierHousesSection.tsx# Section 5: Lưới 6 BĐS nổi bật
│   │   │   ├── FaqSection.tsx          # Section 6: Câu hỏi thường gặp có ảnh
│   │   │   ├── TestimonialSection.tsx  # Section 7: Đánh giá khách hàng
│   │   │   └── PreFooterCtaSection.tsx # Section 8: Banner kích hoạt hành động
│   │   └── property/                   # Components chuyên biệt cho BĐS
│   │       ├── PropertyCard.tsx        # Thẻ thông tin dự án
│   │       ├── PropertySpecs.tsx       # Thanh thông số (PN, WC, m²)
│   │       └── PriceTag.tsx            # Hiển thị giá chuẩn VNĐ
│   ├── data/                           # Mock data tiếng Việt thực tế
│   │   ├── properties.ts               # Danh sách 12+ BĐS chuẩn chi tiết
│   │   ├── testimonials.ts             # Đánh giá từ khách hàng / đối tác
│   │   ├── faqs.ts                     # Câu hỏi pháp lý, thủ tục, tài chính
│   │   └── navigation.ts               # Danh mục menu & liên kết footer
│   ├── types/                          # TypeScript definitions
│   │   ├── property.ts                 # Interface Bất động sản
│   │   ├── filter.ts                   # Interface Bộ lọc tìm kiếm
│   │   └── testimonial.ts              # Interface Phản hồi khách hàng
│   ├── lib/                            # Helpers, utility functions
│   │   ├── utils.ts                    # Hàm cn() gộp class Tailwind
│   │   ├── formatters.ts               # Format giá VNĐ, m², ngày tháng
│   │   └── constants.ts                # Hằng số cấu hình toàn trang
│   └── styles/                          # Tùy chọn cho styles component; CSS global nằm ở src/app/globals.css
├── .env.example                        # Mẫu biến môi trường
├── next.config.mjs                     # Cấu hình Next.js
├── postcss.config.mjs                  # PostCSS; Tailwind v4 tokens khai báo CSS-first
└── tsconfig.json                       # Cấu hình TypeScript Strict
```

---

## 5. MÔ HÌNH DỮ LIỆU MOCK (DATA MODEL SCHEMA)

Để đảm bảo tính nhất quán và dễ dàng chuyển đổi sang API thực tế sau này, hệ thống dữ liệu Mock được định nghĩa chặt chẽ bằng TypeScript interfaces:

```typescript
// src/types/property.ts

export type PropertyType = 
  | 'biet-thu'        // Biệt thự sinh thái / Đơn lập / Song lập
  | 'can-ho'          // Căn hộ cao cấp / Sky Villa
  | 'penthouse'       // Penthouse / Duplex hạng sang
  | 'nha-pho'         // Nhà phố thương mại (Shophouse)
  | 'dinh-thu';       // Dinh thự nghỉ dưỡng ven biển

export type PropertyStatus = 
  | 'dang-mo-ban'     // For Sale
  | 'sap-ban-giao'    // Handing over soon
  | 'hot'             // Sản phẩm giới hạn
  | 'da-ban';         // Sold out

export interface Property {
  id: string;
  slug: string;
  title: string;                  // Tên dự án: VD "The Pinnacle Riverside Villa"
  tagline?: string;               // Câu mô tả ngắn định vị
  propertyType: PropertyType;
  status: PropertyStatus;
  price: number;                  // Đơn vị: VNĐ (VD: 14500000000 = 14.5 Tỷ)
  pricePerSquareMeter?: string;   // "78 Triệu/m²"
  location: {
    address: string;              // "Số 88 Đường Ven Hồ, P. Quảng An"
    district: string;             // "Tây Hồ"
    city: string;                 // "Hà Nội" | "TP. Hồ Chí Minh" | "Đà Nẵng" | ...
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  specs: {
    bedrooms: number;             // Số phòng ngủ
    bathrooms: number;            // Số phòng tắm
    usableArea: number;           // Diện tích sử dụng (m²)
    landArea?: number;            // Diện tích đất (m²)
    floors?: number;              // Số tầng
    direction?: string;           // Hướng nhà (Đông Nam, Chính Nam...)
    legal: string;                // Pháp lý: "Sổ hồng lâu dài" | "Sở hữu 50 năm"
  };
  featuredImage: string;
  gallery: string[];
  amenities: string[];            // ['Bể bơi vô cực', 'Sân golf mini', 'Bến du thuyền', ...]
  isFeatured: boolean;            // Hiển thị ở Premier Section trên Trang chủ
}
```

---

## 6. LỘ TRÌNH TRIỂN KHAI THEO GIAI ĐOẠN (ROADMAP)

Dự án được phân rã thành 5 giai đoạn chiến lược, đảm bảo chất lượng từng bước:

```
[Phase 1: Chuẩn bị & Kiến trúc] ────► [Phase 2: Design System & Core] 
                                                    │
[Phase 4: Các Trang Phụ] ◄────── [Phase 3: Hoàn thiện Homepage Pixel-Perfect]
        │
[Phase 5: Kiểm thử, Tối ưu & Bàn giao]
```

- **Giai đoạn 1: Khởi tạo Kiến trúc & Tài liệu (HIỆN TẠI)**
  - Phân tích chi tiết Dribbble Reference.
  - Ban hành 4 tài liệu tiêu chuẩn: `PROJECT_PLAN.md`, `DESIGN_SYSTEM.md`, `HOMEPAGE_SPEC.md`, `TASKS.md`.
  - Khách hàng duyệt kế hoạch trước khi bắt đầu code.
- **Giai đoạn 2: Thiết lập Dự án & Design System**
  - Khởi tạo Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui.
  - Cấu hình font chữ `Plus Jakarta Sans`, bảng màu EverGreen Tokens, Spacing & Pill styles.
  - Xây dựng kho component cơ bản: Button, Input, Select, PillBadge, Accordion, Card.
- **Giai đoạn 3: Hiện thực hóa Trang chủ (Homepage Pixel-Accurate)**
  - Dựng Navbar nổi (Floating Pill Navbar) và Footer kiến trúc.
  - Dựng lần lượt 8 sections chính theo đúng layout mẫu.
  - Tích hợp mock data tiếng Việt **được ghi nhãn rõ là demo**, ảnh sử dụng hợp pháp, không lấy asset của tác giả Dribbble nếu chưa được cấp phép.
  - Thêm hiệu ứng chuyển động mượt mà với Motion.
- **Giai đoạn 4: Hoàn thiện 4 Trang phụ theo Scope**
  - Trang 2: Danh sách BĐS (`/bat-dong-san`) với bộ lọc filter, phân trang/lưới.
  - Trang 3: Chi tiết BĐS (`/bat-dong-san/[slug]`) với thư viện ảnh, mặt bằng, tiện ích, form tư vấn.
  - Trang 4: Về chúng tôi (`/ve-chung-toi`) giới thiệu triết lý sống xanh và mục đích bản demo; không tự tạo đội ngũ/chứng nhận giả.
  - Trang 5: Liên hệ (`/lien-he`) giao diện liên hệ dạng demo; không có văn phòng/hotline/form gửi dữ liệu thật cho tới khi được cung cấp.
- **Giai đoạn 5: Tối ưu hóa, Kiểm thử Responsive & Nghiệm thu**
  - Kiểm tra tương thích màn hình từ Mobile 375px đến 4K.
  - Tối ưu SEO metadata, OpenGraph preview đẹp mắt khi chia sẻ Zalo/Facebook.
  - Kiểm tra Lighthouse (Performance, Accessibility, Best Practices, SEO).

---

## 7. ĐÁNH GIÁ ĐIỂM CHƯA XÁC ĐỊNH TRONG ẢNH REFERENCE & GIẢI PHÁP

Theo mô tả reference trong kế hoạch và ảnh được Agent tiếp cận (cần đối chiếu lại bằng screenshot người dùng lưu trong `references/`):
1. **Phần bản đồ (Section 4 - Map)**:
   - *Tình trạng trong ảnh*: Là một hình minh họa bản đồ vector sáng màu với pin ghim màu xanh lá mạ ("Dream Home"). Không phải Google Maps iframe nhúng.
   - *Giải pháp đề xuất*: Thiết kế bản đồ vector SVG / Canvas tương tác phong cách kiến trúc tối giản, có hiệu ứng pulse nhấp nháy tại các vị trí dự án trọng điểm (Hà Nội, TP.HCM, Đà Nẵng). Tránh load Google Maps API nặng nề gây chậm trang ở giai đoạn giao diện.
2. **Carousel điều khiển (Bento Section & Testimonial Section)**:
   - *Tình trạng trong ảnh*: Có 2 nút tròn mũi tên `(←) (→)` nhưng ở ảnh tĩnh không rõ hiệu ứng trượt.
   - *Giải pháp đề xuất*: Sử dụng `framer-motion` hoặc `Embla Carousel` tạo cảm giác lướt thẻ trơn tru, hỗ trợ cử chỉ vuốt chạm (swipe) mượt mà trên điện thoại.
3. **Thumbnail nhỏ trong FAQ Section**:
   - *Tình trạng trong ảnh*: Khi mở câu hỏi số 1 ("What types of properties do you sell?"), ở cạnh phải đoạn văn xuất hiện 1 ảnh thumbnail nhỏ nội thất phòng khách.
   - *Giải pháp đề xuất*: Bổ sung thuộc tính `previewImage` trong dữ liệu FAQ để hiển thị ảnh minh họa trực quan khi người dùng click mở từng câu hỏi. Đây là điểm nhấn UX cực kỳ tinh tế từ mẫu EverGreen!


---

## 8. QUY ƯỚC MVP ĐÃ HIỆU CHỈNH (REVIEW 1.1)

- **Nguồn cảm hứng:** EverGreen Dribbble; **thương hiệu demo tạm thời:** `LumiNest`. Có thể đổi tên qua cấu hình. Không sao chép logo, hình ảnh nguyên bản hoặc trình bày như chi nhánh chính thức của EverGreen.
- **Phạm vi:** Frontend-only. Không có backend, admin, database, xác thực, thanh toán, địa chỉ văn phòng thật hoặc dịch vụ giao dịch thật.
- **Mock data:** Các dự án, giá, tên khách hàng (nếu có) đều là giả lập, có thông báo DEMO; không tự dựng các tuyên bố định lượng, đánh giá xác thực, giấy phép kinh doanh, pháp lý đảm bảo hay cam kết lợi nhuận.
- **Điều hướng:** chỉ 5 routes: `/`, `/bat-dong-san`, `/bat-dong-san/[slug]`, `/ve-chung-toi`, `/lien-he`. Ẩn menu tiếng Anh, dịch vụ, cẩm nang và chính sách nếu chưa xây dựng trang thật.
- **Chức năng tương tác:** Search/Filter sử dụng dữ liệu local và URL query parameters; CTA điều hướng hợp lệ tới trang liên hệ, không báo gửi thành công khi chưa có backend.
- **Cách chạy Agent:** Mỗi lượt thực hiện một phase; đọc cả 4 tài liệu, không tự ý triển khai phase sau, thực thi `npm run lint` (nếu có), `npx tsc --noEmit`, `npm run build`; báo lỗi trung thực.
- **Giá:** chỉ lưu `price: number` đơn vị VNĐ, format bằng `formatCurrencyVND()`; không lưu `priceDisplay` để tránh bất nhất.
- **Ảnh:** ưu tiên ảnh local có quyền sử dụng; nếu chưa có ảnh, dùng placeholder có nhãn, không tự copy từ Dribbble.
