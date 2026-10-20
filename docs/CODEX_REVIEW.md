# CODEX INDEPENDENT REVIEW — LumiNest / EverGreen Việt Nam

**Ngày review:** 20/10/2026  
**Vai trò:** Senior Software Architect, Senior Frontend Engineer, Technical Reviewer  
**Phạm vi:** `PROJECT_PLAN.md`, `DESIGN_SYSTEM.md`, `HOMEPAGE_SPEC.md`, `TASKS.md`; tham khảo thêm `REVIEW_NOTES.md` ở root và trạng thái workspace hiện tại.  
**Không thuộc phạm vi:** chỉnh sửa tài liệu gốc, sửa code, thêm backend/authentication/database, hoặc xác nhận tính pháp lý của dữ liệu bất động sản.

## 1. Kết luận điều hành

**Kết luận Phase 2: NOT READY.**

Hướng tiếp cận frontend-first, 5 routes, App Router, TypeScript strict, Tailwind CSS v4 và mock data local là phù hợp. Bộ tài liệu cũng đã xử lý tốt nhiều rủi ro nội dung demo: không dùng số liệu thành tích giả, không giả testimonial, không sao chép asset Dribbble, và không giả lập việc gửi form thành công.

Tuy nhiên, chưa nên giao Agent triển khai/tiếp tục Phase 2 trước khi xử lý các P0 dưới đây:

1. `TASKS.md` vẫn yêu cầu hotline, bản đồ trụ sở và form đặt lịch thực tế, trái trực tiếp với phạm vi frontend-only/demo và các tài liệu còn lại.
2. Schema bắt buộc `legal: string` và nội dung “pháp lý chuẩn Việt Nam” dễ biến dữ liệu giả thành tuyên bố pháp lý có vẻ đã xác thực.
3. Trạng thái kế hoạch không khớp workspace: Phase 2 ghi `TODO/Sẵn sàng`, nhưng repository đã có `package.json`, lockfile, cấu hình và nhiều file `src/`. Không thể chạy “khởi tạo” an toàn nếu chưa xác định đây là baseline được duyệt hay artefact cần review.

Sau khi đóng 3 P0 và các P1 liên quan tới contract dữ liệu, search, responsive, dependency và tiêu chí nghiệm thu, dự án có thể chuyển thành **READY WITH CHANGES** rồi bắt đầu bằng audit baseline thay vì scaffold lại.

## 2. Giới hạn kiểm chứng reference

Đã truy cập trang Dribbble được cung cấp: <https://dribbble.com/shots/25548322-Real-Estate-Website-Template>.

- Xác minh được shot “Real Estate Website Template”, mô tả “EverGreen”, tác giả Sajibur Rahman/Oripio.
- Trang công khai liệt kê palette: `#F2F2F2`, `#0F0F09`, `#C4CEB8`, `#585E5F`, `#453F22`, `#9EA9B2`, `#8D7658`.
- Không có screenshot/reference local trong `references/`, và tôi không thể kiểm tra đáng tin cậy toàn bộ ảnh thiết kế dài ở độ phân giải gốc từ trang công khai. Vì vậy các khẳng định như chính xác 10 khối, lime `#C6EB28`, vị trí thumbnail FAQ, map pin, tỷ lệ layout và “pixel-accurate” **chưa được coi là đã xác minh**.
- Review UI dưới đây đánh giá tính nhất quán nội bộ và mức sẵn sàng triển khai; không chứng nhận độ giống pixel với bản gốc.

## 3. Phát hiện theo mức ưu tiên

### P0-01 — Task liên hệ yêu cầu dữ liệu/doanh nghiệp giả, trái scope

