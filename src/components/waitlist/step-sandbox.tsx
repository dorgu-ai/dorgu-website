"use client";

import { UseFormReturn } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SANDBOX_OPTIONS, type WaitlistFormData } from "@/lib/schemas";

interface StepSandboxProps {
  form: UseFormReturn<WaitlistFormData>;
}

export function StepSandbox({ form }: StepSandboxProps) {
  const sandbox = form.watch("sandboxInterest");

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-foreground">
          Would sandboxed Kubernetes environments help?
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Powered by vcluster, test deployments in isolated environments before
          promoting to staging/production.
        </p>
      </div>
      <RadioGroup
        value={sandbox ?? ""}
        onValueChange={(value) =>
          form.setValue(
            "sandboxInterest",
            value as (typeof SANDBOX_OPTIONS)[number],
            { shouldValidate: true }
          )
        }
      >
        {SANDBOX_OPTIONS.map((option) => (
          <div key={option} className="flex items-center space-x-3 py-1.5">
            <RadioGroupItem value={option} id={`sandbox-${option}`} />
            <Label
              htmlFor={`sandbox-${option}`}
              className="text-sm font-normal cursor-pointer"
            >
              {option}
            </Label>
          </div>
        ))}
      </RadioGroup>
      {form.formState.errors.sandboxInterest && (
        <p className="text-sm text-destructive">
          {form.formState.errors.sandboxInterest.message}
        </p>
      )}
    </div>
  );
}
