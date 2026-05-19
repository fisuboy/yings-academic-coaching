export type DiscoveryCallPayload = {
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

export const bookingFormConfig = {
  // Set this env var to your real endpoint later:
  // NEXT_PUBLIC_BOOKING_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
  //
  // Formspree: https://formspree.io/f/{form_id}
  // Basin: https://usebasin.com/f/{form_id}
  // Getform: https://getform.io/f/{form_id}
  endpoint: process.env.NEXT_PUBLIC_BOOKING_FORM_ENDPOINT ?? "",
  method: "POST" as const
};

function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function submitDiscoveryCallRequest(payload: DiscoveryCallPayload) {
  // Honeypot hit: silently treat as success and stop.
  if (payload.website.trim()) {
    await delay(500);
    return { ok: true as const, mocked: true as const };
  }

  if (!bookingFormConfig.endpoint) {
    // No provider configured yet. Keep UX realistic in local/static mode.
    await delay(900);
    return { ok: true as const, mocked: true as const };
  }

  const response = await fetch(bookingFormConfig.endpoint, {
    method: bookingFormConfig.method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    return { ok: false as const, mocked: false as const };
  }

  return { ok: true as const, mocked: false as const };
}
