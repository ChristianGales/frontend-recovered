import { BookOpen } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { EnrolledSubject } from "@/types/student/enrollment"

interface EnrolledSubjectsCardProps {
  subjects: EnrolledSubject[]
}

const EnrolledSubjectsCard = ({ subjects }: EnrolledSubjectsCardProps) => {
  const totalUnits = subjects.reduce((sum, s) => sum + s.units, 0)

  return (
    <div className="rounded-2xl border bg-card p-4">
      <div className="mb-4 flex items-center gap-2">
        <BookOpen className="h-5 w-5 text-primary" />
        <h2 className="font-semibold">Enrolled Subjects</h2>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Code</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-center">Units</TableHead>
            <TableHead>Schedule</TableHead>
            <TableHead>Instructor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {subjects.map((subject) => (
            <TableRow key={subject.code}>
              <TableCell className="font-medium">{subject.code}</TableCell>
              <TableCell>{subject.description}</TableCell>
              <TableCell className="text-center">{subject.units}</TableCell>
              <TableCell className="text-muted-foreground">
                {subject.classTime} · {subject.days}
              </TableCell>
              <TableCell className="text-muted-foreground">
                {subject.instructor}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-3 flex justify-end border-t pt-3 text-sm font-semibold">
        Total Units: {totalUnits}
      </div>
    </div>
  )
}

export default EnrolledSubjectsCard