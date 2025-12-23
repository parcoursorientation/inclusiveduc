
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-red-100">
            <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 font-arabic">
            غير مصرح بالوصول
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 font-arabic">
            ليس لديك الإذن الكافي للوصول إلى هذه الصفحة
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <Button asChild className="w-full">
            <Link href="/dashboard">
              العودة إلى لوحة التحكم
            </Link>
          </Button>
          <Button variant="outline" asChild className="w-full">
            <Link href="/">
              الصفحة الرئيسية
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
