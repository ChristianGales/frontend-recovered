export interface GradeEntry {
    code: string
    title: string
    instructor: string
    finalGrade: number | null
    completedGrade: number | null
    units: number
  }
  
  export interface SemesterGrades {
    schoolYear: string
    semester: string
    entries: GradeEntry[]
    totalUnits: number
  }
  
  export interface Transcript {
    studentNumber: string
    studentName: string
    course: string
    yearLevel: string
    curriculum: string
    semesters: SemesterGrades[]
    totalEarnedUnits: number
  }