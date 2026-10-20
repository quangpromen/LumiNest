# ĐẶC TẢ CHI TIẾT TRANG CHỦ (HOMEPAGE SPECIFICATION)
*(Phân rã từng Section, Layout Responsive, Nội dung Tiếng Việt & Dữ liệu Mock)*

---

## 1. TỔNG QUAN CẤU TRÚC TRANG CHỦ

Trang chủ bản demo **LumiNest**, lấy cảm hứng từ EverGreen, được xây dựng theo cấu trúc phân tầng thị giác (Visual Storytelling) chặt chẽ, dẫn dắt người xem từ ấn tượng ban đầu đến khám phá giá trị, tìm kiếm sản phẩm và liên hệ tư vấn:

```
┌─────────────────────────────────────────────────────────────┐
│ 0. Thanh điều hướng nổi (Floating Pill Navbar)             │
├─────────────────────────────────────────────────────────────┤
│ 1. Hero Banner Sinh thái + Khối tìm kiếm nổi (Search Widget)│
├─────────────────────────────────────────────────────────────┤
│ 2. Khối Bento Giá trị độc bản (Bento Grid Feature)          │
├─────────────────────────────────────────────────────────────┤
│ 3. Thanh Chỉ số niềm tin & Quy mô (4-Column Trust Bar)      │
├─────────────────────────────────────────────────────────────┤
│ 4. Bản đồ & Tiềm năng Vị trí (Location Value Discovery)     │
├─────────────────────────────────────────────────────────────┤
│ 5. Tuyển tập Bất động sản nổi bật (Premier Properties Grid) │
├─────────────────────────────────────────────────────────────┤
│ 6. Câu hỏi thường gặp có ảnh (FAQ Accordion with Preview)   │
├─────────────────────────────────────────────────────────────┤
│ 7. Đánh giá từ Khách hàng & Nhà đầu tư (Testimonial Card)   │
├─────────────────────────────────────────────────────────────┤
│ 8. Banner Kêu gọi Hành động (Pre-Footer CTA Banner)         │
├─────────────────────────────────────────────────────────────┤
│ 9. Chân trang Biên tập & Liên hệ (Editorial Footer)         │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. CHI TIẾT TỪNG SECTION

---

### SECTION 0: FLOATING PILL NAVBAR (Thanh điều hướng nổi)

- **Vị trí & Hành vi**: Cố định (Fixed/Sticky) ở đỉnh màn hình, lơ lửng cách đỉnh 20px, hiệu ứng kính mờ (Backdrop Blur) khi cuộn trang.
- **Bố cục (Desktop)**:
  - **Khối trái (Logo)**: Chữ `LumiNest` (thương hiệu demo tạm) đậm nét, font `Plus Jakarta Sans`, kèm icon mầm cây hoặc lá cách điệu bằng nét tối giản.
  - **Khối giữa (Menu chính dạng Pill Card)**:
    - Nền trắng mờ hoặc xám nhạt bo tròn `rounded-full`, viền nhẹ `border-[#E6E8DF]`.
    - Các liên kết: `Trang chủ` (Active pill nền trắng/đen), `Về chúng tôi`, `Dự án`, `Liên hệ`.
  - **Khối phải (Tiện ích & CTA)**:
    - Chưa có nút chuyển đổi ngôn ngữ vì bản MVP chỉ có tiếng Việt.
    - Nút CTA Accent: Nút pill màu xanh chồi non với nội dung **"Liên hệ"**, dẫn tới `/lien-he`.
- **Bố cục (Mobile / Tablet)**:
  - Thu gọn vào thanh bar ngang gọn nhẹ; logo bên trái; nút "Liên hệ" và nút Hamburger Menu bên phải.
  - Khi click Hamburger Menu: Trượt ra Drawer (Sheet) toàn màn hình chứa menu và các liên kết hiện có; không tạo hotline hoặc mạng xã hội giả.

---

### SECTION 1: HERO ARCHITECTURAL BANNER & FLOATING SEARCH WIDGET

#### A. Hero Banner
- **Hình ảnh**: Khung ảnh lớn tỉ lệ 16:9 hoặc 21:9 bo tròn góc lớn `rounded-3xl` (32px), bên trong là bức ảnh công trình kiến trúc kính cong tương lai (futuristic capsule home / organic villa) lồng giữa rừng cây nguyên sinh xanh mát tràn đầy ánh nắng sớm.
- **Các thành phần nổi trên ảnh (Overlay Elements)**:
  - Cụm Badges kính mờ góc trên: 3 thẻ pill `[Biệt thự]`, `[Căn hộ cao cấp]`, `[BĐS Sinh thái]` nền `bg-white/20 backdrop-blur-md text-white`.
  - **Tiêu đề chính (Main Heading)**:
    - Nội dung: **"Kiến Tạo Tương Lai, Khởi Nguồn Từ Tổ Ấm."**
    - Phong cách: Font size lớn (64px desktop / 36px mobile), màu trắng tinh khiết, font weight 500, ngắt dòng nghệ thuật.
  - **Đoạn dẫn phụ (Right Subtitle)**:
    - Nội dung: *"Định danh không gian sống độc bản. Nơi thiên nhiên hòa cùng kiến trúc hiện đại, kiến tạo chuẩn mực sống bền vững cho các thế hệ tinh hoa."*
    - Vị trí: Căn góc phải, chữ trắng mờ `text-white/85`.

#### B. Khối Tìm Kiếm Nổi (Floating Search Widget)
- **Vị trí**: Đặt lơ lửng đè lên cạnh dưới của Hero Banner (overlapping 40%).
- **Bố cục & Styling**: Thẻ nền trắng `bg-white rounded-2xl p-6 shadow-floating border border-[#E6E8DF]/60`.
- **Nội dung & Các trường lọc**:
  - Tiêu đề nhỏ: **"Tìm kiếm không gian lý tưởng"**
  - Hàng lọc chính (4 cột trên Desktop / Xếp chồng trên Mobile):
    1. **Loại hình (Looking for)**: Ô nhập / Select với placeholder *"Chọn loại hình BĐS"* (Tùy chọn: Tất cả, Biệt thự đơn lập, Căn hộ xanh, Sky Villa, Shophouse).
    2. **Mức giá (Price)**: Select khoảng giá VNĐ (Tùy chọn: Dưới 5 Tỷ, 5 - 10 Tỷ, 10 - 20 Tỷ, Trên 20 Tỷ).
    3. **Khu vực (Locations)**: Select tỉnh thành (Tùy chọn: Hà Nội, TP. Hồ Chí Minh, Đà Nẵng, Quảng Nam, Phú Quốc).
    4. **Số phòng ngủ (Number of rooms)**: Select số phòng (Tùy chọn: 1 PN, 2 PN, 3 PN, 4+ PN).
    5. **Nút tìm kiếm**: Nút pill đen lớn `bg-[#121512] text-white px-7 py-3.5 rounded-full flex items-center justify-center gap-2 hover:bg-black font-medium` với text **"Tìm kiếm dự án"** kèm icon kính lúp `<Search size={18} />`.
  - **Hàng lọc nhanh (Quick Filter Chips)**:
    - Text dẫn: `"Lọc nhanh:"`
    - Các chip pill: `Hà Nội`, `TP. Hồ Chí Minh`, `Biệt thự ven sông`, `Căn hộ sinh thái`, `Nghỉ dưỡng biển`.

---

### SECTION 2: BENTO GRID - GIÁ TRỊ KHÔNG GIAN ĐỘC BẢN

- **Mục tiêu**: Kể câu chuyện về công năng thông minh và triết lý sống gần gũi thiên nhiên của bản demo LumiNest.
- **Tiêu đề Section**:
  - H2: **"Ngôi nhà nguyên bản có thể khiến bạn nhận ra những điều còn thiếu."**
  - Pill video play: Nút pill nhỏ bên cạnh với icon play: *"Mỗi bất động sản sở hữu vị trí đắc địa và kiến trúc bền vững"* kèm hiệu ứng nhấp nháy thu hút ánh nhìn.
- **Bố cục Bento 3 cột (Bento Grid)**:
  - **Cột 1 (Thẻ ảnh lớn bên trái - 50% width)**:
    - Ảnh lớn biệt thự hiện đại hai tầng kết hợp đá tự nhiên và kính trong suốt.
    - Góc dưới ảnh có cụm 3 avatar tròn nổi (thumbnails kiến trúc góc nhìn khác).
  - **Cột 2 (Thẻ chữ thông minh ở giữa - 25% width)**:
    - Nền kem nhạt `bg-[#F3F4EE] rounded-3xl p-8 flex flex-col justify-between`.
    - Tiêu đề: **"Những điều lớn lao khởi đầu từ không gian tinh gọn."**
    - Nội dung: *"Tối ưu hóa từng centimet với thiết kế thông minh, giải phóng diện tích để đón trọn luồng sinh khí và ánh sáng tự nhiên."*
    - Nút pill viền: `"Xem chi tiết"` bo tròn.
  - **Cột 3 (Thẻ dự án đặc sắc bên phải - 25% width)**:
    - Ảnh biệt thự đồi sinh thái.
    - Khối thông tin: Nhãn giá **"Giá khởi điểm từ 6.5 Tỷ VNĐ"**.
    - Nút pill đen: `"Khám phá dự án →"`.
- **Hàng điều khiển phía dưới**: Cụm 2 nút tròn mũi tên `(←) (→)` viền mảnh để lướt xem các bộ sưu tập tiếp theo.

---

### SECTION 3: THANH GIÁ TRỊ NỀN TẢNG (TRUST/VALUE BAR)

- **Bố cục:** Giữ dải 4 cột cân xứng theo reference, `divide-x`, responsive dạng 2x2 hoặc 1 cột trên mobile.
- **Nội dung đề xuất (không dùng chỉ số thành tích giả):**
  1. **Không gian xanh** — Đề cao ánh sáng, cây xanh và kiến trúc bền vững.
  2. **Bộ sưu tập chọn lọc** — Khám phá nhiều phong cách nhà ở cao cấp.
  3. **Thông tin trực quan** — Giá, diện tích, vị trí được trình bày rõ ràng.
  4. **Khám phá thuận tiện** — Lọc dự án theo nhu cầu bằng dữ liệu demo.
- **Không hiển thị:** `100%` hài lòng, `500+` giao dịch, `2.000+` đánh giá hoặc cam kết khác chưa có bằng chứng.

---

### SECTION 4: BẢN ĐỒ & TIỀM NĂNG VỊ TRÍ (LOCATION VALUE DISCOVERY)

- **Mục tiêu**: Giúp người mua nhận thức rõ về vị trí chiến lược, tính kết nối và khả năng kết nối và ý nghĩa vị trí của các dự án giả lập LumiNest; không cam kết tăng giá.
- **Bố cục**: Chia đôi màn hình 50 / 50 trên Desktop:
  - **Nửa trái (Bản đồ kiến trúc tối giản)**:
    - Khung bản đồ phong cách Light Architectural Map (tông màu trắng, ghi sáng, các trục đường xanh nhạt).
    - Điểm ghim nổi bật màu xanh chồi non với nhãn ghim: **"Tổ Ấm Mơ Ước - Tâm Điểm Kết Nối"** (Dream Home Pin) có hiệu ứng lan tỏa (pulse animation).
  - **Nửa phải (Thông điệp giá trị & Kêu gọi)**:
    - Tiêu đề H2: **"Khám phá bất động sản với vị trí đắc địa và thanh khoản tối ưu."**
    - Đoạn mô tả: *"Từ những không gian tối giản trong lòng đô thị đến các biệt thự nghỉ dưỡng tách biệt, chúng tôi tuyển chọn những vị trí đón đầu quy hoạch hạ tầng, cận kề công viên sinh thái và các tuyến giao thông huyết mạch."*
    - Nút hành động: Nút pill đen `bg-[#121512] text-white px-6 py-3.5 rounded-full inline-flex items-center gap-2 hover:bg-black font-medium` với text: **"Khám phá theo khu vực →"** (đi tới `/bat-dong-san`).

---

### SECTION 5: TUYỂN TẬP BẤT ĐỘNG SẢN NỔI BẬT (PREMIER PROPERTIES)

- **Tiêu đề Section**:
  - H2: **"Tuyển tập bất động sản sinh thái hàng đầu"**
  - Đoạn phụ: *"Mỗi danh mục mang đến những giá trị độc bản, chất lượng hoàn thiện vượt bậc và vị thế đắt giá tại các tâm điểm thịnh vượng."*
  - Nút bên phải: `"Xem tất cả dự án (24) →"` (Nút pill đen).
- **Lưới hiển thị (Grid Layout)**: 6 thẻ BĐS xếp thành 2 hàng x 3 cột trên Desktop, 2 cột trên Tablet, 1 cột trên Mobile.
- **Danh sách 6 BĐS minh hoạ (giá, tình trạng và tên đều giả lập; không phải tin đăng thực tế)**:

| STT | Tên Dự án / Bất động sản | Loại hình | Trạng thái | Giá bán | Vị trí địa lý | Thông số kỹ thuật |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | **The Pinnacle West Lake Villa** | Biệt thự đơn lập | Đang mở bán | **18.5 Tỷ VNĐ** | Bán đảo Tây Hồ, Hà Nội | 4 PN · 4 WC · 350 m² |
| **2** | **The Atrium Thảo Điền Residences** | Sky Villa | Đang mở bán | **12.8 Tỷ VNĐ** | Thảo Điền, TP. Thủ Đức, TP.HCM | 3 PN · 3 WC · 185 m² |
| **3** | **Silver Oak Riverside Mansion** | Dinh thự ven sông | Giới hạn (Hot) | **32.0 Tỷ VNĐ** | Bán đảo Thủ Thiêm, TP.HCM | 5 PN · 6 WC · 520 m² |
| **4** | **Heritage Sơn Trà Ocean Retreat** | Biệt thự sườn đồi | Đang mở bán | **15.2 Tỷ VNĐ** | Bán đảo Sơn Trà, Đà Nẵng | 4 PN · 4 WC · 310 m² |
| **5** | **Parkview Central Green Suites** | Căn hộ cao cấp | Sắp bàn giao | **6.5 Tỷ VNĐ** | Nam Từ Liêm, Hà Nội | 2 PN · 2 WC · 92 m² |
| **6** | **Cedar Ridge Coastal Oasis** | Biệt thự biển | Đang mở bán | **24.5 Tỷ VNĐ** | Bãi Trường, TP. Phú Quốc | 4 PN · 5 WC · 420 m² |

- **Chi tiết cấu tạo của Thẻ BĐS (Property Card)**:
  - Khung ảnh bo góc `rounded-2xl` tràn viền.
  - Huy hiệu góc trên trái: `[Đang mở bán]` hoặc `[Hot]`.
  - Dải icon thông số: `<BedDouble /> 4 Phòng ngủ` · `<Bath /> 4 Phòng tắm` · `<Maximize2 /> 350 m²`.
  - Tên dự án in đậm, kích thước 20px, font `Plus Jakarta Sans`.
  - Dòng giá và vị trí: Số tiền viết đậm nổi bật, phân cách bằng dấu gạch ngang với tên quận/thành phố (VD: `18.5 Tỷ VNĐ — Tây Hồ, Hà Nội`).

---

### SECTION 6: CÂU HỎI THƯỜNG GẶP (FAQ ACCORDION WITH PREVIEW)

- **Mục tiêu**: Giải tỏa băn khoăn về pháp lý, quy trình giao dịch, cách tiếp cận thông tin của website demo.
- **Bố cục**:
  - Hàng đầu: Tiêu đề lớn **"Câu hỏi thường gặp"** bên trái; bên phải là đoạn giới thiệu về đội ngũ chuyên gia pháp lý và tài chính luôn đồng hành cùng khách hàng.
  - Danh sách Accordion dạng thẻ phẳng bo tròn `rounded-2xl border border-[#E6E8DF] divide-y divide-[#E6E8DF] bg-white`.
- **Nội dung 5 câu hỏi (bản demo không khẳng định pháp lý hoặc sản phẩm có thật):**
  1. **Website giới thiệu những loại hình bất động sản nào?** — "Bản demo minh hoạ biệt thự, căn hộ, nhà phố và nghỉ dưỡng. Danh mục có thể thay đổi khi kết nối dữ liệu thật."
  2. **Làm sao để tìm hiểu pháp lý của một bất động sản?** — "Cần đối chiếu giấy tờ dự án, tình trạng sở hữu, quy hoạch và thông tin từ cơ quan có thẩm quyền trước khi giao dịch."
  3. **Website có cung cấp khoản vay hoặc ưu đãi ngân hàng không?** — "Phiên bản demo không cung cấp hoặc cam kết chương trình vay; điều kiện vay phụ thuộc ngân hàng và hồ sơ thực tế."
  4. **Giá và thông tin bất động sản có cập nhật theo thời gian thực không?** — "Chưa. Giá và dữ liệu trên website hiện là dữ liệu minh hoạ."
  5. **Có thể đăng ký xem nhà mẫu ngay trên website không?** — "Phiên bản hiện tại chỉ là bản giao diện, chưa tiếp nhận lịch hẹn thực tế."
- Giữ bố cục Accordion + ảnh thumbnail tương tự reference, nhưng ảnh là asset được phép sử dụng.

---

### SECTION 7: ĐÁNH GIÁ KHÁCH HÀNG & NHÀ ĐẦU TƯ (TESTIMONIAL)

- **Header Section**:
  - Tiêu đề H2: **"Cảm hứng về không gian sống"**
  - Cụm avatar góc phải: Có thể dùng một dải ảnh kiến trúc nhỏ; không hiển thị số đánh giá xác thực giả.
- **Bố cục Thẻ đánh giá lớn (Split Testimonial Card)**:
  - Khung thẻ bo tròn lớn `rounded-3xl bg-[#F3F4EE] p-8 lg:p-12 border border-[#E6E8DF] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`.
  - **Nửa trái (lg:col-span-5)**: Ảnh không gian sống/kiến trúc chất lượng cao (không giả làm ảnh người đánh giá thật), khung ảnh bo góc tròn mềm mại.
  - **Nửa phải (lg:col-span-7)**:
    - Biểu tượng dấu ngoặc kép lớn màu xanh chồi non (`<Quote />` hoặc icon vector `“` màu `#C6EB28`).
    - Đoạn trích dẫn tâm đắc:
      > *"Một ngôi nhà đáng sống là nơi ánh sáng, thiên nhiên và những trải nghiệm thường nhật gặp nhau."* (nội dung biên tập minh họa, không phải trích dẫn khách hàng thật)
    - Nhãn nguồn nội dung:
      - **Góc nhìn thiết kế (minh hoạ)**
      - *Nội dung biên tập cho bản demo*
- **Điều khiển**: Hai nút tròn chuyển slide `(←) (→)` đặt ở cạnh phải để người dùng dễ dàng đọc các đánh giá tiếp theo.

---

### SECTION 8: BANNER KÊU GỌI HÀNH ĐỘNG (PRE-FOOTER CTA BANNER)

- **Hình ảnh**: Khung ảnh toàn cảnh biệt thự kính sang trọng lúc hoàng hôn/buổi tối (Dusk architectural view) với ánh đèn vàng ấm áp tỏa ra từ các khung cửa kính lớn, bo góc tròn `rounded-3xl` (32px).
- **Lớp phủ nền**: Lớp phủ chuyển màu điện ảnh (Cinematic gradient dark overlay `bg-black/40 backdrop-blur-[1px]`).
- **Nội dung trung tâm (Căn giữa - Centered)**:
  - H2 lớn (Màu trắng): **"Sẵn sàng hiện thực hóa tổ ấm mơ ước của bạn?"**
  - Đoạn phụ (Màu trắng ngà): *"Khám phá bộ sưu tập không gian sống xanh được giới thiệu qua bản demo LumiNest."*
  - Nút hành động trắng nổi bật: Nút pill màu trắng chữ đen `bg-white text-[#121512] font-semibold px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-[#F3F4EE] transition-all shadow-xl active:scale-95` với text: **"Khám phá bất động sản →" (đi tới `/bat-dong-san`)**.

---

### SECTION 9: CHÂN TRANG BIÊN TẬP (EDITORIAL FOOTER)

- **Phần trên:** Tiêu đề lớn "Khám phá không gian sống truyền cảm hứng" cùng mô tả LumiNest là **website giao diện demo**.
- **Logo:** `LumiNest` (tên demo tạm, có thể thay đổi).
- **Điều hướng có route thật:** `Trang chủ` (`/`), `Bất động sản` (`/bat-dong-san`), `Về chúng tôi` (`/ve-chung-toi`), `Liên hệ` (`/lien-he`).
- **Liên hệ:** Không tạo số hotline, địa chỉ, email công ty, mạng xã hội, giấy phép kinh doanh hoặc thông tin pháp lý giả. Để trống hoặc ghi "Thông tin liên hệ đang được cập nhật".
- **Bản quyền:** `© 2026 LumiNest — Giao diện demo`. Không tự tuyên bố doanh nghiệp đăng ký kinh doanh hay giấy phép sàn BĐS.

---

## GHI CHÚ QUẢN LÝ NỘI DUNG DEMO

- 6 bất động sản ở Section 5 là **mẫu UI và dữ liệu giả lập**, không phải tài sản đang được chào bán. Hiển thị thông báo "Dữ liệu minh hoạ" gần lưới sản phẩm.
- Không suy diễn từ tên dự án demo rằng chúng tồn tại ngoài đời thực. Không thêm badge xác nhận pháp lý thật.
- Section bản đồ chỉ là minh hoạ khi chưa dùng dữ liệu vị trí thật; CTA đi tới trang listing có filter, không nhận là bản đồ vị trí chính xác.
- Carousel chỉ hiển thị nút trái/phải khi có từ hai mục thật sự chuyển được.
- Các thành phần Search hoạt động trên mock data; không phải API tìm kiếm sản phẩm thật.
