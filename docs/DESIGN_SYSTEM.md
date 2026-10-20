# HỆ THỐNG THIẾT KẾ (DESIGN SYSTEM) - EVERGREEN VIỆT NAM
*(Quy chuẩn Trực quan, Design Tokens, Thành phần UI & Tương tác)*

---

## 1. TRIẾT LÝ THIẾT KẾ (DESIGN PHILOSOPHY)

Hệ thống thiết kế của bản demo **LumiNest** lấy cảm hứng từ ngôn ngữ của mẫu **EverGreen Dribbble (Shot 25548322)** kết hợp với cảm hứng kiến trúc sinh thái bản địa:

1. **Organic Modernism (Hiện đại & Hài hòa Thiên nhiên)**:
   - Các khối bo tròn lớn (`rounded-2xl`, `rounded-3xl`, `rounded-full`) mang lại cảm giác thân thiện, tự nhiên và loại bỏ sự cứng nhắc, sắc nhọn của kiến trúc đô thị thông thường.
2. **Warm Architectural Palette (Bảng màu Ấm áp & Sang trọng)**:
   - Không sử dụng màu trắng lạnh chói mắt (`#FFFFFF` đơn độc), nền chính sử dụng tone kem lúa mì / trắng ngà ấm (`#FBFBF8`), tôn vinh hình ảnh các công trình xanh và cây cỏ.
   - Điểm nhấn chồi non độc bản: Màu xanh vôi tươi / chanh non (`#C6EB28` - Chartreuse Lime Accent) đại diện cho sức sống mới, sinh khí thịnh vượng của bất động sản.
3. **Elevated Hierarchy & Floating Surfaces (Phân cấp & Bề mặt Nổi)**:
   - Các thẻ card (Bento card, Search widget, Navbar) sử dụng đổ bóng khuếch tán diện rộng siêu mềm (`soft ambient shadow`), tạo cảm giác lơ lửng nhẹ nhàng trong không gian.
4. **Bản địa hóa Tinh tế**:
   - Sử dụng font chữ hỗ trợ dấu tiếng Việt tròn đầy, không bị lỗi gãy nét hay dấu lệch.
   - Các định dạng tiền tệ và diện tích hiển thị rõ nét, đúng văn phong người Việt.

---

## 2. BẢNG MÀU QUY CHUẨN (COLOR SYSTEM & TOKENS)

### 2.1. Bảng màu chính (Palette Definition)

```css
/* src/styles/globals.css - CSS Custom Properties */
:root {
  /* Backgrounds */
  --bg-primary: #FBFBF8;       /* Tone nền chính toàn trang (Warm Ivory) */
  --bg-surface: #FFFFFF;       /* Nền card trắng tinh nổi trên nền ấm */
  --bg-subtle: #F3F4EE;        /* Nền thẻ bento, input hover, chip tab */
  --bg-dark: #121512;          /* Nền banner đêm CTA, footer, nút chính */
  
  /* Brand Accents */
  --accent-lime: #C6EB28;      /* Xanh chồi non đặc trưng EverGreen (Sign Up, Quote, Highlights) */
  --accent-lime-hover: #B5D920;/* Trạng thái hover của nút xanh */
  --accent-forest: #223826;    /* Xanh rêu đậm cao cấp */
  
  /* Typography & Foreground */
  --text-primary: #121512;     /* Màu chữ tiêu đề và nội dung chính */
  --text-secondary: #5C6258;   /* Màu chữ phụ, mô tả, chú thích */
  --text-muted: #8A9286;       /* Màu placeholder, nhãn phụ */
  --text-inverted: #FFFFFF;    /* Màu chữ trên nền tối */
  
  /* Borders & Dividers */
  --border-subtle: #E6E8DF;    /* Viền nhẹ ngăn cách card, input */
  --border-strong: #D1D5C8;    /* Viền nhấn, active state */
  
  /* Status Colors */
  --status-sale: #16A34A;      /* Đang mở bán (Xanh lá) */
  --status-hot: #EA580C;       /* Sản phẩm Hot (Cam đất) */
  --status-handover: #0284C7;  /* Sắp bàn giao (Xanh lam ngọc) */
}
```

### 2.2. Bảng ánh xạ Tailwind CSS v4 (CSS-first)

> Các đoạn `tailwind.config.ts` của bản cũ thuộc Tailwind v3. Project mới dùng Tailwind v4; thêm vào `src/app/globals.css` hoặc file CSS global duy nhất đã import trong root layout. Không khai báo lại `@import "tailwindcss"` ở hai file.

