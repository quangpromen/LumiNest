# DANH SÁCH NHIỆM VỤ CHI TIẾT (TASK BREAKDOWN & CHECKLIST)
*(Hệ thống Phân rã Công việc, Tiêu chí Nghiệm thu & Tiến độ Triển khai)*

---

## TỔNG QUAN TIẾN ĐỘ

- [x] **Giai đoạn 1**: Kế hoạch Dự án & Xây dựng Design System *(Hoàn thành)*
- [x] **Giai đoạn 2**: Khởi tạo Dự án & Hạ tầng Kỹ thuật *(Hoàn thành)*
- [x] **Giai đoạn 3**: Xây dựng Shell Layout & Khung Component Dùng chung *(Hoàn thành)*
- [x] **Giai đoạn 4**: Hiện thực hóa Trang chủ (Homepage) từng Section *(Hoàn thành & Đã nghiệm thu toàn diện)*
- [ ] **Giai đoạn 5**: Hiệu ứng Chuyển động (Motion) & Micro-interactions
- [x] **Giai đoạn 6**: Xây dựng 4 Trang Chức năng Phụ (Đã hoàn thành 100%: P6-01 Listing, P6-02 Detail, P6-03 About, P6-04 Contact) *(Hoàn thành)*
- [ ] **Giai đoạn 7**: Kiểm thử Responsive, Tối ưu SEO & Đánh giá Hiệu năng

---

## GIAI ĐOẠN 1: KẾ HOẠCH & TÀI LIỆU QUY CHUẨN (PHASE 1 - PLANNING)

| Mã Task | Tên Nhiệm vụ | Độ ưu tiên | Trạng thái | Tiêu chí Nghiệm thu (Acceptance Criteria) |
| :--- | :--- | :---: | :---: | :--- |
| **P1-01** | Kiểm tra ảnh reference & Phân tích UI Dribbble | Cao | `DONE` | Xác định 10 khối (0–9, gồm navbar và footer), hệ thống màu sắc, kiểu dáng pill và typography. |
| **P1-02** | Xây dựng Kế hoạch Dự án (`PROJECT_PLAN.md`) | Cao | `DONE` | Tài liệu hoàn chỉnh: Tech stack, mô hình dữ liệu, lộ trình, giải pháp cho điểm chưa xác định. |
| **P1-03** | Thiết lập Hệ thống Thiết kế (`DESIGN_SYSTEM.md`) | Cao | `DONE` | Đầy đủ design tokens (màu sắc, font chữ, bo góc, bóng đổ, component specs, Lucide icons). |
| **P1-04** | Đặc tả Chi tiết Trang chủ (`HOMEPAGE_SPEC.md`) | Cao | `DONE` | Chi tiết 10 sections kèm bản địa hóa 100% tiếng Việt, giá VNĐ, m², địa danh Việt Nam. |
| **P1-05** | Phân rã Danh mục Công việc (`TASKS.md`) | Cao | `DONE` | Danh mục task chia nhỏ, rõ ràng, có tiêu chí nghiệm thu từng task. |

---

## GIAI ĐOẠN 2: KHỞI TẠO DỰ ÁN & HẠ TẦNG KỸ THUẬT (PHASE 2 - SETUP)

| Mã Task | Tên Nhiệm vụ | Độ ưu tiên | Trạng thái | Tiêu chí Nghiệm thu (Acceptance Criteria) |
| :--- | :--- | :---: | :---: | :--- |
| **P2-01** | Khởi tạo Next.js App Router với TypeScript | Cao | `DONE` | Next.js 16.4.2 App Router, TypeScript 5.x strict mode, alias `@/*`, `npm run dev` & `npm run build` thành công. |
| **P2-02** | Cấu hình Tailwind CSS & Custom Theme | Cao | `DONE` | Tailwind CSS v4 CSS-first, `@theme inline` và CSS variables trong `src/app/globals.css`, không dùng v3 config. |
| **P2-03** | Cấu hình Phông chữ `Plus Jakarta Sans` | Cao | `DONE` | `next/font/google` subset `vietnamese`, `display: swap`, cấu hình `<html lang="vi">` trong `src/app/layout.tsx`. |
| **P2-04** | Cài đặt & Cấu hình shadcn/ui & Lucide React | Cao | `DONE` | Đã khởi tạo shadcn/ui (Button, Input, Select, Accordion, Dialog, Sheet, Badge, Card) và `lucide-react`. |
| **P2-05** | Xây dựng Bộ Dữ liệu Mock Tiếng Việt (`src/data/`) | Cao | `DONE` | Đã tạo `properties.ts` (12 BĐS), `faqs.ts` (5 FAQs), `navigation.ts`, `testimonials.ts` kèm types chuẩn hoá và nhãn demo. |
| **P2-06** | Xây dựng Utilities & Formatters (`src/lib/`) | Trung bình | `DONE` | Đã tạo `formatCurrencyVND()`, `formatArea()`, `cn()` gộp clsx + tailwind-merge; unit tests tại `scripts/verify-setup.mjs` pass 100%. |

