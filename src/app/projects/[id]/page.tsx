import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldAlert } from "lucide-react";
import { projects } from "@/data/projects";
import { redactionsMap } from "@/data/redactions";
import RedactedImage from "@/components/RedactedImage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Generates static paths for projects
export function generateStaticParams() {
  return projects.map((p) => ({
    id: p.id,
  }));
}

export default async function ProjectCaseStudy({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Define details for each case study
  const studyDetails: Record<
    string,
    {
      overview: string;
      businessProblem: string;
      role: string;
      challenges: string[];
      solution: string;
      features: string[];
      results: string[];
    }
  > = {
    capacity: {
      overview: "A comprehensive enterprise-grade platform built to design, test, and render high-complexity quantitative and qualitative research surveys. The product empowers researchers to build surveys without coding while maintaining high speed and execution reliability.",
      businessProblem: "Existing survey-rendering platforms were incapable of processing complex conditional loop logic and dynamic answer routing without requiring specialized developer code, severely slowing down research workflows.",
      role: "Full-Stack Engineer. Responsible for building the visual survey-authoring workflow editor, optimizing rendering, and designing microservices logic for survey state validation.",
      challenges: [
        "Dynamically rendering custom HTML with nested conditional skip logic and nested loops on client devices without rendering lags.",
        "Ensuring high fault tolerance on survey submission events where thousands of concurrent writes can hit the databases.",
        "Compiling and parsing custom survey DSL logic reliably on the backend server."
      ],
      solution: "Implemented a visual drag-and-drop hierarchy parser with a custom AST (Abstract Syntax Tree) compiler. Backend microservices were decoupled with Resilience4j circuit breakers and loaded with Redis clusters to queue and cache survey responses.",
      features: [
        "Visual drag-and-drop question editor supporting 70+ question formats",
        "AST logic parsing engine for dynamic runtime client-side survey branching",
        "Distributed session state cache to prevent data loss on survey disconnects",
        "Configurable validation checks for answers (regex, numerical limits)"
      ],
      results: [
        "Enabled survey programmers to build logic-heavy workflows 5x faster.",
        "Maintained 99.99% system uptime during high-volume research campaigns.",
        "Served over 70 complex question types with average loading latency under 200ms."
      ]
    },
    "warehouse-ops": {
      overview: "A custom warehouse management system designed to orchestrate and optimize quality checks, product labelling, box assignments, and printer routing on industrial warehouse floors in Europe.",
      businessProblem: "Manual paper-based verification led to a high rate of shipment discrepancies, mislabelled boxes, and slow fulfillment times due to isolated printing setups.",
      role: "Lead Full-Stack Developer. Architected the real-time scanning workflow, designed PostgreSQL database models, configured Supabase integrations, and created the visual label editor.",
      challenges: [
        "Ensuring high-speed, reliable synchronization between fast-paced barcode scanner inputs and database records.",
        "Configuring workstation-specific printer queue routing for thermal devices across multiple physical zones.",
        "Managing edge cases like box double-ownership, scanning anomalies, and session drops."
      ],
      solution: "Created an event-driven system leveraging WebSockets for real-time workstation heartbeats and instant queue notifications. Built a visual label layout builder generating raw Zebra ZPL formats natively.",
      features: [
        "Workstation-isolation profiles matching operators directly to thermal printers",
        "Live dashboard reflecting scanned item counters, goodness ratios, and box fill rates",
        "Interactive ZPL label layout designer directly inside the browser",
        "Error validation workflows for damaged goods and wrong SKU events"
      ],
      results: [
        "Reduced shipment mismatch and anomalies down to near 0%.",
        "Improved workstation operator throughput by over 40%.",
        "Eliminated manual label queue handling via zero-touch printer pairing."
      ]
    },
    "print-agent": {
      overview: "An on-premise background system designed to act as a bridge between secure cloud database queues and physical Zebra thermal label printers connected on local warehouse networks.",
      businessProblem: "Web browsers cannot securely interface directly with local network printer ports (TCP Port 9100) on isolated subnets without causing severe security risks or requiring expensive VPNs.",
      role: "Backend Architect & Systems Engineer. Designed the Python core service, secure pairing workflows, and local network socket communication modules.",
      challenges: [
        "Ensuring the local agent continues polling and self-recovers its connection after network drops, router resets, or printer disconnects.",
        "Protecting database authentication credentials stored locally on shared warehouse workstations.",
        "Deploying and pairing the daemon cleanly for operators without engineering support."
      ],
      solution: "Built a multi-threaded Python daemon polling Supabase Edge Functions with a self-healing socket connection. Credentials are securely encrypted using the native OS keychain API. Packaged with a zero-touch setup installer.",
      features: [
        "Multi-threaded printer queue polling with dynamic fallback timeouts",
        "Self-healing socket recovery modules for raw TCP print transfers",
        "Encrypted database access using operating system keychains",
        "One-click pairing system utilizing 6-digit session codes"
      ],
      results: [
        "Reduced workstation setup time from hours to under 3 minutes.",
        "Maintained robust connection uptime with zero manual queue resets.",
        "Successfully routed thousands of labels daily with sub-second delay."
      ]
    }
  };

  const details = studyDetails[project.id] || {
    overview: project.shortDescription,
    businessProblem: "Establishing a solid and performant web presence to meet industry standards.",
    role: "Full-Stack Developer.",
    challenges: ["Optimizing assets for lightning-fast loads.", "Ensuring reliable forms handling."],
    solution: "Developed and built the corporate platform using modern React workflows, optimized bundle delivery, and set up solid integrations.",
    features: ["10+ responsive routes", "Formspree forms", "Vercel edge hosting"],
    results: ["Reduced page weight from 18MB to 47KB.", "100% lighthouse performance score."]
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 bg-[#FAF7F0] text-[#0A0A0A]">
        <div className="section-container">
          {/* Back button */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to work
          </Link>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-[#0A0A0A]/70 font-medium max-w-3xl mb-12">
            {project.shortDescription}
          </p>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Main content columns */}
            <div className="lg:col-span-2 space-y-12">
              {/* Project overview */}
              <section className="card-brutal p-8 md:p-10 bg-white">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-[#0A0A0A]/85 text-base leading-relaxed font-medium">
                  {details.overview}
                </p>
              </section>

              {/* Business problem & role */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <section className="card-brutal p-8 bg-white">
                  <h3 className="text-xl font-bold mb-3">The Challenge</h3>
                  <p className="text-[#0A0A0A]/75 text-sm leading-relaxed font-medium">
                    {details.businessProblem}
                  </p>
                </section>
                <section className="card-brutal p-8 bg-white">
                  <h3 className="text-xl font-bold mb-3">My Role</h3>
                  <p className="text-[#0A0A0A]/75 text-sm leading-relaxed font-medium">
                    {details.role}
                  </p>
                </section>
              </div>

              {/* Core visual architecture workflow */}
              {project.flowSteps && (
                <section className="card-brutal p-8 md:p-10 bg-white">
                  <h2 className="text-2xl font-bold mb-6">Workflow & Architecture</h2>
                  <div className="relative pl-6 border-l-2 border-[#0A0A0A]/10 space-y-8">
                    {project.flowSteps.map((flow, index) => (
                      <div key={index} className="relative">
                        <div className="absolute -left-[31px] top-1.5 w-[10px] h-[10px] rounded-full bg-[#0A0A0A] border-2 border-white" />
                        <h4 className="text-base font-bold text-[#0A0A0A] flex items-center gap-2">
                          <span className="text-xs font-extrabold text-[#0A0A0A]/40">0{index + 1}</span>
                          {flow.step}
                        </h4>
                        <p className="text-[#0A0A0A]/60 text-sm font-medium mt-1">
                          {flow.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Technical challenges */}
              <section className="card-brutal p-8 md:p-10 bg-white">
                <h2 className="text-2xl font-bold mb-6">Major Technical Challenges</h2>
                <div className="space-y-6">
                  {details.challenges.map((challenge, idx) => (
                    <div key={idx} className="flex gap-4">
                      <span className="text-lg font-bold text-[#0A0A0A]/30">/0{idx + 1}</span>
                      <p className="text-[#0A0A0A]/80 text-base font-medium leading-relaxed">
                        {challenge}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Solution */}
              <section className="card-brutal p-8 md:p-10 bg-white">
                <h2 className="text-2xl font-bold mb-4">Solution & Implementation</h2>
                <p className="text-[#0A0A0A]/85 text-base leading-relaxed font-medium">
                  {details.solution}
                </p>
              </section>
            </div>

            {/* Sidebar metadata column */}
            <div className="space-y-8">
              {/* NDA disclaimer if confidential */}
              {project.confidential && (
                <div className="card-brutal p-6 bg-amber-50/50 border-amber-600/40 text-amber-900 flex items-start gap-4">
                  <ShieldAlert className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-amber-800">Confidentiality Notice</h4>
                    <p className="text-xs font-semibold text-amber-800/80 mt-1 leading-relaxed">
                      This project was built under a strict non-disclosure agreement. Sensitive data, names, and IP addresses have been automatically masked.
                    </p>
                  </div>
                </div>
              )}

              {/* Technology details card */}
              <div className="card-brutal p-6 bg-white space-y-6">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#0A0A0A]/40 font-bold mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techLabels.map((t) => (
                      <span key={t} className="text-xs font-semibold px-2.5 py-1 bg-[#FAF7F0] border border-[#0A0A0A]/20 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {project.liveUrl && (
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#0A0A0A]/40 font-bold mb-2">Live Demo</h4>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
                    >
                      Visit Platform <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                )}

                {project.githubUrl && (
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#0A0A0A]/40 font-bold mb-2">Source Code</h4>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
                    >
                      View Repository <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>

              {/* Key Features list */}
              <div className="card-brutal p-6 bg-white">
                <h4 className="text-xs uppercase tracking-widest text-[#0A0A0A]/40 font-bold mb-4">Key Features</h4>
                <ul className="space-y-3">
                  {details.features.map((feat, idx) => (
                    <li key={idx} className="flex gap-2 text-xs font-semibold text-[#0A0A0A]/85 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Operational Results / Value */}
              <div className="card-brutal p-6 bg-[#FFD700] text-[#0A0A0A] shadow-[4px_4px_0_0_#0A0A0A]">
                <h4 className="text-xs uppercase tracking-widest text-[#0A0A0A]/50 font-bold mb-4">Business Value</h4>
                <ul className="space-y-3">
                  {details.results.map((res, idx) => (
                    <li key={idx} className="flex gap-2 text-xs font-extrabold leading-relaxed">
                      <span>•</span>
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Screenshot Gallery */}
          {project.screenshots && project.screenshots.length > 0 && (
            <section className="mt-16 space-y-8">
              <h2 className="text-2xl font-bold">Screenshot Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.screenshots.map((shot, idx) => (
                  <div key={idx} className="space-y-2">
                    <RedactedImage
                      src={shot}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      redactions={redactionsMap[shot] || []}
                    />
                    <p className="text-center text-xs text-[#0A0A0A]/40 font-semibold uppercase tracking-wider">
                      Figure {idx + 1}: {project.title} Interface Configuration
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
