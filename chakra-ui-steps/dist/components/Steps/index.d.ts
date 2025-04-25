import { HTMLChakraProps, SystemStyleObject, ThemingProps } from '@chakra-ui/react';
import * as React from 'react';
interface StepOptions {
    activeStep: number;
    orientation?: 'vertical' | 'horizontal';
    state?: 'loading' | 'error';
    responsive?: boolean;
    checkIcon?: React.ComponentType<any>;
    errorIcon?: React.ComponentType<any>;
    onClickStep?: (step: number) => void;
    trackColor?: string;
    mobileBreakpoint?: string;
    variant?: 'circles' | 'circles-alt' | 'simple';
    expandVerticalSteps?: boolean;
}
export interface StepsProps extends Omit<HTMLChakraProps<'div'>, 'onChange'>, Omit<ThemingProps<'Steps'>, 'variant'>, StepOptions {
    children?: React.ReactNode;
}
export declare const useStepsStyles: () => Record<string, SystemStyleObject>;
export declare const Steps: import("@chakra-ui/system/dist/system.types").ComponentWithAs<"div", StepsProps>;
export {};
//# sourceMappingURL=index.d.ts.map