---

## GIAI ĐOẠN 3: SHELL LAYOUT & THÀNH PHẦN DÙNG CHUNG (PHASE 3 - CORE UI)

| Mã Task | Tên Nhiệm vụ | Độ ưu tiên | Trạng thái | Tiêu chí Nghiệm thu (Acceptance Criteria) |
| :--- | :--- | :---: | :---: | :--- |
| **P3-01** | Component Container & Section Wrapper | Cao | `DONE` | Đảm bảo chiều rộng chuẩn (`max-w-7xl` / `max-w-[1320px]`), padding đều trên mobile và desktop (`src/components/common/Container.tsx`). |
| **P3-02** | Xây dựng Floating Pill Navbar | Cao | `DONE` | Navbar dạng thanh nổi, logo demo LumiNest, menu pills, nút CTA xanh chồi non "Tư vấn ngay", hiệu ứng cuộn; không hiện nút EN khi chưa có i18n (`src/components/common/Navbar.tsx`). |
| **P3-03** | Xây dựng Mobile Drawer Navigation | Cao | `DONE` | Menu trượt êm ái trên mobile qua React Portal, đầy đủ liên kết hợp lệ; tuân thủ P0-01 không tạo hotline giả (`src/components/common/MobileNavigation.tsx`). |
| **P3-04** | Xây dựng Editorial Footer | Cao | `DONE` | Footer phong cách tạp chí kiến trúc: Tiêu đề lớn, các link hợp lệ, logo demo, bản quyền; không bịa thông tin liên hệ (`src/components/common/Footer.tsx`). |
| **P3-05** | Component Thẻ Bất động sản (`PropertyCard`) | Cao | `DONE` | Thẻ ảnh 4:3 bo góc `rounded-3xl`, badge trạng thái, icon thông số (PN, WC, m²), giá VNĐ & vị trí (`src/components/common/PropertyCard.tsx`). |
| **P3-06** | Component Nút tròn điều hướng Carousel | Trung bình | `DONE` | Nút `(←) (→)` chuẩn hình tròn với hover state và hiệu ứng bấm. |

---

## GIAI ĐOẠN 4: HIỆN THỰC HÓA TRANG CHỦ (PHASE 4 - HOMEPAGE SECTIONS)