1. **File/vị trí:** `TASKS.md:49`, `TASKS.md:89`; đối chiếu `PROJECT_PLAN.md:241,268,271`, `HOMEPAGE_SPEC.md:53,214`, `DESIGN_SYSTEM.md:274`, `REVIEW_NOTES.md` mục 4 và 7.
2. **Vấn đề:** P3-03 yêu cầu drawer có “đầy đủ liên kết và hotline”; P6-04 yêu cầu “Bản đồ trụ sở Hà Nội & TP.HCM, thông tin hotline, biểu mẫu đặt lịch hẹn tư vấn trực tiếp”. Các tài liệu còn lại cấm tự tạo hotline, trụ sở và hành vi gửi dữ liệu thật.
3. **Tác động:** Agent có thể bịa thông tin doanh nghiệp, tạo UX đánh lừa người dùng, hoặc thêm hành vi vượt phạm vi frontend-only.
4. **Giải pháp:** Bỏ hotline khỏi P3-03. Đổi P6-04 thành trang liên hệ demo: CTA/link hợp lệ, thông báo “Thông tin liên hệ đang được cập nhật”, form UI có validation nhưng không gửi; tuyệt đối không map trụ sở nếu chưa có dữ liệu được chủ dự án cung cấp.
5. **Task cần cập nhật:** P3-03, P6-04; bổ sung acceptance criterion chống fake-success.

### P0-02 — Contract pháp lý bắt buộc khiến mock data có vẻ đã được xác thực

1. **File/vị trí:** `PROJECT_PLAN.md:14`, `PROJECT_PLAN.md:194-202`, `PROJECT_PLAN.md:269`; `TASKS.md:38,87`; `HOMEPAGE_SPEC.md:169-175,221-223`; `DESIGN_SYSTEM.md:210,276`.
2. **Vấn đề:** `Property.specs.legal` là `string` bắt buộc và ví dụ gồm “Sổ hồng lâu dài”/“Sở hữu 50 năm”; icon `ShieldCheck` còn được mô tả là “Khẳng định tính pháp lý minh bạch”. Điều này mâu thuẫn với quy tắc không tạo xác nhận pháp lý giả.
3. **Tác động:** Mọi property mock buộc phải mang một tuyên bố pháp lý; UI/icon có thể khiến người xem hiểu đó là dữ liệu đã kiểm chứng.
4. **Giải pháp:** Tách `legalStatus` thành optional và có trạng thái nguồn, ví dụ `status: 'chua-xac-minh' | 'dang-cap-nhat' | 'da-cung-cap'`, chỉ cho hiển thị nội dung cụ thể khi có nguồn thật. Với MVP demo, mặc định “Thông tin pháp lý minh hoạ/chưa xác minh”. Không dùng `ShieldCheck` như dấu chứng nhận.
5. **Task cần cập nhật:** P2-05, P3-05, P6-02; thêm task kiểm tra nhãn demo/pháp lý ở Phase 7.

### P0-03 — Kế hoạch Phase 2 không phản ánh trạng thái repository hiện tại

1. **File/vị trí:** `TASKS.md:8-9,30-39,107-109`; `PROJECT_PLAN.md:224-231`. Bằng chứng workspace: đã có `package.json`, `package-lock.json`, `next.config.ts`, `tsconfig.json`, `components.json`, `src/app`, `src/data`, `src/types`, `src/lib`, `src/components/ui`.
2. **Vấn đề:** Tài liệu nói Phase 2 chưa bắt đầu và yêu cầu khởi tạo, nhưng artefact Phase 2 đã tồn tại. Git status hiện cho thấy toàn bộ các file này chưa được track, nên chưa có baseline/commit để xác định nguồn gốc và mức hoàn thành.
3. **Tác động:** Agent có thể scaffold đè file, chạy lại generator, đánh dấu DONE thiếu căn cứ, hoặc review sai trạng thái.
4. **Giải pháp:** Trước mọi thay đổi, chủ dự án xác nhận các artefact hiện tại là baseline cần giữ hay bản nháp. Thay P2-01 bằng “audit/hoàn thiện scaffold hiện có” nếu baseline được giữ; ghi version thực tế, chạy bằng chứng `lint`, `tsc`, `build`, và chỉ sau đó cập nhật trạng thái.
5. **Task cần cập nhật:** P2-01 đến P2-06, phần Tổng quan tiến độ và REVIEW 1.1.

### P1-01 — Version strategy không tái lập; mô tả shadcn/Radix đã lệch baseline

