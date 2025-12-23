"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from '@/hooks/use-toast'

export default function RegisterForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    if (password !== confirmPassword) {
      toast({
        variant: 'destructive',
        title: 'خطأ في التسجيل',
        description: 'كلمات المرور غير متطابقة',
      })
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'حدث خطأ أثناء التسجيل')
      }

      toast({
        title: 'تم إنشاء الحساب بنجاح',
        description: 'جاري إعادة توجيهك إلى صفحة تسجيل الدخول...',
      })

      setTimeout(() => {
        router.push('/login')
      }, 2000)
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'خطأ في التسجيل',
        description: error.message || 'حدث خطأ أثناء محاولة إنشاء الحساب',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-arabic text-center">إنشاء حساب جديد</CardTitle>
        <CardDescription className="text-center font-arabic">
          أدخل معلوماتك لإنشاء حساب جديد
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="font-arabic">الاسم</Label>
            <Input
              id="name"
              type="text"
              placeholder="اسمك"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="text-right font-arabic"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="font-arabic">البريد الإلكتروني</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-right font-arabic"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="font-arabic">كلمة المرور</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="text-right font-arabic"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="font-arabic">تأكيد كلمة المرور</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="text-right font-arabic"
            />
          </div>
          <Button
            type="submit"
            className="w-full font-arabic"
            disabled={isLoading}
          >
            {isLoading ? 'جاري إنشاء الحساب...' : 'إنشاء حساب'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
