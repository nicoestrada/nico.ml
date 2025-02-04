export default function Home() {
  return (
    <div className="min-h-screen bg-black p-4 text-[#FF9E64] antialiased">
      <div className="container mx-auto max-w-2xl">
        <div className="animate-pulse mb-4 opacity-80">
          <span className="text-sm">visitor@nico.ml:~$ </span>
          <span className="animate-blink">█</span>
        </div>
        
        <main className="space-y-6">
          <section className="terminal-section">
            <h1 className="text-2xl font-bold mb-2 text-[#FFB067] glow">
              {'>'}whoami
            </h1>
            <p className="opacity-90">
              I&apos;m a husband, developer and curious human. 
            </p>
          </section>

          {/* <section className="terminal-section">
            <h2 className="text-xl font-bold mb-2 text-[#FFB067] glow">
              {'>'}ls ./projects
            </h2>
            <ul className="list-disc list-inside space-y-2 opacity-90">
              <li>Project 1 - Description here</li>
              <li>Project 2 - Description here</li>
              <li>Project 3 - Description here</li>
            </ul>
          </section>

          <section className="terminal-section">
            <h2 className="text-xl font-bold mb-2 text-[#FFB067] glow">
              {'>'}ls ./blog
            </h2>
            <ul className="list-disc list-inside space-y-2 opacity-90">
              <li>
                <span className="text-[#FFB067]">2024-03-20</span> - Building a Terminal Portfolio with Next.js
              </li>
              <li>
                <span className="text-[#FFB067]">2024-03-15</span> - My Journey in Software Development
              </li>
              <li>
                <span className="text-[#FFB067]">2024-03-10</span> - Understanding Modern Web Architecture
              </li>
            </ul>
          </section> */}

          <section className="terminal-section">
            <h2 className="text-xl font-bold mb-2 text-[#FFB067] glow">
              {'>'}cat contact.txt
            </h2>
            <div className="space-y-1 opacity-90">
              <p>Email: <a href="mailto:ne13@illinois.edu" className="hover:text-[#FFB067] underline">ne13@illinois.edu</a></p>
              <p>GitHub: <a href="https://github.com/nicoestrada" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFB067] underline">github.com/nicoestrada</a></p>
              <p>X: <a href="https://x.com/nicosestrada" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFB067] underline">x.com/nicosestrada</a></p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