1. **File/vị trí:** `PROJECT_PLAN.md:52-59`; `TASKS.md:34-38`. Baseline hiện tại dùng Next `16.4.2`, React `19.3.0`, shadcn `4.22.1`, `@base-ui/react` `1.9.0`.
2. **Vấn đề:** “stable tại thời điểm khởi tạo” không phải version contract có thể tái lập. Tài liệu khẳng định shadcn xây trên Radix nhưng baseline đang cài Base UI. Các dependency Motion, React Hook Form, Zod, Zustand được nêu trước khi có task/nhu cầu sử dụng rõ ràng.
3. **Tác động:** Agent có thể cài sai primitive, theo hướng dẫn API không đúng phiên bản hoặc thêm dependency chưa dùng.
4. **Giải pháp:** Ghi rõ package manager, versions theo lockfile và primitive backend thực tế. Chỉ cài Motion ở phase animation, React Hook Form/Zod ở phase form; không cài Zustand/Embla nếu chưa có quyết định sử dụng.
5. **Task cần cập nhật:** P2-01, P2-04, P5-01, P6-04; thêm bước ghi version thực tế vào README.

### P1-02 — Dependency hiện tại có dấu hiệu trùng/không cần thiết

1. **File/vị trí:** `PROJECT_PLAN.md:143-146`; baseline `package.json` có `cn`, `clsx`, `tailwind-merge` đồng thời.
2. **Vấn đề:** Utility `cn()` thông thường chỉ cần `clsx` + `tailwind-merge`; package `cn` riêng không được tài liệu yêu cầu và có thể là cài nhầm. `Dialog`/`Card` cũng được cài ở Phase 2 dù chưa có use case bắt buộc trong homepage.
3. **Tác động:** Tăng bề mặt dependency, gây nhầm import, tăng chi phí cập nhật.
4. **Giải pháp:** Audit dependency theo import thực tế; bỏ package trùng nếu không dùng. Chỉ generate primitive khi có component/task tiêu thụ.
5. **Task cần cập nhật:** P2-04, P2-06; thêm acceptance criterion “không dependency không dùng”.

### P1-03 — Design tokens chưa đủ để Agent dựng giao diện nhất quán

1. **File/vị trí:** `DESIGN_SYSTEM.md:23-138,249-265`; `PROJECT_PLAN.md:109-111`; `TASKS.md:47`.
2. **Vấn đề:** Có color/type/radius/shadow nhưng thiếu spacing scale, section vertical rhythm, container gutter, z-index, overlay/gradient, aspect-ratio, image treatment và focus-ring tokens. Container có ba giá trị cạnh tranh: `max-w-7xl` (1280), `1320px`, `1340px`. Radius cũng ghi `rounded-3xl / rounded-[32px] (24px–32px)` và `rounded-2xl (16px–20px)`, không phải token đơn trị.
3. **Tác động:** Mỗi section dễ dùng khoảng cách, chiều rộng và radius khác nhau; giao diện mất nhịp và khó bám reference.
4. **Giải pháp:** Chốt một container max-width, gutter theo breakpoint, section spacing, radius token đơn trị, z-index layers và focus ring. Tách utility Tailwind khỏi semantic token.
5. **Task cần cập nhật:** P2-02, P3-01 và acceptance criteria của P4-01 đến P4-09.

### P1-04 — Breakpoint/responsive contract mâu thuẫn và còn khoảng trống

1. **File/vị trí:** `PROJECT_PLAN.md:18`; `DESIGN_SYSTEM.md:249-265`; `HOMEPAGE_SPEC.md:51-53,71-83,93-106,112,125,142`; `TASKS.md:97`.
2. **Vấn đề:** Project Plan dùng mobile 375–767/tablet 768–1023, còn Design System chuyển tablet từ 640px theo Tailwind. Khoảng 1281–1439 không được định nghĩa rõ. Nhiều section chỉ mô tả desktop, không quy định thứ tự xếp, overflow, chiều cao ảnh, vị trí search overlap và hành vi navbar ở tablet.
3. **Tác động:** Layout có thể đổi đột ngột ở 640/768, search che hero/content, bento/map/testimonial sai thứ tự hoặc overflow.
4. **Giải pháp:** Chọn một matrix breakpoint duy nhất (mobile-first), định nghĩa riêng cho 375, 640/768, 1024, 1280/1440; thêm behavior cho từng section và test orientation/zoom/text wrapping.
5. **Task cần cập nhật:** P3-01 đến P3-03, P4-01 đến P4-09, P7-01.

