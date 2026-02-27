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
      <section className="relative overflow-hidden bg-black text-white">
        {/* Gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-brand-accent/8 blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-brand-gradient-end/5 blur-[100px]" />
        </div>

        <Container className="relative section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent mb-6 animate-fade-in">
              {siteConfig.tagline}
            </p>
            <h1 className="mb-6 animate-fade-in-up">
              {siteConfig.heroHeadline}
            </h1>
            <p className="text-lg md:text-xl text-white/50 leading-relaxed mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in-up animation-delay-200">
              {siteConfig.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-300">
              <Button href="/contact/" size="lg">
                Start a Conversation
              </Button>
              <Button href="/case-studies/" variant="outline" size="lg">
                View Our Work
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══ What We Do ═══ */}
      <section className="section-padding bg-[#0a0a0a]">
        <Container>
          <SectionHeading
            label="What We Do"
            title="Services that move you forward"
            description="From strategic direction to hands-on implementation, we cover the full spectrum of technology needs."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                highlighted={service.id === "outsourcing"}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* ═══ Our Work Process ═══ */}
      <section className="section-padding bg-black">
        <Container>
          <SectionHeading
            label="Our Process"
            title="How we deliver results"
            description="A proven methodology that ensures quality delivery every time."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We dive deep into your challenges, goals, and constraints to fully understand what success looks like." },
              { step: "02", title: "Plan", desc: "We map out the approach, define milestones, and align on the technology and team structure." },
              { step: "03", title: "Build", desc: "We execute with precision — iterating fast, shipping often, and keeping you in the loop." },
              { step: "04", title: "Deliver", desc: "We hand off with care — documentation, training, and ongoing support to ensure lasting impact." },
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 text-brand-accent flex items-center justify-center mx-auto mb-5 text-xl font-bold group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                  {item.step}
                </div>
                <h3 className="text-lg mb-2">{item.title}</h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══ Featured Projects ═══ */}
      <section className="section-padding bg-[#0a0a0a]">
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
            <Button href="/case-studies/" variant="outline" size="lg">
              View All Projects
            </Button>
          </div>
        </Container>
      </section>

      {/* ═══ CTA Block ═══ */}
      <section className="section-padding bg-brand-accent relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5 blur-[120px]" />
        </div>
        <Container className="relative text-center">
          <h2 className="mb-4 text-white">Ready to transform?</h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Whether you need strategic guidance, a dedicated team, or a full product build — let&apos;s start a conversation.
          </p>
          <Button href="/contact/" size="lg" variant="inverted">
            Talk to Us
          </Button>
        </Container>
      </section>
    </>
  );
}
