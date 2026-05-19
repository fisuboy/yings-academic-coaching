"use client";

import { FormEvent, useMemo, useState } from "react";
import { CheckCircle2, Clock3, Mail, MessageCircleMore, MessagesSquare } from "lucide-react";
import { PrivacyInfoModal } from "@/components/legal/PrivacyInfoModal";
import { submitDiscoveryCallRequest } from "@/lib/bookingSubmission";
import { cn } from "@/lib/cn";
import { Section } from "@/components/ui/Section";
import { Locale, SiteContent } from "@/types/content";

type BookingSectionProps = {
  content: SiteContent["booking"];
  locale: Locale;
};

type BookingFormState = {
  fullName: string;
  email: string;
  contactHandle: string;
  role: string;
  stage: string;
  supportNeeds: string[];
  sessionLanguage: string;
  timezone: string;
  timeWindow: string;
  message: string;
  website: string;
  privacyAcknowledged: boolean;
};

type BookingFormErrors = Partial<Record<keyof BookingFormState, string>>;

const initialState: BookingFormState = {
  fullName: "",
  email: "",
  contactHandle: "",
  role: "",
  stage: "",
  supportNeeds: [],
  sessionLanguage: "",
  timezone: "",
  timeWindow: "",
  message: "",
  website: "",
  privacyAcknowledged: false
};

const channelIconMap = {
  email: Mail,
  wechat: MessageCircleMore,
  whatsapp: MessagesSquare
} as const;

