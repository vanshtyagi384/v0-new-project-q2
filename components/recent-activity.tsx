import { Check, FileText, MessageSquare, Video } from "lucide-react"

export default function RecentActivity() {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-4">
        <div className="rounded-full bg-green-100 p-2 dark:bg-green-900">
          <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">Completed daily check-in</p>
          <p className="text-sm text-muted-foreground">Today at 9:30 AM</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-900">
          <FileText className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">Read article: "Managing Remote Work Stress"</p>
          <p className="text-sm text-muted-foreground">Yesterday at 3:15 PM</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <div className="rounded-full bg-purple-100 p-2 dark:bg-purple-900">
          <Video className="h-4 w-4 text-purple-600 dark:text-purple-400" />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">Attended therapy session</p>
          <p className="text-sm text-muted-foreground">May 17 at 2:00 PM</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <div className="rounded-full bg-teal-100 p-2 dark:bg-teal-900">
          <MessageSquare className="h-4 w-4 text-teal-600 dark:text-teal-400" />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">Participated in support group</p>
          <p className="text-sm text-muted-foreground">May 16 at 7:00 PM</p>
        </div>
      </div>
    </div>
  )
}
