import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { formatCurrency } from "@/lib/utils/currency"
  import type { Payment } from "@/types/student/soa"
  
  interface PaymentHistoryTableProps {
    payments: Payment[]
  }
  
  const PaymentHistoryTable = ({ payments }: PaymentHistoryTableProps) => {
    return (
      <div className="rounded-2xl border bg-card p-4">
        <h2 className="mb-4 font-semibold">Payment History</h2>
  
        {payments.length === 0 ? (
          <p className="py-6 text-center text-sm text-muted-foreground">
            No payments recorded yet for this semester.
          </p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>O.R. No.</TableHead>
                <TableHead className="text-right">Balance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment, index) => (
                <TableRow key={`${payment.date}-${index}`}>
                  <TableCell>{payment.date}</TableCell>
                  <TableCell>{formatCurrency(payment.amount)}</TableCell>
                  <TableCell className="text-muted-foreground">{payment.orNumber}</TableCell>
                  <TableCell className="text-right font-medium">
                    {formatCurrency(payment.balance)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    )
  }
  
  export default PaymentHistoryTable