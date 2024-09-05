
"use client"

import { useState,useEffect } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"

export function Dashboard() {
  const [darkMode, setDarkMode] = useState(true)
  const [wrist,setWrist] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.251.246/smart-band",{
          method: "GET"
        });
        const data = await response.json();
        console.log(data);
        if(data.value === 1) setWrist(true);
        else setWrist(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); 
    const intervalId = setInterval(fetchData, 1000);
    return () => clearInterval(intervalId); 
 }, []);

  return (
    <div className={`flex min-h-screen flex-col bg-background ${darkMode ? "dark" : ""}`}>
      <main className="grid flex-1 grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-1 md:col-span-2 lg:col-span-3">
          <CardHeader className="pb-4">
            <CardTitle>Health Overview</CardTitle>
            <CardDescription>Your overall health status and upcoming appointments.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Pulse Rate</CardTitle>
              </CardHeader>
              <CardContent className="">
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-bold ">{wrist? '72' : '-'}</div>
                  <Progress value={wrist? 72 : 0} className="h-4 w-32 " />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>On Wrist</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-bold text-[#20ab20]">
                    {wrist? 'Yes' : 'No'}
                  </div>
                 
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Blood Pressure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-bold">{wrist? '120/80' : "-"}</div>
                  <div className="text-sm text-muted-foreground">{wrist? 'Normal' : '-'}</div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
        <Card className="col-span-1 md:col-span-2 lg:col-span-1">
          <CardHeader className="pb-4">
            <CardTitle className="text-[#20a520]">Medication Schedule</CardTitle>
            <CardDescription>Track your medication intake and stay on top of your schedule.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Metformin</div>
                  <p className="text-sm text-muted-foreground">Taken 2 times a day</p>
                </div>
                <Checkbox  />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Atorvastatin</div>
                  <p className="text-sm text-muted-foreground">Taken once a day</p>
                </div>
                <Checkbox  />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Lisinopril</div>
                  <p className="text-sm text-muted-foreground">Taken once a day</p>
                </div>
                <Checkbox  />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-1 md:col-span-2 lg:col-span-2">
          <CardHeader className="pb-4">
            <CardTitle className="text-[#ffb300]">AI-Powered Insights</CardTitle>
            <CardDescription>Predictive analytics to help you stay on top of your health.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div>
                <div className="font-medium">Diabetes Risk Prediction</div>
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-bold">12%</div>
                  <Progress value={12} className="h-4 w-32" />
                </div>
              </div>
              <div>
                <div className="font-medium">Heart Disease Risk Prediction</div>
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-bold">8%</div>
                  <Progress value={8} className="h-4 w-32" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
      </main>
    </div>
  )
}

