import { TestimonialItem } from "@/types/testimonial";

/**
 * Danh sách trích dẫn cảm hứng kiến trúc (Mock Testimonials / Editorial Quotes)
 * LƯU Ý DEMO: Đây là các góc nhìn biên tập và lời dẫn truyền cảm hứng kiến trúc sinh thái,
 * không phải là đánh giá xác thực của khách hàng cá nhân hay cam kết dịch vụ.
 */
export const mockTestimonials: TestimonialItem[] = [
  {
    id: "quote-1",
    quote:
      "Một ngôi nhà đáng sống là nơi ánh sáng tự nhiên, thiên nhiên sinh thái và những trải nghiệm an yên thường nhật hòa làm một.",
    source: "Góc nhìn thiết kế (Minh hoạ)",
    sourceRole: "Nội dung biên tập kiến trúc demo",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    isDemoEditorial: true,
  },
  {
    id: "quote-2",
    quote:
      "Không gian sống không chỉ đo đếm bằng diện tích sàn, mà được định hình bằng khoảng thở của thiên nhiên và cảm giác thư thái khi trở về.",
    source: "Triết lý Biophilic (Minh hoạ)",
    sourceRole: "Cảm hứng kiến trúc bền vững",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    isDemoEditorial: true,
  },
  {
    id: "quote-3",
    quote:
      "Sự sang trọng đích thực trong thời đại mới chính là được sống giữa mảng xanh nguyên bản nhưng vẫn kết nối trọn vẹn với nhịp đập phồn hoa.",
    source: "Góc nhìn đô thị sinh thái (Minh hoạ)",
    sourceRole: "Nội dung biên tập trải nghiệm",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    isDemoEditorial: true,
  },
];
