'use client'

import { useState } from 'react'
import { ArrowRight, Play, BookOpen, Users, HeartHandshake, Star, CheckCircle, ArrowLeft, Send } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) {
      alert('يرجى إدخال بريدك الإلكتروني')
      return
    }
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  const features = [
    {
      icon: Users,
      title: 'للأسر والجمعيات',
      description: 'دعم شامل للوالدية الإيجابية وبناء المشروع الأسري للدمج',
      href: '/families-guide',
      color: 'text-blue-600'
    },
    {
      icon: BookOpen,
      title: 'للمدرسين والمديرين',
      description: 'كفايات مهنية وتخطيط الحصص الدامجة وتنظيم القسم',
      href: '/teachers-guide',
      color: 'text-green-600'
    },
    {
      icon: HeartHandshake,
      title: 'للفاعلين التربويين',
      description: 'أدوات عملية للمناصرة والتعبئة الاجتماعية والتوعية',
      href: '/personas',
      color: 'text-purple-600'
    }
  ]

  const stats = [
    { number: '100%', label: 'الحق في التعليم' },
    { number: '0', label: 'إقصاء' },
    { number: '∞', label: 'إمكانات' }
  ]

  const quickLinks = [
    {
      title: 'ما هي التربية الدامجة؟',
      description: 'تعريف اليونسكو ومميزات الدمج الشامل',
      href: '/what-is-inclusive-education',
      icon: '📚'
    },
    {
      title: 'أنواع الإعاقة',
      description: 'القصور الحركي، السمعي، البصري، الذهني...',
      href: '/disability-types',
      icon: '♿'
    },
    {
      title: 'الحواجز المانعة',
      description: 'تحديد العوائق وحلول عملية لرفعها',
      href: '/barriers',
      icon: '🚧'
    },
    {
      title: 'نماذج عملية',
      description: 'مشروع بيداغوجي فردي واستمارات جاهزة',
      href: '/resources',
      icon: '📋'
    }
  ]

  const testimonials = [
    {
      name: 'أمينة، أم لطفل توحدي',
      role: 'جمعية الأمل',
      content: 'هذه المنصة غيرت حياتنا وحياة طفلنا. وجدنا الدعم والمعلومات التي كنا نبحث عنها لدمج طفلنا في المدرسة العادية.',
      rating: 5
    },
    {
      name: 'محمد، مدرس',
      role: 'مدرسة الابتدائية الحسن الثاني',
      content: 'الأدوات والنماذج المقدمة ساعدتني على تنظيم قسمي بشكل أفضل ودعم جميع التلاميذ بفعالية.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-primary text-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-arabic leading-tight">
                جميع الأطفال يمكنهم أن يتعلموا...
                <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 text-yellow-300">
                  والدمج حق وليس امتيازًا
                </span>
              </h1>

              <p className="text-xl mb-8 text-blue-50 leading-relaxed font-arabic">
                منصة متكاملة لدعم التربية الدامجة للأطفال في وضعية إعاقة. موارد، أدلة، وأدوات عملية للأسر، المعلمين، والجمعيات.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/what-is-inclusive-education" className="button-primary bg-white text-primary hover:bg-gray-100">

                  ابدأ التعرف على التربية الدامجة

                </Link>
                <Link href="/families-guide" className="button-secondary border-2 border-white text-white hover:bg-white hover:text-primary">
                  دليل الأسر والجمعيات

                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-yellow-300 font-arabic">{stat.number}</div>
                    <div className="text-sm text-blue-100 font-arabic">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="aspect-video bg-white/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Play className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
                    <p className="text-lg font-arabic">فيديو تعريفي</p>
                    <p className="text-sm text-blue-100 font-arabic">اكتشف مبادئ التربية الدامجة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 font-arabic text-gray-800">
            ابدأ رحلتك في التربية الدامجة
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="bg-white rounded-xl p-6 shadow-lg card-hover group"
              >
                <div className="text-4xl mb-4">{link.icon}</div>
                <h3 className="text-xl font-bold mb-3 font-arabic text-gray-800 group-hover:text-primary transition-colors">
                  {link.title}
                </h3>
                <p className="text-gray-600 font-arabic leading-relaxed">{link.description}</p>
                <div className="mt-4 flex items-center text-primary font-arabic font-medium">
                  اكتشف المزيد
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-arabic text-gray-800">
              موارد متخصصة لكل فئة
            </h2>
            <p className="text-xl text-gray-600 font-arabic leading-relaxed max-w-3xl mx-auto">
              محتوى مصمم خصيصًا لتلبية احتياجات كل شريحة من شركاء التربية الدامجة
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Link
                  key={index}
                  href={feature.href}
                  className="bg-gray-50 rounded-xl p-8 card-hover group"
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${feature.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-arabic text-gray-800 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-arabic leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-primary font-arabic font-medium">
                    استكشف الدليل
                    <ArrowLeft className="mr-2 h-4 w-4" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* What is Inclusive Education Section */}
      <section className="py-16 bg-linear-to-br from-blue-50 to-green-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-arabic text-gray-800">
                ما هي التربية الدامجة؟
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-3 font-arabic text-primary">تعريف اليونسكو</h3>
                  <p className="text-gray-700 font-arabic leading-relaxed">
                    "التربية الدامجة هي عملية تهدف إلى الاستجابة لاحتياجات جميع المتعلمين من خلال تعزيز المشاركة والحد من الإقصاء داخل نظم التعليم."
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-3 font-arabic text-secondary">المبادئ الأساسية</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-reverse space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 shrink-0" />
                      <span className="text-gray-700 font-arabic">الإنصاف وتكافؤ الفرص للجميع</span>
                    </li>
                    <li className="flex items-start space-x-reverse space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 shrink-0" />
                      <span className="text-gray-700 font-arabic">تقبل الاختلاف والتنوع</span>
                    </li>
                    <li className="flex items-start space-x-reverse space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 shrink-0" />
                      <span className="text-gray-700 font-arabic">تكييف البيئة التعليمية</span>
                    </li>
                    <li className="flex items-start space-x-reverse space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 shrink-0" />
                      <span className="text-gray-700 font-arabic">الشراكة بين جميع الفاعلين</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Link href="/what-is-inclusive-education" className="button-primary mt-8 block text-center">
                تعرف المزيد عن التربية الدامجة

              </Link>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 font-arabic text-gray-800 text-center">
                  أنماط التربية
                </h3>

                <div className="space-y-4">
                  {[
                    { type: 'التربية العادية', status: 'عادية', color: 'gray' },
                    { type: 'التربية الخاصة', status: 'منفصلة', color: 'orange' },
                    { type: 'التربية الإدماجية', status: 'انتقالية', color: 'blue' },
                    { type: 'التربية الدامجة', status: 'الأفضل', color: 'green' }
                  ].map((item, index) => (
                    <div key={index} className={`border-2 rounded-lg p-4 ${
                      item.color === "gray" ? "border-gray-200 bg-gray-50" :
                      item.color === "orange" ? "border-orange-200 bg-orange-50" :
                      item.color === "blue" ? "border-blue-200 bg-blue-50" :
                      "border-green-200 bg-green-50"
                    }`}>
                      <div className="flex justify-between items-center">
                        <span className="font-bold font-arabic text-gray-800">{item.type}</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-arabic text-white ${
                          item.color === "gray" ? "bg-gray-500" :
                          item.color === "orange" ? "bg-orange-500" :
                          item.color === "blue" ? "bg-blue-500" :
                          "bg-green-500"
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-arabic text-gray-800">
              قصص نجاح وشهادات
            </h2>
            <p className="text-xl text-gray-600 font-arabic">
              تجارب واقعية من ميدان التربية الدامجة
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 font-arabic leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-bold font-arabic text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 font-arabic">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 gradient-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4 font-arabic">
            انضم إلى مجتمع التربية الدامجة
          </h2>
          <p className="text-xl mb-8 text-green-50 font-arabic">
            احصل على آخر المستجدات والموارد والفرص التكوينية
          </p>

          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="بريدك الإلكتروني"
              title="يرجى ملء هذا الحقل"
              className="flex-1 px-6 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 font-arabic"
              required
            />
            <button
              type="submit"
              className="button-primary bg-white text-secondary hover:bg-gray-100"
            >
              اشتراك
              <Send className="mr-2 h-5 w-5" />
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}