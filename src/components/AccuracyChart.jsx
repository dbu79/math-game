import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from "recharts";

function AccuracyChart( { equationLog }) {
    let correctCount = 0 

    const data = equationLog.map((eq, i) => {
        if (eq.result === "correct") correctCount++

        return {
            question: i + 1, 
            accuracy: Math.round((correctCount / (i + 1)) * 100),
            equation: `${eq.n1} ${eq.operator} ${eq.n2} = ${eq.answer}`,
            result: eq.result, 
            pointColor: eq.result === "correct" ? "#2f9e63" : "#ca4754"
        }
    })

    return (
        <div className="accuracy-chart">
            <ResponsiveContainer>
                <LineChart 
                data={data}
                margin={{
                    top: 10, right: 10, left: 10, bottom: 10,
                }}
                >
                    <CartesianGrid stroke="#2c2c2a"/>

                    <XAxis 
                    dataKey="question" 
                    label={{
                        value: "Question", 
                        position: "insideLeft", 
                        offset: -5}}
                    tick={{ fill: "#646669"}}
                    />
                    <YAxis
                    domain={[0, 100]}
                    tick={{ fill: "#646669"}}
                    tickFormatter={v => `${v}%`}
                    />

                    <Tooltip
                        formatter={(value, name, props) => [
                        `${props.payload.equation}`, `${props.payload.result}`
                        ]}
                    />
                    <Line
                        type="monotone"
                        dataKey="accuracy"
                        stroke="#5ec4ff"
                        strokeWidth={2}
                        dot={(props) => (
                            <circle
                            cx={props.cx}
                            cy={props.cy}
                            r={5}
                            fill={props.payload.pointColor}
                            // stroke="#e3e3ea"
                            strokeWidth={2}
                            />
                        )}
                        activeDot={{ r: 7}}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AccuracyChart