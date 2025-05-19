"use client"

import { useState, useRef, useEffect } from "react"
import { Mic, MicOff, Volume2, VolumeX, Play, Pause, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mock responses that would come from Gemini AI in a real implementation
const mockResponses: Record<string, string[]> = {
  default: [
    "Great job completing your work session! Taking regular breaks is essential for maintaining mental clarity. How are you feeling right now?",
    "Congratulations on finishing your work block! You've made excellent progress today. Remember that consistent effort leads to meaningful results.",
    "Work session complete! I notice you've been working consistently this week. That kind of dedication deserves recognition. Would you like to take a moment for a quick mindfulness exercise?",
    "Well done on completing your work session! I've noticed you've been working for 3 hours straight. Consider taking a 15-minute break to refresh your mind.",
    "Excellent! You've completed your scheduled work block. Based on your recent mood patterns, physical activity might help boost your energy. Would you like me to suggest a quick desk exercise?",
    "Work session complete! You've been maintaining a great balance between focused work and breaks today. This is excellent for your cognitive health and productivity.",
  ],
  focus: [
    "You've completed your deep focus session! Deep work like this builds your concentration muscle and leads to higher quality output. How do you feel about what you accomplished?",
    "Deep focus session complete! Your ability to concentrate for extended periods is improving. I notice this is your third deep work session this week - that's excellent progress.",
    "Great job on your focus work! Research shows that regular deep work sessions like this one significantly improve cognitive performance over time. Would you like to schedule another session today?",
  ],
  creative: [
    "Creative session complete! Creative work requires different energy than analytical tasks. Taking a short walk now might help your ideas continue to develop in your subconscious mind.",
    "You've finished your creative work block! Remember that creative insights often come during downtime after focused work. Consider taking a complete break from screens for the next 15 minutes.",
    "Creative session done! I notice you've been alternating between creative and analytical work today - that's an excellent strategy for maintaining mental flexibility and preventing burnout.",
  ],
  email: [
    "Email processing session complete! You've done great work tackling your communications. Consider turning off email notifications until your next dedicated email session.",
    "You've finished your email block! Processing messages in batches like this is much more efficient than checking throughout the day. Your productivity metrics show improvement with this approach.",
    "Email session complete! I notice this is your second email session today. Remember that most remote workers find 2-3 dedicated email sessions per day optimal for productivity and mental wellbeing.",
  ],
  learning: [
    "Learning session complete! Research shows that taking a break now will help solidify the information you've just studied. Consider reviewing these concepts again tomorrow for optimal retention.",
    "Great job with your learning session! Consistent study sessions like this one are the key to mastering new skills. Would you like to schedule another session for tomorrow?",
    "Learning block complete! I notice you've been focusing on this topic for several sessions this week. Your consistent approach to learning is admirable and effective.",
  ],
  planning: [
    "Planning session complete! You've set yourself up for success by taking time to plan. Research shows that every minute spent planning saves 10 minutes in execution.",
    "You've finished your planning block! Clear planning like this reduces cognitive load and decision fatigue throughout your workday. Well done on this investment in your productivity.",
    "Planning session done! I notice you regularly schedule planning sessions - this proactive approach is strongly correlated with lower stress levels and higher achievement in remote work.",
  ],
  admin: [
    "Administrative work complete! While these tasks might not always be exciting, they're essential for maintaining smooth operations. Well done on tackling them efficiently.",
    "Admin session finished! You've cleared these necessary tasks from your plate, which should free up mental space for more focused or creative work. What would you like to focus on next?",
    "Administrative block complete! I notice you schedule these sessions strategically - handling admin tasks in batches like this is much more efficient than doing them sporadically throughout the week.",
  ],
}

interface VoiceAssistantProps {
  isOpen: boolean
  onClose: () => void
  workType?: string
}

export default function VoiceAssistant({ isOpen, onClose, workType = "default" }: VoiceAssistantProps) {
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [volume, setVolume] = useState(80)
  const [autoRespond, setAutoRespond] = useState(true)
  const [response, setResponse] = useState("")
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Simulate receiving a response from Gemini AI
  useEffect(() => {
    if (isOpen && autoRespond && !response) {
      // Get responses for the specific work type, or fall back to default
      const responsesForType = mockResponses[workType] || mockResponses.default
      const randomResponse = responsesForType[Math.floor(Math.random() * responsesForType.length)]
      setResponse(randomResponse)

      // In a real implementation, we would use the Web Speech API to speak the response
      // For now, we'll just simulate the speaking state
      setIsSpeaking(true)
      const timer = setTimeout(() => {
        setIsSpeaking(false)
      }, randomResponse.length * 80) // Rough estimate of speaking time

      return () => clearTimeout(timer)
    }
  }, [isOpen, autoRespond, response, workType])

  const toggleListening = () => {
    setIsListening(!isListening)
    if (!isListening) {
      // In a real implementation, this would start speech recognition
      // For now, we'll just simulate listening
    } else {
      // Stop listening
    }
  }

  const toggleSpeaking = () => {
    setIsSpeaking(!isSpeaking)
    if (audioRef.current) {
      if (isSpeaking) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
    }
  }

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0])
    if (audioRef.current) {
      audioRef.current.volume = value[0] / 100
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Gemini AI" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">Gemini Voice Assistant</h3>
                <p className="text-sm text-muted-foreground">
                  {workType && workType !== "default"
                    ? `${workType.charAt(0).toUpperCase() + workType.slice(1)} session complete`
                    : "Work session complete"}
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="bg-muted p-4 rounded-lg mb-4 min-h-[100px] flex items-center">
            <p className="text-sm">{response || "I'm here to support your wellbeing after work sessions."}</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Button
                  variant={isListening ? "default" : "outline"}
                  size="icon"
                  onClick={toggleListening}
                  className={isListening ? "bg-green-600 hover:bg-green-700" : ""}
                >
                  {isListening ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
                </Button>
                <Button
                  variant={isSpeaking ? "default" : "outline"}
                  size="icon"
                  onClick={toggleSpeaking}
                  className={isSpeaking ? "bg-green-600 hover:bg-green-700" : ""}
                >
                  {isSpeaking ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                </Button>
                <Button variant="outline" size="icon">
                  {isSpeaking ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <Volume2 className="h-4 w-4 text-muted-foreground" />
                <Slider value={[volume]} max={100} step={1} className="w-24" onValueChange={handleVolumeChange} />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Switch id="auto-respond" checked={autoRespond} onCheckedChange={setAutoRespond} />
                <Label htmlFor="auto-respond">Auto-respond after work sessions</Label>
              </div>
            </div>

            <div className="pt-2">
              <Button className="w-full bg-green-600 hover:bg-green-700" onClick={onClose}>
                Continue
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* This audio element would be used in a real implementation */}
      <audio ref={audioRef} className="hidden" />
    </div>
  )
}
