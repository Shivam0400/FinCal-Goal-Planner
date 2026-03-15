"use client";

export default function TeamModal({open, setOpen}:any){

if(!open) return null;

return(

<div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">

<div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-8 w-[90%] max-w-2xl text-center text-white">

<h2 className="text-2xl font-semibold text-cyan-300 mb-6">
Team QuantumFin
</h2>

<div className="grid sm:grid-cols-3 gap-6">

{/* Shivam */}

<div className="text-center">

<img
src="/team/shivam.jpg"
className="w-24 h-24 mx-auto rounded-full border border-white/20 object-cover"
/>

<p className="mt-3 font-semibold">
Shivam Sony
</p>

<p className="text-gray-400 text-sm">
Frontend Development & Implementation</p>

</div>

{/* Shantanu */}

<div>

<img
src="/team/shantanu.jpg"
className="w-24 h-24 mx-auto rounded-full border border-white/20 object-cover"
/>

<p className="mt-3 font-semibold">
Shantanu Kumar
</p>

<p className="text-gray-400 text-sm">
Financial Research & Strategy</p>
</div>

{/* Priyanshu*/}

<div>

<img
src="/team/priyanshu.jpg"
className="w-24 h-24 mx-auto rounded-full border border-white/20 object-cover"
/>

<p className="mt-3 font-semibold">
Priyanshu Raj
</p>

<p className="text-gray-400 text-sm">
UI/UX Design Support</p>

</div>

</div>

<button
onClick={()=>setOpen(false)}
className="mt-6 bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-600 transition"
>
Close
</button>

</div>

</div>

);
}