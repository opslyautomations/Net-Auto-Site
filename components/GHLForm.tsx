"use client";

export default function GHLForm() {
  return (
    // No fixed min-height: form_embed.js sizes the iframe to the form's real
    // height, and a taller box left an empty band under the Submit button.
    <div
      className="w-full rounded-2xl border bg-white overflow-hidden"
      style={{ boxShadow: "0 4px 24px rgba(10,31,61,0.12), 0 1px 4px rgba(10,31,61,0.08)" }}
    >
      <iframe
        src="https://api.opslyautomations.com/widget/form/ABvoqJpqtmxcoFgbknFG"
        style={{ display: "block", width: "100%", height: "700px", border: "none", borderRadius: "0px" }}
        id="inline-ABvoqJpqtmxcoFgbknFG"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Automotive Detailing Request Form"
        data-height="915"
        data-layout-iframe-id="inline-ABvoqJpqtmxcoFgbknFG"
        data-form-id="ABvoqJpqtmxcoFgbknFG"
        title="Automotive Detailing Request Form"
        aria-label="Automotive Detailing Request Form"
        loading="lazy"
      />
    </div>
  );
}
