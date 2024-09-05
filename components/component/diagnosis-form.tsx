import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import MedicalHistoryContract from "../../utils/contracts/MedicalHistory" 
import web3 from "@/utils/web3"
import { useRouter } from "next/navigation"

export function DiagnosisForm() {
  const router = useRouter();
  const [aadharNumber,setAadharNumber] = useState('');
  const [disease,setDisease] = useState('');
  const [medication,setMedication] = useState('');
  const doctorName = "Dr. John Doe";
  const currentDate = new Date();
  const handleSubmit = async() => {
    const accounts = await web3.eth.getAccounts();
    const gasEstimate = await MedicalHistoryContract.methods.addMedicalRecord(aadharNumber,disease,[medication],doctorName,currentDate.getTime()).estimateGas({from : accounts[0]});
    await MedicalHistoryContract.methods.addMedicalRecord(aadharNumber,disease,[medication],doctorName,currentDate.getTime()).send({from : accounts[0], gas: gasEstimate});
    router.push('/');
  }
   return (
    <div className="space-y-6 w-[47vw] border-gray-600 rounded-lg bg-[#e6e4e4] hover:bg-[#dfdfdf]  border-[#3b3b3b] border-[1px] shadow-lg">
    <div className="space-y-2 text-center m-6 ">
      <h1 className="text-3xl font-bold text-[#2994f8]" >Patient Diagnosis</h1>
      <p className="text-gray-500 dark:text-gray-400">Upload your patient's diagnosis, disease, and medication.</p>
    </div>
    <div className=" grid grid-cols-2 gap-4 m-[5vh]">
      <div className="gap-4">
        <div className=" w-[45vh] max-w-[45vh] ">
          <Label htmlFor="patient-name">Patient Name</Label>
          <Input id="patient-name" placeholder="Enter patient name" className="border-[#0099ff] bg-[white]"required />
        </div>
        <div className=" w-[45vh] mt-3 max-w-[45vh]">
          <Label htmlFor="patient-age">Patient Age</Label>
          <Input id="patient-age" placeholder="Enter patient age" className="border-[#0099ff] bg-[white]" required type="number" />
        </div>
      </div>
      <div className=" w-[45vh] max-w-[45vh]">
        <Label htmlFor="diagnosis">Aadhar Number</Label>
        <Input id="aadharNumber" value={aadharNumber} className="border-[#0099ff] bg-[white]" onChange={(e) => {
          setAadharNumber(e.target.value);
        }} placeholder="Enter Patient's Aadhar Number" required />
      </div>
      <div className=" w-[45vh] max-w-[45vh]">
        <Label htmlFor="disease">Disease</Label>
        <Input id="disease" value={disease} className="border-[#0099ff] bg-[white]" onChange={(e) => {
          setDisease(e.target.value);
        }} placeholder="Enter disease" required />
      </div>
      <div className="w-[45vh] max-w-[45vh]">
        <Label htmlFor="medication">Medication</Label>
        <Input id="medication" value={medication} className="border-[#0099ff] bg-[white]" onChange={(e) => {
          setMedication(e.target.value);
        }} placeholder="Enter, seperated Medications" required />
      </div>
      <div className="w-[45vh] max-w-[45vh]">
        <Label htmlFor="pdf-upload">Upload PDF (Optional)</Label>
        <Input accept="application/pdf" id="pdf-upload" className="border-[#0099ff] bg-[white]" type="file"  />
      </div>

      <div className="w-[10vw] mt-[4vh] rounded-xxl">
      <Button onClick={handleSubmit} className=" bg-[#1bbe1b]" type="submit">
        Submit
      </Button >

      </div>
      
    </div>
    <div className="text-center m-6">
      </div>
  </div>
  
  )
}