import type { StatementOfAccount } from "@/types/student/soa"

export const dummyStatementsOfAccount: Record<string, StatementOfAccount> = {
  // Vanessa Comagdang — BSIT-4, fully paid
  "230461": {
    studentNumber: "230461",
    studentName: "Comagdang, Vanessa D.",
    courseYear: "BSIT - 4",
    schoolYear: "2026-2027",
    semester: "1st Semester",
    tuitionAndMisc: 5800,
    books: 0,
    peUniform: 0,
    nstpGradFee: 0,
    gradFee: 0,
    afflFee: 0,
    stFee: 0,
    others: 0,
    bookkeeper: "Rosalinda L. Aguilar",
    payments: [
      { date: "6-16-26", amount: 500, orNumber: "024714", balance: 5300 },
      { date: "7-30-26", amount: 2900, orNumber: "CEAP 50%", balance: 2400 },
      { date: "8-5-26", amount: 2400, orNumber: "027979", balance: 0 },
    ],
  },

  // Rio Atencio — BSIT-4, based on his registration/assessment, no payments yet
  // Rio Atencio — BSIT-4, partial payments made
"230460": {
  studentNumber: "230460",
  studentName: "Atencio, Rio Umanga",
  courseYear: "BSIT - 4",
  schoolYear: "2026-2027",
  semester: "1st Semester",
  tuitionAndMisc: 5800,
  books: 0,
  peUniform: 0,
  nstpGradFee: 0,
  gradFee: 0,
  afflFee: 0,
  stFee: 0,
  others: 0,
  bookkeeper: "Rosalinda Aguilar",
  payments: [
    { date: "5-19-26", amount: 1000, orNumber: "025108", balance: 4800 },
    { date: "7-14-26", amount: 2000, orNumber: "026442", balance: 2800 },
  ],
},
}