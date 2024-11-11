// types.ts
export interface StepData {
    title: string;
    description: string;
    icon: string; // path to icon or component for the icon
  }
  
  export interface FlowChartProps {
    steps: StepData[];
  }
  