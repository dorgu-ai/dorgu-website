"use client";

import { UseFormReturn } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { K8S_EXPERIENCE, type WaitlistFormData } from "@/lib/schemas";

interface StepExperienceProps {
  form: UseFormReturn<WaitlistFormData>;
}

export function StepExperience({ form }: StepExperienceProps) {
  const experience = form.watch("k8sExperience");

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">
        What&apos;s your Kubernetes experience?
      </h3>
      <RadioGroup
        value={experience ?? ""}
        onValueChange={(value) =>
          form.setValue(
            "k8sExperience",
            value as (typeof K8S_EXPERIENCE)[number],
            { shouldValidate: true }
          )
        }
      >
        {K8S_EXPERIENCE.map((option) => (
          <div key={option} className="flex items-center space-x-3 py-1.5">
            <RadioGroupItem value={option} id={`exp-${option}`} />
            <Label
              htmlFor={`exp-${option}`}
              className="text-sm font-normal cursor-pointer"
            >
              {option}
            </Label>
          </div>
        ))}
      </RadioGroup>
      {form.formState.errors.k8sExperience && (
        <p className="text-sm text-destructive">
          {form.formState.errors.k8sExperience.message}
        </p>
      )}
    </div>
  );
}
