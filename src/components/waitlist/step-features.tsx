"use client";

import { UseFormReturn } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { FEATURES, type WaitlistFormData } from "@/lib/schemas";

interface StepFeaturesProps {
  form: UseFormReturn<WaitlistFormData>;
}

export function StepFeatures({ form }: StepFeaturesProps) {
  const selected = form.watch("features") || [];

  const toggleOption = (option: (typeof FEATURES)[number]) => {
    const current = form.getValues("features") || [];
    const updated = current.includes(option)
      ? current.filter((item) => item !== option)
      : [...current, option];
    form.setValue("features", updated, { shouldValidate: true });
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-foreground">
          Which features interest you most?
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Select all that apply
        </p>
      </div>
      <div className="space-y-2">
        {FEATURES.map((option) => {
          const isChecked = selected.includes(option);
          return (
            <div key={option} className="flex items-center space-x-3 py-1.5">
              <Checkbox
                id={`feat-${option}`}
                checked={isChecked}
                onCheckedChange={() => toggleOption(option)}
              />
              <Label
                htmlFor={`feat-${option}`}
                className="text-sm font-normal cursor-pointer"
              >
                {option}
              </Label>
            </div>
          );
        })}
      </div>
      {form.formState.errors.features && (
        <p className="text-sm text-destructive">
          {form.formState.errors.features.message}
        </p>
      )}
    </div>
  );
}
