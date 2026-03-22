"use client";

import { UseFormReturn } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { PAIN_POINTS, type WaitlistFormData } from "@/lib/schemas";

interface StepPainPointsProps {
  form: UseFormReturn<WaitlistFormData>;
}

export function StepPainPoints({ form }: StepPainPointsProps) {
  const selected = form.watch("painPoints") || [];

  const toggleOption = (option: (typeof PAIN_POINTS)[number]) => {
    const current = form.getValues("painPoints") || [];
    const updated = current.includes(option)
      ? current.filter((item) => item !== option)
      : current.length < 3
        ? [...current, option]
        : current;
    form.setValue("painPoints", updated, { shouldValidate: true });
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-foreground">
          What are your biggest pain points?
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Pick up to 3 &middot; {selected.length}/3 selected
        </p>
      </div>
      <div className="space-y-2">
        {PAIN_POINTS.map((option) => {
          const isChecked = selected.includes(option);
          const isDisabled = !isChecked && selected.length >= 3;
          return (
            <div key={option} className="flex items-center space-x-3 py-1.5">
              <Checkbox
                id={`pain-${option}`}
                checked={isChecked}
                disabled={isDisabled}
                onCheckedChange={() => toggleOption(option)}
              />
              <Label
                htmlFor={`pain-${option}`}
                className={`text-sm font-normal cursor-pointer ${
                  isDisabled ? "text-muted-foreground/50" : ""
                }`}
              >
                {option}
              </Label>
            </div>
          );
        })}
      </div>
      {form.formState.errors.painPoints && (
        <p className="text-sm text-destructive">
          {form.formState.errors.painPoints.message}
        </p>
      )}
    </div>
  );
}
