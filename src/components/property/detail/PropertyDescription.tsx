import React from "react";
import { Sparkles, SunMedium, Compass, ShieldCheck, Info } from "lucide-react";
import { Property, PropertyType } from "@/types/property";

interface PropertyDescriptionProps {
  property: Property;
}

const TYPE_DESCRIPTIONS: Record<
  PropertyType,
  {
    architectureStyle: string;
    spatialPhilosophy: string;
    lifestyleExperience: string;
  }
> = {
  "biet-thu": {
    architectureStyle:
      "Kiến trúc Biophilic sinh thái hòa quyện cùng khuôn viên vườn nhiệt đới, kết hợp hệ cửa kính kịch trần tạo nên sự giao thoa liền mạch giữa nội thất sang trọng và thiên nhiên thanh bình.",
    spatialPhilosophy:
      "Mặt bằng công năng được phân bổ theo nguyên lý công thái học vi mô: tầng trệt mở rộng tối đa cho không gian sinh hoạt chung ngập tràn gió đối lưu, các tầng trên là chuỗi phòng ngủ khép kín bảo đảm tính riêng tư tuyệt đối.",
    lifestyleExperience:
      "Một chốn an cư tĩnh lặng, nơi mỗi sớm mai bắt đầu bằng tiếng chim ca và làn gió trong lành, mang đến sự hồi phục năng lượng trọn vẹn cho mọi thành viên trong gia đình.",
  },
  "can-ho": {
    architectureStyle:
      "Thiết kế Sky Villa tầng cao đón trọn tầm nhìn panorama ngoạn mục, tối ưu hóa hệ thống kính Low-E chống nhiệt và tia cực tím nhằm duy trì vi khí hậu mát mẻ tự nhiên.",
    spatialPhilosophy:
      "Không gian mở liên hoàn giữa phòng khách, khu bếp đảo sang trọng và ban công rộng mở, biến căn hộ thành một dinh thự trên mây đầy phóng khoáng.",
    lifestyleExperience:
      "Đặc quyền thụ hưởng nhịp sống đô thị thời thượng kết hợp cùng chuỗi tiện ích chăm sóc sức khỏe toàn diện ngay ngưỡng cửa.",
  },
  penthouse: {
    architectureStyle:
      "Kiệt tác đỉnh cao penthouse phiên bản giới hạn với trần cao vượt chuẩn và ban công sky terrace trải dài, thu trọn đường chân trời phồn hoa vào tầm mắt.",
    spatialPhilosophy:
      "Từng góc phòng đều được đo ni đóng giày với vật liệu đá cẩm thạch tự nhiên, gỗ óc chó cao cấp và thiết bị thông minh đồng bộ từng cử chỉ điều khiển.",
    lifestyleExperience:
      "Khẳng định vị thế thượng lưu độc bản của gia chủ với sảnh thang máy riêng biệt, hồ bơi vô cực trên tầng không và hầm rượu tư gia kín đáo.",
  },
  "nha-pho": {
    architectureStyle:
      "Thiết kế nhà phố thương mại sinh thái đa công năng, sở hữu mặt tiền thoáng đãng với vỉa hè rộng rãi, kết cấu vững chãi phù hợp cả kinh doanh boutique lẫn an cư.",
    spatialPhilosophy:
      "Phân tầng thông minh: tầng trệt và lửng dành riêng cho không gian trưng bày hoặc văn phòng cao cấp; các tầng trên là chốn nghỉ ngơi tiện nghi và ấm cúng.",
    lifestyleExperience:
      "Tâm điểm đón dòng sinh khí kinh doanh thịnh vượng, kết nối thuận tiện tới các tuyến huyết mạch và cộng đồng cư dân tinh hoa xung quanh.",
  },
  "dinh-thu": {
    architectureStyle:
      "Dinh thự độc bản ven sông với quy mô khuôn viên ngoại mục, ngôn ngữ kiến trúc Tân cổ điển kết hợp nhiệt đới đương đại mang lại vẻ uy nghi trường tồn qua năm tháng.",
    spatialPhilosophy:
      "Hệ thống đại sảnh vòm cao vút, sân vườn cảnh quan sinh thái, bến du thuyền riêng biệt cùng khu vực spa tại gia đáp ứng chuẩn mực sống xa xỉ nhất.",
    lifestyleExperience:
      "Một tác phẩm kiến trúc mang tính di sản, biểu tượng của sự thịnh vượng bền vững và phong cách hưởng thụ kín đáo đỉnh cao.",
  },
};

