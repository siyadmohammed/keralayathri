// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-lg font-semibold">TravelX</h3>
          <p className="text-sm mt-2">Discover amazing travel experiences with curated packages.</p>
        </div>
        <div>
          <h4 className="text-md font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-1">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/packages" className="hover:underline">Packages</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-md font-semibold">Follow Us</h4>
          <ul className="mt-2 space-y-1">
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm py-3 border-t border-gray-700">
        © 2025 TravelX. All rights reserved.
      </div>
    </footer>
  );
}
