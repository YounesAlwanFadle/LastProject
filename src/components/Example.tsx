import { PureComponent } from 'react';
import {
  ComposedChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface DataPoint {
  name: string;
  amt: number;
}

const data: DataPoint[] = [
  { name: 'Jul 21', amt: 1100 },
  { name: 'Jul 22', amt: 1250 },
  { name: 'Jul 23', amt: 1200 },
  { name: 'Jul 24', amt: 1300 },
  { name: 'Jul 25', amt: 1150 },
  { name: 'Jul 26', amt: 1350 },
  { name: 'Jul 27', amt: 1100 },
  { name: 'Jul 28', amt: 1200 },
  { name: 'Jul 29', amt: 989 },
  { name: 'Jul 30', amt: 1800 },
  { name: 'Jul 31', amt: 1800 },
  { name: 'Jul 32', amt: 1200 },
  { name: 'Jul 33', amt: 1350 },
  { name: 'Jul 34', amt: 1100 },
  { name: 'Jul 35', amt: 1250 },
  { name: 'Jul 36', amt: 1100 },
  { name: 'Jul 37', amt: 1400 },
  { name: 'Jul 38', amt: 1200 },
];

interface CustomTooltipProps {
  payload?: { value: number }[];
  label?: string;
  active?: boolean;
  coordinate?: { x: number; y: number };
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ payload, active, coordinate }) => {  
  if (active && payload && payload.length && coordinate) {  
    const isLastThree = coordinate.x > window.innerWidth * 0.7; 

    return (
      <div
        className={`custom-tooltip ${isLastThree ? 'tooltip-last-three' : ''}`}
        style={{
          position: 'absolute',
          left: coordinate.x,
          top: coordinate.y,
          transform: isLastThree ? 'translateX(0%)' : 'translateX(-65%)',
        }}
      >
        <div className="custom-tooltip-before"></div>
        <div className="customel">
          <span className="text-[12px] py-1.5 text-[#9CA1A7]">يوليو 2024</span>
          <span className="text-[14px] py-1.5 text-[#39434F] font-bold flex justify-center">
            <h1 className="font-normal">مستخدم نشط</h1>
            <span className="pl-4">65</span>
          </span>
        </div>
      </div>
    );  
  }  
  return null;  
};

const CustomActiveDot = (props: any) => {
  const { cx, cy, stroke } = props;
  return (
    <svg x={cx - 12} y={cy - 12} width={24} height={24}>
      <circle cx={12} cy={12} r={12} fill="#00987E" stroke={stroke} strokeWidth={0} />
      <circle cx={12} cy={12} r={6} fill="#FFFFFF" />
    </svg>
  );
};

export default class Example extends PureComponent {
  render() {
    return (
      <section className='border-2 border-[#E5E5E5] p-4 rounded-3xl flex-1'>
        <h1>المستخدمون النشطون</h1>
        <button className='border-2 border-[#cfcece] my-2 rounded-3xl px-4 py-1'>هذا الشهر</button>
        <ResponsiveContainer width="100%" height={550}>
          <ComposedChart
            data={data}
            margin={{
              top: 20,
              right: 2,
              bottom: 0,
              left: 2,
            }}
          >
            <defs>
              <linearGradient id="gradientColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00987f5f" stopOpacity={1} />
                <stop offset="100%" stopColor="#00987f5f" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name"  
              scale="band"  
              stroke="#c2c2c2"  
              tickLine={false} 
              tick={({ x, y, payload }) => (  
                <g>  
                  <text x={x} y={y - 25} fill="#000000" textAnchor="middle" fontSize={12}>  
                    {payload.value}  
                  </text>  
                  <line x1={x} y1={y} x2={x} y2={y + 5} stroke="#c2c2c2" />  
                </g>
              )}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="amt"
              stroke="#00987E"
              fill="url(#gradientColor)"
              strokeWidth={4}
              dot={false}
              activeDot={<CustomActiveDot />}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </section>
    );
  }
}
