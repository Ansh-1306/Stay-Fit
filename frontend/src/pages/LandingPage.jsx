import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import About from "../components/About"
import Blog from "../components/Blog"
import Goals from "../components/Goals"


function LandingPage() {
  return (
    <>
    <div >
      <Navbar />
        <main>
          <article>
            {/* HERO Section */}
          <Hero />
           <About />
           <Goals />
           <Blog />
          </article>
        </main>
      

  
<Footer />
{/* 
- #BACK TO TOP
*/}
<a
  href="#top"
  className="back-top-btn"
  aria-label="back to top"
  data-back-top-btn
>
  <ion-icon name="caret-up-sharp" aria-hidden="true" />
</a>
</div>
</>
)
}
export default LandingPage