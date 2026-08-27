import { Wallet } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { formatCurrency } from "@/lib/utils/currency"
import type { StatementOfAccount } from "@/types/student/soa"

interface SoaSummaryCardProps {
  soa: StatementOfAccount
}

const SoaSummaryCard = ({ soa }: SoaSummaryCardProps) => {
  const totalAssessment =
    soa.tuitionAndMisc + soa.books + soa.peUniform + soa.nstpGradFee +
    soa.gradFee + soa.afflFee + soa.stFee + soa.others

  const totalPaid = soa.payments.reduce((sum, p) => sum + p.amount, 0)
  const currentBalance = soa.payments.length > 0
    ? soa.payments[soa.payments.length - 1].balance
    : totalAssessment

  const feeRows = [
    { label: "Tuition & Misc.", value: soa.tuitionAndMisc },
    { label: "Books", value: soa.books },
    { label: "P.E. Uniform", value: soa.peUniform },
    { label: "NSTP Grad Fee", value: soa.nstpGradFee },
    { label: "Grad Fee", value: soa.gradFee },
    { label: "Affl. Fee", value: soa.afflFee },
    { label: "ST Fee", value: soa.stFee },
    { label: "Others", value: soa.others },
  ].filter((row) => row.value > 0)

  return (
    <div className="rounded-2xl border bg-card p-4">
      <div className="mb-4 flex items-center gap-2">
        <Wallet className="h-5 w-5 text-primary" />
        <h2 className="font-semibold">Statement of Account</h2>
      </div>

      <div className="mb-3 flex flex-col gap-1 text-sm text-muted-foreground">
        <p>{soa.studentName} · {soa.courseYear}</p>
        <p>{soa.schoolYear} · {soa.semester}</p>
      </div>

      <div className="flex flex-col gap-1.5 border-y py-3 text-sm">
        {feeRows.map((row) => (
          <div key={row.label} className="flex justify-between">
            <span className="text-muted-foreground">{row.label}</span>
            <span>{formatCurrency(row.value)}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 pt-3">
        <div className="flex justify-between text-base font-bold">
          <span>Total Assessment</span>
          <span>{formatCurrency(totalAssessment)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Total Paid</span>
          <span>{formatCurrency(totalPaid)}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Current Balance</span>
          <Badge variant={currentBalance > 0 ? "destructive" : "outline"}>
            {formatCurrency(currentBalance)}
          </Badge>
        </div>
      </div>
    </div>
  )
}

export default SoaSummaryCard