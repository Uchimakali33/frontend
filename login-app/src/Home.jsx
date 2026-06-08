function Home(){
    return (
        <>
        <div className="bg-zinc-950 text-zinc-300 antialiased min-h-screen py-10 px-4 ring-1 ring-emerald-950">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Section */}
        <header className="text-center mb-10 border-b border-zinc-800 pb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
            🚀 Welcome to the <span className="text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]">Auth-Mastery</span> Project
          </h1>
          <p className="text-lg md:text-xl text-emerald-500 font-medium font-mono">
            Building the Gateway: Exploring the Mechanics of Login & Registration
          </p>
        </header>

        {/* Main Content Section */}
        <main className="space-y-8 font-sans">
          
          {/* Introduction */}
          <section className="bg-zinc-900 p-6 md:p-8 rounded-xl border border-zinc-800 shadow-xl">
            <p className="text-base md:text-lg leading-relaxed text-zinc-400">
              This platform is a dedicated sandbox designed to master the complexities of user authentication. From securing sensitive data to managing seamless user sessions, this project documents the journey of building a robust "Front-to-Back" authentication system.
            </p>
          </section>

          {/* What's Under the Hood */}
          <section className="bg-zinc-900 p-6 md:p-8 rounded-xl border border-zinc-800 shadow-xl shadow-emerald-950/10">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4 flex items-center gap-2 pb-2 border-b border-zinc-800 font-mono">
              🛠️ What’s Under the Hood?
            </h2>
            <p className="text-zinc-400 mb-4">
              This isn't just a couple of input fields. I’ve focused on the core pillars that make modern web security work:
            </p>
            <ul className="space-y-4">
              {[
                { title: "Secure Registration", desc: "Implementing validation to ensure data integrity and user uniqueness." },
                { title: "Encrypted Authentication", desc: "Exploring how passwords move from a keyboard to a database (and why they should never stay in plain text)." },
                { title: "Session Management", desc: "Understanding how the browser 'remembers' you using tokens or cookies." },
                { title: "Error Handling", desc: "Building a graceful UI that tells you exactly what went wrong without compromising security." }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-emerald-400 mr-2 font-bold font-mono">&gt;</span>
                  <span>
                    <strong className="text-emerald-300 font-semibold">{item.title}:</strong> <span className="text-zinc-400">{item.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Explore the Flow (Table) */}
          <section className="bg-zinc-900 p-6 md:p-8 rounded-xl border border-zinc-800 shadow-xl">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4 pb-2 border-b border-zinc-800 font-mono">
              🧪 Explore the Flow
            </h2>
            <p className="text-zinc-400 mb-6">
              Ready to see it in action? Use the paths below to test the logic I’ve implemented.
            </p>
            <div className="overflow-x-auto rounded-lg border border-zinc-800">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-950 border-b border-zinc-800">
                    <th className="p-3 font-semibold text-emerald-400 font-mono">Feature</th>
                    <th className="p-3 font-semibold text-zinc-400">Description</th>
                    <th className="p-3 font-semibold text-zinc-400">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {[
                    { name: "Registration", desc: "Create a new account with real-time validation.", status: "Functional", active: true },
                    { name: "Login", desc: "Secure entry point with credential verification.", status: "Functional", active: true },
                    { name: "Protected Routes", desc: "Pages that only 'Authenticated' eyes can see.", status: "Locked", active: false },
                    { name: "Logout", desc: "Safely clearing sessions and securing the client.", status: "Functional", active: true }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-zinc-800/30 transition">
                      <td className="p-3 font-semibold text-white whitespace-nowrap">{row.name}</td>
                      <td className="p-3 text-zinc-400">{row.desc}</td>
                      <td className="p-3 whitespace-nowrap">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium font-mono ${
                          row.active ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-500'
                        }`}>
                          <span className={`h-1.5 w-1.5 rounded-full ${row.active ? 'bg-emerald-400 animate-pulse' : 'bg-amber-500'}`}></span>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* The Goal */}
          <section className="bg-zinc-900 p-6 md:p-8 rounded-xl border border-zinc-800 shadow-xl">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4 pb-2 border-b border-zinc-800 font-mono">
              💡 The Goal
            </h2>
            <blockquote className="bg-zinc-950 border-l-4 border-emerald-500 my-4 p-4 rounded-r-lg italic text-zinc-300 font-medium">
              "The best way to understand security is to build it from the ground up."
            </blockquote>
            <p className="text-zinc-400 mt-4 leading-relaxed">
              The objective of this website is to visualize the <strong className="text-emerald-300 font-semibold">Request-Response cycle</strong>. By interacting with these forms, you are triggering a series of backend checks, database queries, and security protocols that form the backbone of the modern web.
            </p>
          </section>

          {/* Call to Action */}
          <div className="text-center bg-zinc-900 border border-emerald-950/50 p-8 rounded-xl mt-12 shadow-2xl shadow-emerald-950/20">
            <h2 className="text-2xl font-bold text-white mb-2 font-mono">🏁 Get Started</h2>
            <p className="text-zinc-400 mb-6">Experience the workflow first-hand:</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/register" className="px-6 py-3 bg-emerald-500 text-zinc-950 font-bold rounded-lg shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition active:scale-95 duration-150">
                Create an Account
              </a>
              <a href="/login" className="px-6 py-3 bg-zinc-950 text-emerald-400 font-bold rounded-lg border border-emerald-500/30 shadow-sm hover:bg-zinc-900 transition active:scale-95 duration-150 hover:border-emerald-500">
                Sign In
              </a>
            </div>
          </div>


        </main>
      </div>
    </div>
    </>
    );
}

export default Home;