### P1-05 — Search Widget chưa có contract chức năng đủ để triển khai nhất quán

1. **File/vị trí:** `DESIGN_SYSTEM.md:179-189`; `HOMEPAGE_SPEC.md:70-83,225`; `PROJECT_PLAN.md:271`; `TASKS.md:61,78,86`.
2. **Vấn đề:** Có lúc trường đầu là “Nhu cầu/Input tìm kiếm từ khóa hoặc loại hình”, có lúc là select “Loại hình”. UI nói “4 cột” nhưng thực tế có 4 field + 1 button. Chỉ Project Plan đề cập URL query parameters; task không quy định submit destination, tên query, multi/single select, reset, zero results, chip đồng bộ với field, hay mapping filter giữa homepage và listing.
3. **Tác động:** Homepage và listing dễ dùng state/query khác nhau; chip chỉ đổi màu nhưng không lọc; back/forward/share URL không ổn định.
4. **Giải pháp:** Chốt một `FilterParams` contract và URL schema; Search submit tới `/bat-dong-san`; định nghĩa default, reset, zero-results, normalization dấu tiếng Việt, và chip phải cập nhật cùng nguồn state với select.
5. **Task cần cập nhật:** P2-05 (types/filter options), P4-02, P5-03, P6-01; thêm test URL/query ở Phase 7.

### P1-06 — Data model chưa đủ nhất quán cho Homepage, Listing và Detail

1. **File/vị trí:** `PROJECT_PLAN.md:156-207,273`; `HOMEPAGE_SPEC.md:76-83,143-159`; `TASKS.md:38,51,86-87`.
2. **Vấn đề:** `pricePerSquareMeter` là string dù quy ước yêu cầu dữ liệu tiền được format tập trung; `city`/`direction`/`legal` là free text; taxonomy UI (Sky Villa, biệt thự ven sông, căn hộ sinh thái, nghỉ dưỡng biển) không ánh xạ rõ với `PropertyType`. Listing yêu cầu sort/filters nhưng schema không có contract filter/sort/pagination. Detail yêu cầu mặt bằng nhưng model không có floor plan. Chưa chốt chỉ “bán” hay có “thuê”.
3. **Tác động:** Mock data dễ sai format, filter không khớp, Detail phải thêm field tùy tiện, khó mở rộng mà không rewrite.
4. **Giải pháp:** Dùng số cho `pricePerSquareMeter`; tạo taxonomy/label map; định nghĩa `FilterParams`, `SortOption`, pagination local, optional `floorPlans`, `legalStatus/source`. Chốt MVP là sale-only; chỉ thêm `transactionType` nếu chủ dự án duyệt mở rộng cho thuê.
5. **Task cần cập nhật:** P2-05, P2-06, P3-05, P6-01, P6-02.

### P1-07 — Nội dung doanh nghiệp và số lượng sản phẩm vẫn chứa tuyên bố chưa xác thực

1. **File/vị trí:** `HOMEPAGE_SPEC.md:124,130-141,167`; `PROJECT_PLAN.md:31-33`; `TASKS.md:65`.
2. **Vấn đề:** Các câu “thanh khoản tối ưu”, “đón đầu quy hoạch”, “đội ngũ chuyên gia pháp lý và tài chính luôn đồng hành” và nút “Xem tất cả dự án (24)” mang tính cam kết/số liệu doanh nghiệp, trong khi chỉ có 12+ mock dự kiến và 6 item homepage.
3. **Tác động:** Làm suy yếu nhãn demo, có thể bị hiểu là claim thương mại hoặc tư vấn chuyên môn thật.
4. **Giải pháp:** Đổi sang ngôn ngữ trung tính (“khám phá thông tin vị trí”, “nội dung tham khảo”), bỏ số `(24)` hoặc tính từ dataset, không nhắc đội ngũ chuyên gia khi chưa tồn tại.
5. **Task cần cập nhật:** P2-05, P4-05 đến P4-07, P7-02.

### P1-08 — CTA Section 8 mâu thuẫn trực tiếp

