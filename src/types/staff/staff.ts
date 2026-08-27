export type StaffStatus = "active" | "inactive"

export type StaffRole = "admin" | "college_registrar" | "basic_education_registrar" | "instructor" | "teacher" | "president"

export interface StaffUser {
  id: string
  employeeId: string
  firstName: string
  middleName?: string
  lastName: string
  email: string
  password: string
  position: string
  office: string
  status: StaffStatus
  role: StaffRole
}

export type StaffSession = Omit<StaffUser, "password">