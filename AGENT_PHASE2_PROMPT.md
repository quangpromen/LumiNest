# PROMPT DÁN VÀO ANTIGRAVITY — GIAI ĐOẠN 2 (P2-01 → P2-06)

Bạn là Senior Frontend Engineer. Dự án là **LumiNest (tên demo tạm)** — website giới thiệu/tìm kiếm bất động sản Việt Nam lấy cảm hứng UI từ EverGreen Dribbble. Tập trung FRONTEND-ONLY.

## TÀI LIỆU BẮT BUỘC ĐỌC
- `docs/PROJECT_PLAN.md`
- `docs/DESIGN_SYSTEM.md`
- `docs/HOMEPAGE_SPEC.md`
- `docs/TASKS.md`
- `REVIEW_NOTES.md` (nếu có)

Đọc trước khi chỉnh code. Các ghi chú review v1.1 được ưu tiên hơn đoạn ví dụ kỹ thuật cũ nếu mâu thuẫn. Nếu gặp mâu thuẫn khác, nêu rõ và chọn một cách thống nhất.

## SCOPE CHỈ TRONG LƯỢT NÀY
Thực hiện **Phase 2 - SETUP** với task IDs P2-01, P2-02, P2-03, P2-04, P2-05, P2-06. Tuyệt đối KHÔNG code Hero, Navbar, Bento, Homepage, Listing, Detail hay animation ở lượt này. Có thể tạo trang index placeholder ngắn để xác nhận môi trường.

### P2-01 — Kiểm tra workspace và Next.js
1. Kiểm tra file hiện hữu, Git status, package.json trước; tuyệt đối không xoá/ghi đè `docs/` hoặc code đang có.
2. Nếu chưa có Next.js, tạo project bằng create-next-app phiên bản stable tương thích, App Router + TypeScript strict + ESLint + src dir + npm + Tailwind CSS v4. Nếu root đã có `docs/` và CLI từ chối thư mục không rỗng, scaffold trong thư mục tạm rồi merge có kiểm soát.
3. Không cố định Next.js 14/15 nếu công cụ phiên bản mới tương thích. Ghi phiên bản thực vào báo cáo.
4. Thiết lập alias `@/*`.

### P2-02 — Design system
1. Dùng Tailwind **v4 CSS-first** với `@import "tailwindcss"` và `@theme inline` + CSS variables trong một stylesheet global.
2. Cấu hình palette, type scale, radius, shadow, container theo `DESIGN_SYSTEM.md`.
3. Không dùng đồng thời `tailwind.config.ts` kiểu Tailwind v3. Không viết CSS trùng lặp.

### P2-03 — Font
Dùng Plus Jakarta Sans từ `next/font/google`, cấu hình Vietnamese và `display: swap`; kiểm tra `html lang="vi"`.

### P2-04 — UI primitives
Cài shadcn/ui tương thích stack và lucide-react; tạo đúng primitives sẽ dùng sớm: Button, Input, Select, Accordion, Dialog/Sheet, Badge. Không tự thiết kế một thư viện component mới trùng với shadcn.

### P2-05 — Mock data & types
Tạo typed `Property` (id, slug, title, propertyType, status, price: number đơn vị VND, location, specs, featuredImage, gallery, amenities, isFeatured). Tạo mock 12 bất động sản theo khu vực VN và nhãn demo rõ ràng. Dùng các ví dụ của `HOMEPAGE_SPEC.md` làm gợi ý, không mô tả như tài sản thật.
Tạo `src/data/properties.ts`, `src/data/faqs.ts`, `src/data/navigation.ts`, `src/data/testimonials.ts` (lời dẫn minh họa, không tự tạo đánh giá xác thực của cá nhân).

### P2-06 — Utilities
Tạo `formatCurrencyVND`, `formatArea`, `cn`. Giá chỉ có 1 source of truth dạng number; không lưu `priceDisplay` song song. Chọn cách format nhất quán trong UI: ví dụ `18,5 tỷ`, `92 m²`. Nếu cần, thêm kiểm thử đơn vị đơn giản cho formatter.

## YÊU CẦU CHUNG
- Brand hiển thị: LumiNest là **tên demo tạm**, đặt vào file config để thay đổi dễ dàng; không tái sử dụng logo thương hiệu gốc.
- Chỉ tiếng Việt, không làm chức năng EN.
- Không thêm backend, Supabase, Prisma, API, authentication, dashboard, form gửi mail, analytics.
- Không chèn data doanh nghiệp tự bịa: giấy phép, pháp lý bảo đảm, hotline, địa chỉ thật, 100% khách hàng hài lòng, số lượng giao dịch.
- Không copy ảnh/đồ họa trực tiếp từ Dribbble khi chưa được cấp phép. Nếu chưa có ảnh có quyền dùng, dùng placeholder hoặc ảnh hợp lệ có nguồn rõ ràng.
- Mọi trang demo phải tránh CTA gây hiểu nhầm đã gửi lead / hẹn xem nhà thành công.
- Giữ component/code tối giản; React Server Components mặc định, chỉ dùng client khi cần.
- Tránh cài thêm package ngoài scope.

## ACCEPTANCE GATES — BẮT BUỘC TRƯỚC KHI BÁO DONE
1. Chạy `npm run dev` và xác nhận mở được localhost, không có runtime error.
2. Chạy `npx tsc --noEmit` thành công.
3. Chạy `npm run lint` nếu script tồn tại; xử lý lint errors.
4. Chạy `npm run build` thành công.
5. In đường dẫn các file đã tạo/sửa.
6. Cập nhật `docs/TASKS.md` P2-01 đến P2-06 thành DONE **chỉ cho những task thực sự đã kiểm chứng**; task chưa đạt giữ TODO và ghi lý do.
7. Báo cáo: phiên bản Next/React/Tailwind; cài đặt các thư viện; cấu trúc project; lệnh chạy; kết quả từng gate; những vấn đề còn tồn đọng.
8. DỪNG sau Phase 2, xin tôi duyệt. Không tự ý chuyển sang Phase 3 hay Phase 4.

Nếu có lỗi không thể xử lý, giải thích rõ lỗi và dừng tại đó, không tuyên bố đã hoàn thành.
