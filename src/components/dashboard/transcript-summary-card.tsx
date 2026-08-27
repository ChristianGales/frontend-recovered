import { GraduationCap } from "lucide-react"
import type { Transcript } from "@/types/student/grades"

interface TranscriptSummaryCardProps {
  transcript: Transcript
}

const TranscriptSummaryCard = ({ transcript }: TranscriptSummaryCardProps) => {
  return (
    <div className="rounded-2xl border bg-card p-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Student Name</p>
          <p className="text-lg font-bold">{transcript.studentName}</p>
          <p className="text-sm text-muted-foreground">
            {transcript.studentNumber} · {transcript.course} · {transcript.yearLevel} · Curriculum {transcript.curriculum}
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-xl bg-primary/10 px-4 py-3">
          <GraduationCap className="h-6 w-6 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground">Total Earned Units</p>
            <p className="text-xl font-bold">{transcript.totalEarnedUnits.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TranscriptSummaryCard