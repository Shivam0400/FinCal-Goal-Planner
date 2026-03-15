"use client";

import { Line } from "react-chartjs-2";
import {
Chart as ChartJS,
CategoryScale,
LinearScale,
PointElement,
LineElement,
Tooltip,
Legend,
Filler
} from "chart.js";

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Tooltip,
Legend,
Filler
);

export default function ResultChart({
future,
years,
sip,
returnRate
}:{
future:number,
years:number,
sip:number,
returnRate:number
}){

const labels:string[] = [];
const values:number[] = [];

let investment = 0;

const monthlyRate = (returnRate/100)/12;
const months = years * 12;

for(let i = 1; i <= months; i++){

investment = (investment + sip) * (1 + monthlyRate);

if(i % 12 === 0){
labels.push("Year " + (i/12));
values.push(investment);
}

}

const data = {

labels: labels,

datasets: [

{

label: "Investment Growth",

data: values,

borderColor:"#224c87",

backgroundColor: "rgba(56,189,248,0.25)",

fill: true,

tension: 0.4,

pointRadius: 3,

pointBackgroundColor: "#38bdf8"

}

]

};

const options:any = {

responsive: true,

maintainAspectRatio: false,

plugins: {

legend: {

labels: {

color: "#e5e7eb"

}

}

},

scales: {

x: {

ticks: {

color: "#cbd5f5"

},

grid: {

color: "rgba(255,255,255,0.05)"

}

},

y: {

ticks: {

color: "#cbd5f5"

},

grid: {

color: "rgba(255,255,255,0.05)"

}

}

}

};

return (

<div className="mt-6 w-full max-w-[700px] mx-auto">
    <div className="overflow-x-auto"></div>
<Line data={data} options={options} />

</div>

);

}