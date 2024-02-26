export default function Nav() {
  return (
    <div className="flex items-center justify-between py-10 px-20 font-ibm-plex-mono">
      <a href="/home" className="bg- tan">penguin type</a>
      <nav className="space-x-12 bg -apricot hidden sm:block">
        <a href="/practice-tests" className="hover:opacity-80">practice tests</a>
        <a href="/learn-more" className="hover:opacity-80">learn more</a>
        <a href="/login" className="hover:opacity-80">login</a>
      </nav>
    </div>
  );
}
