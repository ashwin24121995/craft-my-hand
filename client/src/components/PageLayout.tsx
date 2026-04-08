import { ReactNode, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  lastUpdated?: string;
}

export default function PageLayout({ children, title, subtitle, lastUpdated }: PageLayoutProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 lg:pt-28 pb-16 lg:pb-24">
        <div className="container max-w-3xl mx-auto">
          {/* Page Header */}
          <div className="mb-10 lg:mb-14">
            <h1
              className="text-3xl lg:text-4xl font-semibold text-charcoal mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {title}
            </h1>
            {subtitle && (
              <p className="text-base text-charcoal-light/70" style={{ fontFamily: "var(--font-body)" }}>
                {subtitle}
              </p>
            )}
            {lastUpdated && (
              <p className="text-sm text-muted-foreground mt-2" style={{ fontFamily: "var(--font-body)" }}>
                Last Updated: {lastUpdated}
              </p>
            )}
            <div className="gold-line mt-6" />
          </div>

          {/* Page Content */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-semibold prose-headings:text-charcoal
              prose-p:text-charcoal-light prose-p:leading-relaxed
              prose-li:text-charcoal-light prose-li:leading-relaxed
              prose-strong:text-charcoal prose-strong:font-semibold
              prose-a:text-gold prose-a:no-underline hover:prose-a:underline"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
