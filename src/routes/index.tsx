import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, FileCheck2, Lock, MessageSquare, UserRound, ClipboardList, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Placeholder, pageHead } from "@/components/site/PageHeader";
import { enabledServices, faqs, site } from "@/content/site";
import heroImg from "@/assets/hero-desk.jpg";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Tax & VAT Consultancy for Individuals and Businesses in Bangladesh",
      "Practical guidance on income tax, VAT matters, and financial documentation in Bangladesh. Request a consultation.",
      "/",
    ),
  component: Home,
});

const steps = [
  "Choose the service you need.",
  "Submit a consultation request.",
  "Receive confirmation and the required-document checklist.",
  "Discuss your requirements with the consultant.",
];

const reasons = [
  { icon: MessageSquare, title: "Clear communication", text: "Explanations in plain Bangla or English, without unnecessary jargon." },
  { icon: ClipboardList, title: "Organized documentation", text: "Structured checklists so you know what to prepare." },
  { icon: FileCheck2, title: "Practical guidance", text: "Focused on what is relevant to your situation." },
  { icon: Lock, title: "Professional confidentiality", text: "Your information is used only to respond to your request." },
  { icon: UserRound, title: "Personalized consultations", text: "Every consultation starts by understanding your needs." },
];

function Home() {
  return (
    <>
      <section className="border-b bg-surface">
        <div className="container-page grid items-center gap-10 py-14 md:grid-cols-2 md:py-24">
          <div>
            <p className="eyebrow">Income Tax · VAT · Compliance</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Tax & VAT Consultancy for Individuals and Businesses in Bangladesh
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Practical guidance for tax compliance, VAT matters, and financial documentation—tailored to your needs.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg"><Link to="/consultation">Request a Consultation</Link></Button>
              <Button asChild size="lg" variant="outline"><Link to="/services">Explore Our Services</Link></Button>
            </div>
          </div>
          <img
            src={heroImg}
            alt="Organized financial documents, a pen and a calculator on a consultant's desk"
            width={1280}
            height={1024}
            className="aspect-[5/4] w-full rounded-md object-cover shadow-sm"
          />
        </div>
      </section>

      <section className="container-page grid gap-8 py-16 md:grid-cols-3">
        <div>
          <span className="gold-rule" />
          <h2 className="mt-4 text-2xl font-semibold">About the consultant</h2>
        </div>
        <div className="space-y-4 md:col-span-2">
          <p className="text-muted-foreground">
            {site.biography ?? "A tax practitioner and VAT consultant providing guidance to individuals and businesses in Bangladesh."}
          </p>
          <div className="flex flex-wrap gap-2">
            {site.credentials.length ? (
              site.credentials.map((c) => <span key={c} className="rounded-sm border px-3 py-1 text-sm">{c}</span>)
            ) : (
              <Placeholder>[Placeholder: verified credentials and experience to be added by the owner]</Placeholder>
            )}
          </div>
          <Link to="/about" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            Read the full profile <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="border-y bg-surface py-16">
        <div className="container-page">
          <p className="eyebrow">Services</p>
          <h2 className="mt-3 text-3xl font-semibold">How we can help</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {enabledServices().slice(0, 7).map((s) => (
              <article key={s.slug} className="flex flex-col rounded-md border bg-card p-6 transition-shadow hover:shadow-md">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.short}</p>
                <Link to="/services" hash={s.slug} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                  Learn more <span className="sr-only">about {s.title}</span><ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <p className="eyebrow">Process</p>
        <h2 className="mt-3 text-3xl font-semibold">How it works</h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s} className="border-t-2 border-gold pt-4">
              <span className="font-serif text-3xl text-gold">0{i + 1}</span>
              <p className="mt-2 font-medium text-primary">{s}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-3xl text-sm text-muted-foreground">
          Please note: submitting an inquiry does not automatically create a professional-client relationship or
          guarantee that a service will be provided.
        </p>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container-page">
          <p className="eyebrow">Our approach</p>
          <h2 className="mt-3 text-3xl font-semibold text-primary-foreground">Why choose this consultancy?</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {reasons.map((r) => (
              <div key={r.title}>
                <r.icon className="h-6 w-6 text-gold" aria-hidden />
                <h3 className="mt-3 font-sans text-base font-semibold text-primary-foreground">{r.title}</h3>
                <p className="mt-1 text-sm text-primary-foreground/75">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Tax Resources</p>
            <h2 className="mt-3 text-3xl font-semibold">Latest articles</h2>
          </div>
          <Link to="/resources" className="text-sm font-medium text-primary hover:underline">View all resources</Link>
        </div>
        <div className="mt-8 flex items-start gap-4 rounded-md border border-dashed bg-card p-6">
          <BookOpen className="h-6 w-6 shrink-0 text-gold" aria-hidden />
          <p className="text-sm text-muted-foreground">
            No articles have been published yet. Reviewed articles in Bangla and English will appear here.
          </p>
        </div>
      </section>

      <section className="border-t bg-surface py-16">
        <div className="container-page grid gap-10 md:grid-cols-3">
          <div>
            <p className="eyebrow">FAQs</p>
            <h2 className="mt-3 text-3xl font-semibold">Common questions</h2>
            <Link to="/faqs" className="mt-4 inline-block text-sm font-medium text-primary hover:underline">See all FAQs</Link>
          </div>
          <Accordion type="single" collapsible className="md:col-span-2">
            {faqs.slice(0, 5).map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="container-page py-20 text-center">
        <CheckCircle2 className="mx-auto h-8 w-8 text-gold" aria-hidden />
        <h2 className="mt-4 text-3xl font-semibold">Need Help Understanding Your Tax Requirements?</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Tell us what you need help with, and request a consultation.</p>
        <Button asChild size="lg" className="mt-8"><Link to="/contact">Contact the Consultant</Link></Button>
      </section>
    </>
  );
}
