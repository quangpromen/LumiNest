import { FAQItem } from "@/types/faq";

/**
 * Danh sách 5 câu hỏi thường gặp (Mock FAQ)
 * Nội dung mang tính định hướng thông tin cho bản demo, không cam kết pháp lý hoặc dịch vụ thật.
 */
export const mockFaqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "Website giới thiệu những loại hình bất động sản nào?",
    answer:
      "Bản demo LumiNest minh hoạ các dòng sản phẩm bất động sản cao cấp và sinh thái bao gồm: biệt thự đơn lập ven hồ/biển, căn hộ xanh cao cấp, sky villa và nhà phố thương mại. Danh mục chi tiết có thể được tinh chỉnh khi kết nối dữ liệu vận hành chính thức.",
    previewImage:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "faq-2",
    question: "Làm sao để tìm hiểu pháp lý của một bất động sản?",
    answer:
      "Trong giao dịch thực tế, người mua cần đối chiếu kỹ lưỡng các hồ sơ pháp lý dự án (quy hoạch 1/500, giấy phép xây dựng, thông báo đủ điều kiện bán nhà hình thành trong tương lai) và tình trạng sổ đỏ/sổ hồng từ cơ quan quản lý có thẩm quyền trước khi tiến hành đặt cọc.",
    previewImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "faq-3",
    question: "Website có cung cấp khoản vay hoặc ưu đãi ngân hàng không?",
    answer:
      "Phiên bản giao diện demo LumiNest hiện tại không cung cấp hoặc cam kết bất kỳ gói vay tài chính hay lãi suất ưu đãi nào. Điều kiện tín dụng thực tế hoàn toàn phụ thuộc vào chính sách của từng ngân hàng thương mại và hồ sơ năng lực của khách hàng.",
  },
  {
    id: "faq-4",
    question: "Giá và thông tin bất động sản có cập nhật theo thời gian thực không?",
    answer:
      "Chưa. Toàn bộ mức giá hiển thị (đơn vị VNĐ) và thông số kỹ thuật trên website đều là dữ liệu mẫu giả định phục vụ mục đích kiểm thử và hoàn thiện trải nghiệm giao diện người dùng.",
  },
  {
    id: "faq-5",
    question: "Có thể đăng ký xem nhà mẫu ngay trên website không?",
    answer:
      "Hiện tại website là bản demo giao diện FRONTEND-ONLY nên các nút bấm và biểu mẫu liên hệ chưa kết nối hệ thống điều phối lịch hẹn thực tế. Các thao tác đều nhằm mục đích mô phỏng luồng trải nghiệm khách hàng.",
  },
];