export function PropertyDescription({ property }: PropertyDescriptionProps) {
  const narrative =
    TYPE_DESCRIPTIONS[property.propertyType] || TYPE_DESCRIPTIONS["biet-thu"];

  return (
    <section className="mb-10 sm:mb-14" aria-labelledby="description-heading">
      <div className="space-y-6">
        {/* Section Heading */}
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-evergreen-subtle border border-evergreen-border-subtle text-evergreen-forest text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-evergreen-lime" />
            <span>Editorial Luxury Overview</span>
          </div>
          <h2
            id="description-heading"
            className="text-xl sm:text-2xl font-bold text-evergreen-text-primary tracking-tight"
          >
            Ý niệm Kiến trúc & Triết lý Không gian
          </h2>
        </div>

        {/* Highlight Quote Box */}
        {property.tagline && (
          <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-evergreen-border-subtle border-l-4 border-l-evergreen-lime shadow-xs">
            <p className="text-base sm:text-lg font-medium text-evergreen-text-primary italic leading-relaxed">
              &ldquo;{property.tagline}&rdquo;
            </p>
            <span className="block mt-2 text-xs font-semibold uppercase tracking-wider text-evergreen-forest">
              — Định hướng không gian LumiNest
            </span>
          </div>
        )}

        {/* Editorial Body Paragraphs */}
        <div className="space-y-4 text-sm sm:text-base text-evergreen-text-secondary leading-relaxed">
          <p>
            Tọa lạc tại vị trí đắt giá thuộc{" "}
            <strong className="text-evergreen-text-primary font-semibold">
              {property.location.district}, {property.location.city}
            </strong>
            ,{" "}
            <strong className="text-evergreen-text-primary font-semibold">
              {property.title}
            </strong>{" "}
            là một minh chứng tiêu biểu cho phong cách sống bền vững tôn trọng thiên
            nhiên. {narrative.architectureStyle}
          </p>

          <p>
            Với tổng diện tích sử dụng{" "}
            <strong className="text-evergreen-text-primary font-semibold">
              {property.specs.usableArea} m²
            </strong>
            {property.specs.landArea && property.specs.landArea !== property.specs.usableArea
              ? ` trên khuôn viên đất rộng ${property.specs.landArea} m²`
              : ""}
            , dự án được bố trí gồm {property.specs.bedrooms} phòng ngủ tiện nghi cùng{" "}
            {property.specs.bathrooms} phòng tắm chuẩn phong cách spa quốc tế.{" "}
            {narrative.spatialPhilosophy}
          </p>

          <p>{narrative.lifestyleExperience}</p>
        </div>

        {/* Architectural Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <div className="p-5 rounded-2xl bg-white border border-evergreen-border-subtle shadow-xs">
            <div className="w-9 h-9 rounded-xl bg-evergreen-subtle flex items-center justify-center text-evergreen-forest mb-3">
              <SunMedium className="w-5 h-5 text-evergreen-forest" />
            </div>
            <h3 className="text-sm font-bold text-evergreen-text-primary mb-1">
              Khí hậu & Vi khí hậu
            </h3>
            <p className="text-xs text-evergreen-text-secondary leading-relaxed">
              Thiết kế thông gió tự nhiên, hạn chế tiêu thụ năng lượng và tối ưu hóa
              ánh sáng mặt trời gián tiếp.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-evergreen-border-subtle shadow-xs">
            <div className="w-9 h-9 rounded-xl bg-evergreen-subtle flex items-center justify-center text-evergreen-forest mb-3">
              <Compass className="w-5 h-5 text-evergreen-forest" />
            </div>
            <h3 className="text-sm font-bold text-evergreen-text-primary mb-1">
              Riêng tư & Biệt lập
            </h3>
            <p className="text-xs text-evergreen-text-secondary leading-relaxed">
              Phân tách ranh giới riêng - chung khoa học, đảm bảo sự an tĩnh tuyệt
              đối cho những phút giây nghỉ dưỡng gia đình.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-evergreen-border-subtle shadow-xs">
            <div className="w-9 h-9 rounded-xl bg-evergreen-subtle flex items-center justify-center text-evergreen-forest mb-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="text-sm font-bold text-evergreen-text-primary mb-1">
              Pháp lý & Bền vững
            </h3>
            <p className="text-xs text-evergreen-text-secondary leading-relaxed">
              Hồ sơ pháp lý minh bạch ({property.specs.legal}), sẵn sàng đón đầu
              tiềm năng tích lũy tài sản dài hạn.
            </p>
          </div>
        </div>

        {/* Editorial Disclaimer */}
        <div className="px-4 py-3 rounded-2xl bg-evergreen-subtle/80 border border-evergreen-border-subtle flex items-start gap-2.5 text-xs text-evergreen-text-secondary">
          <Info className="w-4 h-4 text-evergreen-forest shrink-0 mt-0.5" />
          <span>
            <strong>Ghi chú giao diện LumiNest:</strong> Nội dung biên tập phía trên được
            xây dựng đồng nhất từ hệ thống mock data của dự án, nhằm mô phỏng trải nghiệm
            thực tế trên các tạp chí kiến trúc cao cấp.
          </span>
        </div>
      </div>
    </section>
  );
}
