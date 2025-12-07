export default function Footer() {
  return (
    <footer
      className="
      w-full backdrop-blur-lg  bg-[#320241] border-t border-white/20 
      text-white 
    "
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">ShopSphere</h2>
          <p className="text-white/70 mt-3 leading-relaxed">
            Your trusted marketplace for quality products crafted with care and
            delivered with speed.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-pink-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-300">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-300">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Customer service */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-pink-300">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-300">
                Shipping Info
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-300">
                Returns & Refunds
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-300">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
          <p className="text-white/70 mb-4">
            Subscribe for deals, updates, and new arrivals.
          </p>

          <div className="flex items-center bg-white/20 rounded-full overflow-hidden backdrop-blur-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-white placeholder-white/70 px-4 py-3 w-full focus:outline-none"
            />
            <button className="px-6 py-3 bg-pink-600 hover:bg-pink-700 transition text-white font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 py-4 text-center text-white/70 text-sm">
        © {new Date().getFullYear()} ShopSphere. All rights reserved.
      </div>
    </footer>
  );
}