1. **File/vị trí:** `HOMEPAGE_SPEC.md:203-205`; `DESIGN_SYSTEM.md:152-154`; `TASKS.md:68`.
2. **Vấn đề:** Spec chốt CTA “Khám phá bất động sản” tới `/bat-dong-san`; Design System dùng ví dụ “Đặt lịch tư vấn ngay”; TASKS bắt buộc “Đặt lịch tư vấn ngay” nhưng không chốt route/hành vi.
3. **Tác động:** Agent có thể tạo CTA hứa lịch hẹn dù hệ thống không nhận lịch, hoặc triển khai khác copy đã duyệt.
4. **Giải pháp:** Chọn CTA của Homepage Spec và route `/bat-dong-san` cho MVP. Chỉ dùng CTA tư vấn khi route `/lien-he` và trạng thái demo được mô tả rõ.
5. **Task cần cập nhật:** P4-09; đồng bộ ví dụ Button White trong Design System.

### P1-09 — Reference fidelity chưa có artefact và quy trình visual acceptance

1. **File/vị trí:** `PROJECT_PLAN.md:17,225,232-235,249-260`; `TASKS.md:22,60-68`; `DESIGN_SYSTEM.md:84`.
2. **Vấn đề:** P1-01 được đánh dấu DONE và Phase 3 dùng “Pixel-Accurate”, nhưng không có screenshot local/Figma, không có viewport chuẩn, baseline image hoặc ngưỡng visual diff. Palette công khai của Dribbble không chứa accent lime `#C6EB28`; tài liệu thừa nhận palette là biến tấu.
3. **Tác động:** Tiêu chí “bám sát reference” không kiểm chứng được và Agent có thể tự suy đoán các chi tiết thị giác.
4. **Giải pháp:** Yêu cầu chủ dự án cung cấp screenshot hợp lệ hoặc duyệt moodboard/palette biến tấu. Chốt các viewport screenshot, checklist từng section và tiêu chí so sánh trước Phase 3; bỏ từ “pixel-accurate” nếu không có nguồn độ phân giải đủ.
5. **Task cần cập nhật:** P1-01 (mở lại/ghi “limited verification”), thêm task visual baseline trước P4-01, mở rộng P7-01.

### P1-10 — Acceptance criteria về accessibility và tương tác chưa đủ

1. **File/vị trí:** `DESIGN_SYSTEM.md:269-276`; `TASKS.md:37,49,52,61,66,76-78,93-100`.
2. **Vấn đề:** Design System có nhắc semantic, focus, reduced motion và contrast, nhưng TASKS không có QA accessibility. Không có yêu cầu keyboard cho drawer/select/accordion/carousel, focus trap, accessible names, form errors, touch target, color contrast hay trạng thái disabled.
3. **Tác động:** Dùng primitive không tự động đảm bảo toàn bộ accessibility; các interaction tùy biến có thể không dùng được bằng bàn phím/screen reader.
4. **Giải pháp:** Thêm task QA accessibility và acceptance criteria cụ thể: keyboard path, visible focus, Escape/focus return, labels/errors, `aria-live` cho kết quả lọc khi cần, reduced motion, contrast và target tối thiểu 44px.
5. **Task cần cập nhật:** P2-04, P3-02/03/06, P4-02/07, P5-01/03, Phase 7.

### P1-11 — Tiêu chí performance/CWV chưa kiểm chứng được như đang viết

1. **File/vị trí:** `PROJECT_PLAN.md:19,68,242-245`; `TASKS.md:99`.
2. **Vấn đề:** CWV là dữ liệu field cần traffic phù hợp; Lighthouse >90 phụ thuộc môi trường, mode, route, asset và số lần chạy. `placeholder blur` cũng không tự có cho mọi ảnh local/remote.
3. **Tác động:** Agent có thể tuyên bố đạt dựa trên một lần chạy dev không tái lập hoặc đánh dấu DONE khi chưa có dữ liệu field.
4. **Giải pháp:** Tách mục tiêu lab và field. Với MVP: build production, Lighthouse mobile theo cấu hình ghi lại, ít nhất 3 lần/route và báo median; CWV chỉ là mục tiêu sau deploy, không phải acceptance đã đạt. Quy định chiến lược placeholder/image source cụ thể.
5. **Task cần cập nhật:** P7-03; thêm build verification và cách lưu bằng chứng.

