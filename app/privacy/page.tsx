export default function PrivacyPage() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-6 px-6 pb-24 pt-16 md:px-0">
      <h1 className="text-3xl font-semibold">Privacy Policy (Draft)</h1>
      <p className="text-zinc-300">
        We do not collect analytics or tracking data on this site. This page is
        a placeholder so that routing and metadata work while we finish the
        final copy. Update this document with the definitive privacy statement
        before launch.
      </p>
      <ul className="list-disc space-y-2 pl-6 text-zinc-400">
        <li>Describe any infrastructure logs retained on Proxmox/Cloudflare.</li>
        <li>Clarify how contact requests via Calendly or email are handled.</li>
        <li>Document retention policies and how to request data removal.</li>
      </ul>
    </main>
  );
}
