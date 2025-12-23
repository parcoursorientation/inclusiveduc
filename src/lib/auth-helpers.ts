
import { getServerSession } from 'next-auth'
import { authOptions } from './auth'

// Vérifier si un utilisateur est authentifié
export async function isAuthenticated() {
  const session = await getServerSession(authOptions)
  return !!session
}

// Vérifier si un utilisateur a un rôle spécifique
export async function hasRole(role: string) {
  const session = await getServerSession(authOptions)
  return session?.user?.role === role
}

// Vérifier si un utilisateur est administrateur
export async function isAdmin() {
  return await hasRole('ADMIN')
}

// Obtenir la session de l'utilisateur
export async function getUserSession() {
  return await getServerSession(authOptions)
}

// Obtenir l'ID de l'utilisateur connecté
export async function getCurrentUserId() {
  const session = await getServerSession(authOptions)
  return session?.user?.id
}
