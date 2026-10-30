import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHeader, pageHead } from "@/components/site/PageHeader";
import { enabledServices } from "@/content/site";

export const Route = createFileRoute("/services")({
  head: () => pageHead("Tax & VAT Services in Bangladesh | Income Tax, VAT, Compliance", "Income tax assistance, business tax compliance, VAT consultancy, TIN guidance, and tax notice support for clients in Bangladesh.", "/services"),
  component: Services,
});

const process = ["Submit a request describing your needs", "Receive a reply and document checklist", "Consultation to discuss your situation", "Agree on next steps, if any"];

function Services() {
  const list = enabledServices();
  return (
    <>
      <PageHeader eyebrow="Services" title="Tax and VAT services">
        General descriptions of available service categories. Information here is not individualized tax or legal advice.
      </PageHeader>
      <div className="container-page grid gap-10 py-14 lg:grid-cols-4">
        <nav aria-label="Services" className="hidden lg:block">
          <ul className="sticky top-24 space-y-2 text-sm">
            {list.map((s) => <li key={s.slug}><a href={`#${s.slug}`} className="text-muted-foreground hover:text-primary">{s.title}</a></li>)}
          </ul>
        </nav>
        <div className="space-y-10 lg:col-span-3">
          {list.map((s) => (
            <article id={s.slug} key={s.slug} className="scroll-mt-24 rounded-md border bg-card p-6 md:p-8">
              <h2 className="text-2xl font-semibold">{s.title}</h2>
              <p className="mt-3 text-muted-foreground">{s.description}</p>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="font-sans text-sm font-semibold uppercase tracking-wider">Who may need this</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">{s.whoNeeds.map((x) => <li key={x}>{x}</li>)}</ul>
                </div>
                <div>
                  <h3 className="font-sans text-sm font-semibold uppercase tracking-wider">What the consultant may help with</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">{s.helpWith.map((x) => <li key={x}>{x}</li>)}</ul>
                </div>
                <div>
                  <h3 className="font-sans text-sm font-semibold uppercase tracking-wider">Typical documents</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">{s.documents.map((x) => <li key={x}>{x}</li>)}</ul>
                  <p className="mt-2 text-xs text-muted-foreground">Subject to individual circumstances. Do not send documents before you are asked.</p>
                </div>
                <div>
                  <h3 className="font-sans text-sm font-semibold uppercase tracking-wider">Consultation process</h3>
                  <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-muted-foreground">{process.map((x) => <li key={x}>{x}</li>)}</ol>
                </div>
              </div>
              <Button asChild className="mt-6"><Link to="/consultation">Request assistance</Link></Button>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
