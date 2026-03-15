"use client";

import { useState } from "react";
import Calculator from "../components/Calculator";
import ResultChart from "../components/ResultChart";
import StepIndicator from "../components/StepIndicator";
import TeamModal from "../components/TeamModal";

export default function Home(){

const [values,setValues] = useState<any>({
future:0,
sip:0,
years:10,
returnRate:12
});

const [openTeam,setOpenTeam] = useState(false);

const formatCurrency = (num:number)=>{
return new Intl.NumberFormat('en-IN',{
style:'currency',
currency:'INR',
maximumFractionDigits:0
}).format(num);
};

return(

<main className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] text-white px-6 py-14">

<div className="max-w-7xl mx-auto">

{/* HEADER */}

<div className="text-center mb-14">

<h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
FinCal Goal Planner
</h1>

<p className="text-gray-400 mt-3">
Smart investment planning tool
</p>

</div>

{/* TOP GRID */}

<div className="grid lg:grid-cols-2 gap-10">

{/* LEFT */}

<div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl">

<StepIndicator step={1}/>

<Calculator setValues={setValues}/>

</div>

{/* RIGHT */}

<div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl">

<h2 className="text-xl font-semibold text-cyan-300 mb-4">
Live Investment Projection
</h2>

<p className="text-gray-400 mb-6">
Adjust sliders to see how your investment grows over time.
</p>

<h3 className="text-gray-300">
Future Goal Value
</h3>

<p className="text-2xl sm:text-3xl font-bold">
{formatCurrency(values.future)}
</p>

<h3 className="text-gray-300 mt-4">
Required Monthly SIP
</h3>

<p className="text-xl text-cyan-300 font-semibold">
{formatCurrency(values.sip)}
</p>

<div className="mt-6 bg-black/30 p-4 rounded-xl">

<ResultChart
future={values.future}
years={values.years}
sip={values.sip}
returnRate={values.returnRate}
/>

</div>

</div>

</div>

{/* BOTTOM SECTION */}

<div className="mt-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10">

<h2 className="text-2xl font-semibold text-cyan-300 mb-6">
Why Goal Planning Matters
</h2>

<p className="text-gray-400 leading-relaxed max-w-4xl">
Financial goals like buying a house, car, or funding education become
more expensive over time due to inflation.
This tool helps you estimate how much you should invest monthly through SIP to achieve your goals.
</p>

</div>

{/* FOOTER */}

<footer className="mt-20 border-t border-white/10 pt-8 pb-6 text-center">

<h3 className="text-lg font-semibold text-cyan-300">
FinCal Goal Planner
</h3>

<p className="text-gray-400 text-sm mt-2">
Smart financial goal planning tool built for TECHNEX'26 Hackathon
</p>

<p className="text-gray-500 text-xs mt-4">
© 2026 
<span
className="text-cyan-400 cursor-pointer hover:underline"
onClick={()=>setOpenTeam(true)}
>
 Team QuantumFin
</span>
 — All Rights Reserved
</p>

</footer>

{/* TEAM MODAL */}

<TeamModal open={openTeam} setOpen={setOpenTeam}/>

</div>

</main>

);

}