import type { Metadata } from "next";
import Signup from "@/components/Signup";

export const metadata: Metadata = {
  title: "The WallGlamUp App: Coming Soon",
  description: "The WallGlamUp app helps you discover, save and style wall art for your space. Join the waitlist.",
  alternates: { canonical: "/app" },
};

const tones = ["#c9775b", "#6b8f71", "#d4a373", "#3f4a4a", "#e8d5c0", "#6d98ab"];

export default function AppPage() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">Coming soon to iPhone</span>
            <h1>Wall art, matched to your space.</h1>
            <p className="lead">
              The WallGlamUp app is in testing now. It brings our curated collections to your pocket, with tools to
              save favorites and find art that suits your rooms.
            </p>
            <div className="feature-list">
              <div>
                <h3>Discover by style</h3>
                <p className="muted">Browse curated art from independent artists, refreshed every day.</p>
              </div>
              <div>
                <h3>Save your favorites</h3>
                <p className="muted">Keep a wishlist for every room and come back to it any time.</p>
              </div>
              <div>
                <h3>Buy straight from the artist</h3>
                <p className="muted">Every piece links directly to its maker&apos;s Etsy shop.</p>
              </div>
            </div>
          </div>
          <div className="phone" aria-hidden="true">
            {tones.map((t, i) => (
              <div key={i} className="art-frame" style={{ background: t }} />
            ))}
          </div>
        </div>
      </section>
      <Signup heading="Be first to know" text="Join the waitlist and we will let you know the moment the app launches." />
    </>
  );
}
