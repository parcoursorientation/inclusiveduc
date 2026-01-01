"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import {
  Download,
  BookOpen,
  CheckSquare,
  ArrowRight,
  Star,
  Shield,
  FileText,
} from "lucide-react";

export default function GuideReferenceCurseur() {
  const [activeSection, setActiveSection] = useState("overview");

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
            <li>
              <Link
                href="/resources"
                className="text-primary hover:underline font-arabic"
              >
                الموارد
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-600 font-arabic">
              الإطار المرجعي للمنهاج الدراسي
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="gradient-primary text-white rounded-2xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-arabic">
              الإطار المرجعي للمنهاج الدراسي للأطفال في وضعية إعاقة
            </h1>
            <p className="text-xl mb-8 text-blue-50 leading-relaxed font-arabic max-w-4xl">
              إطار مرجعي وطني رسمي يهدف إلى توجيه بناء وتكييف وتنزيل المناهج
              الدراسية الخاصة بالأطفال في وضعية إعاقة، في إطار رؤية شمولية تروم
              تحقيق التربية الدامجة داخل المنظومة التربوية المغربية.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Shield className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <div className="font-bold font-arabic">المرجعيات القانونية</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <BookOpen className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <div className="font-bold font-arabic">الهندسة المنهاجية</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <FileText className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <div className="font-bold font-arabic">
                  التكييفات البيداغوجية
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Star className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <div className="font-bold font-arabic">المبادئ التربوية</div>
              </div>
            </div>
            {/* Download Guide Button */}
            <div className="mt-8 flex justify-center">
              <a
                href="https://drive.google.com/file/d/1h4JvknSxqsd6JllMNkPn7M7rUYOAd0Qy/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 font-arabic"
              >
                <Download className="h-5 w-5" />
                <span>تحميل الإطار المرجعي</span>
              </a>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-2 flex flex-wrap justify-center gap-2">
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-colors font-arabic cursor-pointer ${
                activeSection === "overview"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveSection("overview")}
            >
              مقدمة
            </button>
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-colors font-arabic cursor-pointer ${
                activeSection === "references"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveSection("references")}
            >
              المرجعيات المؤطرة
            </button>
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-colors font-arabic cursor-pointer ${
                activeSection === "goals"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveSection("goals")}
            >
              الغايات والأهداف
            </button>
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-colors font-arabic cursor-pointer ${
                activeSection === "structure"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveSection("structure")}
            >
              البنية العامة
            </button>
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-colors font-arabic cursor-pointer ${
                activeSection === "principles"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveSection("principles")}
            >
              المبادئ البيداغوجية
            </button>
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-colors font-arabic cursor-pointer ${
                activeSection === "value"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveSection("value")}
            >
              القيمة المضافة
            </button>
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-colors font-arabic cursor-pointer ${
                activeSection === "summary"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveSection("summary")}
            >
              خلاصة تركيبية
            </button>
          </div>
        </section>

        {/* Tab Content */}
        <div className="max-w-5xl mx-auto">
          {/* طبيعة الوثيقة وسياقها العام */}
          {activeSection === "overview" && (
            <section className="bg-white rounded-xl shadow-lg p-8 mb-16">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg ml-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 font-arabic">
                    السياق العام
                  </h2>
                  <p className="text-gray-600 mt-1 font-arabic">
                    مقدمة في الإطار المرجعي للمنهاج الدراسي
                  </p>
                </div>
              </div>

              <div className="space-y-8 mt-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed font-arabic mb-4">
                    تُعد هذه الوثيقة إطارًا مرجعيًا وطنيًا رسميًا يهدف إلى توجيه
                    بناء وتكييف وتنزيل المناهج الدراسية الخاصة بالأطفال في وضعية
                    إعاقة، في إطار رؤية شمولية تروم تحقيق التربية الدامجة داخل
                    المنظومة التربوية المغربية.
                  </p>
                  <p className="text-gray-700 leading-relaxed font-arabic mb-4">
                    وقد أُعد هذا الإطار بدعم من منظمة اليونيسف وتحت إشراف وزارة
                    التربية الوطنية، انسجامًا مع التوجهات الدستورية، والإصلاحات
                    التربوية الوطنية، والالتزامات الدولية للمغرب في مجال حقوق
                    الطفل وحقوق الأشخاص في وضعية إعاقة.
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* المرجعيات المؤطرة للإطار */}
          {activeSection === "references" && (
            <section className="bg-white rounded-xl shadow-lg p-8 mb-16">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-lg ml-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 font-arabic">
                    المرجعيات المؤطرة للإطار
                  </h2>
                  <p className="text-gray-600 mt-1 font-arabic">
                    الأسس القانونية والبيداغوجية للإطار المرجعي
                  </p>
                </div>
              </div>

              <div className="space-y-8 mt-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed font-arabic mb-4">
                    يرتكز الإطار المرجعي على منظومة متكاملة من المرجعيات، من
                    أبرزها:
                  </p>

                  <h3 className="text-xl font-bold text-gray-800 mb-4 font-arabic">
                    🔹 المرجعيات القانونية والمؤسساتية
                  </h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        دستور المملكة المغربية لسنة 2011، خاصة مبادئ المساواة
                        وعدم التمييز.
                      </span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        الاتفاقية الدولية لحقوق الطفل.
                      </span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        الاتفاقية الدولية لحقوق الأشخاص ذوي الإعاقة، ولا سيما
                        المادة 24 المتعلقة بالتعليم الدامج.
                      </span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        التوجهات الاستراتيجية لإصلاح منظومة التربية والتكوين.
                      </span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold text-gray-800 mb-4 font-arabic">
                    🔹 المرجعيات البيداغوجية والعلمية
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        المقاربة الدامجة المرتكزة على المتعلم.
                      </span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        الاعتراف بتنوع المتعلمين واختلاف حاجياتهم وإيقاعات
                        تعلمهم.
                      </span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        الانتقال من المقاربة الطبية للإعاقة إلى المقاربة
                        التربوية-الاجتماعية.
                      </span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        الاستئناس بالتجارب الدولية والممارسات الفضلى في مجال
                        التعليم الدامج.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* الغايات والأهداف الاستراتيجية */}
          {activeSection === "goals" && (
            <section className="bg-white rounded-xl shadow-lg p-8 mb-16">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-lg ml-4">
                  <Star className="h-8 w-8 text-indigo-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 font-arabic">
                    الغايات والأهداف الاستراتيجية
                  </h2>
                  <p className="text-gray-600 mt-1 font-arabic">
                    الأهداف المركزية للإطار المرجعي
                  </p>
                </div>
              </div>

              <div className="space-y-8 mt-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed font-arabic mb-4">
                    يسعى هذا الإطار إلى تحقيق مجموعة من الأهداف المركزية، من
                    بينها:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        ضمان الحق في تعليم ذي جودة للأطفال في وضعية إعاقة.
                      </span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        دعم ولوجهم إلى المدرسة، واستمرارهم فيها، ونجاحهم
                        الدراسي.
                      </span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        تكييف المناهج الدراسية والطرائق البيداغوجية وأساليب
                        التقويم.
                      </span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        تكريس الإنصاف وتكافؤ الفرص داخل المدرسة.
                      </span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        تعزيز الكفايات المهنية للأطر التربوية والإدارية.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* البنية العامة للوثيقة */}
          {activeSection === "structure" && (
            <section className="bg-white rounded-xl shadow-lg p-8 mb-16">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-3 rounded-lg ml-4">
                  <FileText className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 font-arabic">
                    البنية العامة للوثيقة
                  </h2>
                  <p className="text-gray-600 mt-1 font-arabic">
                    تنظيم الإطار المرجعي في محاوره الأساسية
                  </p>
                </div>
              </div>

              <div className="space-y-8 mt-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed font-arabic mb-4">
                    ينتظم الإطار المرجعي في ثلاثة محاور كبرى متكاملة:
                  </p>

                  <h3 className="text-xl font-bold text-gray-800 mb-4 font-arabic">
                    I. الإطار المفاهيمي والمرجعي للهندسة المنهاجية
                  </h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        تحديد المفاهيم الأساسية (الإعاقة، الإدماج، الحاجات
                        التربوية الخاصة).
                      </span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        تحليل السياق الوطني والدولي للتربية الدامجة.
                      </span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        تشخيص واقع تمدرس الأطفال في وضعية إعاقة بالمغرب.
                      </span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        المبادئ المؤطرة للهندسة المنهاجية الدامجة.
                      </span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold text-gray-800 mb-4 font-arabic">
                    II. المحددات التنظيمية والإدارية والبيداغوجية
                  </h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        شروط تنزيل التربية الدامجة على مستوى المؤسسات التعليمية.
                      </span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        أدوار ومسؤوليات مختلف الفاعلين.
                      </span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        تنظيم الموارد البشرية والمادية.
                      </span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        التكييفات البيداغوجية والدعم التربوي وأساليب التقويم.
                      </span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold text-gray-800 mb-4 font-arabic">
                    III. الهندسات المنهاجية الخاصة بأنواع الإعاقة
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-arabic mb-4">
                    يتضمن هذا المحور نماذج منهاجية ملائمة لمختلف أنواع الإعاقة،
                    من بينها:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        اضطرابات طيف التوحد.
                      </span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">الإعاقة الذهنية.</span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        الشلل الدماغي والإعاقات الحركية.
                      </span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">الإعاقة السمعية.</span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">الإعاقة البصرية.</span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        صعوبات التعلم الخاصة.
                      </span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed font-arabic mb-4">
                    ويحدد كل نموذج:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        الحاجيات التربوية الأساسية.
                      </span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        التكييفات المنهاجية الضرورية.
                      </span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        المقاربات البيداغوجية وأساليب التقويم الملائمة.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* المبادئ البيداغوجية المؤطرة */}
          {activeSection === "principles" && (
            <section className="bg-white rounded-xl shadow-lg p-8 mb-16">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-100 p-3 rounded-lg ml-4">
                  <Star className="h-8 w-8 text-yellow-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 font-arabic">
                    المبادئ البيداغوجية المؤطرة
                  </h2>
                  <p className="text-gray-600 mt-1 font-arabic">
                    المبادئ الأساسية التي يرتكز عليها الإطار
                  </p>
                </div>
              </div>

              <div className="space-y-8 mt-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed font-arabic mb-4">
                    يرتكز الإطار على جملة من المبادئ الأساسية، أهمها:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        تفريد التعلمات ومراعاة خصوصيات المتعلمين.
                      </span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        التركيز على القدرات والإمكانات بدل الإعاقات.
                      </span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        العمل ضمن فرق متعددة التخصصات.
                      </span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        تعزيز الشراكة مع الأسرة والمجتمع المدني.
                      </span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        الربط بين الإدماج المدرسي والإدماج الاجتماعي.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* القيمة المضافة للإطار المرجعي */}
          {activeSection === "value" && (
            <section className="bg-white rounded-xl shadow-lg p-8 mb-16">
              <div className="flex items-center mb-6">
                <div className="bg-red-100 p-3 rounded-lg ml-4">
                  <Star className="h-8 w-8 text-red-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 font-arabic">
                    القيمة المضافة للإطار المرجعي
                  </h2>
                  <p className="text-gray-600 mt-1 font-arabic">
                    أهمية الإطار المرجعي للمنظومة التربوية
                  </p>
                </div>
              </div>

              <div className="space-y-8 mt-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed font-arabic mb-4">
                    يمثل هذا الإطار:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        أداة استراتيجية لصانعي القرار التربوي.
                      </span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        مرجعًا عمليًا لتأطير الممارسات البيداغوجية الدامجة.
                      </span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        دعامة لتوحيد الرؤى وتجويد الممارسات التعليمية.
                      </span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        لبنة أساسية لبناء مدرسة دامجة، منصفة وذات جودة.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          )}
          {/* خلاصة تركيبية */}
          {activeSection === "summary" && (
            <section className="bg-white rounded-xl shadow-lg p-8 mb-16">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-3 rounded-lg ml-4">
                  <Star className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 font-arabic">
                    خلاصة تركيبية
                  </h2>
                  <p className="text-gray-600 mt-1 font-arabic">
                    نظرة شمولية على الإطار المرجعي
                  </p>
                </div>
              </div>

              <div className="space-y-8 mt-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed font-arabic mb-4">
                    يشكل هذا الإطار المرجعي نقلة نوعية في مقاربة تمدرس الأطفال
                    في وضعية إعاقة، حيث يؤسس لرؤية شمولية تعتبر الإعاقة تنوعًا
                    إنسانيًا وليس عائقًا، ويجعل من المنهاج الدراسي أداة مركزية
                    لتحقيق الإدماج والإنصاف والكرامة التربوية.
                  </p>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

