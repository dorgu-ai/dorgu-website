"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Loader2, CheckCircle } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { waitlistSchema, type WaitlistFormData } from "@/lib/schemas";

import { StepRole } from "./step-role";
import { StepExperience } from "./step-experience";
import { StepPainPoints } from "./step-pain-points";
import { StepFeatures } from "./step-features";
import { StepSandbox } from "./step-sandbox";
import { StepContact } from "./step-contact";

const TOTAL_STEPS = 6;

const STEP_FIELDS: (keyof WaitlistFormData)[][] = [
  ["role"],
  ["k8sExperience"],
  ["painPoints"],
  ["features"],
  ["sandboxInterest"],
  ["email", "phone"],
];

export function WaitlistForm() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      painPoints: [],
      features: [],
      roleOther: "",
      phone: "",
      company: "",
    },
    mode: "onChange",
  });

  const canProceed = () => {
    const fields = STEP_FIELDS[step];
    return fields.every((field) => {
      const value = form.getValues(field);
      if (Array.isArray(value)) return value.length > 0;
      if (typeof value === "string") return value.length > 0;
      return !!value;
    });
  };

  const goNext = async () => {
    const fields = STEP_FIELDS[step];
    const valid = await form.trigger(fields);
    if (!valid) return;

    if (step < TOTAL_STEPS - 1) {
      setDirection(1);
      setStep(step + 1);
    }
  };

  const goBack = () => {
    if (step > 0) {
      setDirection(-1);
      setStep(step - 1);
    }
  };

  const onSubmit = async (data: WaitlistFormData) => {
    setSubmitError(null);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setSubmitError(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitError("Network error. Please try again.");
    }
  };

  if (submitted) {
    return (
      <Card className="p-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="relative w-20 h-20">
            <Image
              src="/mascot.jpg"
              alt="Dorgu mascot"
              fill
              sizes="80px"
              className="rounded-full object-cover"
            />
            <CheckCircle className="absolute -bottom-1 -right-1 w-7 h-7 text-green-500 bg-background rounded-full" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">
            You&apos;re on the list!
          </h3>
          <p className="text-muted-foreground max-w-sm">
            Thanks for your interest in dorgu. We&apos;ll be in touch soon with
            updates and early access information.
          </p>
        </motion.div>
      </Card>
    );
  }

  const progressPercent = ((step + 1) / TOTAL_STEPS) * 100;

  return (
    <Card className="p-6 sm:p-8">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">
            Step {step + 1} of {TOTAL_STEPS}
          </span>
          <span className="text-sm text-muted-foreground">
            {Math.round(progressPercent)}%
          </span>
        </div>
        <Progress value={progressPercent} className="h-2" />
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="min-h-[280px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {step === 0 && <StepRole form={form} />}
              {step === 1 && <StepExperience form={form} />}
              {step === 2 && <StepPainPoints form={form} />}
              {step === 3 && <StepFeatures form={form} />}
              {step === 4 && <StepSandbox form={form} />}
              {step === 5 && <StepContact form={form} />}
            </motion.div>
          </AnimatePresence>
        </div>

        {submitError && (
          <p className="text-sm text-destructive mt-2">{submitError}</p>
        )}

        <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
          <Button
            type="button"
            variant="ghost"
            onClick={goBack}
            className={step === 0 ? "invisible" : ""}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          {step < TOTAL_STEPS - 1 ? (
            <Button
              type="button"
              onClick={goNext}
              disabled={!canProceed()}
            >
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Join Waitlist"
              )}
            </Button>
          )}
        </div>
      </form>
    </Card>
  );
}
