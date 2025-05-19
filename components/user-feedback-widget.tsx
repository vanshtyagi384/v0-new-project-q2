"use client"

import { useState } from "react"
import { MessageSquare, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import FeedbackForm from "@/components/feedback-form"

export default function UserFeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <Card className="w-[350px] shadow-lg">
          <CardContent className="p-0">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-medium">Share Your Feedback</h3>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-4">
              <FeedbackForm />
            </div>
          </CardContent>
        </Card>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full h-12 w-12 bg-green-600 hover:bg-green-700 shadow-lg"
        >
          <MessageSquare className="h-5 w-5" />
          <span className="sr-only">Open feedback form</span>
        </Button>
      )}
    </div>
  )
}
