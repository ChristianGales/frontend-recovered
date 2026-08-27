import { Receipt } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { formatCurrency } from "@/lib/utils/currency"
import type { Assessment } from "@/types/student/enrollment"

interface AssessmentOfFeesCardProps {
  assessment: Assessment
}

const AssessmentOfFeesCard = ({ assessment }: AssessmentOfFeesCardProps) => {
  const tuitionTotal = assessment.tuitionRatePerUnit * assessment.tuitionUnits
  const labTotal = assessment.labRatePerUnit * assessment.labUnits
  const miscTotal = assessment.miscFees.reduce((sum, fee) => sum + fee.amount, 0)
  const grandTotal = tuitionTotal + labTotal + miscTotal
  const balance = grandTotal - assessment.amountPaid

  return (
    <div className="rounded-2xl border bg-card p-4">
      <div className="mb-4 flex items-center gap-2">
        <Receipt className="h-5 w-5 text-primary" />
        <h2 className="font-semibold">Assessment of Fees</h2>
      </div>

      <div className="flex flex-col gap-2 border-b pb-3 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">
            Tuition ({assessment.tuitionRatePerUnit.toFixed(2)} × {assessment.tuitionUnits})
          </span>
          <span className="font-medium">{formatCurrency(tuitionTotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">
            Laboratory ({assessment.labRatePerUnit.toFixed(2)} × {assessment.labUnits})
          </span>
          <span className="font-medium">{formatCurrency(labTotal)}</span>
        </div>
      </div>

      <div className="flex flex-col gap-1.5 border-b py-3 text-sm">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Miscellaneous Fees
        </p>
        {assessment.miscFees.map((fee) => (
          <div key={fee.label} className="flex justify-between">
            <span className="text-muted-foreground">{fee.label}</span>
            <span>{formatCurrency(fee.amount)}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 pt-3">
        <div className="flex justify-between text-base font-bold">
          <span>Total</span>
          <span>{formatCurrency(grandTotal)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Amount Paid</span>
          <span>{formatCurrency(assessment.amountPaid)}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Balance</span>
          <Badge variant={balance > 0 ? "destructive" : "outline"}>
            {formatCurrency(balance)}
          </Badge>
        </div>
        {assessment.orNumber !== "0" && (
          <p className="text-xs text-muted-foreground">O.R. Number: {assessment.orNumber}</p>
        )}
      </div>
    </div>
  )
}

export default AssessmentOfFeesCard