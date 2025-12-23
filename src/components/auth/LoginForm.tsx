"use client"

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from '@/hooks/use-toast'

export default function LoginForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        toast({
          variant: 'destructive',
          title: 'خطأ في تسجيل الدخول',
          description: 'البريد الإلكتروني أو كلمة المرور غير صحيحة',
        })
      } else {
        toast({
          title: 'تم تسجيل الدخول بنجاح',
          description: 'جاري إعادة توجيهك إلى لوحة التحكم...',
        })
        router.push('/dashboard')
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'خطأ في تسجيل الدخول',
        description: 'حدث خطأ أثناء محاولة تسجيل الدخول',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-arabic text-center">تسجيل الدخول</CardTitle>
        <CardDescription className="text-center font-arabic">
          أدخل بريدك الإلكتروني وكلمة المرور للوصول إلى لوحة التحكم
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="font-arabic">البريد الإلكتروني</Label>
            <Input
              id="email"
              type="email"
              placeholder="admin@example.com"
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
          <Button 
            type="submit" 
            className="w-full font-arabic" 
            disabled={isLoading}
          >
            {isLoading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
