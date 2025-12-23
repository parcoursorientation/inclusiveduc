import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import LoginForm from '@/components/auth/LoginForm'
import ClientOnly from '@/components/ClientOnly'

export default async function LoginPage() {
  const session = await getServerSession(authOptions)

  // Si l'utilisateur est déjà connecté, le rediriger vers le dashboard
  if (session) {
    redirect('/dashboard')
  }

  return (
    <ClientOnly>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-primary">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 font-arabic">
              تسجيل الدخول إلى لوحة التحكم
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 font-arabic">
              أدخل بيانات الاعتماد الخاصة بك للوصول إلى لوحة التحكم
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </ClientOnly>
  )
}
