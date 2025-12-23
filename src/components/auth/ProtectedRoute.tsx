
"use client"

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, ReactNode } from 'react'

interface ProtectedRouteProps {
  children: ReactNode
  requiredRole?: string
  redirectTo?: string
}

export default function ProtectedRoute({ 
  children, 
  requiredRole, 
  redirectTo = '/login' 
}: ProtectedRouteProps) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    // Si la session est en cours de chargement, ne rien faire
    if (status === 'loading') return

    // S'il n'y a pas de session, rediriger vers la page de connexion
    if (!session) {
      router.push(redirectTo)
      return
    }

    // Si un rôle est requis et que l'utilisateur n'a pas ce rôle, rediriger
    if (requiredRole && session.user.role !== requiredRole) {
      router.push('/unauthorized')
      return
    }
  }, [session, status, router, requiredRole, redirectTo])

  // Afficher un indicateur de chargement pendant la vérification de la session
  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  // Si la session existe et (si nécessaire) a le bon rôle, afficher le contenu
  if (session && (!requiredRole || session.user.role === requiredRole)) {
    return <>{children}</>
  }

  // Par défaut, ne rien afficher en attendant la redirection
  return null
}
