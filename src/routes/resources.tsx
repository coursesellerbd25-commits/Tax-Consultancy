import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { PageHeader, pageHead } from "@/components/site/PageHeader";
import { NBR_URL } from "@/content/site";

export const Route = createFileRoute("/resources")({
  head: () => pageHead("Tax Knowledge Center | Bangladesh Income Tax & VAT Resources", "Educational articles on income tax, VAT, TIN, and tax documentation in Bangladesh, in Bangla and English.", "/resources"),
  component: Resources,
});

const categories = ["Personal Income Tax", "Business Tax", "VAT", "Tax Documentation", "TIN and Tax Registration", "Tax Deadlines", "Frequently Asked Questions", "Official Tax Updates"];

function Resources() {
  return (
    <>
      <PageHeader eyebrow="Tax Resources" title="Tax Knowledge Center">
        Educational articles in Bangla and English. <span lang="bn">বাংলা ও ইংরেজিতে কর বিষয়ক তথ্য।</span>
      </PageHeader>
      <div className="container-page py-14">
        <h2 className="text-xl font-semibold">Categories</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {categories.map((c) => <li key={c} className="rounded-sm border bg-card px-3 py-1.5 text-sm">{c}</li>)}
        </ul>
        <div className="mt-10 rounded-md border border-dashed bg-card p-8">
          <p className="font-medium text-primary">No articles published yet.</p>
          <p className="mt-2 text-sm text-muted-foreground">Articles are reviewed by the consultant before publication, with a clear last-verified date.</p>
        </div>
        <div className="mt-10 rounded-md bg-surface p-6">
          <h2 className="text-lg font-semibold">Official source</h2>
          <p className="mt-2 text-sm text-muted-foreground">For current rates, deadlines, and official notices, always refer to the National Board of Revenue.</p>
          <a href={NBR_URL} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            National Board of Revenue (nbr.gov.bd) <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </>
  );
}
