import { Analytics } from "@vercel/analytics/react";
import { DownloadSection } from "@/components/landing/download-section";
import { FaqSection } from "@/components/landing/faq-section";
import { FloatingNavbar } from "@/components/landing/floating-navbar";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { InstallSection } from "@/components/landing/install-section";
import { PreviewSection } from "@/components/landing/preview-section";
import { StackingSection } from "@/components/landing/stacking-section";
import { SupportSection } from "@/components/landing/support-section";

export function App() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<FloatingNavbar />
			<main>
				<Hero />
				<PreviewSection />
				<StackingSection />
				<InstallSection />
				<FaqSection />
				<SupportSection />
				<DownloadSection />
			</main>
			<Footer />
			<Analytics />
		</div>
	);
}

export default App;
