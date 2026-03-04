import type { Access, Where } from 'payload'

export const isAdminOrSelf: Access = ({ req }) => {
  const user = req.user

  if (!user) return false
  if (user.role === 'admin') return true

  return {
    id: {
      equals: user.id,
    },
  } satisfies Where
}
