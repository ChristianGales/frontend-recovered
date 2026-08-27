export interface Payment {
    date: string
    amount: number
    orNumber: string
    balance: number
  }
  
  export interface StatementOfAccount {
    studentNumber: string
    studentName: string
    courseYear: string
    schoolYear: string
    semester: string
    tuitionAndMisc: number
    books: number
    peUniform: number
    nstpGradFee: number
    gradFee: number
    afflFee: number
    stFee: number
    others: number
    bookkeeper: string
    payments: Payment[]
  }