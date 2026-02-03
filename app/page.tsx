export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
            <nav className="relative flex items-center justify-between pt-6 px-4 sm:px-6 lg:px-8">
              <div className="flex items-center flex-1">
                <div className="flex items-center justify-between w-full">
                  <div>
                    <span className="text-3xl font-bold text-gray-900">Recall</span>
                  </div>
                </div>
              </div>
            </nav>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Preserve Your</span>
                  <span className="block text-primary-600">Research Judgment</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  A passive research memory system that helps researchers recall evidence they previously encountered, used, or dismissed—without manual organization.
                </p>
                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                  <div className="rounded-md shadow">
                    <a
                      href="#waitlist"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10 transition-colors"
                    >
                      Join Waitlist
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="py-16 bg-white overflow-hidden lg:py-24">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="relative">
            <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              The Real Problem
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
              The most valuable part of research isn't the papers themselves—it's the judgments you formed while reading them.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                Research Memory Loss
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                When you return to a problem months later, you remember seeing "something relevant before," but you can't reconstruct:
              </p>

              <dl className="mt-10 space-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Why it mattered</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Which assumptions you questioned and which approaches you rejected
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">The context</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    What problem you were solving when you read it
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">The judgment</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Whether you used it as evidence or implicitly rejected it
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-gray-100 rounded-lg overflow-hidden p-8">
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3 opacity-50"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/5 opacity-50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="relative">
            <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How Recall Works
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
              Zero-friction research memory that preserves your judgment over time
            </p>
          </div>

          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                  Passive Recording
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                  No manual tagging or organization required. Recall automatically captures:
                </p>

                <dl className="mt-10 space-y-10">
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Attention patterns</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      Which papers you read deeply and which sections you focused on
                    </dd>
                  </div>

                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Revisit behavior</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      Papers you returned to multiple times across different contexts
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                  <div className="relative block w-full bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg overflow-hidden p-8">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="h-3 w-3 bg-primary-400 rounded-full animate-pulse"></div>
                        <div className="h-3 bg-primary-300 rounded w-1/2"></div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="h-3 w-3 bg-primary-500 rounded-full"></div>
                        <div className="h-3 bg-primary-400 rounded w-2/3"></div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="h-3 w-3 bg-primary-300 rounded-full"></div>
                        <div className="h-3 bg-primary-200 rounded w-1/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                  Intelligent Recall
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                  When you need it, Recall helps you find evidence from your past reading—even without remembering paper titles or authors.
                </p>

                <dl className="mt-10 space-y-10">
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Natural language queries</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      Ask questions like "What did I read about diffusion models last month?"
                    </dd>
                  </div>

                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Context-aware results</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      Recall surfaces not just papers, but the reasoning context around them
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-10 -mx-4 relative lg:mt-0">
                <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                  <div className="relative block w-full bg-white rounded-lg overflow-hidden p-8 border-2 border-gray-200">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                            <span className="text-primary-600 text-sm font-medium">Q</span>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-600">What did I reject about baseline approaches?</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                            <span className="text-gray-600 text-sm font-medium">R</span>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="space-y-2">
                            <div className="h-3 bg-gray-200 rounded w-full"></div>
                            <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                            <div className="h-3 bg-gray-200 rounded w-4/6"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Recall Is Not */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">What Recall Is Not</h2>
            <p className="mt-4 text-lg text-gray-500">
              Clear boundaries make for better tools
            </p>
          </div>
          <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gray-200 text-gray-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Not a reference manager</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                We don't replace Zotero. We complement it by preserving your thinking, not just citations.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gray-200 text-gray-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Not an AI agent</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                We don't generate research ideas. We help you recall your own past reasoning.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gray-200 text-gray-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Not a PDF organizer</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                We don't require manual filing. We capture what matters through your natural research behavior.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* CTA Section */}
      <div id="waitlist" className="bg-primary-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Interested in early access?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-primary-100">
            We're currently in prototype stage. Join our waitlist to be notified when we launch.
          </p>
          <a
            href="mailto:loy004@ucsd.edu?subject=Recall%20Early%20Access"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 sm:w-auto transition-colors"
          >
            Contact for Early Access
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="https://www.linkedin.com/in/longxuan-yu-1277b1271" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; 2026 Recall. Built for researchers, by researchers.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
