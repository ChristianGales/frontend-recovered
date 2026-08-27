export type SessionType = "student" | "staff"

export interface ActiveSession {
  type: SessionType
  role: string
  [key: string]: unknown
}

export function getActiveSession(): ActiveSession | null {
  if (typeof window === "undefined") return null

  const staffRaw = sessionStorage.getItem("activeStaff")
  if (staffRaw) {
    try {
      return { ...JSON.parse(staffRaw), type: "staff" }
    } catch {
      sessionStorage.removeItem("activeStaff")
    }
  }

  const studentRaw = sessionStorage.getItem("activeStudent")
  if (studentRaw) {
    try {
      return { ...JSON.parse(studentRaw), type: "student" }
    } catch {
      sessionStorage.removeItem("activeStudent")
    }
  }

  return null
}

export function clearActiveSession(type?: SessionType) {
  if (!type || type === "staff") sessionStorage.removeItem("activeStaff")
  if (!type || type === "student") sessionStorage.removeItem("activeStudent")
}