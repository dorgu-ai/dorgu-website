"use client";

import { UseFormReturn } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { ROLES, type WaitlistFormData } from "@/lib/schemas";

interface StepRoleProps {
  form: UseFormReturn<WaitlistFormData>;
}

export function StepRole({ form }: StepRoleProps) {
  const role = form.watch("role");

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">
        What&apos;s your role?
      </h3>
      <RadioGroup
        value={role ?? ""}
        onValueChange={(value) =>
          form.setValue("role", value as (typeof ROLES)[number], {
            shouldValidate: true,
          })
        }
      >
        {ROLES.map((option) => (
          <div key={option} className="flex items-center space-x-3 py-1.5">
            <RadioGroupItem value={option} id={`role-${option}`} />
            <Label
              htmlFor={`role-${option}`}
              className="text-sm font-normal cursor-pointer"
            >
              {option}
            </Label>
          </div>
        ))}
      </RadioGroup>
      {role === "Other" && (
        <Input
          placeholder="Tell us your role..."
          {...form.register("roleOther")}
          className="mt-2"
        />
      )}
      {form.formState.errors.role && (
        <p className="text-sm text-destructive">
          {form.formState.errors.role.message}
        </p>
      )}
    </div>
  );
}
