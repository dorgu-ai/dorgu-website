"use client";

import { UseFormReturn } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { REFERRAL_SOURCES, type WaitlistFormData } from "@/lib/schemas";

const COUNTRY_CODES = [
  { code: "+1", label: "US/CA +1" },
  { code: "+44", label: "UK +44" },
  { code: "+91", label: "IN +91" },
  { code: "+49", label: "DE +49" },
  { code: "+33", label: "FR +33" },
  { code: "+61", label: "AU +61" },
  { code: "+81", label: "JP +81" },
  { code: "+86", label: "CN +86" },
  { code: "+82", label: "KR +82" },
  { code: "+55", label: "BR +55" },
  { code: "+52", label: "MX +52" },
  { code: "+34", label: "ES +34" },
  { code: "+39", label: "IT +39" },
  { code: "+31", label: "NL +31" },
  { code: "+46", label: "SE +46" },
  { code: "+65", label: "SG +65" },
  { code: "+972", label: "IL +972" },
  { code: "+971", label: "AE +971" },
  { code: "+48", label: "PL +48" },
  { code: "+7", label: "RU +7" },
] as const;

interface StepContactProps {
  form: UseFormReturn<WaitlistFormData>;
}

export function StepContact({ form }: StepContactProps) {
  const currentPhone = form.watch("phone") || "";

  // Extract country code and number from stored value
  const getCountryCode = () => {
    for (const { code } of COUNTRY_CODES) {
      if (currentPhone.startsWith(code + " ")) return code;
    }
    return "+1";
  };

  const getPhoneNumber = () => {
    const cc = getCountryCode();
    return currentPhone.startsWith(cc + " ")
      ? currentPhone.slice(cc.length + 1)
      : currentPhone;
  };

  const updatePhone = (countryCode: string, number: string) => {
    const combined = number ? `${countryCode} ${number}` : "";
    form.setValue("phone", combined, { shouldValidate: true });
  };

  return (
    <div className="space-y-5">
      <h3 className="text-lg font-semibold text-foreground">
        Almost there! How can we reach you?
      </h3>

      <div className="space-y-2">
        <Label htmlFor="email">
          Email <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="you@company.com"
          {...form.register("email")}
        />
        {form.formState.errors.email && (
          <p className="text-sm text-destructive">
            {form.formState.errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">
          Phone <span className="text-destructive">*</span>
        </Label>
        <div className="flex gap-2">
          <select
            className="flex h-9 w-28 shrink-0 rounded-md border border-input bg-transparent px-2 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            value={getCountryCode()}
            onChange={(e) => updatePhone(e.target.value, getPhoneNumber())}
          >
            {COUNTRY_CODES.map(({ code, label }) => (
              <option key={code} value={code}>
                {label}
              </option>
            ))}
          </select>
          <Input
            id="phone"
            type="tel"
            placeholder="1234567890"
            value={getPhoneNumber()}
            onChange={(e) => updatePhone(getCountryCode(), e.target.value)}
          />
        </div>
        {form.formState.errors.phone && (
          <p className="text-sm text-destructive">
            {form.formState.errors.phone.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company / Organization (optional)</Label>
        <Input
          id="company"
          placeholder="Acme Inc."
          {...form.register("company")}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="referral">How did you hear about dorgu? (optional)</Label>
        <select
          id="referral"
          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          value={form.watch("referralSource") || ""}
          onChange={(e) => {
            const value = e.target.value;
            if (value) {
              form.setValue(
                "referralSource",
                value as (typeof REFERRAL_SOURCES)[number]
              );
            }
          }}
        >
          <option value="">Select...</option>
          {REFERRAL_SOURCES.map((source) => (
            <option key={source} value={source}>
              {source}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