| Mã Task | Tên Nhiệm vụ | Độ ưu tiên | Trạng thái | Tiêu chí Nghiệm thu (Acceptance Criteria) |
| :--- | :--- | :---: | :---: | :--- |
| **P4-01** | **Section 1a: Hero Banner Kiến trúc** | Rất Cao | `DONE` | Khung ảnh bo tròn lớn 36px, badges kính mờ nổi, tiêu đề "Kiến tạo tương lai, khởi nguồn từ tổ ấm.", phụ đề bên phải, gradient overlay điện ảnh (`src/components/sections/HeroSection.tsx`). |
| **P4-02** | **Section 1b: Khối Tìm kiếm Nổi (Search Widget)** | Rất Cao | `DONE` | Thẻ trắng nổi bóng mềm đè lên cạnh dưới Hero; 4 trường lọc (Loại hình, Giá, Vị trí, Số PN); hàng lọc nhanh tương tác 2 chiều; chuẩn hoá query string cho Phase 6 (`src/components/sections/HeroSearchWidget.tsx`). |
| **P4-03** | **Section 2: Khối Bento Giá trị Độc bản** | Cao | `DONE` | Bố cục Bento 3 khối: Thẻ ảnh lớn có avatar cụm, thẻ chữ kem tinh tế, thẻ dự án giá khởi điểm + nút trượt carousel (`src/components/sections/BentoFeatureSection.tsx`). |
| **P4-04** | **Section 3: Thanh Chỉ số Niềm tin (Trust Bar)** | Trung bình | `DONE` | 4 cột giá trị nền tảng, không có số doanh số/hài lòng giả; ngăn cách nhẹ và responsive (`src/components/sections/BrandValueSection.tsx`). |
| **P4-05** | **Section 4: Bản đồ & Tiềm năng Vị trí** | Cao | `DONE` | Bố cục 50/50: Hình bản đồ minh họa không khẳng định vị trí chính xác; pin xanh và CTA đến listing (`src/components/sections/LocationDiscoverySection.tsx`). |
| **P4-06** | **Section 5: Lưới Dự án Tiêu biểu (Premier Houses)** | Rất Cao | `DONE` | Tiêu đề + nút "Xem tất cả"; lưới 6 thẻ BĐS cao cấp với **dữ liệu giả lập** đặt tại Hà Nội, TP.HCM, Đà Nẵng, Phú Quốc (`src/components/sections/FeaturedPropertiesSection.tsx`). |
| **P4-07** | **Section 6: Câu hỏi Thường gặp có Ảnh (FAQ)** | Cao | `DONE` | Accordion mượt mà, câu hỏi 1 mở mặc định kèm ảnh thumbnail nội thất bên trái; nội dung pháp lý BĐS Việt Nam (`src/components/sections/FaqSection.tsx`). |
| **P4-08** | **Section 7: Đánh giá Khách hàng & Nhà đầu tư** | Cao | `DONE` | Thẻ chia đôi 2 nửa với trích dẫn về kiến trúc được ghi rõ minh hoạ; nút chuyển trích dẫn tương tác (`src/components/sections/TestimonialSection.tsx`). |
| **P4-09** | **Section 8: Banner Kêu gọi Hành động (CTA)** | Cao | `DONE` | Khung ảnh biệt thự đêm bo tròn `rounded-3xl`, lớp phủ tối điện ảnh, tiêu đề trắng, nút trắng nổi "Khám phá bất động sản" (`src/components/sections/PreFooterCtaSection.tsx`). |

---

## GIAI ĐOẠN 5: HIỆU ỨNG CHUYỂN ĐỘNG & TƯƠNG TÁC (PHASE 5 - MOTION)

| Mã Task | Tên Nhiệm vụ | Độ ưu tiên | Trạng thái | Tiêu chí Nghiệm thu (Acceptance Criteria) |
| :--- | :--- | :---: | :---: | :--- |
| **P5-01** | Tích hợp Scroll Reveal Animations | Trung bình | `TODO` | Các section xuất hiện mượt mà khi cuộn tới với `framer-motion` (Fade In Up nhẹ, không gây trễ giao diện). |
| **P5-02** | Hiệu ứng Hover Thẻ BĐS & Nút bấm | Trung bình | `TODO` | Ảnh zoom nhẹ trong khung, nút có hiệu ứng active:scale-95, bóng đổ đổi màu mềm. |
| **P5-03** | Tương tác Lọc Nhanh trên Search Widget | Trung bình | `DONE` | Nhấp chọn các chip tag lọc nhanh cập nhật tức thì trạng thái active và hai chiều với select. |

---

## GIAI ĐOẠN 6: CÁC TRANG CHỨC NĂNG PHỤ (PHASE 6 - SUBPAGES)

