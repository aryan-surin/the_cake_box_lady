export default function Footer() {
    return (
      <footer className="bg-[#F4E9DF] py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-4xl font-serif mb-6">
              The Cake Box Lady
            </h2>
  
            <p className="text-[#6E4B3A] max-w-md leading-relaxed">
              Luxury handcrafted cakes created with warmth, artistry, and
              celebration at heart.
            </p>
          </div>
  
          <div>
            <h4 className="font-semibold mb-5">Navigation</h4>
  
            <ul className="space-y-3 text-[#6E4B3A]">
              <li>Home</li>
              <li>Gallery</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
  
          <div>
            <h4 className="font-semibold mb-5">Contact</h4>
  
            <ul className="space-y-3 text-[#6E4B3A]">
              <li>hello@cakeboxlady.com</li>
              <li>+91 9046973192 </li>
              <li>Instagram</li>
              <li>WhatsApp</li>
            </ul>
          </div>
        </div>
  
        <div className="border-t border-[#dcc8b8] mt-16 pt-8 text-sm text-[#8a6b5c] text-center">
          © 2026 The Cake Box Lady. Crafted with love.
        </div>
      </footer>
    )
  }