import PartnerImg1 from "../assets/vandrevala_foundation_logo.jpeg"
import PartnerImg2 from "../assets/347882361_1616034388880429_3768886167831289581_n.jpg"
import PartnerImg3 from "../assets/309499736_461242866046003_3211507711494580609_n.jpg"

const Partners = () => (
  <section id="partners" className="py-16">
    <div className="container mx-auto text-center">
      <h3 className="text-3xl font-bold mb-10">Our Trusted Partners</h3>
      <div className="flex justify-center gap-6">
        <img src={PartnerImg1} alt="Partner 1" className="h-24" />
        <img src={PartnerImg2} alt="Partner 2" className="h-28" />
        <img src={PartnerImg3} alt="Partner 2" className="h-32" />
      </div>
    </div>
  </section>
);

export default Partners;
