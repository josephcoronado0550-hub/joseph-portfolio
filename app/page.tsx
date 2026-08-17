export default function Home() {
  const skills = [
    "Python",
    "Node.js",
    "TypeScript",
    "REST APIs",
    "GraphQL",
    "OpenAPI / Swagger",
    "Salesforce",
    "Git",
    "CI/CD",
    "Docker",
    "Kubernetes",
    "Terraform",
    "AWS",
    "SQL",
    "Markdown",
    "GitBook",
    "ReadMe",
    "Document360",
    "Zendesk Analytics",
    "Salesforce Service Cloud",
    "Technical Documentation",
    "Developer Enablement",
    "Instructional Design",
  ];

  const experience = [
    {
      company: "Cloudflare",
      location: "San Francisco, CA",
      role: "Technical Enablement & Documentation Lead",
      period: "Jan 2023 – Present",
      description:
        "Leading developer documentation and technical enablement initiatives across APIs, platform services, CI/CD workflows, and enterprise cloud integrations.",
      highlights: [
        "Designed and maintained developer-facing documentation for APIs and platform services.",
        "Built docs-as-code workflows using Git-based versioning and structured review standards.",
        "Developed API reference standards using OpenAPI specifications.",
        "Created self-service troubleshooting content to reduce recurring developer support requests.",
        "Partnered with engineering and product teams to align documentation with release cycles.",
      ],
    },
    {
      company: "Spiceworks",
      location: "Austin, TX",
      role: "Senior Developer Documentation Engineer",
      period: "Jan 2020 – Dec 2022",
      description:
        "Built technical documentation and enablement systems for IT service management, API integrations, helpdesk automation, and platform workflows.",
      highlights: [
        "Created documentation for platform workflows, API integrations, and IT automation.",
        "Converted Zendesk support trends into structured knowledge base content.",
        "Developed REST API documentation using Swagger standards.",
        "Created onboarding guides for IT administrators and enterprise users.",
        "Improved documentation discoverability through taxonomy and tagging improvements.",
      ],
    },
    {
      company: "Rightpoint",
      location: "San Francisco, CA",
      role: "Technical Documentation Engineer",
      period: "Mar 2017 – Dec 2019",
      description:
        "Produced technical documentation for enterprise digital transformation projects, API integrations, and customer experience platforms.",
      highlights: [
        "Documented API integrations and backend service workflows.",
        "Created enterprise onboarding and implementation guides.",
        "Standardized templates for technical deliverables and integration documentation.",
        "Translated architecture designs into clear documentation for technical and business stakeholders.",
      ],
    },
    {
      company: "ESO",
      location: "Austin, TX",
      role: "Software Engineer",
      period: "Jan 2015 – Feb 2017",
      description:
        "Developed backend services, APIs, and data workflows supporting clinical and emergency-response systems.",
      highlights: [
        "Developed .NET backend services for clinical data workflows.",
        "Built SQL Server stored procedures and reporting pipelines.",
        "Implemented REST APIs for internal emergency-response applications.",
        "Refactored legacy services to improve reliability of data ingestion workflows.",
      ],
    },
  ];

  const focusAreas = [
    {
      title: "Developer Documentation",
      description:
        "Designing clear, scalable developer documentation for APIs, platforms, integrations, and enterprise workflows.",
    },
    {
      title: "Technical Enablement",
      description:
        "Creating onboarding programs, technical walkthroughs, training content, and self-service knowledge systems that improve developer adoption.",
    },
    {
      title: "API Enablement",
      description:
        "Translating complex REST, GraphQL, authentication, and integration workflows into practical developer guides and API references.",
    },
    {
      title: "DevOps Enablement",
      description:
        "Documenting CI/CD pipelines, release management practices, Git workflows, cloud infrastructure, and platform operations.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="text-xl font-bold tracking-tight">
            Joseph<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden gap-7 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-cyan-400">
              About
            </a>
            <a href="#expertise" className="transition hover:text-cyan-400">
              Expertise
            </a>
            <a href="#experience" className="transition hover:text-cyan-400">
              Experience
            </a>
            <a href="#skills" className="transition hover:text-cyan-400">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex min-h-[88vh] max-w-6xl items-center px-6 py-24">
        <div className="max-w-5xl">
          <p className="mb-5 font-medium text-cyan-400">
            Technical Enablement • Developer Documentation • Platform Engineering
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Joseph Coronado Allen
          </h1>

          <h2 className="mt-6 max-w-4xl text-2xl font-medium leading-relaxed text-slate-300 sm:text-3xl">
            Technical Enablement & Developer Documentation Lead
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            I help engineering organizations turn complex platforms, APIs, and
            DevOps workflows into clear documentation, scalable knowledge
            systems, and developer enablement programs.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#experience"
              className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              View Experience
            </a>

            <a
              href="mailto:joseph.coronado0550@gmail.com"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500">
            <span>Austin, TX</span>
            <span>11 Years Experience</span>
            <span>APIs & Developer Platforms</span>
            <span>DevOps Enablement</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            About
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-bold sm:text-4xl">
            Making complex technical systems easier to understand and adopt
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-lg leading-8 text-slate-400">
              <p>
                I&apos;m a technical enablement and platform-focused engineer
                with 11 years of experience spanning software engineering,
                developer documentation, API enablement, enterprise SaaS, and
                DevOps.
              </p>

              <p>
                My work focuses on translating complex technical systems into
                structured documentation, developer guides, onboarding
                experiences, knowledge bases, and training programs that help
                developers become productive faster.
              </p>
            </div>

            <div className="space-y-5 text-lg leading-8 text-slate-400">
              <p>
                I work closely with engineering, product, support, and platform
                teams to identify documentation gaps, reduce repetitive support
                requests, and improve developer self-service.
              </p>

              <p>
                My technical background in APIs, backend engineering, CI/CD,
                cloud infrastructure, and enterprise platforms allows me to
                communicate effectively with engineers while creating content
                that remains accessible to broader audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Expertise
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            What I specialize in
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7 transition hover:-translate-y-1 hover:border-cyan-500/50"
              >
                <h3 className="text-xl font-semibold">{area.title}</h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="border-y border-slate-800 bg-slate-900/40"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Professional Experience
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Career Experience
          </h2>

          <div className="mt-12 space-y-8">
            {experience.map((job) => (
              <article
                key={`${job.company}-${job.role}`}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-7 sm:p-9"
              >
                <div className="flex flex-col justify-between gap-4 md:flex-row">
                  <div>
                    <h3 className="text-2xl font-bold">{job.role}</h3>

                    <p className="mt-2 font-medium text-cyan-400">
                      {job.company} • {job.location}
                    </p>
                  </div>

                  <p className="text-sm text-slate-500">{job.period}</p>
                </div>

                <p className="mt-6 max-w-4xl leading-7 text-slate-400">
                  {job.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {job.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 leading-7 text-slate-400"
                    >
                      <span className="mt-2 text-cyan-400">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Skills
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Technology & Enablement Toolkit
          </h2>

          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Education
          </p>

          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950 p-7">
            <h3 className="text-xl font-semibold">
              Bachelor of Science in Computer Science
            </h3>

            <p className="mt-2 text-cyan-400">
              University of Texas at Austin
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Aug 2009 – Dec 2013
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
            Let&apos;s connect
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            I&apos;m interested in opportunities involving developer
            documentation, technical enablement, developer experience,
            platform engineering, and API enablement.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:joseph.coronado0550@gmail.com"
              className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Email Me
            </a>

            <a
              href="tel:+17377101372"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Call Me
            </a>
          </div>

          <div className="mt-8 space-y-2 text-sm text-slate-500">
            <p>joseph.coronado0550@gmail.com</p>
            <p>(737) 710-1372</p>
            <p>Austin, TX 78729</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Joseph Coronado Allen. Built with Next.js.
      </footer>
    </main>
  );
}