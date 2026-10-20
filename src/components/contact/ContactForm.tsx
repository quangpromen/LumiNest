"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  Copy,
  Mail,
  RotateCcw,
  AlertCircle,
  Sparkles,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  interestType: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  interestType?: string;
  message?: string;
  consent?: string;
}

const INTEREST_OPTIONS = [
  { value: "biet-thu", label: "Biệt thự sinh thái ven hồ / biển" },
  { value: "can-ho", label: "Căn hộ cao cấp ngập tràn ánh sáng" },
  { value: "penthouse", label: "Sky Villa & Penthouse tầng không" },
  { value: "dinh-thu", label: "Dinh thự ven sông sinh thái" },
  { value: "khac", label: "Tìm hiểu thông tin chung & kiến trúc" },
];

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    interestType: "biet-thu",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Validate form fields
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // Full name
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Vui lòng nhập họ và tên của bạn (tối thiểu 2 ký tự).";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Vui lòng nhập địa chỉ email hợp lệ (ví dụ: name@domain.com).";
    }

    // Phone (optional, but if provided must match VN phone format)
    if (formData.phone.trim()) {
      const cleanedPhone = formData.phone.replace(/[\s.-]/g, "");
      const vnPhoneRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
      if (!vnPhoneRegex.test(cleanedPhone)) {
        newErrors.phone =
          "Số điện thoại không đúng định dạng Việt Nam (10 chữ số, ví dụ: 0912345678).";
      }
    }

    // Interest Type
    if (!formData.interestType) {
      newErrors.interestType = "Vui lòng chọn loại hình bất động sản quan tâm.";
    }

    // Message
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message =
        "Vui lòng chia sẻ nội dung yêu cầu cụ thể (tối thiểu 10 ký tự).";
    }

    // Consent
    if (!formData.consent) {
      newErrors.consent =
        "Vui lòng xác nhận đồng ý cho phép LumiNest liên hệ tư vấn.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear error for this field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsPreviewOpen(true);
      setIsCopied(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      interestType: "biet-thu",
      message: "",
      consent: false,
    });
    setErrors({});
    setIsPreviewOpen(false);
    setIsCopied(false);
  };

  const getInterestLabel = (value: string) => {
    const option = INTEREST_OPTIONS.find((opt) => opt.value === value);
    return option ? option.label : value;
  };

  const formattedInquiryText = `[YÊU CẦU TƯ VẤN BẤT ĐỘNG SẢN - LUMINest DEMO]
- Họ và tên: ${formData.fullName}
- Email: ${formData.email}
- Số điện thoại: ${formData.phone || "Không cung cấp"}
- Nhu cầu quan tâm: ${getInterestLabel(formData.interestType)}
- Nội dung yêu cầu:
${formData.message}
---
Gửi từ giao diện Frontend Demo LumiNest`;

  const handleCopyClipboard = async () => {
    try {
      await navigator.clipboard.writeText(formattedInquiryText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  const mailtoLink = `mailto:?subject=${encodeURIComponent(
    `[LumiNest Demo] Yêu cầu tư vấn từ ${formData.fullName}`
  )}&body=${encodeURIComponent(formattedInquiryText)}`;

  return (
    <div className="rounded-3xl sm:rounded-[32px] bg-white border border-evergreen-border-subtle p-6 sm:p-8 lg:p-10 shadow-card">
      {/* Form Header */}
      <div className="flex items-center justify-between pb-6 border-b border-evergreen-border-subtle mb-6 sm:mb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-evergreen-forest block mb-1">
            Biểu mẫu tương tác
          </span>
          <h3 className="text-xl sm:text-2xl font-semibold text-evergreen-text-primary tracking-tight">
            Gửi yêu cầu tư vấn
          </h3>
        </div>

        <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-evergreen-subtle border border-evergreen-border-subtle text-[11px] text-evergreen-forest font-medium">
          <Sparkles className="w-3.5 h-3.5 text-evergreen-lime" />
          <span>Demo Frontend</span>
        </div>
      </div>

      {/* When Validated: Show Interactive Demo Preview */}
      {isPreviewOpen ? (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="rounded-2xl p-5 sm:p-6 bg-[#FBFBF8] border border-evergreen-border-strong/70 space-y-4">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 text-evergreen-forest font-semibold text-sm">
                <CheckCircle2 className="w-5 h-5 text-evergreen-forest" />
                <span>Bản xem trước yêu cầu đã được xác thực</span>
              </div>
              <span className="text-[11px] font-mono text-evergreen-text-muted">
                {new Date().toLocaleDateString("vi-VN")}
              </span>
            </div>

            <p className="text-xs text-evergreen-text-secondary leading-relaxed">
              Thông tin bạn nhập đã đáp ứng đầy đủ tiêu chí xác thực. Do hệ thống hiện là phiên bản Frontend Demo (chưa kết nối máy chủ), bạn có thể sao chép nội dung hoặc chuyển sang ứng dụng email cá nhân để lưu trữ.
            </p>

            {/* Summarized Fields */}
            <div className="space-y-2.5 pt-3 border-t border-evergreen-border-subtle text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-1 border-b border-evergreen-border-subtle/50">
                <span className="text-evergreen-text-muted">Họ và tên:</span>
                <span className="font-semibold text-evergreen-text-primary">
                  {formData.fullName}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-1 border-b border-evergreen-border-subtle/50">
                <span className="text-evergreen-text-muted">Email liên hệ:</span>
                <span className="font-medium text-evergreen-text-primary">
                  {formData.email}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-1 border-b border-evergreen-border-subtle/50">
                <span className="text-evergreen-text-muted">Số điện thoại:</span>
                <span className="font-medium text-evergreen-text-primary">
                  {formData.phone || "Không cung cấp"}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-1 border-b border-evergreen-border-subtle/50">
                <span className="text-evergreen-text-muted">Nhu cầu quan tâm:</span>
                <span className="font-semibold text-evergreen-forest">
                  {getInterestLabel(formData.interestType)}
                </span>
              </div>

              <div className="pt-2">
                <span className="text-evergreen-text-muted block mb-1">
                  Nội dung yêu cầu:
                </span>
                <p className="p-3 rounded-xl bg-white border border-evergreen-border-subtle text-xs text-evergreen-text-primary whitespace-pre-line leading-relaxed">
                  {formData.message}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons for Preview */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={handleCopyClipboard}
              className={cn(
                "w-full sm:w-auto flex-1 px-5 py-3 rounded-full font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evergreen-dark",
                isCopied
                  ? "bg-evergreen-forest text-white"
                  : "bg-evergreen-lime hover:bg-evergreen-lime-hover text-evergreen-dark"
              )}
            >
              {isCopied ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Đã sao chép vào clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Sao chép nội dung yêu cầu</span>
                </>
              )}
            </button>

            <a
              href={mailtoLink}
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-evergreen-subtle hover:bg-evergreen-border-subtle text-evergreen-text-primary font-medium text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer border border-evergreen-border-subtle"
            >
              <Mail className="w-4 h-4 text-evergreen-forest" />
              <span>Mở ứng dụng Email</span>
            </a>

            <button
              type="button"
              onClick={() => setIsPreviewOpen(false)}
              className="w-full sm:w-auto px-4 py-3 rounded-full hover:bg-evergreen-subtle text-evergreen-text-secondary text-xs sm:text-sm font-medium transition-colors cursor-pointer"
            >
              Chỉnh sửa lại
            </button>
          </div>

          {/* Reset Action */}
          <div className="pt-3 border-t border-evergreen-border-subtle flex items-center justify-between text-xs text-evergreen-text-secondary">
            <span className="flex items-center gap-1.5 text-evergreen-forest">
              <ShieldCheck className="w-4 h-4" />
              <span>Dữ liệu an toàn — Không lưu trữ vào server bên ngoài</span>
            </span>
            <button
              type="button"
              onClick={handleReset}
              className="text-xs text-evergreen-text-secondary hover:text-evergreen-dark underline inline-flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Tạo yêu cầu mới</span>
            </button>
          </div>
        </div>
      ) : (
        /* The Standard Form */
        <form onSubmit={handleSubmit} noValidate className="space-y-5 sm:space-y-6">
          {/* Row 1: Full Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs sm:text-sm font-medium text-evergreen-text-primary mb-1.5"
              >
                Họ và tên <span className="text-red-500">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Ví dụ: Nguyễn Minh Tuấn"
                className={cn(
                  "w-full px-4 py-3 rounded-2xl bg-[#FBFBF8] border text-xs sm:text-sm text-evergreen-text-primary transition-all outline-none",
                  errors.fullName
                    ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                    : "border-evergreen-border-subtle hover:border-evergreen-border-strong focus:border-evergreen-dark focus:ring-2 focus:ring-evergreen-dark/15"
                )}
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
              />
              {errors.fullName && (
                <p
                  id="fullName-error"
                  className="mt-1.5 text-xs text-red-500 flex items-center gap-1 animate-in fade-in"
                >
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.fullName}</span>
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs sm:text-sm font-medium text-evergreen-text-primary mb-1.5"
              >
                Địa chỉ Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tuan.nguyen@example.com"
                className={cn(
                  "w-full px-4 py-3 rounded-2xl bg-[#FBFBF8] border text-xs sm:text-sm text-evergreen-text-primary transition-all outline-none",
                  errors.email
                    ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                    : "border-evergreen-border-subtle hover:border-evergreen-border-strong focus:border-evergreen-dark focus:ring-2 focus:ring-evergreen-dark/15"
                )}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p
                  id="email-error"
                  className="mt-1.5 text-xs text-red-500 flex items-center gap-1 animate-in fade-in"
                >
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Phone Number & Interest Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Phone Number (Optional) */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="phone"
                  className="block text-xs sm:text-sm font-medium text-evergreen-text-primary"
                >
                  Số điện thoại
                </label>
                <span className="text-[11px] text-evergreen-text-muted">
                  (Không bắt buộc)
                </span>
              </div>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="0912 345 678"
                className={cn(
                  "w-full px-4 py-3 rounded-2xl bg-[#FBFBF8] border text-xs sm:text-sm text-evergreen-text-primary transition-all outline-none",
                  errors.phone
                    ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                    : "border-evergreen-border-subtle hover:border-evergreen-border-strong focus:border-evergreen-dark focus:ring-2 focus:ring-evergreen-dark/15"
                )}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && (
                <p
                  id="phone-error"
                  className="mt-1.5 text-xs text-red-500 flex items-center gap-1 animate-in fade-in"
                >
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>

            {/* Interest Type */}
            <div>
              <label
                htmlFor="interestType"
                className="block text-xs sm:text-sm font-medium text-evergreen-text-primary mb-1.5"
              >
                Nhu cầu quan tâm <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="interestType"
                  name="interestType"
                  value={formData.interestType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FBFBF8] border border-evergreen-border-subtle hover:border-evergreen-border-strong focus:border-evergreen-dark focus:ring-2 focus:ring-evergreen-dark/15 text-xs sm:text-sm text-evergreen-text-primary transition-all outline-none appearance-none pr-10 cursor-pointer"
                >
                  {INTEREST_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-evergreen-text-secondary">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Message Textarea */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label
                htmlFor="message"
                className="block text-xs sm:text-sm font-medium text-evergreen-text-primary"
              >
                Nội dung yêu cầu tư vấn <span className="text-red-500">*</span>
              </label>
              <span className="text-[11px] text-evergreen-text-muted">
                {formData.message.length} ký tự (tối thiểu 10)
              </span>
            </div>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Chia sẻ với chúng tôi về kỳ vọng không gian sống, số phòng ngủ, khu vực địa lý, phong cách kiến trúc mong muốn..."
              className={cn(
                "w-full px-4 py-3 rounded-2xl bg-[#FBFBF8] border text-xs sm:text-sm text-evergreen-text-primary transition-all outline-none resize-y min-h-[110px]",
                errors.message
                  ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                  : "border-evergreen-border-subtle hover:border-evergreen-border-strong focus:border-evergreen-dark focus:ring-2 focus:ring-evergreen-dark/15"
              )}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p
                id="message-error"
                className="mt-1.5 text-xs text-red-500 flex items-center gap-1 animate-in fade-in"
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Row 4: Consent Checkbox */}
          <div className="pt-1">
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 w-4 h-4 rounded text-evergreen-dark focus:ring-evergreen-dark border-evergreen-border-strong cursor-pointer"
              />
              <span className="text-xs text-evergreen-text-secondary leading-relaxed group-hover:text-evergreen-text-primary transition-colors">
                Tôi đồng ý cho phép LumiNest sử dụng thông tin trên để phản hồi yêu cầu tư vấn. Chúng tôi cam kết bảo mật thông tin và không chia sẻ cho bên thứ ba.
              </span>
            </label>
            {errors.consent && (
              <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1 animate-in fade-in ml-7">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.consent}</span>
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-evergreen-border-subtle">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-evergreen-lime hover:bg-evergreen-lime-hover text-evergreen-dark font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all active:scale-95 shadow-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evergreen-dark"
            >
              <span>Xem trước & Xác nhận yêu cầu</span>
              <Send className="w-4 h-4 stroke-[2.2]" />
            </button>

            <span className="text-[11px] text-evergreen-text-muted text-center sm:text-right">
              Phiên bản demo Frontend — Không gửi dữ liệu lên server
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
