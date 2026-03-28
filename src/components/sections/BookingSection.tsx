"use client";

import { FormEvent, useState } from "react";
import { CalendarClock } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SiteContent } from "@/types/content";

type BookingSectionProps = {
  content: SiteContent["booking"];
  brandName: string;
};

type BookingFormState = {
  fullName: string;
  email: string;
  preferredContact: string;
  contactHandle: string;
  stage: string;
  goals: string;
  sessionLanguage: string;
  timezone: string;
};

const initialState: BookingFormState = {
  fullName: "",
  email: "",
  preferredContact: "",
  contactHandle: "",
  stage: "",
  goals: "",
  sessionLanguage: "",
  timezone: ""
};

export function BookingSection({ content, brandName }: BookingSectionProps) {
  const [formState, setFormState] = useState<BookingFormState>(initialState);
  const [error, setError] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  function updateField<K extends keyof BookingFormState>(field: K, value: BookingFormState[K]) {
    setFormState((prev) => ({ ...prev, [field]: value }));
  }

  function validate() {
    if (!formState.fullName.trim()) {
      return content.validation.fullNameRequired;
    }
    if (!formState.email.trim()) {
      return content.validation.emailRequired;
    }
    const isValidEmail = /\S+@\S+\.\S+/.test(formState.email);
    if (!isValidEmail) {
      return content.validation.emailInvalid;
    }
    if (!formState.goals.trim()) {
      return content.validation.goalsRequired;
    }
    return "";
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      setSubmitted(false);
      return;
    }

    setError("");
    const subject = `${brandName} Discovery Call Request - ${formState.fullName}`;
    const bodyLines = [
      `${content.fields.fullName}: ${formState.fullName}`,
      `${content.fields.email}: ${formState.email}`,
      `${content.fields.preferredContact}: ${formState.preferredContact || "-"}`,
      `${content.fields.contactHandle}: ${formState.contactHandle || "-"}`,
      `${content.fields.stage}: ${formState.stage || "-"}`,
      `${content.fields.sessionLanguage}: ${formState.sessionLanguage || "-"}`,
      `${content.fields.timezone}: ${formState.timezone || "-"}`,
      "",
      `${content.fields.goals}:`,
      formState.goals
    ];
    const body = bodyLines.join("\n");
    const mailtoHref = `${content.fallbackContactHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    window.location.href = mailtoHref;
  }

  return (
    <Section id="booking" title={content.title} intro={content.intro} className="bg-warm">
      <div className="mb-6 rounded-2xl border border-navy/10 bg-white p-5 shadow-card sm:flex sm:items-center sm:justify-between sm:gap-4">
        <div className="flex items-center gap-3">
          <div className="inline-flex rounded-xl bg-navy/5 p-2 text-navy" aria-hidden="true">
            <CalendarClock className="h-4 w-4" />
          </div>
          <p className="text-sm text-body">{content.responseTime}</p>
        </div>
        <a
          href={content.fallbackContactHref}
          className="mt-3 inline-flex text-sm font-semibold text-terracotta hover:text-[#b95e3e] sm:mt-0"
        >
          {content.fallbackContactLabel}: {content.fallbackContactValue}
        </a>
      </div>

      <div className="rounded-2xl border border-navy/10 bg-surface p-6 shadow-card sm:p-8">
        <h3 className="text-2xl font-semibold text-navy">{content.formTitle}</h3>
        <p className="mt-2 text-muted">{content.formDescription}</p>
        <p className="mt-4 text-xs font-medium text-muted">{content.requiredNotice}</p>

        <form className="mt-6 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit} noValidate>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-body">{content.fields.fullName}</span>
            <input
              type="text"
              value={formState.fullName}
              onChange={(event) => updateField("fullName", event.target.value)}
              className="w-full rounded-xl border border-navy/15 bg-white px-4 py-2.5 text-sm text-body outline-none transition focus:border-navy/40 focus:ring-2 focus:ring-navy/20"
              required
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-body">{content.fields.email}</span>
            <input
              type="email"
              value={formState.email}
              onChange={(event) => updateField("email", event.target.value)}
              className="w-full rounded-xl border border-navy/15 bg-white px-4 py-2.5 text-sm text-body outline-none transition focus:border-navy/40 focus:ring-2 focus:ring-navy/20"
              required
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-body">{content.fields.preferredContact}</span>
            <select
              value={formState.preferredContact}
              onChange={(event) => updateField("preferredContact", event.target.value)}
              className="w-full rounded-xl border border-navy/15 bg-white px-4 py-2.5 text-sm text-body outline-none transition focus:border-navy/40 focus:ring-2 focus:ring-navy/20"
            >
              <option value=""></option>
              {content.options.preferredContact.map((option) => (
                <option key={option.value} value={option.label}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-body">{content.fields.contactHandle}</span>
            <input
              type="text"
              value={formState.contactHandle}
              onChange={(event) => updateField("contactHandle", event.target.value)}
              placeholder={content.placeholders.contactHandle}
              className="w-full rounded-xl border border-navy/15 bg-white px-4 py-2.5 text-sm text-body outline-none transition placeholder:text-muted focus:border-navy/40 focus:ring-2 focus:ring-navy/20"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-body">{content.fields.stage}</span>
            <select
              value={formState.stage}
              onChange={(event) => updateField("stage", event.target.value)}
              className="w-full rounded-xl border border-navy/15 bg-white px-4 py-2.5 text-sm text-body outline-none transition focus:border-navy/40 focus:ring-2 focus:ring-navy/20"
            >
              <option value=""></option>
              {content.options.stage.map((option) => (
                <option key={option.value} value={option.label}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-body">{content.fields.sessionLanguage}</span>
            <select
              value={formState.sessionLanguage}
              onChange={(event) => updateField("sessionLanguage", event.target.value)}
              className="w-full rounded-xl border border-navy/15 bg-white px-4 py-2.5 text-sm text-body outline-none transition focus:border-navy/40 focus:ring-2 focus:ring-navy/20"
            >
              <option value=""></option>
              {content.options.sessionLanguage.map((option) => (
                <option key={option.value} value={option.label}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm font-medium text-body">{content.fields.timezone}</span>
            <input
              type="text"
              value={formState.timezone}
              onChange={(event) => updateField("timezone", event.target.value)}
              placeholder={content.placeholders.timezone}
              className="w-full rounded-xl border border-navy/15 bg-white px-4 py-2.5 text-sm text-body outline-none transition placeholder:text-muted focus:border-navy/40 focus:ring-2 focus:ring-navy/20"
            />
          </label>

          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm font-medium text-body">{content.fields.goals}</span>
            <textarea
              value={formState.goals}
              onChange={(event) => updateField("goals", event.target.value)}
              placeholder={content.placeholders.goals}
              className="min-h-32 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-body outline-none transition placeholder:text-muted focus:border-navy/40 focus:ring-2 focus:ring-navy/20"
              required
            />
          </label>

          <div className="md:col-span-2">
            {error && <p className="mb-3 text-sm text-terracotta">{error}</p>}
            {submitted && !error && <p className="mb-3 text-sm text-navy">{content.successMessage}</p>}
            <button
              type="submit"
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-terracotta px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#b95e3e] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-terracotta/40"
            >
              {content.submitLabel}
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}