export function BookingSection({ content, locale }: BookingSectionProps) {
  const [formState, setFormState] = useState<BookingFormState>(initialState);
  const [formErrors, setFormErrors] = useState<BookingFormErrors>({});
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const formId = content.form.id;
  const legalSuffix = locale === "en" ? "" : `?lang=${locale}`;

  const supportNeedsError = hasAttemptedSubmit ? formErrors.supportNeeds : undefined;

  function setField<K extends keyof BookingFormState>(field: K, value: BookingFormState[K]) {
    setFormState((prev) => ({ ...prev, [field]: value }));
    setFormErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function toggleSupportNeed(value: string) {
    setFormState((prev) => {
      const exists = prev.supportNeeds.includes(value);
      const nextValues = exists
        ? prev.supportNeeds.filter((item) => item !== value)
        : [...prev.supportNeeds, value];
      return { ...prev, supportNeeds: nextValues };
    });
    setFormErrors((prev) => ({ ...prev, supportNeeds: undefined }));
  }

  function validate(values: BookingFormState): BookingFormErrors {
    const errors: BookingFormErrors = {};
    if (!values.fullName.trim()) {
      errors.fullName = content.form.validation.fullNameRequired;
    }
    if (!values.email.trim()) {
      errors.email = content.form.validation.emailRequired;
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = content.form.validation.emailInvalid;
    }
    if (!values.role.trim()) {
      errors.role = content.form.validation.roleRequired;
    }
    if (!values.stage.trim()) {
      errors.stage = content.form.validation.stageRequired;
    }
    if (values.supportNeeds.length === 0) {
      errors.supportNeeds = content.form.validation.supportNeedsRequired;
    }
    if (!values.timezone.trim()) {
      errors.timezone = content.form.validation.timezoneRequired;
    }
    if (!values.timeWindow.trim()) {
      errors.timeWindow = content.form.validation.timeWindowRequired;
    }
    if (!values.privacyAcknowledged) {
      errors.privacyAcknowledged = content.form.validation.privacyAcknowledgementRequired;
    }
    return errors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setHasAttemptedSubmit(true);
    setIsSuccess(false);

    const errors = validate(formState);
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    const result = await submitDiscoveryCallRequest(formState);
    setIsSubmitting(false);

    if (!result.ok) {
      setFormErrors((prev) => ({
        ...prev,
        message: content.form.validation.submitFailed
      }));
      return;
    }

    setIsSuccess(true);
    setFormState(initialState);
    setHasAttemptedSubmit(false);
    setFormErrors({});
  }

  function scrollToForm() {
    const formElement = document.getElementById(formId);
    formElement?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const roleOptions = useMemo(() => content.form.options.role, [content.form.options.role]);
  const languageOptions = useMemo(
    () => content.form.options.sessionLanguage,
    [content.form.options.sessionLanguage]
  );

  return (
    <Section id="booking" title={content.title} intro={content.intro} className="bg-warm">
      <ul className="mb-8 flex flex-wrap gap-3">
        {content.trustItems.map((item) => (
          <li
            key={item}
            className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-3 py-1.5 text-sm text-body"
          >
            <Clock3 className="h-4 w-4 text-terracotta" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>

      <div className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-navy/10 bg-white p-6 shadow-card">
          <h3 className="text-2xl font-semibold text-navy">{content.paths.messageUs.title}</h3>
          <p className="mt-2 text-muted">{content.paths.messageUs.description}</p>
          <p className="mt-4 text-sm font-medium text-terracotta">{content.paths.messageUs.helper}</p>

          <ul className="mt-4 space-y-4">
            {content.paths.messageUs.channels.map((channel) => {
              const Icon = channel.kind ? channelIconMap[channel.kind] : Mail;

              return (
                <li
                  key={`${channel.label}-${channel.value}`}
                  className="rounded-xl border border-navy/10 bg-warm px-4 py-3"
                >
                  <p className="inline-flex items-center gap-2 text-sm font-medium text-navy">
                    <Icon className="h-4 w-4 text-terracotta" aria-hidden="true" />
                    {channel.label}
                  </p>
                  <p className="mt-1 text-sm text-body">{channel.value}</p>
                  {channel.helperText && <p className="mt-1 text-xs text-muted">{channel.helperText}</p>}
                  {channel.href && (
                    <a
                      href={channel.href}
                      className="mt-2 inline-flex rounded-lg bg-navy/5 px-3 py-1.5 text-xs font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
                    >
                      {channel.actionLabel}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </article>

        <article className="rounded-2xl border border-navy/10 bg-gradient-to-br from-white to-[#fff5ec] p-6 shadow-card">
          <h3 className="text-2xl font-semibold text-navy">{content.paths.requestCall.title}</h3>
          <p className="mt-2 text-muted">{content.paths.requestCall.description}</p>
          <button
            type="button"
            onClick={scrollToForm}
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl bg-terracotta px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#b95e3e] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-terracotta/40"
          >
            {content.paths.requestCall.ctaLabel}
          </button>
        </article>
      </div>

      <div id={formId} className="mt-8 rounded-2xl border border-navy/10 bg-surface p-6 shadow-card sm:p-8">
        <h3 className="text-2xl font-semibold text-navy">{content.form.title}</h3>
        <p className="mt-2 text-muted">{content.form.description}</p>
        <p className="mt-2 text-sm text-muted">{content.form.helper}</p>
        <p className="mt-4 text-xs font-medium text-muted">{content.form.requiredNotice}</p>

        {isSuccess && (
          <div className="mt-5 rounded-xl border border-[#C7E3D0] bg-[#EDF8F2] p-4 text-sm text-[#1F5138]">
            <p className="inline-flex items-center gap-2 font-semibold">
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              {content.form.successTitle}
            </p>
            <p className="mt-2">{content.form.successMessage}</p>
            <p className="mt-1">{content.form.successFollowUp}</p>
            <button
              type="button"
              className="mt-3 text-xs font-semibold text-[#1F5138] underline underline-offset-4"
              onClick={() => setIsSuccess(false)}
            >
              {content.form.resetLabel}
            </button>
          </div>
        )}

        <form className="mt-6 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="website"
            value={formState.website}
            onChange={(event) => setField("website", event.target.value)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-body">{content.form.fields.fullName}</span>
            <input
              type="text"
              value={formState.fullName}
              onChange={(event) => setField("fullName", event.target.value)}
              aria-invalid={Boolean(hasAttemptedSubmit && formErrors.fullName)}
              className={cn(
                "w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-body outline-none transition",
                hasAttemptedSubmit && formErrors.fullName
                  ? "border-terracotta/60 focus:border-terracotta/60 focus:ring-2 focus:ring-terracotta/20"
                  : "border-navy/15 focus:border-navy/40 focus:ring-2 focus:ring-navy/20"
              )}
            />
            {hasAttemptedSubmit && formErrors.fullName && (
              <p className="mt-1 text-xs text-terracotta">{formErrors.fullName}</p>
            )}
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-body">{content.form.fields.email}</span>
            <input
              type="email"
              value={formState.email}
              onChange={(event) => setField("email", event.target.value)}
              aria-invalid={Boolean(hasAttemptedSubmit && formErrors.email)}
              className={cn(
                "w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-body outline-none transition",
                hasAttemptedSubmit && formErrors.email
                  ? "border-terracotta/60 focus:border-terracotta/60 focus:ring-2 focus:ring-terracotta/20"
                  : "border-navy/15 focus:border-navy/40 focus:ring-2 focus:ring-navy/20"
              )}
            />
            {hasAttemptedSubmit && formErrors.email && (
              <p className="mt-1 text-xs text-terracotta">{formErrors.email}</p>
            )}
          </label>

          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm font-medium text-body">{content.form.fields.contactHandle}</span>
            <input
              type="text"
              value={formState.contactHandle}
              onChange={(event) => setField("contactHandle", event.target.value)}
              placeholder={content.form.placeholders.contactHandle}
              className="w-full rounded-xl border border-navy/15 bg-white px-4 py-2.5 text-sm text-body outline-none transition placeholder:text-muted focus:border-navy/40 focus:ring-2 focus:ring-navy/20"
            />
            <p className="mt-1 text-xs text-muted">{content.form.hints.contactHandle}</p>
          </label>

          <fieldset className="md:col-span-2">
            <legend className="mb-2 text-sm font-medium text-body">{content.form.fields.role}</legend>
            <div className="flex flex-wrap gap-2">
              {roleOptions.map((option) => {
                const checked = formState.role === option.value;
                return (
                  <label key={option.value} className="cursor-pointer">
                    <input
                      type="radio"
                      name="role"
                      value={option.value}
                      checked={checked}
                      onChange={() => setField("role", option.value)}
                      className="peer sr-only"
                    />
                    <span className="inline-flex rounded-full border border-navy/20 bg-white px-4 py-2 text-sm text-body transition peer-checked:border-navy peer-checked:bg-navy peer-checked:text-white">
                      {option.label}
                    </span>
                  </label>
                );
              })}
            </div>
            {hasAttemptedSubmit && formErrors.role && (
              <p className="mt-1 text-xs text-terracotta">{formErrors.role}</p>
            )}
          </fieldset>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-body">{content.form.fields.stage}</span>
            <select
              value={formState.stage}
              onChange={(event) => setField("stage", event.target.value)}
              aria-invalid={Boolean(hasAttemptedSubmit && formErrors.stage)}
              className={cn(
                "w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-body outline-none transition",
                hasAttemptedSubmit && formErrors.stage
                  ? "border-terracotta/60 focus:border-terracotta/60 focus:ring-2 focus:ring-terracotta/20"
                  : "border-navy/15 focus:border-navy/40 focus:ring-2 focus:ring-navy/20"
              )}
            >
              <option value=""></option>
              {content.form.options.stage.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {hasAttemptedSubmit && formErrors.stage && (
              <p className="mt-1 text-xs text-terracotta">{formErrors.stage}</p>
            )}
          </label>

          <fieldset>
            <legend className="mb-2 text-sm font-medium text-body">
              {content.form.fields.sessionLanguage}
            </legend>
            <div className="flex flex-wrap gap-2">
              {languageOptions.map((option) => {
                const checked = formState.sessionLanguage === option.value;
                return (
                  <label key={option.value} className="cursor-pointer">
                    <input
                      type="radio"
                      name="session-language"
                      value={option.value}
                      checked={checked}
                      onChange={() => setField("sessionLanguage", option.value)}
                      className="peer sr-only"
                    />
                    <span className="inline-flex rounded-full border border-navy/20 bg-white px-3 py-2 text-sm text-body transition peer-checked:border-navy peer-checked:bg-navy peer-checked:text-white">
                      {option.label}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <fieldset className="md:col-span-2">
            <legend className="mb-2 text-sm font-medium text-body">{content.form.fields.supportNeeds}</legend>
            <div className="flex flex-wrap gap-2">
              {content.form.options.supportNeeds.map((option) => {
                const checked = formState.supportNeeds.includes(option.value);
                return (
                  <label key={option.value} className="cursor-pointer">
                    <input
                      type="checkbox"
                      value={option.value}
                      checked={checked}
                      onChange={() => toggleSupportNeed(option.value)}
                      className="peer sr-only"
                    />
                    <span className="inline-flex rounded-full border border-navy/20 bg-white px-3 py-2 text-sm text-body transition peer-checked:border-navy peer-checked:bg-navy peer-checked:text-white">
                      {option.label}
                    </span>
                  </label>
                );
              })}
            </div>
            {supportNeedsError && <p className="mt-1 text-xs text-terracotta">{supportNeedsError}</p>}
          </fieldset>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-body">{content.form.fields.timezone}</span>
            <input
              type="text"
              value={formState.timezone}
              onChange={(event) => setField("timezone", event.target.value)}
              placeholder={content.form.placeholders.timezone}
              aria-invalid={Boolean(hasAttemptedSubmit && formErrors.timezone)}
              className={cn(
                "w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-body outline-none transition placeholder:text-muted",
                hasAttemptedSubmit && formErrors.timezone
                  ? "border-terracotta/60 focus:border-terracotta/60 focus:ring-2 focus:ring-terracotta/20"
                  : "border-navy/15 focus:border-navy/40 focus:ring-2 focus:ring-navy/20"
              )}
            />
            {hasAttemptedSubmit && formErrors.timezone && (
              <p className="mt-1 text-xs text-terracotta">{formErrors.timezone}</p>
            )}
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-body">{content.form.fields.timeWindow}</span>
            <input
              type="text"
              value={formState.timeWindow}
              onChange={(event) => setField("timeWindow", event.target.value)}
              placeholder={content.form.placeholders.timeWindow}
              aria-invalid={Boolean(hasAttemptedSubmit && formErrors.timeWindow)}
              className={cn(
                "w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-body outline-none transition placeholder:text-muted",
                hasAttemptedSubmit && formErrors.timeWindow
                  ? "border-terracotta/60 focus:border-terracotta/60 focus:ring-2 focus:ring-terracotta/20"
                  : "border-navy/15 focus:border-navy/40 focus:ring-2 focus:ring-navy/20"
              )}
            />
            {hasAttemptedSubmit && formErrors.timeWindow && (
              <p className="mt-1 text-xs text-terracotta">{formErrors.timeWindow}</p>
            )}
          </label>

          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm font-medium text-body">{content.form.fields.message}</span>
            <textarea
              value={formState.message}
              onChange={(event) => setField("message", event.target.value)}
              placeholder={content.form.placeholders.message}
              className="min-h-24 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-body outline-none transition placeholder:text-muted focus:border-navy/40 focus:ring-2 focus:ring-navy/20"
            />
            <p className="mt-1 text-xs text-muted">{content.form.hints.message}</p>
          </label>

          <div className="md:col-span-2">
            {formErrors.message && <p className="mb-2 text-xs text-terracotta">{formErrors.message}</p>}
            <div className="rounded-2xl border border-navy/10 bg-warm px-4 py-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-2xl">
                  <p className="text-sm leading-relaxed text-body">{content.form.privacyNotice.text}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    <a
                      href={`/privacy-policy${legalSuffix}`}
                      className="font-medium text-navy underline underline-offset-4 hover:text-terracotta"
                    >
                      {content.form.privacyNotice.privacyPolicyLabel}
                    </a>{" "}
                    ·{" "}
                    <a
                      href={`/cookie-policy${legalSuffix}`}
                      className="font-medium text-navy underline underline-offset-4 hover:text-terracotta"
                    >
                      {content.form.privacyNotice.cookiePolicyLabel}
                    </a>{" "}
                    ·{" "}
                    <a
                      href={`/legal-notice${legalSuffix}`}
                      className="font-medium text-navy underline underline-offset-4 hover:text-terracotta"
                    >
                      {content.form.privacyNotice.legalNoticeLabel}
                    </a>
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsPrivacyModalOpen(true)}
                  className="inline-flex min-h-11 items-center justify-center rounded-xl border border-navy/15 bg-white px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy/15"
                >
                  {content.form.privacyModal.triggerLabel}
                </button>
              </div>

              <label className="mt-4 flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={formState.privacyAcknowledged}
                  onChange={(event) => setField("privacyAcknowledged", event.target.checked)}
                  aria-invalid={Boolean(hasAttemptedSubmit && formErrors.privacyAcknowledged)}
                  className="mt-0.5 h-4 w-4 rounded border-navy/25 text-terracotta focus:ring-terracotta/30"
                />
                <span className="text-sm leading-relaxed text-body">
                  {content.form.privacyAcknowledgement.labelBeforeLink}{" "}
                  <a
                    href={`/privacy-policy${legalSuffix}`}
                    className="font-medium text-navy underline underline-offset-4 hover:text-terracotta"
                  >
                    {content.form.privacyAcknowledgement.privacyPolicyLabel}
                  </a>{" "}
                  {content.form.privacyAcknowledgement.labelAfterLink}
                </span>
              </label>
              {hasAttemptedSubmit && formErrors.privacyAcknowledged && (
                <p className="mt-2 text-xs text-terracotta">{formErrors.privacyAcknowledged}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 inline-flex min-h-11 items-center justify-center rounded-xl bg-terracotta px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#b95e3e] disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-terracotta/40"
            >
              {isSubmitting ? content.form.submittingLabel : content.form.submitLabel}
            </button>
            <p className="mt-2 text-xs text-muted">{content.form.recommendedNotice}</p>
          </div>
        </form>
      </div>

      <PrivacyInfoModal
        open={isPrivacyModalOpen}
        title={content.form.privacyModal.title}
        closeLabel={content.form.privacyModal.closeLabel}
        onClose={() => setIsPrivacyModalOpen(false)}
      >
        <p className="text-muted">{content.form.privacyModal.intro}</p>
        {content.form.privacyModal.sections.map((section) => (
          <section key={section.title} className="space-y-2">
            <h4 className="text-base font-semibold text-navy">{section.title}</h4>
            {section.body.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </section>
        ))}
        <p className="text-sm text-muted">
          {content.form.privacyModal.moreInfoText}{" "}
          <a
            href={`/privacy-policy${legalSuffix}`}
            className="font-medium text-navy underline underline-offset-4 hover:text-terracotta"
          >
            {content.form.privacyNotice.privacyPolicyLabel}
          </a>
          .
        </p>
      </PrivacyInfoModal>
    </Section>
  );
}
