'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown, Users, BookOpen, Home, FileText, HelpCircle, Phone, Info, UserCheck, GraduationCap, HeartHandshake, Scale, Calendar, MessageCircle, BarChart } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const closeMenu = () => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu)
  }

  const navItems = [
    {
      title: 'الرئيسية',
      href: '/',
      icon: Home
    },
    {
      title: 'ما هي التربية الدامجة؟',
      href: '/what-is-inclusive-education',
      icon: HelpCircle
    },
    {
      title: 'الإعاقة وأنواعها',
      href: '/disability-types',
      icon: Users
    },
    {
      title: 'الحواجز المانعة',
      href: '/barriers',
      icon: Scale
    },
    {
      title: 'الدلائل',
      href: '#',
      icon: BookOpen,
      dropdown: [
        {
          title: 'دليل المدرسين',
          href: '/teachers-guide',
          icon: GraduationCap,
          description: 'كفايات مهنية وتخطيط الحصص الدامجة'
        },
        {
          title: 'دليل الأسر والجمعيات',
          href: '/families-guide',
          icon: HeartHandshake,
          description: 'الوالدية الإيجابية وبناء المشروع الأسري'
        },
        {
          title: 'دليل قاعة الموارد',
          href: '/resources/rehab-support-room',
          icon: FileText,
          description: 'دليل قاعة الموارد للتأهيل والدعم'
        }
      ]
    },
    {
      title: 'مخاطبونا',
      href: '/personas',
      icon: UserCheck
    },
    {
      title: 'الموارد',
      href: '#',
      icon: FileText,
      dropdown: [
        {
          title: 'نماذج قابلة للتحميل',
          href: '/resources',
          icon: FileText,
          description: 'مشروع بيداغوجي فردي واستمارات'
        },
        {
          title: 'التشريعات الوطنية',
          href: '/legislation',
          icon: Scale,
          description: 'الإطار المرجعي والاتفاقيات الدولية'
        },
        {
          title: 'الأخبار والأنشطة',
          href: '/news',
          icon: Calendar,
          description: 'مستجدات التربية الدامجة وقصص نجاح'
        },
        {
          title: 'الأسئلة الشائعة',
          href: '/faq',
          icon: MessageCircle,
          description: 'أجوبة على الاستفسارات المتكررة'
        }
      ]
    },
    {
      title: 'اتصل بنا',
      href: '/contact',
      icon: Phone
    }
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50" role="navigation" aria-label="التنقل الرئيسي">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-reverse space-x-2" onClick={closeMenu}>
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl text-primary font-arabic">التربية الدامجة</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-reverse space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon
              if (item.dropdown) {
                return (
                  <div key={item.title} className="relative group">
                    <button
                      className="flex items-center space-x-reverse space-x-1 text-gray-700 hover:text-primary transition-colors duration-200 font-medium font-arabic"
                      onClick={() => toggleDropdown(item.title)}
                      aria-expanded={activeDropdown === item.title}
                      aria-haspopup="true"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.title}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === item.title ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {activeDropdown === item.title && (
                      <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                        {item.dropdown.map((dropdownItem) => {
                          const DropdownIcon = dropdownItem.icon
                          return (
                            <Link
                              key={dropdownItem.title}
                              href={dropdownItem.href}
                              className="flex items-start space-x-reverse space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                              onClick={closeMenu}
                            >
                              <DropdownIcon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                              <div>
                                <div className="font-medium text-gray-900 font-arabic">{dropdownItem.title}</div>
                                <div className="text-sm text-gray-600 font-arabic mt-1">{dropdownItem.description}</div>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              }
              
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex items-center space-x-reverse space-x-1 text-gray-700 hover:text-primary transition-colors duration-200 font-medium font-arabic"
                  onClick={closeMenu}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors duration-200"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                if (item.dropdown) {
                  return (
                    <div key={item.title} className="border-b border-gray-100 last:border-b-0">
                      <button
                        className="w-full flex items-center justify-between space-x-reverse space-x-2 px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-200 font-medium font-arabic"
                        onClick={() => toggleDropdown(item.title)}
                        aria-expanded={activeDropdown === item.title}
                        aria-haspopup="true"
                      >
                        <div className="flex items-center space-x-reverse space-x-2">
                          <Icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </div>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === item.title ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {activeDropdown === item.title && (
                        <div className="bg-gray-50 py-2">
                          {item.dropdown.map((dropdownItem) => {
                            const DropdownIcon = dropdownItem.icon
                            return (
                              <Link
                                key={dropdownItem.title}
                                href={dropdownItem.href}
                                className="flex items-start space-x-reverse space-x-3 px-12 py-3 hover:bg-gray-100 transition-colors duration-200"
                                onClick={closeMenu}
                              >
                                <DropdownIcon className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                <div>
                                  <div className="font-medium text-gray-900 font-arabic text-sm">{dropdownItem.title}</div>
                                  <div className="text-xs text-gray-600 font-arabic mt-1">{dropdownItem.description}</div>
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )
                }
                
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex items-center space-x-reverse space-x-2 px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-200 font-medium font-arabic border-b border-gray-100 last:border-b-0"
                    onClick={closeMenu}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}