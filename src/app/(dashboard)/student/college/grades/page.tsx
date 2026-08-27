"use client"

import { useEffect, useState } from "react"

import DashboardHeader from "@/components/dashboard/dashboard-header"
import TranscriptSummaryCard from "@/components/dashboard/transcript-summary-card"
import SemesterGradesTable from "@/components/dashboard/semester-grades-table"
import { getActiveSession } from "@/lib/auth/session"
import { dummyTranscripts } from "@/lib/dummy/student/grades"
import type { Transcript } from "@/types/student/grades"

const TranscriptPage = () => {
  const [transcript, setTranscript] = useState<Transcript | null>(null)

  useEffect(() => {
    const session = getActiveSession()
    console.log("session:", session)
    console.log("looking up studentNumber:", session?.studentNumber)
    console.log("found in dummyTranscripts?", session?.studentNumber ? !!dummyTranscripts[session.studentNumber as string] : "no session")
  
    if (!session) return
  
    const studentNumber = session.studentNumber as string | undefined
    if (studentNumber && dummyTranscripts[studentNumber]) {
      setTranscript(dummyTranscripts[studentNumber])
    }
  }, [])

  return (
    <div className="flex min-h-[calc(100vh-136px)] flex-col gap-6">
    
      {transcript ? (
        <>
          <TranscriptSummaryCard transcript={transcript} />

          <div className="flex flex-col gap-4">
            {transcript.semesters.map((semester) => (
              <SemesterGradesTable
                key={`${semester.schoolYear}-${semester.semester}`}
                semester={semester}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="rounded-2xl border bg-card p-6 text-center text-muted-foreground">
          No grade record found for this account yet.
        </div>
      )}
    </div>
  )
}

export default TranscriptPage