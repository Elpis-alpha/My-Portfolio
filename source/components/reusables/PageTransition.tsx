/**
 * Wraps every page so route changes get the same entrance.
 * CSS-only (see `.page-enter`), so server-rendered content is never hidden
 * behind JavaScript.
 */
const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <div className="page-enter">{children}</div>
);

export default PageTransition;
