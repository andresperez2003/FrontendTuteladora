import { cn } from "./ui/utils";
import React from 'react';
interface StepperProps {
  steps: string[];
  currentStep: number;
}

export function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="w-full py-4">
      {/* Mobile version - Vertical */}
      <div className="block sm:hidden space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-3">
            <div
              className={cn(
                "flex items-center justify-center w-8 h-8 rounded-full border-2 transition-colors flex-shrink-0",
                index <= currentStep
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-muted-foreground border-muted"
              )}
            >
              {index + 1}
            </div>
            <div className="flex-1">
              <span
                className={cn(
                  "transition-colors",
                  index <= currentStep ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {step}
              </span>
              {index === currentStep && (
                <div className="text-xs text-muted-foreground mt-1">
                  Paso actual
                </div>
              )}
            </div>
            {index < currentStep && (
              <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <svg className="w-2.5 h-2.5 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop version - Horizontal */}
      <div className="hidden sm:block">
        <div className="relative">
          {/* Background line */}
          <div className="absolute top-4 left-4 right-4 h-0.5 bg-muted" />
          
          {/* Progress line */}
          <div 
            className="absolute top-4 left-4 h-0.5 bg-primary transition-all duration-500 ease-in-out"
            style={{ 
              width: currentStep > 0 
                ? `calc(${(currentStep / (steps.length - 1)) * 100}% - 2rem + ${2 / (steps.length - 1)}rem)` 
                : '0%'
            }}
          />
          
          {/* Steps */}
          <div className="relative flex justify-between">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-full border-2 transition-colors mb-3 bg-background relative z-10",
                    index <= currentStep
                      ? "bg-primary text-primary-foreground border-primary"
                      : "text-muted-foreground border-muted"
                  )}
                >
                  {index + 1}
                </div>
                <span
                  className={cn(
                    "text-xs text-center transition-colors max-w-24 leading-tight",
                    index <= currentStep ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}