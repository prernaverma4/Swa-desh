import Link from 'next/link';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-[#F4EDE6] text-[var(--color-primary-dark)] py-20 flex flex-col items-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[var(--color-primary-dark)] drop-shadow-sm">Empower India's Heritage & Economy</h1>
        <p className="text-xl max-w-2xl mb-10 text-gray-700">Manage heritage sites, support artisans, and grow with real-time analytics.</p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/login?type=manufacturer" className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg shadow-md hover:bg-[var(--color-primary-dark)] font-semibold transition">
            Login as Manufacturer
          </Link>
          <Link href="/login" className="px-6 py-3 border-2 border-[var(--color-primary-dark)] text-[var(--color-primary-dark)] rounded-lg shadow-md hover:bg-[var(--color-primary-dark)] hover:text-[#F4EDE6] font-semibold transition">
            Sign In
          </Link>
          <Link href="/register" className="px-6 py-3 border-2 border-[var(--color-primary-dark)] text-[var(--color-primary-dark)] rounded-lg shadow-md hover:bg-[var(--color-primary-dark)] hover:text-[#F4EDE6] font-semibold transition">
            Register
          </Link>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-20 w-full max-w-7xl px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-transform duration-300">
          <div className="w-16 h-16 bg-[#F3F4F6] rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">🏛️</span>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-[var(--color-primary-dark)]">Heritage Sites</h3>
          <p className="text-gray-600">Track and manage heritage sites across India. View historical and tourism impact data.</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-transform duration-300 border-b-4 border-[var(--color-accent)]">
          <div className="w-16 h-16 bg-[#F3F4F6] rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">🎨</span>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-[var(--color-primary-dark)]">Artisans & MSME</h3>
          <p className="text-gray-600">Support traditional artisans and list crafts to a broader digital marketplace.</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-transform duration-300">
          <div className="w-16 h-16 bg-[#F3F4F6] rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">📊</span>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-[var(--color-primary-dark)]">Analytics & Export</h3>
          <p className="text-gray-600">Visual Insights through charts, dashboards, and easy CSV exports for policymakers.</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full bg-[#FFFDD0] py-16 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 text-[var(--color-primary-dark)]">Ready to get started?</h2>
        <Link href="/login" className="px-8 py-4 bg-[var(--color-primary)] text-white rounded-xl shadow-lg hover:bg-[#556B2F] text-lg font-bold transition">
          Full Login Page
        </Link>
      </section>
    </div>
  );
}
