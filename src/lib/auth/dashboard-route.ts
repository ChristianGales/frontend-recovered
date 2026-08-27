// lib/auth/dashboard-routes.ts
interface RouteRule {
  prefix: string
  roles: string[]
}

const ROUTE_RULES: RouteRule[] = [
  { prefix: "/student", roles: ["student"] },
  { prefix: "/admin", roles: ["admin"] },
  { prefix: "/registrar/college", roles: ["college_registrar"] },
  { prefix: "/registrar/basic-ed", roles: ["basic_education_registrar"] },
  { prefix: "/faculty", roles: ["instructor", "teacher"] },
  { prefix: "/president", roles: ["president"] },
]

export function isAllowed(pathname: string, role: string): boolean {
  const rule = ROUTE_RULES.find((r) => pathname.startsWith(r.prefix))
  if (!rule) return false
  return rule.roles.includes(role)
}