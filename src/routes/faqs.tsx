import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageHeader, pageHead } from "@/components/site/PageHeader";
import { faqs } from "@/content/site";

export const Route = createFileRoute("/faqs")({
  head: () => pageHead("FAQs | Tax & VAT Consultancy Bangladesh", "Answers to common questions about consultations, documents, income tax, VAT, fees, and confidentiality.", "/faqs"),
  component: Faqs,
});

function Faqs() {
  const [q, setQ] = useState("");
  const groups = useMemo(() => {
    const t = q.trim().toLowerCase();
    const list = faqs.filter((f) => !t || (f.q + f.a).toLowerCase().includes(t));
    return list.reduce<Record<string, typeof faqs>>((acc, f) => ((acc[f.category] ??= []).push(f), acc), {});
  }, [q]);
  const keys = Object.keys(groups);
  return (
    <>
      <PageHeader eyebrow="FAQs" title="Frequently asked questions" />
      <div className="container-page max-w-3xl py-14">
        <label htmlFor="faq-search" className="sr-only">Search FAQs</label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
          <Input id="faq-search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search questions…" className="h-11 pl-9" />
        </div>
        {keys.length === 0 && <p className="mt-8 text-muted-foreground">No questions match your search.</p>}
        {keys.map((k) => (
          <section key={k} className="mt-10">
            <h2 className="text-lg font-semibold">{k}</h2>
            <Accordion type="multiple">
              {(groups[k] ?? []).map((f) => (
                <AccordionItem key={f.q} value={f.q}>
                  <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        ))}
      </div>
    </>
  );
}
