// import React from 'react';
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';


const LineChart = () => {
    const subjectMarksData = [
        { id: 1, name: "Alice Johnson", math: 20, physics: 85, chemistry: 78 },
        { id: 2, name: "Bob Smith", math: 78, physics: 89, chemistry: 72 },
        { id: 3, name: "Charlie Brown", math: 85, physics: 91, chemistry: 88 },
        { id: 4, name: "David Lee", math: 62, physics: 73, chemistry: 66 },
        { id: 5, name: "Eva Davis", math: 96, physics: 84, chemistry: 90 },
        { id: 6, name: "Frank Wilson", math: 72, physics: 67, chemistry: 75 },
        { id: 7, name: "Grace Miller", math: 88, physics: 92, chemistry: 89 },
        { id: 8, name: "Hannah Turner", math: 69, physics: 78, chemistry: 71 },
        { id: 9, name: "Isabella Martinez", math: 91, physics: 87, chemistry: 93 },
        { id: 10, name: "Jack Harris", math: 79, physics: 76, chemistry: 82 }
    ]


    return (
        <div>
            <LChart width={1000} height={400} data={subjectMarksData}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey={"physics"} stroke='yellow'></Line>
                <Line dataKey="chemistry" stroke='purple'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;