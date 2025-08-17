// app/privacy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "How we collect, use, and handle information on this site.",
};

export default function PrivacyPage() {
  return (
    <div className="container-app py-16 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tight mb-2 underline underline-offset-4 decoration-[hsl(var(--brand)/0.6)]">Privacy Notice</h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-10">How we collect, use, and handle information on this site.</p>

      <div className="space-y-10">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-300">
            <li>
              <span className="font-medium">Contact information</span> (e.g., name, email) when you submit the contact form.
            </li>
          </ul>
          <p className="mt-2">At this time, we do not collect any other personal data, and we do not use cookies or analytics tools.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. How We Use Information</h2>
          <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-300">
            <li>To respond to your inquiries sent through the contact form.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Sharing of Information</h2>
          <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-300">
            <li>We do <span className="font-semibold text-red-600 dark:text-red-400">not</span> sell or rent personal information.</li>
            <li>
              Information will only be shared with the email service provider used to deliver messages from the contact form.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Security</h2>
          <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-300">
            <li>We use SSL encryption to protect information transmitted through the site.</li>
            <li>While we take reasonable measures, no method of transmission over the Internet is 100% secure.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. User Rights</h2>
          <p>You may request access to or deletion of your personal information by contacting us.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. Changes to this Notice</h2>
          <p>We may update this Privacy Notice as needed. Any changes will be posted on this page.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">7. Contact</h2>
          <p>
            If you have questions about this Privacy Notice, please contact us using the contact form.
          </p>
        </section>
      </div>
    </div>
  );
}