| Mã Task | Tên Nhiệm vụ | Độ ưu tiên | Trạng thái | Tiêu chí Nghiệm thu (Acceptance Criteria) |
| :--- | :--- | :---: | :---: | :--- |
| **P6-01** | **Trang Danh sách BĐS (`/bat-dong-san`)** | Cao | `DONE` | Đã hoàn thành toàn diện trang listing `/bat-dong-san`: Luxury Editorial header, thanh bộ lọc đa tiêu chí (keyword, loại hình, khu vực, khoảng giá VNĐ, diện tích m², số phòng ngủ), drawer bộ lọc di động (390px), sắp xếp tăng/giảm giá và diện tích, phân trang mượt mà, modal Quick View chống lỗi 404, đồng bộ 2 chiều URL query parameters với `HeroSearchWidget`, build pass 100%. |
| **P6-02** | **Trang Chi tiết BĐS (`/bat-dong-san/[slug]`)** | Rất Cao | `DONE` | Đã hoàn thành toàn diện trang chi tiết `/bat-dong-san/[slug]`: Breadcrumb & Page Header (tiêu đề, giá VNĐ, badges, nút chia sẻ sao chép link, quay lại danh sách), Premium Architectural Image Gallery tích hợp Lightbox toàn màn hình (chuyển ảnh, bàn phím ESC / mũi tên, filmstrip thumbnail), Bento Specs Grid hiển thị đúng trường dữ liệu hợp lệ, Editorial Luxury Description (ý niệm kiến trúc, không dùng Lorem Ipsum), Amenities Grid với Lucide icons từ mock data, Location Section với bản đồ vector kiến trúc minh họa (không Google Maps API, không tọa độ giả), Sticky Contact Card chuyển đổi sang `/lien-he` có query tham chiếu, Related Properties đề xuất 3 BĐS tương tự, trang 404 tùy biến, tĩnh hóa 16 slugs với dynamic metadata. Next build & lint pass 100%. |
| **P6-03** | **Trang Về chúng tôi (`/ve-chung-toi`)** | Trung bình | `DONE` | Hoàn thành giao diện Luxury Editorial: Hero banner kiến trúc toàn màn hình, câu chuyện ý tưởng LumiNest (không bịa thông tin lịch sử), Bento Grid 4 giá trị cốt lõi, triết lý kiến trúc & cảm xúc, 3 bước tiếp cận và banner CTA chuyển đổi. Build & lint pass 100%. |
| **P6-04** | **Trang Liên hệ (`/lien-he`)** | Trung bình | `DONE` | Hoàn thành giao diện 2 cột: Cột thông tin quy trình tiếp nhận & thông báo demo minh bạch (không bịa hotline/địa chỉ giả), cột biểu mẫu tương tác với validation tiếng Việt, bản xem trước (preview state), tính năng sao chép nội dung vào clipboard và mở mailto, Accordion FAQ 4 câu hỏi thực tế và final CTA sang `/bat-dong-san`. |

---

## GIAI ĐOẠN 7: KIỂM THỬ, TỐI ƯU & BÀN GIAO (PHASE 7 - QA & POLISH)

| Mã Task | Tên Nhiệm vụ | Độ ưu tiên | Trạng thái | Tiêu chí Nghiệm thu (Acceptance Criteria) |
| :--- | :--- | :---: | :---: | :--- |
| **P7-01** | Kiểm tra Responsive Toàn diện | Rất Cao | `TODO` | Kiểm tra trên Mobile (375px, 414px), Tablet (768px, 820px), Laptop (1024px, 1280px), Desktop (1440px+). |
| **P7-02** | Kiểm tra Ngôn ngữ & Dấu Tiếng Việt | Cao | `TODO` | Đảm bảo 100% nội dung tiếng Việt chuẩn, không có lỗi gõ dấu, không còn từ ngữ placeholder (Lorem Ipsum). |
| **P7-03** | Tối ưu Hiệu năng & Hình ảnh (`next/image`) | Cao | `TODO` | Cấu hình responsive `sizes`, webp/avif, lazy loading, điểm Lighthouse Performance > 90. |
| **P7-04** | Cấu hình SEO Metadata & OpenGraph | Trung bình | `TODO` | Khai báo Title, Description, OG Image chuẩn cho thị trường BĐS Việt Nam khi chia sẻ liên kết mạng xã hội. |


---

## REVIEW 1.1 — QUY TẮC TRIỂN KHAI

- Không chuyển task sang DONE nếu chưa chạy kiểm tra và báo bằng chứng (lệnh + kết quả).
- Trong phiên làm việc tiếp theo chỉ hoàn thành P2-01 đến P2-06. Không code navbar/hero/homepage, trừ trang placeholder tối thiểu xác nhận cấu hình chạy được.
- Nếu thư mục project đã chứa `docs/`, **không** chạy tạo scaffold ghi đè. Kiểm tra workspace trước; scaffold trong thư mục tạm nếu cần và merge có kiểm soát.
- Giao diện website mang thương hiệu demo `LumiNest`; `EverGreen` chỉ là nguồn tham chiếu, không phải logo chính thức.
- Nếu không có asset ảnh được cấp phép, để placeholder có giải thích.
