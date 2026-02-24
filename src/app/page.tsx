import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/ui/ServiceCard";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import { siteConfig } from "@/content/site";
import { services } from "@/content/services";
import { caseStudies } from "@/content/case-studies";

export default function HomePage() {
  const featuredCaseStudies = caseStudies.filter((cs) => cs.featured).slice(0, 4);

  return (
    <>
      {/* ═══ Hero ═══ */}
      <section className="relative overflow-hidden bg-brand-surface-dark text-[var(--color-text-on-dark)]">
        {/* Gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-accent/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-brand-gradient-end/10 blur-3xl" />
        </div>

        <Container className="relative section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent-light mb-6 animate-fade-in">
              {siteConfig.tagline}
            </p>
            <h1 className="mb-6 animate-fade-in-up">
              <span className="gradient-text">{siteConfig.heroHeadline}</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-text-on-dark-muted)] leading-relaxed mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in-up animation-delay-200">
              {siteConfig.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-300">
              <Button href="/contact/" size="lg">
                Start a Conversation
              </Button>
              <Button href="/case-studies/" variant="ghost" size="lg" className="border border-white/20 text-white hover:bg-white/10 hover:border-white/40 hover:text-white">
                View Our Work
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══ Philosophy: 10 & Labs ═══ */}
      <section className="section-padding bg-brand-surface-alt">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent mb-3">
                Our Philosophy
              </p>
              <h2 className="mb-6">
                <span className="gradient-text">10</span> &amp; Labs
              </h2>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-4">
                <strong className="text-brand-primary">10</strong> represents completeness — the full spectrum of what it takes to deliver meaningful technology: strategy, design, engineering, and people.
              </p>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                <strong className="text-brand-primary">Labs</strong> reflects our approach — experimental, hands-on, and always learning. We treat every project as a lab where solutions are discovered through practice, not theory alone.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-accent/10 to-brand-gradient-end/10 border border-brand-border flex items-center justify-center">
                <div className="text-center">
                  <span className="text-8xl font-black gradient-text">10</span>
                  <p className="text-2xl font-bold text-brand-primary mt-2">Labs</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══ Services Overview ═══ */}
      <section className="section-padding">
        <Container>
          <SectionHeading
            label="What We Do"
            title="Services that move you forward"
            description="From strategic direction to hands-on implementation, we cover the full spectrum of technology needs."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* ═══ Credentials Preview ═══ */}
      <section className="section-padding bg-brand-surface-alt">
        <Container>
          <SectionHeading
            label="Our Work"
            title="Proven track record"
            description="Real problems, real solutions, real impact — here are some of the projects we're proud of."
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {featuredCaseStudies.map((cs, index) => (
              <CaseStudyCard key={cs.slug} caseStudy={cs} index={index} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/case-studies/" variant="secondary" size="lg">
              View All Case Studies
            </Button>
          </div>
        </Container>
      </section>

      {/* ═══ CTA Block ═══ */}
      <section className="section-padding bg-brand-surface-dark text-[var(--color-text-on-dark)] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-accent/5 blur-3xl" />
        </div>
        <Container className="relative text-center">
          <h2 className="mb-4">Ready to build something meaningful?</h2>
          <p className="text-lg text-[var(--color-text-on-dark-muted)] max-w-xl mx-auto mb-8">
            Whether you need strategic guidance, a dedicated team, or a full product build — let&apos;s start a conversation.
          </p>
          <Button href="/contact/" size="lg">
            Talk to Us
          </Button>
        </Container>
      </section>
    </>
  );
}
