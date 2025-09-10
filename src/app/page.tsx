export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1>My Simple Next.js Site</h1>
      </header>

      <main className="main">
        <div className="content">
          <h2>Welcome to our homepage</h2>
          <div className="image-container">
            <img src="Capture.PNG" alt="Sample website image" className="sample-image" />
          </div>
          <p>This is a simple Next.js 14+ project built with TypeScript and vanilla CSS.</p>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2024 My Simple Next.js Site. All rights reserved.</p>
      </footer>
    </div>
  )
}