### P1-12 — Task sequence đẩy mock data trước khi chốt data/filter contract

1. **File/vị trí:** `TASKS.md:34-39,51,61,78,86-87`; `PROJECT_PLAN.md:156-207`.
2. **Vấn đề:** P2-05 yêu cầu tạo data nhưng chưa có task riêng chốt types/taxonomy/search query. Sau đó PropertyCard, Search và Listing có thể buộc sửa data nhiều lần.
3. **Tác động:** Rework và contract drift giữa homepage/listing/detail.
4. **Giải pháp:** Tách P2-05 thành: (a) domain/types + taxonomy + query contract, (b) fixtures có validation, (c) content disclaimer/provenance. Xây PropertyCard sau khi contract được duyệt.
5. **Task cần cập nhật:** P2-05; dependency của P3-05, P4-02, P6-01, P6-02.

### P2-01 — Tên component/section chưa phản ánh ngữ nghĩa đã sửa

1. **File/vị trí:** `PROJECT_PLAN.md:124-129,136,142`; `HOMEPAGE_SPEC.md:110-118,179-194`; `TASKS.md:63,67`.
2. **Vấn đề:** `StatsSection` không còn statistics mà là value bar; `TestimonialSection`/`testimonials.ts` thực tế là editorial inspiration, không phải lời chứng thực khách hàng.
3. **Tác động:** Naming gây hiểu sai domain và khuyến khích Agent thêm số liệu/người đánh giá giả sau này.
4. **Giải pháp:** Đổi đề xuất tài liệu thành `ValueBarSection`, `EditorialQuoteSection`, `editorialQuotes.ts` hoặc ghi rõ alias semantic trước khi code section.
5. **Task cần cập nhật:** P2-05, P4-04, P4-08 và cây thư mục trong Project Plan.

### P2-02 — Cấu trúc thư mục hơi over-specified cho MVP

1. **File/vị trí:** `PROJECT_PLAN.md:72-151`.
2. **Vấn đề:** Cây thư mục yêu cầu `loading.tsx`, `ThemeProvider`, `styles/`, `dialog`, `card`, các type/file riêng trước khi có nhu cầu cụ thể. “Mỗi component kèm test/mock riêng khi cần” không có testing stack/task tương ứng.
3. **Tác động:** Agent có thể tạo file rỗng/abstraction không dùng và tăng boilerplate.
4. **Giải pháp:** Giữ cấu trúc tiến hóa theo feature/use case; chỉ tạo file khi có consumer. Nếu yêu cầu test component, chốt test runner và task; nếu không, bỏ lời hứa test khỏi acceptance hiện tại.
5. **Task cần cập nhật:** P2-01, P2-04, P3-01; Project Structure.

### P2-03 — Quy ước format tiếng Việt cần chốt rõ hơn

1. **File/vị trí:** `PROJECT_PLAN.md:14,40,183-184,273`; `HOMEPAGE_SPEC.md:77,104,147-159`; `TASKS.md:39,98`.
2. **Vấn đề:** Ví dụ dùng `18.5 Tỷ`, `32.0 Tỷ`, `75 Triệu/m²`, trong khi định dạng Việt thường dùng dấu phẩy thập phân và khoảng trắng chuẩn; chưa định nghĩa làm tròn, `Intl.NumberFormat('vi-VN')`, giá liên hệ, giá theo m² hoặc diện tích không xác định.
3. **Tác động:** Hiển thị không đồng nhất giữa card, filter và detail.
4. **Giải pháp:** Chốt formatter outputs và cases: `18,5 tỷ VNĐ`, `32 tỷ VNĐ`, `75 triệu đồng/m²`, `350 m²`; định nghĩa policy làm tròn và missing values.
5. **Task cần cập nhật:** P2-06, P3-05, P7-02.

### P2-04 — Asset provenance chưa có task nghiệm thu riêng

