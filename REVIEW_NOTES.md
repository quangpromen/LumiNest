# REVIEW NOTES — EverGreen Việt Nam → LumiNest Demo v1.1

## Kết luận
Bộ tài liệu gốc đủ chi tiết để bắt đầu khởi tạo dự án, nhưng có một số điểm cần hiệu chỉnh trước khi code. Các file trong `docs/` là **bản đề xuất đã hiệu chỉnh**, không thay thế mặc định dữ liệu trong máy của bạn trừ khi bạn chủ động chép vào project.

## Các sửa đổi chính
1. Giữ hướng UI eco-luxury, Hero/Float Search/Bento/Property Card và cấu trúc section; tên sản phẩm demo tạm `LumiNest`, reference là EverGreen Dribbble.
2. Chọn Next.js stable + Tailwind CSS v4 CSS-first; loại hướng dẫn Tailwind v3 `tailwind.config.ts`.
3. Không hiển thị số liệu về doanh số và đánh giá khách hàng chưa xác thực; giữ layout 4 cột bằng giá trị biên tập.
4. Xóa tuyên bố về sổ hồng, giấy phép, cam kết khoản vay/lợi nhuận, hotline và văn phòng chưa được xác nhận.
5. Chuyển lời chứng thực khách hàng giả thành trích dẫn cảm hứng mang nhãn minh họa.
6. 6 dự án/giá là mock; format VNĐ từ số, không tạo `priceDisplay` lưu song song.
7. Không thêm EN, đường dẫn rỗng, fake-success form; chỉ giữ 5 route trong phạm vi.
8. Ảnh và bản đồ cần nguồn hợp pháp, bản đồ stylized không giả là vị trí chính xác.
9. Khởi tạo Next.js an toàn trong workspace đã có docs; làm chỉ Phase 2, sau đó review để tiếp tục.

## Điều kiện cần kiểm tra với chủ dự án
- Tên demo `LumiNest` chỉ là lựa chọn làm việc, đổi được sau.
- Phân khúc giai đoạn đầu: Eco-luxury BĐS cao cấp như tài liệu gốc; nếu muốn marketplace tổng hợp có cả cho thuê, cần bổ sung `transactionType` và các filter trước Phase 6.
- Có ảnh screenshot trực tiếp của template Dribbble trong thư mục `references/` không? Nếu thiếu, chỉ có thể bám theo phong cách, không cam kết pixel-perfect.
