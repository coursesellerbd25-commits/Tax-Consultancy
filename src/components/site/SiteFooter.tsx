import { Link } from "@tanstack/react-router";
import { site, enabledServices } from "@/content/site";
import { navItems } from "./SiteHeader";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-serif text-lg text-primary-foreground">{site.businessName}</p>
          <p className="mt-2 text-sm text-primary-foreground/70">{site.tagline}</p>
          {site.credentials.length > 0 && (
            <ul className="mt-3 text-sm text-primary-foreground/70">
              {site.credentials.map((c) => <li key={c}>{c}</li>)}
            </ul>
          )}
        </div>
        <div>
          <p className="eyebrow">Navigate</p>
          <ul className="mt-3 space-y-2 text-sm">
            {navItems.map((n) => (
              <li key={n.to}><Link to={n.to} className="text-primary-foreground/80 hover:text-gold">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Services</p>
          <ul className="mt-3 space-y-2 text-sm">
            {enabledServices().slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to="/services" hash={s.slug} className="text-primary-foreground/80 hover:text-gold">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
            {site.contactEmail && <li><a href={`mailto:${site.contactEmail}`} className="hover:text-gold">{site.contactEmail}</a></li>}
            {site.contactPhone && <li><a href={`tel:${site.contactPhone}`} className="hover:text-gold">{site.contactPhone}</a></li>}
            {!site.contactEmail && !site.contactPhone && (
              <li><Link to="/consultation" className="hover:text-gold">Send an inquiry</Link></li>
            )}
            <li><Link to="/privacy" className="hover:text-gold">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-gold">Terms of Use</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-page space-y-2 py-6 text-xs text-primary-foreground/60">
          <p>
            Disclaimer: Information on this website is general and educational. It is not individualized tax or legal
            advice. Submitting an inquiry does not create a professional-client relationship.
          </p>
          <p>© {year} {site.businessName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
