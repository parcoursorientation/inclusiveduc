import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function RehabSupportRoomPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main
        className="container-custom section-padding"
        dir="rtl"
        suppressHydrationWarning
      >
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
            <li className="text-gray-600 font-arabic">الدلائل</li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-600 font-arabic">
              دليل قاعة الموارد للتأهيل والدعم
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="gradient-secondary text-white rounded-2xl p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 font-arabic">
              دليل قاعة الموارد للتأهيل والدعم
            </h1>
            <p className="text-xl mb-8 text-green-50 leading-relaxed font-arabic max-w-4xl">
              مستند مفاهيمي وعملي يقدّم تعريفاً، أهدافاً، إجراءات تنظيمية،
              وأمثلة تطبيقية لإنشاء وتدبير قاعة الموارد للتأهيل والدعم داخل
              المؤسسات التعليمية الدامجة.
            </p>
            <div className="mt-8">
              <a
                href="https://parcours-orientation.net/storage/images/exclusive/Montage Guide Salle de ressources.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 font-arabic"
                download
              >
                تنزيل الدليل
              </a>
            </div>
          </div>
        </section>

        <div className="space-y-12 font-arabic text-right">
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary">1) مقدمة</h2>
            <p className="leading-relaxed text-gray-700">
              يشكّل إرساء المقاربة التربوية الدامجة لفائدة الأطفال في وضعية
              إعاقة داخل المنظومة التعليمية هدفاً استراتيجياً للتنمية البشرية.
              يهدف البرنامج الوطني للتربية الدامجة إلى الارتقاء باستراتيجيات
              التكفل التربوي بالأشخاص في وضعية إعاقة أو في وضعيات خاصة وضمان
              اندماجهم في المدرسة وتتبع مسارهم الدراسي بنجاح.
            </p>
            <p className="leading-relaxed text-gray-700">
              تتطلّب التربية الدامجة فريقاً متعدد الاختصاصات يعمل وفق رؤية
              مشتركة ومقاربة تشاركية وآليات تنسيق وتواصل من مرحلة التشخيص
              والتقييم إلى التقويم، وتعد قاعة الموارد للتأهيل والدعم فضاءً
              مكمّلاً يساند عملية الدمج المدرسي والاجتماعي.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary">2) الدليل</h2>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                2.1 موضوع الدليل وأهميته
              </h3>
              <p className="leading-relaxed text-gray-700">
                ثمرة تشاور بين وزارة التربية الوطنية ومديرية المناهج والمركز
                الوطني محمد السادس للمعاقين قصد إنتاج دفتر تحملات يستند إلى أسس
                علمية وتجارب ميدانية لتنزيل مضامين البرنامج الوطني للتربية
                الدامجة وتوسيع العرض المدرسي وتيسير الحياة المدرسية للمتعلمين في
                وضعية إعاقة أو في وضعيات خاصة.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                2.2 الفئة المستهدفة
              </h3>
              <ul className="list-disc pr-6 space-y-2 text-gray-700">
                <li>
                  المؤسسات التعليمية الدامجة، خصوصاً المحتضنة لقاعة الموارد
                  للتأهيل والدعم.
                </li>
                <li>
                  المراكز الخاصة والجمعيات العاملة في دعم تمدرس الأطفال في وضعية
                  إعاقة أو في وضعيات خاصة.
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                2.3 الأهداف الأساسية للدليل
              </h3>
              <ul className="list-disc pr-6 space-y-2 text-gray-700">
                <li>
                  إنتاج وثيقة مرجعية لتيسير فتح قاعات الموارد للتأهيل والدعم.
                </li>
                <li>توحيد الجهود والرؤى المرتبطة بخلق هذه القاعات.</li>
                <li>
                  توضيح الأدوار والمسؤوليات لجميع المتدخلين في الإحداث والتدبير.
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary">
              3) قاعة الموارد للتأهيل والدعم
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  3.1 تعريف
                </h3>
                <ul className="list-disc pr-6 space-y-2 text-gray-700">
                  <li>
                    فضاء داخل المدرسة يرتاده المتعلمون في وضعية إعاقة أو وضعيات
                    خاصة لفترة لا تتجاوز نصف اليوم الدراسي، تنطلق منه خدمات
                    تخصصية داعمة لتمكينهم بدنيا ونفسياً وأكاديمياً واجتماعياً.
                  </li>
                  <li>
                    فضاء داعم مكمّل، إذ يظل الأساس هو قسم التربية الدامجة.
                  </li>
                  <li>
                    مصطلح "قاعة" يُفهم بشكل مرن أوسع من الحيّز المكاني الضيق.
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  3.2 مميزات
                </h3>
                <ul className="list-disc pr-6 space-y-2 text-gray-700">
                  <li>تمييز إيجابي واحتضان للاختلاف والتنوع.</li>
                  <li>التدخل المبكر لاحتواء الصعوبات قبل استفحالها.</li>
                  <li>
                    تقريب خدمات الدعم الطبي والشبه طبي والسيكولوجي
                    والسيكوسوسيولوجي والبيداغوجي من محيط المتعلم(ة).
                  </li>
                  <li>
                    إعداد برنامج متكامل وفق مشروع بيداغوجي فردي أعدّه الفريق
                    المتعدد التخصصات مع انخراط الأطر.
                  </li>
                  <li>تدبير مرن يسمح بخدمة عدد أكبر من التلاميذ.</li>
                </ul>
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                3.3 وصف عام
              </h3>
              <ul className="list-disc pr-6 space-y-2 text-gray-700">
                <li>
                  موقع بين الأقسام في الطابق السفلي، ولوجي، يستجيب لمعايير
                  السلامة والأمن، بعيد عن مثيرات التشتت، جيد التهوية والإضاءة،
                  مع مغسلة.
                </li>
                <li>
                  مساحة تسمح باحتضان التجهيزات وتوزيعها بما يخدم تنظيم الفضاء.
                </li>
                <li>مظهر جميل ومرتب ونظيف.</li>
                <li>حواجز متحركة لإجراء تعديلات تناسب الأنشطة.</li>
                <li>
                  تجهيزات مكتبية ووسائل تعليمية وأجهزة سمعية وبصرية مناسبة.
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary">
              4) الأنشطة والخدمات
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow bg-white">
                <h3 className="font-semibold mb-3 text-lg text-primary">
                  الدعم الطبي وشبه الطبي
                </h3>
                <ul className="list-disc pr-6 space-y-2 text-gray-600 text-sm">
                  <li>تشخيص طبي أولي للتعرف على نوع الإعاقة ودرجتها.</li>
                  <li>التتبع الطبي.</li>
                  <li>الترويض الطبي.</li>
                  <li>خدمات تقويم النطق.</li>
                  <li>تطوير المقومات السيكوحركية وتركيز الانتباه.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow bg-white">
                <h3 className="font-semibold mb-3 text-lg text-primary">
                  الدعم البيداغوجي
                </h3>
                <ul className="list-disc pr-6 space-y-2 text-gray-600 text-sm">
                  <li>
                    اكتساب تقنيات مرتبطة بالمهارات الحركية والحسية (لغة الإشارة،
                    طريقة برايل...)
                  </li>
                  <li>أنشطة الإيقاظ الذهني.</li>
                  <li>تقديم الدعم التربوي والبيداغوجي.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow bg-white">
                <h3 className="font-semibold mb-3 text-lg text-primary">
                  الدعم السيكولوجي والسيكوسوسيولوجي
                </h3>
                <ul className="list-disc pr-6 space-y-2 text-gray-600 text-sm">
                  <li>الدعم النفسي والعمل على تقدير الذات وتقبّلها.</li>
                  <li>دعم وتطوير آليات الاشتغال المعرفي.</li>
                  <li>
                    دعم انفتاح الشخصية وتدبير العلاقات والمشاعر والانفعالات.
                  </li>
                  <li>مساعدة الآباء على تطوير الوالدية الإيجابية.</li>
                  <li>
                    المساعدة على تحقيق مشروع الأسرة الدامج عبر الدعم النفسي.
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border border-green-100 mt-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                4.1 الفئات المستفيدة
              </h3>
              <ul className="list-disc pr-6 space-y-2 text-gray-700">
                <li>الأطفال في وضعية إعاقة.</li>
                <li>الأطفال ذوو اضطرابات التعلم.</li>
                <li>
                  الأطفال في وضعيات هشة (الرحّل، اليتامى، اللاجئون، ضحايا
                  الكوارث، الأقليات...)
                </li>
                <li>أسر التلاميذ المستفيدين.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary">
              5) الإجراءات التنظيمية
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  5.1 مبادئ عامة
                </h3>
                <ul className="list-disc pr-6 space-y-2 text-gray-700">
                  <li>
                    الاشتغال باحترام حاجات كل متعلم ضمن المشروع البيداغوجي
                    الفردي.
                  </li>
                  <li>
                    توفير أستاذ(ة) مشرف(ة) من ذوي الخبرة في التربية الدامجة.
                  </li>
                  <li>
                    برنامج وتوزيع زمني ينسّق بين القسم الدامج وأنشطة القاعة.
                  </li>
                  <li>
                    لجنة لتتبع البرنامج الفردي: أستاذ(ة) القسم(الأقسام) الدامجة،
                    الأستاذ(ة) المشرف(ة)، إدارة المؤسسة، التفتيش، مكتب التربية
                    الدامجة، متدخلون طبيون/شبه طبيين، أسرة الطفل، وممثل الجمعية
                    المحتضِنة إن وُجدت.
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  5.2 مسؤوليات الأستاذ(ة) المشرف(ة)
                </h3>
                <ul className="list-disc pr-6 space-y-2 text-gray-700">
                  <li>
                    تقييم تشخيصي للمعارف والمكتسبات والمشاكل الصحية والسلوكية
                    والتربوية.
                  </li>
                  <li>
                    تقديم الدعم البيداغوجي والتربوي واستثمار عُدّة البرنامج
                    الوطني للتربية الدامجة.
                  </li>
                  <li>
                    مصاحبة أساتذة الأقسام الدامجة وتزويدهم بالمعلومات حول
                    الإعاقات والصعوبات.
                  </li>
                  <li>
                    المساهمة في إعداد المشروع البيداغوجي الفردي وتحديد الحاجات
                    والخدمات الداعمة.
                  </li>
                  <li>
                    التنسيق بين المتدخلين، والمساهمة في تكييف المراقبة المستمرة
                    والامتحانات.
                  </li>
                  <li>المساهمة في الدراسات الميدانية حول التربية الدامجة.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  5.3 مهام المتدخلين
                </h3>
                <Accordion
                  type="single"
                  collapsible
                  className="w-full bg-white rounded-xl border border-gray-200"
                >
                  <AccordionItem value="admin-team" className="border-b-0 mb-2">
                    <AccordionTrigger className="px-6 hover:no-underline hover:bg-gray-50 rounded-t-xl">
                      الفريق الإداري والتربوي والاجتماعي
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <ul className="list-disc pr-6 space-y-2 text-gray-700">
                        <li>
                          رئيس(ة) مكتب/مصلحة التربية الدامجة: الإشراف على
                          الاستقبال والتوجيه والتسجيل والمتابعة وتنظيم التكوينات
                          وتكييف التقويمات.
                        </li>
                        <li>
                          هيئة التفتيش/التوجيه: دراسة الملفات، مقابلات تشخيصية،
                          دعم الممارسات، عضوية اللجان.
                        </li>
                        <li>
                          الإدارة التربوية بالمؤسسة: تضمين القاعة في مشروع
                          المؤسسة، تيسير التسجيل، تحديد الحاجيات اللوجستية، تتبع
                          المشاريع الفردية.
                        </li>
                        <li>
                          جمعيات الآباء والجمعيات الشريكة: تجهيزات، دعم اجتماعي،
                          أنشطة حياة مدرسية، خدمات طبية، تقوية قدرات.
                        </li>
                        <li>
                          مرافق(ة) الحياة المدرسية: مرافقة التلميذ داخل المرافق
                          والتنسيق مع المشرف والأسرة.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="multidisciplinary"
                    className="border-t border-gray-100 border-b-0"
                  >
                    <AccordionTrigger className="px-6 hover:no-underline hover:bg-gray-50">
                      الفريق المتعدد التخصصات
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <ul className="list-disc pr-6 space-y-2 text-gray-700">
                        <li>
                          أطباء (أطفال/اختصاص/عام): كشف مبكر وتشخيص وإعداد
                          تقارير وتوصيات.
                        </li>
                        <li>
                          أخصائي(ة) العلاج النفسي: اختبارات تقييمية، تقارير،
                          المشاركة في إعداد المشروع الفردي.
                        </li>
                        <li>
                          أخصائي(ة) تقويم النطق: مقابلات مع الأسرة، تقييم الأداء
                          اللغوي/التواصلي والحركي والمعرفي.
                        </li>
                        <li>
                          أخصائيو الترويض الفيزيائي/النفسي حركي والعلاج الوظيفي:
                          برمجة حصص التدخل الشبه طبي والتنسيق مع الفريق التربوي.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary">
              6) أنواع القاعات والتدبير الزمني
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  6.1 أنواع قاعات الموارد
                </h3>
                <ul className="list-disc pr-6 space-y-2 text-gray-700">
                  <li>
                    تحويل أقسام الإدماج المدرسي السابقة إلى قاعات موارد للتأهيل
                    والدعم.
                  </li>
                  <li>
                    إحداث قاعة موارد بالمؤسسات التي تستقبل أكثر من 10 تلاميذ في
                    وضعية إعاقة أو وضعيات خاصة.
                  </li>
                  <li>
                    إحداث قاعة موارد مركزية تخدم مؤسسات دامجة متقاربة إذا كان
                    بكل واحدة أقل من 10 مستفيدين.
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  6.2 التدبير الزمني ومعاييره
                </h3>
                <ul className="list-disc pr-6 space-y-2 text-gray-700">
                  <li>برمجة حصص الدعم الطبي/الشبه طبي بالفترة الزوالية.</li>
                  <li>خلق مجموعات متجانسة في الحاجات التربوية الخاصة.</li>
                  <li>تكوين مجموعات لا تتعدى 5 مستفيدين.</li>
                  <li>
                    برنامج دوري خاص بالأسر، وآخر للفريق متعدد الاختصاصات للتتبع
                    والمواكبة.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary">7) ملاحق</h2>
            <Accordion
              type="single"
              collapsible
              className="w-full bg-white rounded-xl border border-gray-200"
            >
              <AccordionItem value="designs" className="border-b-0 mb-2">
                <AccordionTrigger className="px-6 hover:no-underline hover:bg-gray-50 rounded-t-xl">
                  7.1 نماذج تصاميم وأبعاد القاعة (الصفحات 18–24)
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <figure className="rounded-lg border p-3">
                      <img
                        src="https://parcours-orientation.net/storage/images/exclusive/18.jpeg"
                        alt="تصميم ثلاثي الأبعاد - صفحة 18"
                        className="w-full h-auto rounded"
                      />
                      <figcaption className="mt-2 text-sm text-gray-600">
                        تصميم ثلاثي الأبعاد - صفحة 18
                      </figcaption>
                    </figure>
                    <figure className="rounded-lg border p-3">
                      <img
                        src="https://parcours-orientation.net/storage/images/exclusive/19.jpeg"
                        alt="تصميم ثلاثي الأبعاد - صفحة 19"
                        className="w-full h-auto rounded"
                      />
                      <figcaption className="mt-2 text-sm text-gray-600">
                        تصميم ثلاثي الأبعاد - صفحة 19
                      </figcaption>
                    </figure>
                    <figure className="rounded-lg border p-3">
                      <img
                        src="https://parcours-orientation.net/storage/images/exclusive/20.jpeg"
                        alt="تصميم ثلاثي الأبعاد - صفحة 20"
                        className="w-full h-auto rounded"
                      />
                      <figcaption className="mt-2 text-sm text-gray-600">
                        تصميم ثلاثي الأبعاد - صفحة 20
                      </figcaption>
                    </figure>
                    <figure className="rounded-lg border p-3">
                      <img
                        src="https://parcours-orientation.net/storage/images/exclusive/21.jpeg"
                        alt="تصميم - صفحة 21 (منظر 1)"
                        className="w-full h-auto rounded"
                      />
                      <figcaption className="mt-2 text-sm text-gray-600">
                        تصميم - صفحة 21 (منظر 1)
                      </figcaption>
                    </figure>
                    <figure className="rounded-lg border p-3">
                      <img
                        src="https://parcours-orientation.net/storage/images/exclusive/21b.jpeg"
                        alt="تصميم - صفحة 21 (منظر 2)"
                        className="w-full h-auto rounded"
                      />
                      <figcaption className="mt-2 text-sm text-gray-600">
                        تصميم - صفحة 21 (منظر 2)
                      </figcaption>
                    </figure>
                    <figure className="rounded-lg border p-3">
                      <img
                        src="https://parcours-orientation.net/storage/images/exclusive/22.jpeg"
                        alt="تصميم - صفحة 22 (منظر 1)"
                        className="w-full h-auto rounded"
                      />
                      <figcaption className="mt-2 text-sm text-gray-600">
                        تصميم - صفحة 22 (منظر 1)
                      </figcaption>
                    </figure>
                    <figure className="rounded-lg border p-3">
                      <img
                        src="https://parcours-orientation.net/storage/images/exclusive/22b.jpeg"
                        alt="تصميم - صفحة 22 (منظر 2)"
                        className="w-full h-auto rounded"
                      />
                      <figcaption className="mt-2 text-sm text-gray-600">
                        تصميم - صفحة 22 (منظر 2)
                      </figcaption>
                    </figure>
                    <figure className="rounded-lg border p-3">
                      <img
                        src="https://parcours-orientation.net/storage/images/exclusive/23.jpeg"
                        alt="تصميم - صفحة 23 (منظر 1)"
                        className="w-full h-auto rounded"
                      />
                      <figcaption className="mt-2 text-sm text-gray-600">
                        تصميم - صفحة 23 (منظر 1)
                      </figcaption>
                    </figure>
                    <figure className="rounded-lg border p-3">
                      <img
                        src="https://parcours-orientation.net/storage/images/exclusive/23b.jpeg"
                        alt="تصميم - صفحة 23 (منظر 2)"
                        className="w-full h-auto rounded"
                      />
                      <figcaption className="mt-2 text-sm text-gray-600">
                        تصميم - صفحة 23 (منظر 2)
                      </figcaption>
                    </figure>
                    <figure className="rounded-lg border p-3">
                      <img
                        src="https://parcours-orientation.net/storage/images/exclusive/24.jpeg"
                        alt="تصميم - صفحة 24 (منظر)"
                        className="w-full h-auto rounded"
                      />
                      <figcaption className="mt-2 text-sm text-gray-600">
                        تصميم - صفحة 24 (منظر)
                      </figcaption>
                    </figure>
                    <figure className="rounded-lg border p-3">
                      <img
                        src="https://parcours-orientation.net/storage/images/exclusive/24b.jpeg"
                        alt="مخطط بالأبعاد - صفحة 24"
                        className="w-full h-auto rounded"
                      />
                      <figcaption className="mt-2 text-sm text-gray-600">
                        مخطط بالأبعاد - صفحة 24
                      </figcaption>
                    </figure>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="equipment"
                className="border-t border-gray-100 border-b-0"
              >
                <AccordionTrigger className="px-6 hover:no-underline hover:bg-gray-50">
                  7.2 لائحة الأجهزة والمعدات (الصفحات 25–31)
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-700 mb-4">
                    تتضمن اللائحة تفاصيل التجهيزات الضرورية:
                  </p>
                  <ul className="list-disc pr-6 space-y-2 text-gray-700">
                    <li>
                      تجهيزات الترويض الطبي (طاولات فحص، أجهزة مشي، كرات
                      توازن...)
                    </li>
                    <li>
                      تجهيزات تقويم النطق (مرآة، مسجل صوت، بطاقات مصورة...)
                    </li>
                    <li>
                      تجهيزات نفسية حركية (بساط، ألعاب تركيب، أدوات توازن...)
                    </li>
                    <li>
                      تجهيزات بيداغوجية (حواسيب، سبورة تفاعلية، كتب مكيفة...)
                    </li>
                    <li>أثاث مكتبي (طاولات، كراسي، خزانات...)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
