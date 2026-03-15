"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Calculator({ setValues }: any) {

const router = useRouter();

const [goal, setGoal] = useState("House");
const [cost, setCost] = useState(500000);
const [years, setYears] = useState(10);
const [inflation, setInflation] = useState(6);
const [returnRate, setReturnRate] = useState(12);

const [futureValue,setFutureValue] = useState(0);
const [sipValue,setSipValue] = useState(0);

useEffect(() => {

const inflRate = inflation / 100;
const FV = cost * Math.pow((1 + inflRate), years);

const r = (returnRate / 100) / 12;
const n = years * 12;

const sip = (FV * r) / ((Math.pow((1 + r), n) - 1) * (1 + r));

setFutureValue(FV);
setSipValue(sip);

setValues({
goal,
cost,
years,
inflation,
returnRate,
future: FV,
sip
});

}, [goal, cost, years, inflation, returnRate, setValues]);



const calculate = () => {

router.push(
`/result?goal=${goal}&cost=${cost}&years=${years}&inflation=${inflation}&returnRate=${returnRate}&future=${futureValue}&sip=${sipValue}`
);

};

return (

<div className="space-y-6">

<h2 className="text-xl font-semibold text-cyan-300">
Goal Planner
</h2>


{/* Goal Type */}

<div>
<label className="text-gray-300 text-sm">
Goal Type
</label>

<select
value={goal}
onChange={(e) => setGoal(e.target.value)}
className="w-full bg-white/10 border border-white/20 p-3 rounded-lg focus:ring-2 focus:ring-cyan-400"
>
<option className="text-black">House</option>
<option className="text-black">Education</option>
<option className="text-black">Car</option>
<option className="text-black">Wedding</option>
<option className="text-black">Vacation</option>
</select>
</div>


{/* Current Cost */}

<div>
<label className="text-gray-300 text-sm">
Current Cost (₹)
</label>

<input
type="number"
value={cost}
onChange={(e) => setCost(Number(e.target.value))}
className="w-full bg-white/10 border border-white/20 p-3 rounded-lg focus:ring-2 focus:ring-cyan-400"
/>

<p className="text-xs text-gray-400 mt-1">
Example: Car ₹8,00,000 | House ₹50,00,000
</p>

</div>


{/* Years */}

<div>

<label className="text-gray-300 text-sm">
Years to Goal
</label>

<input
type="range"
min="1"
max="30"
value={years}
onChange={(e) => setYears(Number(e.target.value))}
className="w-full accent-cyan-400"
/>

<p className="text-cyan-300">{years} years</p>

</div>


{/* Inflation */}

<div>

<label className="text-gray-300 text-sm">
Inflation Rate
</label>

<input
type="range"
min="1"
max="12"
value={inflation}
onChange={(e) => setInflation(Number(e.target.value))}
className="w-full accent-cyan-400"
/>

<p className="text-cyan-300">{inflation}%</p>

</div>


{/* Return */}

<div>

<label className="text-gray-300 text-sm">
Expected Return
</label>

<input
type="range"
min="5"
max="20"
value={returnRate}
onChange={(e) => setReturnRate(Number(e.target.value))}
className="w-full accent-cyan-400"
/>

<p className="text-cyan-300">{returnRate}%</p>

</div>


{/* Button */}

<button
onClick={calculate}
className="w-full mt-6 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-500 p-3 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-cyan-500/20"
>
View Detailed Plan
</button>


</div>

);

}