"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Alert() {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: "critical",
      title: "Potential Drug Interaction",
      description:
        "The medication you are taking, Metformin, may interact with your new prescription for Ibuprofen. This could lead to serious side effects. Please contact your doctor immediately.",
      timestamp: "2023-09-05 10:15 AM",
    },
    {
      id: 2,
      type: "warning",
      title: "Missed Medication Dose",
      description:
        "You missed your scheduled dose of Lisinopril this morning. It is important to take this medication as prescribed to maintain your blood pressure. Set a reminder to take your next dose.",
      timestamp: "2023-09-05 09:30 AM",
    },
    {
      id: 3,
      type: "info",
      title: "Low Medication Adherence",
      description:
        "Our records show you have been taking your Atorvastatin medication less frequently than prescribed. Maintaining consistent adherence is crucial for managing your cholesterol levels. Consider setting up medication reminders.",
      timestamp: "2023-09-04 05:45 PM",
    },
  ])
  const [showDetails, setShowDetails] = useState(null)
  useEffect(() => {
    const interval = setInterval(() => {
      setAlerts((prevAlerts) => [
        ...prevAlerts,
        {
          id: prevAlerts.length + 1,
          type: Math.random() < 0.5 ? "critical" : "warning",
          title: "New Alert",
          description: "This is a new alert that has just been added.",
          timestamp: new Date().toLocaleString(),
        },
      ])
    }, 30000)
    return () => clearInterval(interval)
  }, [])
  const handleAlertClick = (alert) => {
    setShowDetails(alert)
  }
  const handleCloseDetails = () => {
    setShowDetails(null)
  }
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 overflow-y-auto bg-muted">
        <div className="container mx-auto py-8 px-4 md:px-8">
          <div className="grid gap-4 animate-fade-in">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`bg-white rounded-lg shadow-md p-4 cursor-pointer transition-transform hover:scale-[1.02] ${
                  alert.type === "critical"
                    ? "border-l-4 border-red-500"
                    : alert.type === "warning"
                    ? "border-l-4 border-yellow-500"
                    : "border-l-4 border-blue-500"
                } ${showDetails?.id === alert.id ? "ring-2 ring-primary" : "hover:ring-2 hover:ring-primary"}`}
                onClick={() => handleAlertClick(alert)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{alert.title}</h3>
                    <p className="text-sm text-muted-foreground">{alert.timestamp}</p>
                  </div>
                  <Badge variant={alert.type === "critical" ? "danger" : alert.type === "warning" ? "warning" : "info"}>
                    {alert.type.toUpperCase()}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      {showDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10 animate-fade-in">
          <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">{showDetails.title}</h2>
              <Button variant="ghost" onClick={handleCloseDetails}>
                <XIcon className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-muted-foreground mb-4">{showDetails.description}</p>
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{showDetails.timestamp}</p>
              <Badge
                variant={
                  showDetails.type === "critical" ? "danger" : showDetails.type === "warning" ? "warning" : "info"
                }
              >
                {showDetails.type.toUpperCase()}
              </Badge>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
