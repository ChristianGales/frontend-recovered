export interface EnrolledSubject {
    code: string
    description: string
    units: number
    classTime: string
    days: string
    instructor: string
  }
  
  export interface FeeLineItem {
    label: string
    amount: number
  }
  
  export interface Assessment {
    tuitionRatePerUnit: number
    tuitionUnits: number
    labRatePerUnit: number
    labUnits: number
    miscFees: FeeLineItem[]
    amountPaid: number
    orNumber: string
  }
  
  export interface RegistrationRecord {
    studentNumber: string
    schoolYear: string
    semester: string
    courseSection: string
    yearLevel: string
    dateOfRegistration: string
    processedBy: string
    assessedBy: string
    approvedBy: string
    subjects: EnrolledSubject[]
    assessment: Assessment
  }