1. **File/vị trí:** `PROJECT_PLAN.md:235,267,274`; `HOMEPAGE_SPEC.md:60,95,103,175,186,200`; `TASKS.md:111`.
2. **Vấn đề:** Tài liệu yêu cầu ảnh hợp pháp nhưng không có inventory gồm nguồn/license/attribution/crop suitability, cũng không có acceptance criterion thay placeholder trước release.
3. **Tác động:** Rủi ro bản quyền hoặc giao diện cuối còn placeholder không kiểm soát.
4. **Giải pháp:** Tạo asset manifest trong phạm vi tài liệu/task (không cần backend): file, nguồn, license, section, alt text, focal point, trạng thái approved.
5. **Task cần cập nhật:** thêm task asset audit trước P4-01 và QA trước bàn giao.

### P2-05 — Map implementation đề xuất Canvas là không cần thiết

1. **File/vị trí:** `PROJECT_PLAN.md:252-254`; `HOMEPAGE_SPEC.md:122-132`.
2. **Vấn đề:** SVG/Canvas được đặt ngang nhau dù map chỉ là minh họa tĩnh với pin/pulse. Canvas làm accessibility, responsiveness và bảo trì khó hơn mà không đem lại giá trị rõ.
3. **Tác động:** Over-engineering và khó tạo alt/fallback.
4. **Giải pháp:** Ưu tiên ảnh/SVG responsive có alt text và overlay CSS; chỉ dùng Canvas nếu có yêu cầu tương tác được duyệt.
5. **Task cần cập nhật:** P4-05.

## 4. Đối chiếu chéo các mâu thuẫn chính

| Chủ đề | Tài liệu A | Tài liệu B | Kết luận cần chốt |
|---|---|---|---|
| Hotline/trụ sở | Project Plan/Homepage/Design System cấm thông tin giả | TASKS P3-03/P6-04 yêu cầu hotline, trụ sở | Bỏ khỏi MVP demo |
| CTA cuối trang | Homepage: “Khám phá bất động sản” → listing | TASKS/Design System: “Đặt lịch tư vấn ngay” | Dùng CTA listing cho MVP |
| Section 3 | Homepage: value bar, không số liệu | Project tree: `StatsSection` | Đổi semantic naming |
| Section 7 | Nội dung biên tập minh hoạ | Tên Testimonial/đánh giá khách hàng | Đổi thành editorial quote |
| Responsive | Plan: mobile đến 767, tablet từ 768 | Design System: tablet từ 640 | Một breakpoint matrix duy nhất |
| Container | 1280 / 1320 / 1340 | Ba giá trị cùng tồn tại | Chốt một max-width |
| Search field đầu | Input từ khóa/nhu cầu | Select loại hình | Chốt select hoặc text search và contract |
| Search behavior | Plan: URL query parameters | TASKS: chỉ mô tả UI/chip active | Bổ sung submit/query/reset/results |
| Pháp lý | Mock không được khẳng định | `legal` bắt buộc + `ShieldCheck` xác nhận | Optional/source-aware, mặc định chưa xác minh |
| Giá/m² | Chỉ `price` numeric, format tập trung | `pricePerSquareMeter` string | Chuyển sang numeric |
| Reference | P1-01 DONE/pixel-accurate | Không có local screenshot; palette là biến tấu | Hạ mức xác nhận, tạo visual baseline |
| Phase 2 | TASKS ghi TODO/Sẵn sàng | Workspace đã có scaffold/data/UI primitives | Audit baseline trước khi tiếp tục |

## 5. Yêu cầu còn thiếu

1. Contract chính thức cho `FilterParams`, URL query, sort, pagination và zero-results.
2. Taxonomy thống nhất giữa slug nội bộ và label Việt Nam; xác nhận sale-only hay có thuê.
3. Data provenance/status cho pháp lý, vị trí, giá và nội dung demo.
4. Format contract dùng `vi-VN` cho VNĐ, tỷ/triệu, m² và trường hợp thiếu/“liên hệ”.
5. Responsive behavior theo từng section, không chỉ số cột.
6. Accessibility QA: keyboard, focus, screen reader labels/errors, reduced motion, contrast, touch target.
7. Asset manifest/license/alt/focal point và quy tắc placeholder.
8. Visual baseline/viewport và phương pháp review so với reference.
9. Loading/empty/error/disabled states cho search, listing, carousel, image và form demo.
10. Test strategy tối thiểu cho formatter/filter/query và smoke build; hiện tài liệu nhắc test nhưng không chọn công cụ/task.
11. Browser support matrix và kiểm tra iOS Safari/Android Chrome ở mức phù hợp.
12. Quy trình đo Lighthouse tái lập; phân biệt lab metrics với field CWV.

