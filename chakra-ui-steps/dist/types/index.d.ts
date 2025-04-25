/// <reference types="react" />
export type StepSharedProps = {
    isLastStep?: boolean;
    isCompletedStep?: boolean;
    isCurrentStep?: boolean;
    index?: number;
    label?: string | React.ReactNode;
    description?: string | null;
    icon: React.ComponentType<any> | undefined;
    hasVisited: boolean | undefined;
    isError?: boolean;
    isLoading?: boolean;
    isKeepError?: boolean;
    state?: 'loading' | 'error';
    checkIcon?: React.ComponentType<any> | undefined;
    errorIcon?: React.ComponentType<any> | undefined;
};
//# sourceMappingURL=index.d.ts.map