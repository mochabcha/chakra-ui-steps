import * as React from 'react';
import { StepsProps } from '../components/Steps';
export interface StepsContextValue extends StepsProps {
    clickable?: boolean;
    isError?: boolean;
    isLoading?: boolean;
    isVertical?: boolean;
    stepCount?: number;
    trackColor?: string;
    expandVerticalSteps?: boolean;
}
export declare const useStepsContext: () => StepsContextValue;
type StepsContextProviderProps = {
    value: StepsContextValue;
    children: React.ReactNode;
};
export declare const StepsProvider: ({ value, children, }: StepsContextProviderProps) => JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map