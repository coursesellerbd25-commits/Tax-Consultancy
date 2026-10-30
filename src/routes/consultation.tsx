import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { PageHeader, pageHead } from "@/components/site/PageHeader";
import { site } from "@/content/site";

export const Route = createFileRoute("/consultation")({
  head: () => pageHead("Request a Consultation | Tax & VAT Consultancy Bangladesh", "Submit a consultation request for income tax, VAT, or tax compliance guidance in Bangladesh.", "/consultation"),
  component: Consultation,
});

function Consultation() {
  return (
    <>
      <PageHeader eyebrow="Consultation" title="Request a consultation">
        Tell us what you need help with. A request does not create a professional-client relationship or guarantee a service.
      </PageHeader>
      <div className="container-page max-w-3xl py-14">
        <div className="rounded-md border border-dashed bg-card p-8">
          <h2 className="text-xl font-semibold">The online request form is being set up</h2>
          <p className="mt-3 text-muted-foreground">
            The secure request form will be available here shortly.
            {site.contactEmail ? (
              <> In the meantime, you can email <a className="text-primary underline" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.</>
            ) : (
              <> Please check back soon, or visit the <Link to="/contact" className="text-primary underline">contact page</Link>.</>
            )}
          </p>
          <p className="mt-6 flex gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="h-5 w-5 shrink-0 text-gold" aria-hidden />
            We will never ask for national ID numbers, tax returns, bank statements, or passwords through this website.
          </p>
        </div>
      </div>
    </>
  );
}
