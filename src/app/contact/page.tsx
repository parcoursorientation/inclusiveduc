"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageCircle,
  Users,
  Building,
  HelpCircle,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "general",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Afficher un message de succès
        toast({
          title: "تم الإرسال بنجاح",
          description: "تم إرسال رسالتك بنجاح! شكراً لتواصلك معنا.",
        });

        // Réinitialiser le formulaire
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          category: "general",
        });
      } else {
        // Afficher un message d'erreur
        toast({
          variant: "destructive",
          title: "خطأ في الإرسال",
          description:
            data.error || "حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.",
        });
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      toast({
        variant: "destructive",
        title: "خطأ في الإرسال",
        description: "حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.",
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "البريد الإلكتروني",
      value: "info@inclusive-education.ma",
      description: "للاستفسارات العامة والدعم الفني",
    },
    {
      icon: Phone,
      label: "الهاتف",
      value: "+212 5XX XXX XXX",
      description: "من الإثنين إلى الجمعة، 9:00 - 17:00",
    },
    {
      icon: MapPin,
      label: "العنوان",
      value: "المغرب، الرباط، حي الأكاديمية",
      description: "مقرنا الرئيسي",
    },
  ];

  const contactCategories = [
    { value: "general", label: "استفسار عام" },
    { value: "technical", label: "دعم تقني" },
    { value: "training", label: "تكوين وتدريب" },
    { value: "partnership", label: "شراكة" },
    { value: "media", label: "إعلام" },
    { value: "complaint", label: "شكوى" },
  ];

  const officeHours = [
    { day: "الإثنين - الجمعة", hours: "9:00 - 17:00" },
    { day: "السبت", hours: "9:00 - 13:00" },
    { day: "الأحد", hours: "مغلق" },
  ];

  const teamMembers = [
    {
      name: "د. فاطمة البقالي",
      role: "المنسقة الجهوية للتربية الدامجة",
      email: "f.bouqali@inclusive-education.ma",
      phone: "+212 6XX XXX XXX",
      expertise: "التربية الدامجة والتخطيط الاستراتيجي",
    },
    {
      name: "محمد أمين",
      role: "منسق الدعم التقني",
      email: "m.amin@inclusive-education.ma",
      phone: "+212 6XX XXX XXX",
      expertise: "التقنيات المساعدة والتكيف",
    },
    {
      name: "سعيدة الرحالي",
      role: "منسقة التكوين",
      email: "s.rahali@inclusive-education.ma",
      phone: "+212 6XX XXX XXX",
      expertise: "تكوين المدرسين والأسر",
    },
  ];

  const faqItems = [
    {
      question: "ما هي أسرع طريقة للتواصل معكم؟",
      answer:
        "أسرع طريقة هي عبر البريد الإلكتروني أو ملء استمارة التواصل. نرد على جميع الاستفسارات خلال 24 ساعة عمل.",
    },
    {
      question: "هل تقدمون استشارات مجانية؟",
      answer:
        "نعم، نقدم استشارات أولية مجانية للأسر والمدرسين حول التربية الدامجة.",
    },
    {
      question: "هل يمكنني زيارة مقركم؟",
      answer:
        "نعم، يمكنك زيارتنا بعد تحديد موعد مسبق عبر الهاتف أو البريد الإلكتروني.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container-custom section-padding">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="الرابط التشعبي">
          <ol className="flex items-center space-x-reverse space-x-2 text-sm">
            <li>
              <Link
                href="/"
                className="text-primary hover:underline font-arabic"
              >
                الرئيسية
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-600 font-arabic">اتصل بنا</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="gradient-primary text-white rounded-2xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-arabic">
              اتصل بنا
            </h1>
            <p className="text-xl mb-8 text-blue-50 leading-relaxed font-arabic max-w-4xl">
              فريقنا هنا لدعمك في رحلة التربية الدامجة. سواء كنت أباً، مدرساً،
              مديراً، أو من جمعية، فلا تتردد في التواصل معنا للحصول على المساعدة
              والمعلومات التي تحتاجها.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
                  >
                    <Icon className="h-10 w-10 mx-auto mb-3 text-yellow-300" />
                    <div className="font-bold font-arabic text-lg mb-2">
                      {info.label}
                    </div>
                    <div className="font-arabic mb-2">{info.value}</div>
                    <div className="text-blue-100 font-arabic text-sm">
                      {info.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 font-arabic text-gray-800">
                أرسل لنا رسالة
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium font-arabic text-gray-700 mb-2"
                  >
                    نوع الاستفسار
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-arabic"
                    required
                  >
                    {contactCategories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium font-arabic text-gray-700 mb-2"
                    >
                      الاسم الكامل
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-arabic"
                      title="يرجى إدخال الاسم الكامل"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium font-arabic text-gray-700 mb-2"
                    >
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-arabic"
                      title="يرجى إدخال البريد الإلكتروني"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium font-arabic text-gray-700 mb-2"
                  >
                    الموضوع
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-arabic"
                    title="يرجى إدخال الموضوع"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium font-arabic text-gray-700 mb-2"
                  >
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-arabic resize-none"
                    title="يرجى إدخال الرسالة"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full button-primary text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium font-arabic flex items-center justify-center space-x-reverse space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>إرسال</span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Office Hours */}
              <div className="bg-linear-to-br from-blue-50 to-green-50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6 font-arabic text-gray-800 flex items-center">
                  <Clock className="ml-3 h-6 w-6 text-blue-600" />
                  ساعات العمل
                </h3>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="font-arabic text-gray-700">
                        {schedule.day}
                      </span>
                      <span className="font-arabic font-medium text-gray-900">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Members */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-6 font-arabic text-gray-800 flex items-center">
                  <Users className="ml-3 h-6 w-6 text-green-600" />
                  فريق الدعم
                </h3>
                <div className="space-y-6">
                  {teamMembers.map((member, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-200 pb-4 last:border-b-0"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-bold font-arabic text-gray-800">
                            {member.name}
                          </h4>
                          <p className="text-sm font-arabic text-gray-600">
                            {member.role}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm font-arabic text-gray-700 mb-2">
                        {member.expertise}
                      </p>
                      <div className="text-sm space-y-1">
                        <div className="flex items-center space-x-reverse space-x-2">
                          <Mail className="h-4 w-4 text-gray-400" />
                          <a
                            href={`mailto:${member.email}`}
                            className="text-primary hover:underline font-arabic"
                          >
                            {member.email}
                          </a>
                        </div>
                        <div className="flex items-center space-x-reverse space-x-2">
                          <Phone className="h-4 w-4 text-gray-400" />
                          <a
                            href={`tel:${member.phone}`}
                            className="text-primary hover:underline font-arabic"
                          >
                            {member.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick FAQ */}
              <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6 font-arabic text-gray-800 flex items-center">
                  <HelpCircle className="ml-3 h-6 w-6 text-purple-600" />
                  أسئلة سريعة
                </h3>
                <div className="space-y-4">
                  {faqItems.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg p-4">
                      <h4 className="font-bold font-arabic text-gray-800 mb-2">
                        {item.question}
                      </h4>
                      <p className="text-sm font-arabic text-gray-600">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Contact Methods */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            طرق أخرى للتواصل
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-200">
              <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 font-arabic text-gray-800">
                الدردشة المباشرة
              </h3>
              <p className="text-gray-600 font-arabic mb-4">
                تواصل معنا مباشرة عبر خدمة الدردشة المتاحة على موقعنا
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-arabic">
                ابدأ الدردشة
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-200">
              <Building className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 font-arabic text-gray-800">
                زيارة مقرنا
              </h3>
              <p className="text-gray-600 font-arabic mb-4">
                قم بزيارتنا للحصول على دعم شخصي ومواجهة مع فريقنا
              </p>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 font-arabic">
                حدد موعداً
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-200">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 font-arabic text-gray-800">
                انضم لمجتمعنا
              </h3>
              <p className="text-gray-600 font-arabic mb-4">
                شارك في منتدياتنا وتبادل الخبرات مع الآخرين
              </p>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-arabic">
                انضم الآن
              </button>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            موقعنا
          </h2>
          <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 font-arabic text-lg">
                المغرب، طنجة، طريق الرباط
              </p>

              <p className="text-gray-500 font-arabic mt-2">
                (سيتم إضافة الخريطة قريباً)
              </p>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="mb-16">
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4 font-arabic text-red-800">
              حالات الطوارئ
            </h3>
            <p className="text-gray-700 font-arabic leading-relaxed mb-4">
              إذا كنت تواجه حالة طارئة أو تحتاج إلى دعم فوري، يرجى التواصل معنا
              على الأرقام التالية:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center space-x-reverse space-x-3">
                  <Phone className="h-6 w-6 text-red-600" />
                  <div>
                    <div className="font-bold font-arabic text-gray-800">
                      طوارئ
                    </div>
                    <div className="font-arabic">+212 6XX XXX XXX</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center space-x-reverse space-x-3">
                  <MessageCircle className="h-6 w-6 text-red-600" />
                  <div>
                    <div className="font-bold font-arabic text-gray-800">
                      دعم فوري
                    </div>
                    <div className="font-arabic">+212 6XX XXX XXX</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-linear-to-r from-primary to-secondary text-gray-800 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6 font-arabic">
              هل أنت مستعد للبدء؟
            </h2>
            <p className="text-xl mb-8 text-blue-800 font-arabic leading-relaxed max-w-2xl mx-auto">
              لا تتردد في التواصل معنا. فريقنا هنا لمساعدتك في كل خطوة من رحلة
              التربية الدامجة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/what-is-inclusive-education"
                className="button-primary bg-white text-primary hover:bg-gray-100"
              >
                ابدأ بالأساسيات
              </Link>
              <Link
                href="/resources"
                className="button-secondary border-2 border-white text-white hover:bg-white hover:text-primary"
              >
                استكشف الموارد
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