```css
@import "tailwindcss";

@theme inline {
  --color-evergreen-bg: var(--bg-primary);
  --color-evergreen-card: var(--bg-surface);
  --color-evergreen-subtle: var(--bg-subtle);
  --color-evergreen-dark: var(--bg-dark);
  --color-evergreen-lime: var(--accent-lime);
  --color-evergreen-lime-hover: var(--accent-lime-hover);
  --color-evergreen-forest: var(--accent-forest);
  --color-evergreen-text-primary: var(--text-primary);
  --color-evergreen-text-secondary: var(--text-secondary);
  --color-evergreen-text-muted: var(--text-muted);
  --color-evergreen-border-subtle: var(--border-subtle);
  --color-evergreen-border-strong: var(--border-strong);
  --font-sans: var(--font-plus-jakarta), Arial, sans-serif;
}
```

Các lớp tương ứng: `bg-evergreen-bg`, `bg-evergreen-lime`, `text-evergreen-text-primary`, `border-evergreen-border-subtle`. Font `Plus Jakarta Sans` phải được khai báo bằng `next/font/google`, gán CSS variable `--font-plus-jakarta` trong root layout.

**Lưu ý đối chiếu:** Palette trên là phiên bản *biến tấu* của Agent; không khẳng định trùng chính xác bảng màu mà tác giả Dribbble công bố.

---

## 3. HỆ THỐNG TYPOGRAPHY

### 3.1. Phông chữ chủ đạo (Font Family)
- **Primary Font**: `Plus Jakarta Sans` (Google Font).
  - *Lý do lựa chọn*: Nét chữ Geometric Sans-serif bo tròn nhẹ ở các góc, đường nét thanh thoát, hiện đại y hệt thiết kế nguyên bản trên Dribbble; hỗ trợ trọn vẹn bộ dấu tiếng Việt không bị lệch hay nhảy font.
  - *Fallback*: `var(--font-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`.

### 3.2. Bảng thang bậc Typography (Type Scale)

| Cấp bậc | Font Size (Desktop) | Font Size (Mobile) | Weight | Line Height | Tracking | Ứng dụng |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Display 1** | 64px (4rem) | 36px (2.25rem) | 500 & 600 | 1.1 | -0.03em | Hero Heading ("Kiến tạo tương lai...") |
| **Heading 2** | 42px (2.625rem) | 28px (1.75rem) | 600 | 1.2 | -0.02em | Section Headings ("Dự án nổi bật", "Bento") |
| **Heading 3** | 24px (1.5rem) | 20px (1.25rem) | 600 | 1.3 | -0.01em | Tiêu đề thẻ BĐS, tiêu đề Bento |
| **Heading 4** | 20px (1.25rem) | 18px (1.125rem) | 600 | 1.4 | normal | Tiêu đề câu hỏi FAQ, thông số chính |
| **Lead / Subtitle**| 18px (1.125rem) | 16px (1rem) | 400 & 500 | 1.5 | normal | Đoạn dẫn nhập dưới tiêu đề lớn |
| **Body Regular** | 15px (0.9375rem) | 14px (0.875rem) | 400 | 1.6 | normal | Đoạn văn nội dung, mô tả dự án |
| **Body Small** | 13px (0.8125rem) | 12px (0.75rem) | 500 | 1.5 | normal | Thông số phụ (Số PN, m², địa chỉ) |
| **Pill / Button** | 14px (0.875rem) | 13px (0.8125rem) | 600 | 1.0 | +0.01em | Nút bấm pill, nhãn menu, badges |

---

## 4. HÌNH KHỐI, VIỀN BO & ĐỔ BÓNG (SHAPES & ELEVATION)

### 4.1. Bán kính bo góc (Border Radius Hierarchy)
- **`rounded-full` (Pill Shape - 9999px)**:
  - Thanh Navbar nổi.
  - Các nút hành động chính (Button Primary, Accent, Filter chips).
  - Badges trạng thái ("Đang mở bán", "Căn hộ", "Biệt thự").
  - Cụm nút điều hướng tròn Carousel `(←) (→)`.
- **`rounded-3xl` / `rounded-[32px]` (24px - 32px)**:
  - Khung ảnh lớn Hero Banner.
  - Các thẻ trong khối Bento Grid.
  - Khung Testimonial và Banner CTA cuối trang.
- **`rounded-2xl` (16px - 20px)**:
  - Khối tìm kiếm nổi (Floating Search Widget).
  - Thẻ thông tin dự án (Property Cards).
  - Khung câu hỏi FAQ Accordion.
- **`rounded-xl` (12px)**:
  - Ô nhập liệu (Input field), Dropdown menu selection.
  - Ảnh thumbnail nhỏ trong FAQ.

### 4.2. Hệ thống đổ bóng (Shadow Tokens)

