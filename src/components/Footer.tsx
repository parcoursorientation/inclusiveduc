"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Send,
  Heart,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { title: "الرئيسية", href: "/" },
    { title: "ما هي التربية الدامجة؟", href: "/what-is-inclusive-education" },
    { title: "دليل المدرسين", href: "/teachers-guide" },
    { title: "دليل الأسر", href: "/families-guide" },
    { title: "الإعاقة وأنواعها", href: "/disability-types" },
    { title: "الأسئلة الشائعة", href: "/faq" },
  ];

  const resources = [
    { title: "نماذج قابلة للتحميل", href: "/resources" },
    { title: "التشريعات الوطنية", href: "/legislation" },
    { title: "الأخبار والأنشطة", href: "/news" },
    { title: "مخاطبونا", href: "/personas" },
    { title: "اتصل بنا", href: "/contact" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "البريد الإلكتروني",
      value: "info@educ-inclusive.com",
    },
    { icon: Phone, label: "الهاتف", value: "+212 5XX XXX XXX" },
    { icon: MapPin, label: "العنوان", value: "المغرب، طنجة" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "فيسبوك" },
    { icon: Twitter, href: "#", label: "تويتر" },
    { icon: Youtube, href: "#", label: "يوتيوب" },
    { icon: Instagram, href: "#", label: "انستغرام" },
  ];

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-reverse space-x-2 mb-4">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl font-arabic">
                التربية الدامجة
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed font-arabic text-sm mb-6">
              منصة متكاملة لدعم التربية الدامجة للأطفال في وضعية إعاقة. نؤمن بأن
              جميع الأطفال يمكنهم أن يتعلموا، والدمج حق وليس امتيازًا.
            </p>

            {/* Social Links */}
            <div className="flex space-x-reverse space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-200"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 font-arabic">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200 font-arabic text-sm flex items-center space-x-reverse space-x-2"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-6 font-arabic">الموارد</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.title}>
                  <Link
                    href={resource.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200 font-arabic text-sm flex items-center space-x-reverse space-x-2"
                  >
                    <span className="w-1 h-1 bg-secondary rounded-full"></span>
                    <span>{resource.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-6 font-arabic">تواصل معنا</h3>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.label}
                    className="flex items-start space-x-reverse space-x-3"
                  >
                    <Icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <div className="text-sm text-gray-400 font-arabic">
                        {info.label}
                      </div>
                      <div className="text-gray-300 font-arabic">
                        {info.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Newsletter */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="font-medium font-arabic mb-3">النشرة البريدية</h4>
              <p className="text-sm text-gray-400 font-arabic mb-3">
                اشترك للحصول على آخر المستجدات حول التربية الدامجة
              </p>
              <form className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary font-arabic text-sm"
                  aria-label="البريد الإلكتروني"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium font-arabic text-sm flex items-center justify-center space-x-reverse space-x-2"
                >
                  <Send className="h-4 w-4" />
                  <span>اشتراك</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm font-arabic">
              © {currentYear} جميع الحقوق محفوظة - منصة التربية الدامجة
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-primary transition-colors duration-200 font-arabic"
              >
                سياسة الخصوصية
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-primary transition-colors duration-200 font-arabic"
              >
                شروط الاستخدام
              </Link>
              {/*<Link
                href="/accessibility"
                className="text-gray-400 hover:text-primary transition-colors duration-200 font-arabic"
              >
                إمكانية الوصول
              </Link>
              <Link
                href="/sitemap"
                className="text-gray-400 hover:text-primary transition-colors duration-200 font-arabic"
              >
                خريطة الموقع
              </Link>*/}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
