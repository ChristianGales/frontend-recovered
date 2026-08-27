import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import type { SemesterGrades } from "@/types/student/grades"
  
  interface SemesterGradesTableProps {
    semester: SemesterGrades
  }
  
  const formatGrade = (grade: number | null) => (grade === null ? "—" : grade.toFixed(2))
  
  const SemesterGradesTable = ({ semester }: SemesterGradesTableProps) => {
    const isInProgress = semester.entries.every((e) => e.finalGrade === null)
  
    return (
      <div className="rounded-2xl border bg-card p-4">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-semibold">
            {semester.schoolYear} · {semester.semester}
          </h3>
          {isInProgress && (
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              In Progress
            </span>
          )}
        </div>
  
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Code</TableHead>
              <TableHead>Subject Descriptive Title</TableHead>
              <TableHead className="text-center">Final Grade</TableHead>
              <TableHead className="text-center">Completed Grade</TableHead>
              <TableHead className="text-center">Unit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {semester.entries.map((entry) => (
              <TableRow key={entry.code}>
                <TableCell className="font-medium">{entry.code}</TableCell>
                <TableCell>
                  {entry.title}
                  <span className="text-muted-foreground"> ({entry.instructor})</span>
                </TableCell>
                <TableCell className="text-center">{formatGrade(entry.finalGrade)}</TableCell>
                <TableCell className="text-center">{formatGrade(entry.completedGrade)}</TableCell>
                <TableCell className="text-center">{entry.units}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
  
        <div className="mt-2 flex justify-end text-sm font-semibold">
          {semester.totalUnits.toFixed(2)}
        </div>
      </div>
    )
  }
  
  export default SemesterGradesTable