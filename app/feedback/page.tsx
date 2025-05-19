import { ArrowLeft } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import FeedbackForm from "@/components/feedback-form"
import FeedbackStats from "@/components/feedback-stats"

export default function FeedbackPage() {
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <div className="flex items-center space-x-2">
            <Link href="/dashboard">
              <Button variant="outline" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h2 className="text-3xl font-bold tracking-tight">Feedback</h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <FeedbackForm />
          </div>
          <div>
            <FeedbackStats />
          </div>
        </div>
      </div>
    </div>
  )
}
