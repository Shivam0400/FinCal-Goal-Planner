"use client";

export default function StepIndicator({step}:{step:number}){

return(

<div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">

<div className="flex items-center gap-2">
<div className={`w-8 h-8 flex items-center justify-center rounded-full
${step>=1 ? "bg-blue-600 text-white":"bg-gray-700 text-gray-400"}`}>
1
</div>
<p className="text-sm text-gray-300">Goal Details</p>
</div>

<div className="w-10 h-[2px] bg-gray-600"></div>

<div className="flex items-center gap-2">
<div className={`w-8 h-8 flex items-center justify-center rounded-full
${step>=2 ? "bg-blue-600 text-white":"bg-gray-700 text-gray-400"}`}>
2
</div>
<p className="text-sm text-gray-300">Projection</p>
</div>

<div className="w-10 h-[2px] bg-gray-600"></div>

<div className="flex items-center gap-2">
<div className={`w-8 h-8 flex items-center justify-center rounded-full
${step>=3 ? "bg-blue-600 text-white":"bg-gray-700 text-gray-400"}`}>
3
</div>
<p className="text-sm text-gray-300">Investment Plan</p>
</div>

</div>

);
}