## 6. Đánh giá từng tài liệu

| Tài liệu | Điểm | Nhận xét |
|---|---:|---|
| `PROJECT_PLAN.md` | **7.2/10** | Scope và định hướng tốt; data model, version contract, phase status và một số claim pháp lý chưa sẵn sàng. |
| `DESIGN_SYSTEM.md` | **7.0/10** | Có nền tảng màu/type/component rõ; thiếu spacing/layout/focus tokens, breakpoint/radius/container chưa đơn nghĩa, chưa xác minh sát reference. |
| `HOMEPAGE_SPEC.md` | **7.4/10** | Nội dung section cụ thể và có ý thức demo; search behavior, responsive chi tiết, claim thương mại và CTA còn mâu thuẫn. |
| `TASKS.md` | **5.8/10** | Có phase và acceptance criteria nhưng chứa 2 yêu cầu trái scope, thiếu contract/QA quan trọng và không phản ánh trạng thái repo. |
| **Tổng thể** | **6.9/10** | Hướng đúng nhưng chưa đủ nhất quán để Agent tự triển khai an toàn. |

## 7. Thay đổi ưu tiên trước khi triển khai

1. Sửa P3-03/P6-04 để loại hotline, trụ sở, gửi form thật và fake-success.
2. Sửa schema pháp lý thành optional/source-aware; bỏ ngữ nghĩa chứng nhận của `ShieldCheck`.
3. Xác nhận baseline Phase 2 hiện có; audit thay vì scaffold lại; cập nhật trạng thái dựa trên bằng chứng.
4. Chốt domain/filter/query contract trước khi tạo hoặc sửa mock data.
5. Chốt dependency/version/primitive backend theo lockfile; trì hoãn dependency chưa dùng.
6. Chốt breakpoint, container, spacing, radius và responsive behavior từng section.
7. Đồng bộ CTA Section 8 và semantic naming của Value Bar/Editorial Quote.
8. Trung hòa claim “thanh khoản/quy hoạch/chuyên gia” và bỏ count `(24)` hard-coded.
9. Tạo visual baseline/reference limitations và asset manifest.
10. Bổ sung accessibility, functional search, build/typecheck và performance measurement vào Phase 7.

## 8. Đề xuất phân rã lại các task lớn

- **P2-05a:** Domain types/taxonomy/legal provenance.
- **P2-05b:** Filter/query/sort/pagination contract.
- **P2-05c:** Mock fixtures + disclaimer + validation.
- **P4-02a:** Search layout/responsive/accessibility.
- **P4-02b:** URL state/submit/reset/quick chips.
- **P6-01a:** Listing layout and responsive filter drawer.
- **P6-01b:** Local filtering/sorting/pagination/empty state.
- **P6-02a:** Detail content/gallery/specs/floor-plan fallback.
- **P6-02b:** Legal/demo disclosure and contact CTA behavior.
- **P7-01a:** Responsive/browser matrix and screenshot baseline.
- **P7-01b:** Accessibility interaction audit.
- **P7-03a:** Image strategy and asset verification.
- **P7-03b:** Production build and repeatable Lighthouse run.

## 9. Điều kiện chuyển sang READY WITH CHANGES

Phase 2 chỉ nên bắt đầu/tiếp tục sau khi có đủ bằng chứng sau:

- Ba P0 đã được sửa trong tài liệu và được chủ dự án duyệt.
- Chủ dự án xác nhận giữ hay bỏ baseline Phase 2 hiện tại.
- Version/package manager/lockfile và shadcn primitive được ghi đúng thực tế.
- Data/filter/query contract được duyệt trước mock fixtures.
- Không còn acceptance criterion yêu cầu dữ liệu doanh nghiệp hoặc pháp lý chưa xác thực.
- Có lệnh và kết quả kiểm tra baseline (`lint`, TypeScript, production build); chưa được phép đánh dấu DONE chỉ vì file đã tồn tại.

**Trạng thái cuối cùng: NOT READY cho Phase 2 tại thời điểm review.**