```css
/* Đổ bóng tự nhiên nhiều tầng (Ambient Multi-layer Diffusion) */
--shadow-sm: 0 1px 3px rgba(18, 21, 18, 0.05);
--shadow-card: 0 10px 30px -10px rgba(18, 21, 18, 0.06);
--shadow-floating: 0 25px 50px -12px rgba(18, 21, 18, 0.12);
--shadow-glass: 0 8px 32px 0 rgba(0, 0, 0, 0.08);
```

---

## 5. THÀNH PHẦN GIAO DIỆN CỐT LÕI (CORE UI COMPONENTS)

### 5.1. Hệ thống Nút bấm (Buttons)

1. **Button Accent (Nút Xanh Chồi Non)**:
   - *Class*: `rounded-full bg-[#C6EB28] text-[#121512] font-semibold px-6 py-3 hover:bg-[#B5D920] transition-all duration-200 active:scale-95 shadow-sm`
   - *Mục đích*: CTA cao nhất trên Navbar ("Đăng ký tư vấn", "Tư vấn ngay").
2. **Button Dark Pill (Nút Đen Đầy Tinh Tế)**:
   - *Class*: `rounded-full bg-[#121512] text-white font-medium px-6 py-3.5 hover:bg-black transition-all duration-200 active:scale-95 shadow-sm flex items-center gap-2`
   - *Mục đích*: Nút "Tìm kiếm bất động sản", "Xem tất cả dự án →", "Khám phá dự án →".
3. **Button White Pill (Nút Trắng Nổi)**:
   - *Class*: `rounded-full bg-white text-[#121512] font-semibold px-6 py-3 hover:bg-[#F3F4EE] transition-all duration-200 shadow-md`
   - *Mục đích*: Nút CTA trên nền ảnh tối ở Pre-Footer Banner ("Đặt lịch tư vấn ngay →").
4. **Circular Nav Arrow Button (Nút Tròn Điều Hướng)**:
   - *Class*: `w-11 h-11 rounded-full border border-[#D1D5C8] bg-white text-[#121512] flex items-center justify-center hover:bg-[#F3F4EE] transition-all duration-200 active:scale-90`
   - *Mục đích*: Nút lướt carousel trái/phải ở Bento và Testimonial.

### 5.2. Huy hiệu & Nhãn Pill (Badges & Chips)

1. **Frosted Glass Badge (Huy hiệu Kính Mờ trên Ảnh Hero)**:
   - *Style*: `backdrop-blur-md bg-white/20 border border-white/30 text-white rounded-full px-4 py-1.5 text-xs font-medium`
   - *Mục đích*: Hiển thị loại hình "Nhà phố", "Căn hộ", "Biệt thự" trên nền ảnh Hero.
2. **Property Status Badge**:
   - *Style*: `rounded-full bg-white/90 backdrop-blur-sm text-[#121512] px-3.5 py-1 text-xs font-semibold shadow-sm`
   - *Mục đích*: Huy hiệu góc trên ảnh thẻ dự án ("Đang mở bán", "Sắp bàn giao").
3. **Filter Chip (Thẻ lọc nhanh)**:
   - *Style (Inactive)*: `rounded-full bg-[#F3F4EE] text-[#5C6258] hover:text-[#121512] px-4 py-1.5 text-xs font-medium cursor-pointer transition-colors`
   - *Style (Active)*: `rounded-full bg-[#121512] text-white px-4 py-1.5 text-xs font-medium cursor-pointer shadow-sm`

### 5.3. Thẻ Bất động sản (Property Card)
- **Cấu trúc**:
  - Khung ảnh tỉ lệ 4:3 hoặc 16:10, bo góc `rounded-2xl`, hiệu ứng zoom ảnh nhẹ khi hover (`group-hover:scale-105 transition-transform duration-500`).
  - Huy hiệu trạng thái góc trên bên trái (`absolute top-3 left-3`).
  - Thanh thông số nhanh bên dưới ảnh: Icon Giường + số phòng ngủ, Icon Bồn tắm + số WC, Icon Thước đo + diện tích m².
  - Tiêu đề dự án đậm nét, dễ nhớ.
  - Dòng hiển thị giá nổi bật kèm dấu gạch ngang và địa chỉ rút gọn (VD: `14.5 Tỷ VNĐ — Tây Hồ, Hà Nội`).

### 5.4. Khối Tìm Kiếm Nổi (Floating Search Widget)
- **Cấu trúc**:
  - Nền trắng tinh bo tròn `rounded-2xl` hoặc `rounded-3xl`, viền siêu mờ, bóng đổ `shadow-floating`.
  - Tiêu đề phụ: "Tìm kiếm không gian lý tưởng" (Find the best place).
  - 4 trường nhập liệu dạng module nằm ngang:
    1. *Nhu cầu*: Input tìm kiếm từ khóa / loại hình.
    2. *Mức giá*: Select chọn khoảng giá VNĐ.
    3. *Khu vực*: Select chọn tỉnh thành / quận huyện.
    4. *Số phòng*: Select chọn số phòng ngủ.
  - Nút bấm pill đen: "Tìm kiếm dự án" (Search Properties) có icon kính lúp.
  - Hàng lọc nhanh phía dưới: "Lọc nhanh: Hà Nội, TP.HCM, Biệt thự biển, Căn hộ xanh".

