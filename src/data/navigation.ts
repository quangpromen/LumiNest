import { FooterLinkGroup, NavItem } from "@/types/navigation";

/**
 * Menu điều hướng chính trên Navbar (Chỉ giữ các route trong scope MVP)
 */
export const mainNavItems: NavItem[] = [
  { title: "Trang chủ", href: "/" },
  { title: "Bất động sản", href: "/bat-dong-san" },
  { title: "Về chúng tôi", href: "/ve-chung-toi" },
  { title: "Liên hệ", href: "/lien-he" },
];

/**
 * Danh mục liên kết Footer biên tập
 */
export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Khám phá dự án",
    links: [
      { title: "Tất cả bất động sản", href: "/bat-dong-san" },
      { title: "Biệt thự sinh thái", href: "/bat-dong-san?type=biet-thu" },
      { title: "Căn hộ cao cấp", href: "/bat-dong-san?type=can-ho" },
      { title: "Sky Villa & Penthouse", href: "/bat-dong-san?type=penthouse" },
    ],
  },
  {
    title: "Về dự án",
    links: [
      { title: "Triết lý kiến trúc xanh", href: "/ve-chung-toi" },
      { title: "Tiêu chuẩn không gian", href: "/ve-chung-toi#tieu-chuan" },
      { title: "Liên hệ tư vấn", href: "/lien-he" },
    ],
  },
  {
    title: "Thông tin demo",
    links: [
      { title: "Tài liệu kỹ thuật", href: "/ve-chung-toi#ky-thuat" },
      { title: "Ghi chú giao diện", href: "/ve-chung-toi#ghi-chu" },
    ],
  },
];
