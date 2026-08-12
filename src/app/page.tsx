export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 antialiased">
      <div className="mx-auto max-w-[1600px] lg:flex lg:min-h-screen">
        <aside className="border-b border-white/10 bg-neutral-950/95 lg:sticky lg:top-0 lg:h-screen lg:w-[22rem] lg:border-b-0 lg:border-r lg:border-white/10 xl:w-[24rem]">
          <div data-scroll-hide className="flex flex-col justify-between px-5 py-5 sm:px-6 lg:px-8 lg:py-8">
            <div className="flex items-center justify-between gap-4">
              <a href="#top" className="flex items-center gap-3 text-left" aria-label="Go to top">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-sky-400/40 bg-sky-500/10 text-[11px] font-semibold tracking-[0.18em] text-sky-300">
                  AM
                </span>
                <span>
                  <span className="block text-[10px] font-medium uppercase tracking-[0.28em] text-neutral-300">
                    Alex Morgan
                  </span>
                  <span className="mt-1 block text-xs text-neutral-400">Full-stack developer</span>
                </span>
              </a>

              <button
                type="button"
                data-nav-toggle
                aria-expanded="false"
                aria-controls="mobile-nav"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-neutral-200 transition hover:border-sky-400/40 hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400/40 lg:hidden"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="flex w-4 flex-col gap-1.5">
                  <span className="h-0.5 w-full rounded-full bg-current" />
                  <span className="h-0.5 w-full rounded-full bg-current" />
                  <span className="h-0.5 w-full rounded-full bg-current" />
                </span>
              </button>
            </div>

            <nav
              id="mobile-nav"
              className="mt-6 flex flex-col gap-2 lg:mt-12 lg:gap-3"
              aria-label="Primary navigation"
            >
              <a
                href="#about"
                aria-current="page"
                className="group relative flex items-center justify-between rounded-full border border-transparent px-3 py-2 text-sm font-medium text-neutral-300 transition hover:border-white/10 hover:bg-white/[0.02] hover:text-neutral-50 focus:outline-none focus:ring-2 focus:ring-sky-400/40 lg:px-3.5"
              >
                <span className="font-mono text-[11px] tracking-[0.2em] text-sky-300">01.</span>
                <span className="flex-1 text-right lg:text-left">About</span>
                <span className="ml-3 h-px w-8 bg-white/15 transition group-hover:w-10 group-hover:bg-sky-400" />
              </a>
              <a
                href="#work"
                className="group relative flex items-center justify-between rounded-full border border-transparent px-3 py-2 text-sm font-medium text-neutral-300 transition hover:border-white/10 hover:bg-white/[0.02] hover:text-neutral-50 focus:outline-none focus:ring-2 focus:ring-sky-400/40 lg:px-3.5"
              >
                <span className="font-mono text-[11px] tracking-[0.2em] text-sky-300">02.</span>
                <span className="flex-1 text-right lg:text-left">Work</span>
                <span className="ml-3 h-px w-8 bg-white/15 transition group-hover:w-10 group-hover:bg-sky-400" />
              </a>
              <a
                href="#skills"
                className="group relative flex items-center justify-between rounded-full border border-transparent px-3 py-2 text-sm font-medium text-neutral-300 transition hover:border-white/10 hover:bg-white/[0.02] hover:text-neutral-50 focus:outline-none focus:ring-2 focus:ring-sky-400/40 lg:px-3.5"
              >
                <span className="font-mono text-[11px] tracking-[0.2em] text-sky-300">03.</span>
                <span className="flex-1 text-right lg:text-left">Skills</span>
                <span className="ml-3 h-px w-8 bg-white/15 transition group-hover:w-10 group-hover:bg-sky-400" />
              </a>
              <a
                href="#contact"
                className="group relative flex items-center justify-between rounded-full border border-transparent px-3 py-2 text-sm font-medium text-neutral-300 transition hover:border-white/10 hover:bg-white/[0.02] hover:text-neutral-50 focus:outline-none focus:ring-2 focus:ring-sky-400/40 lg:px-3.5"
              >
                <span className="font-mono text-[11px] tracking-[0.2em] text-sky-300">04.</span>
                <span className="flex-1 text-right lg:text-left">Contact</span>
                <span className="ml-3 h-px w-8 bg-white/15 transition group-hover:w-10 group-hover:bg-sky-400" />
              </a>
            </nav>

            <div className="mt-8 flex items-center gap-3 text-neutral-300 lg:mt-12">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-current transition hover:border-sky-400/40 hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                  <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.5 9.86h2.9V18H5.5V9.86Zm5.25 0h2.77v1.13h.04c.39-.74 1.33-1.52 2.74-1.52 2.93 0 3.47 1.93 3.47 4.43V18h-2.9v-16.8c0-1.05-.02-2.32-1.41-2.32-1.42 0-1.64 1.12-1.64 2.26V18h-2.9V9.86Z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-current transition hover:border-sky-400/40 hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                  <path d="M12 .8a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.06c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.48-1.34-5.48-5.96 0-1.32.47-2.4 1.23-3.25-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.1 11.1 0 0 1 6.02 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.85 1.23 1.93 1.23 3.25 0 4.63-2.81 5.65-5.49 5.95.43.38.81 1.12.81 2.27v3.36c0 .32.21.7.83.58A12 12 0 0 0 12 .8Z" />
                </svg>
              </a>
              <a
                href="mailto:hello@alexmorgan.dev"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-current transition hover:border-sky-400/40 hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
                aria-label="Email"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                  <path d="M3.5 6.5A2.5 2.5 0 0 1 6 4h12a2.5 2.5 0 0 1 2.5 2.5v11A2.5 2.5 0 0 1 18 18H6a2.5 2.5 0 0 1-2.5-2.5v-11Zm2.2.8 6.3 4.52 6.3-4.52H5.7Zm-1.2 1.85v9.85c0 .38.31.7.7.7h12.6c.39 0 .7-.32.7-.7V8.35l-6.44 4.62a1.5 1.5 0 0 1-1.72 0L4.5 8.35Z" />
                </svg>
              </a>
            </div>
          </div>
        </aside>

        <main id="top" className="flex-1">
          <section id="hero" aria-labelledby="hero-heading" className="border-b border-white/10 py-24 md:py-32">
            <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-12">
              <div data-animate className="mb-8 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.24em] text-neutral-400">
                <span className="inline-block h-px w-10 bg-sky-400" aria-hidden="true" />
                Available for select work
              </div>

              <div data-animate className="max-w-4xl">
                <h1
                  id="hero-heading"
                  className="text-5xl font-black leading-[0.9] tracking-[-0.06em] text-neutral-50 sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
                >
                  I build product experiences that feel clear, fast, and human.
                </h1>
              </div>

              <div data-animate className="mt-8 max-w-2xl space-y-6">
                <p className="text-base leading-8 text-neutral-300 sm:text-lg">
                  I&apos;m Alex, a full-stack developer designing and shipping digital products that balance product thinking, engineering craft, and measurable outcomes across web, mobile, and cloud experiences.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#work"
                    className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:scale-[1.02] hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50"
                  >
                    View work
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 text-sm font-semibold text-neutral-100 transition hover:scale-[1.02] hover:border-sky-400/40 hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
                  >
                    Start a project
                  </a>
                </div>
              </div>

              <div data-animate className="mt-12 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">Experience</p>
                  <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-neutral-100">7+ years</p>
                </div>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">Launches</p>
                  <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-neutral-100">18 shipped</p>
                </div>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">Focus</p>
                  <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-neutral-100">Product design + engineering</p>
                </div>
              </div>
            </div>
          </section>

          <section id="work" aria-labelledby="work-heading" className="border-b border-white/10 py-24 md:py-32">
            <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-12">
              <div data-animate className="mb-10">
                <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-sky-300">Featured Work</p>
                <h2 id="work-heading" className="mt-4 text-3xl font-bold tracking-[-0.05em] text-neutral-50 md:text-4xl">
                  Selected product builds.
                </h2>
              </div>

              <div className="space-y-6">
                <article
                  data-animate
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-4 transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/[0.04] focus-within:border-sky-400/40 sm:p-6"
                >
                  <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">Fintech platform</p>
                          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-neutral-50">Northstar Capital</h3>
                        </div>
                        <span className="rounded-full border border-sky-400/40 bg-sky-500/10 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-sky-300">
                          Product Design
                        </span>
                      </div>

                      <div className="h-56 rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.28),_transparent_40%),linear-gradient(135deg,_rgba(15,23,42,0.8),_rgba(2,6,23,1))] p-4" aria-hidden="true">
                        <div className="flex h-full items-end justify-between rounded-xl border border-white/10 bg-neutral-950/40 p-4">
                          <div className="space-y-3">
                            <div className="h-2.5 w-20 rounded-full bg-sky-400/80" />
                            <div className="h-2.5 w-28 rounded-full bg-white/15" />
                            <div className="h-2.5 w-16 rounded-full bg-white/10" />
                          </div>
                          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-sky-400/40 bg-sky-500/10 text-xl text-sky-300">
                            +
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between">
                      <div>
                        <p className="text-base leading-7 text-neutral-300">
                          Reduced onboarding friction for a business lending flow, helping new applicants complete the first milestone with less drop-off.
                        </p>
                        <ul className="mt-5 flex flex-wrap gap-2">
                          <li className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-300">Next.js</li>
                          <li className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-300">TypeScript</li>
                          <li className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-300">Stripe</li>
                          <li className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-300">Postgres</li>
                        </ul>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-neutral-950 transition hover:bg-sky-400"
                        >
                          Live Demo
                          <span aria-hidden="true">→</span>
                        </a>
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm font-semibold text-neutral-100 transition hover:border-sky-400/40 hover:text-sky-300"
                        >
                          View Code
                        </a>
                      </div>
                    </div>
                  </div>
                </article>

                <article
                  data-animate
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-4 transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/[0.04] focus-within:border-sky-400/40 sm:p-6"
                >
                  <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">SaaS dashboard</p>
                          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-neutral-50">Signal Board</h3>
                        </div>
                        <span className="rounded-full border border-sky-400/40 bg-sky-500/10 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-sky-300">
                          Analytics
                        </span>
                      </div>

                      <div className="h-56 rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.28),_transparent_35%),linear-gradient(135deg,_rgba(15,23,42,0.8),_rgba(2,6,23,1))] p-4" aria-hidden="true">
                        <div className="flex h-full items-end justify-between rounded-xl border border-white/10 bg-neutral-950/40 p-4">
                          <div className="flex w-full items-end gap-2">
                            <span className="w-full rounded-t-xl bg-sky-400/70" style={{ height: '38%' }} />
                            <span className="w-full rounded-t-xl bg-sky-300/70" style={{ height: '58%' }} />
                            <span className="w-full rounded-t-xl bg-sky-500/70" style={{ height: '72%' }} />
                            <span className="w-full rounded-t-xl bg-white/20" style={{ height: '82%' }} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between">
                      <div>
                        <p className="text-base leading-7 text-neutral-300">
                          Rebuilt operational reporting workflows so teams could review live trends and decision metrics without waiting on manual exports.
                        </p>
                        <ul className="mt-5 flex flex-wrap gap-2">
                          <li className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-300">React</li>
                          <li className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-300">Node</li>
                          <li className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-300">Redis</li>
                          <li className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-300">AWS</li>
                        </ul>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-neutral-950 transition hover:bg-sky-400"
                        >
                          Live Demo
                          <span aria-hidden="true">→</span>
                        </a>
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm font-semibold text-neutral-100 transition hover:border-sky-400/40 hover:text-sky-300"
                        >
                          View Code
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section id="about" aria-labelledby="about-heading" className="border-b border-white/10 py-24 md:py-32">
            <div className="mx-auto grid max-w-5xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
              <div data-animate>
                <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-sky-300">About Me</p>
                <h2 id="about-heading" className="mt-4 text-3xl font-bold tracking-[-0.05em] text-neutral-50 md:text-4xl">
                  I connect design clarity with engineering precision.
                </h2>
              </div>

              <div data-animate className="space-y-6 text-base leading-8 text-neutral-300">
                <p>
                  I help teams turn ambiguous ideas into clear, high-trust digital experiences. My work sits at the intersection of UX strategy, front-end architecture, and product delivery — from early concept sketches to production systems that scale.
                </p>
                <p>
                  Before working independently, I spent years building internal tooling, customer-facing platforms, and design systems for startups and product-led teams. The common thread has always been the same: reduce complexity, improve confidence, and ship faster without sacrificing quality.
                </p>
              </div>
            </div>
          </section>

          <section id="skills" aria-labelledby="skills-heading" className="border-b border-white/10 py-24 md:py-32">
            <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-12">
              <div data-animate className="mb-10">
                <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-sky-300">Skills &amp; Expertise</p>
                <h2 id="skills-heading" className="mt-4 text-3xl font-bold tracking-[-0.05em] text-neutral-50 md:text-4xl">
                  Product thinking, product building.
                </h2>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                <div data-animate className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">Frontend</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-200">Next.js</span>
                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-200">React</span>
                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-200">TypeScript</span>
                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-200">Tailwind</span>
                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-200">Figma</span>
                  </div>
                </div>

                <div data-animate className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">Backend</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-200">Node.js</span>
                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-200">Postgres</span>
                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-200">REST APIs</span>
                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-200">Prisma</span>
                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-200">Auth</span>
                  </div>
                </div>

                <div data-animate className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">DevOps</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-200">Vercel</span>
                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-200">Docker</span>
                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-200">GitHub Actions</span>
                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-200">CI/CD</span>
                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-200">Monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" aria-labelledby="contact-heading" className="py-24 md:py-32">
            <div className="mx-auto grid max-w-5xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
              <div data-animate>
                <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-sky-300">Contact</p>
                <h2 id="contact-heading" className="mt-4 text-3xl font-bold tracking-[-0.05em] text-neutral-50 md:text-4xl">
                  Let&apos;s build something useful.
                </h2>
              </div>

              <div data-animate className="rounded-3xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
                <form className="space-y-5" noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block text-sm text-neutral-300">
                      <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">Name</span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        className="w-full rounded-2xl border border-white/10 bg-neutral-950/60 px-4 py-3 text-sm text-neutral-50 placeholder:text-neutral-500 focus:border-sky-400/60 focus:outline-none focus:ring-2 focus:ring-sky-400/30"
                      />
                    </label>
                    <label className="block text-sm text-neutral-300">
                      <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">Email</span>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        className="w-full rounded-2xl border border-white/10 bg-neutral-950/60 px-4 py-3 text-sm text-neutral-50 placeholder:text-neutral-500 focus:border-sky-400/60 focus:outline-none focus:ring-2 focus:ring-sky-400/30"
                      />
                    </label>
                  </div>

                  <label className="block text-sm text-neutral-300">
                    <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">Project</span>
                    <input
                      type="text"
                      name="project"
                      placeholder="Product strategy, redesign, or build"
                      className="w-full rounded-2xl border border-white/10 bg-neutral-950/60 px-4 py-3 text-sm text-neutral-50 placeholder:text-neutral-500 focus:border-sky-400/60 focus:outline-none focus:ring-2 focus:ring-sky-400/30"
                    />
                  </label>

                  <label className="block text-sm text-neutral-300">
                    <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">Message</span>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project, timeline, and what success looks like."
                      className="w-full rounded-2xl border border-white/10 bg-neutral-950/60 px-4 py-3 text-sm text-neutral-50 placeholder:text-neutral-500 focus:border-sky-400/60 focus:outline-none focus:ring-2 focus:ring-sky-400/30"
                    />
                  </label>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:scale-[1.02] hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50"
                  >
                    Send inquiry
                  </button>
                </form>

                <div data-form-state="default" className="mt-5 rounded-2xl border border-dashed border-white/10 bg-neutral-950/40 px-4 py-3 text-sm text-neutral-400">
                  Typical response time: within 24 hours.
                </div>
                <div data-form-state="sending" className="mt-5 hidden rounded-2xl border border-sky-400/30 bg-sky-500/10 px-4 py-3 text-sm text-sky-200">
                  Sending your message…
                </div>
                <div data-form-state="success" className="mt-5 hidden rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                  Message sent successfully. I&apos;ll reply within one business day.
                </div>
                <div data-form-state="error" className="mt-5 hidden rounded-2xl border border-rose-400/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
                  There was a problem sending your message. Please try again or email hello@alexmorgan.dev.
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
