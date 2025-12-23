
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

interface ServerProtectedRouteProps {
  children: ReactNode
  requiredRole?: string
  redirectTo?: string
}

export default async function ServerProtectedRoute({ 
  children, 
  requiredRole, 
  redirectTo = '/login' 
}: ServerProtectedRouteProps) {
  const session = await getServerSession(authOptions)

  // S'il n'y a pas de session, rediriger vers la page de connexion
  if (!session) {
    redirect(redirectTo)
  }

  // Si un rôle est requis et que l'utilisateur n'a pas ce rôle, rediriger
  if (requiredRole && session.user.role !== requiredRole) {
    redirect('/unauthorized')
  }

  // Si la session existe et (si nécessaire) a le bon rôle, afficher le contenu
  return <>{children}</>
}