---

## 6. HỆ THỐNG BIỂU TƯỢNG (ICONS MAPPING - LUCIDE REACT)

Toàn bộ icon sử dụng từ thư viện `lucide-react` với độ dày đường nét (stroke-width) đồng nhất là `1.75px` để giữ vẻ thanh thoát tối giản:

| Ngữ cảnh sử dụng | Tên Icon Lucide | Mô tả & Ý nghĩa |
| :--- | :--- | :--- |
| Số phòng ngủ | `<BedDouble />` | Đại diện cho phòng ngủ / tiện nghi nghỉ ngơi |
| Số phòng tắm | `<Bath />` | Đại diện cho phòng tắm / vệ sinh |
| Diện tích mặt sàn | `<Maximize2 />` | Đại diện cho thông số diện tích m² |
| Vị trí / Địa chỉ | `<MapPin />` | Định vị địa lý dự án |
| Tìm kiếm | `<Search />` | Icon tìm kiếm trên widget |
| Mũi tên điều hướng | `<ArrowUpRight />`, `<ArrowRight />` | Nút khám phá dự án, nút xem tất cả |
| Lướt Carousel | `<ChevronLeft />`, `<ChevronRight />` | Nút trượt slider |
| Xem video / Thực tế ảo | `<Play />` | Nút play trên pill video giới thiệu |
| Trích dẫn khách hàng | `<Quote />` | Biểu tượng trích dẫn to màu xanh chồi non |
| Số điện thoại hotline | `<Phone />` | Kênh liên hệ nhanh |
| Email tư vấn | `<Mail />` | Hòm thư liên hệ |
| Chứng nhận pháp lý | `<ShieldCheck />` | Khẳng định tính pháp lý minh bạch (Sổ hồng) |

---

## 7. QUY CHUẨN CHUYỂN ĐỘNG & HIỆU ỨNG (MOTION & ANIMATION)

Áp dụng quy tắc chuyển động kiến trúc mượt mà, hạn chế giật cục, thời gian chuyển động (duration) chuẩn mực từ 0.3s đến 0.6s:

```typescript
// Các cấu hình Framer Motion mẫu
export const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

export const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: { 
    y: -4, 
    scale: 1.01,
    transition: { duration: 0.3, ease: "easeOut" } 
  }
};
```

---

## 8. TIÊU CHUẨN RESPONSIVE & BREAKPOINTS

Tuân thủ nghiêm ngặt hệ thống Breakpoints của Tailwind CSS:

- **Mobile (Nhỏ hơn 640px)**:
  - Navbar chuyển sang chế độ thanh thu gọn có nút Hamburger Menu mở Drawer trượt mềm mại.
  - Hero Search Widget xếp dọc các trường dữ liệu để thao tác chạm bằng ngón tay dễ dàng (Touch target tối thiểu 44px).
  - Lưới BĐS chuyển thành 1 cột hoặc vuốt ngang (Horizontal Scroll Snap).
- **Tablet (640px - 1023px)**:
  - Lưới BĐS chuyển thành 2 cột (`grid-cols-2`).
  - Khối Bento xếp dạng 2 hàng linh hoạt.
- **Desktop (1024px - 1280px)**:
  - Hiển thị đầy đủ Floating Navbar dạng Pill.
  - Lưới BĐS 3 cột (`grid-cols-3`).
- **Large Desktop (1440px+)**:
  - Container cố định tại `max-w-7xl` (1280px) hoặc `max-w-[1340px]` căn giữa để giữ tỉ lệ bố cục vàng không bị bè ngang.


---

## 9. QUY TẮC PHẢN HỒI VÀ ACCESSIBILITY

- Nội dung thương hiệu hiển thị: **LumiNest** (tên demo tạm, có thể đổi). "EverGreen" chỉ là tên reference.
- Navbar, CTA và property card phải có trạng thái hover/focus; các thành phần click dùng semantic `<button>` hoặc `<a>`.
- Không hiển thị nút đổi ngôn ngữ khi chưa có giao diện EN.
- Khi không có backend, form liên hệ phải nói rõ "Bản demo – chưa gửi yêu cầu" hoặc sử dụng điều hướng phù hợp, tuyệt đối không hiện thông báo gửi thành công giả.
- Chuyển động phải có hỗ trợ `prefers-reduced-motion`; text trên ảnh đủ contrast.
- Tất cả trạng thái/pháp lý dự án từ mock data phải có ghi nhãn demo ở UI.
