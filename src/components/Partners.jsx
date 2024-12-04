import PartnerImg1 from "../assets/pngwing.com (1).png"
import PartnerImg2 from "../assets/pngwing.com (2).png"
const Partners = () => (
  <section id="partners" className="py-16">
    <div className="container mx-auto text-center">
      <h3 className="text-3xl font-bold mb-10">Our Trusted Partners</h3>
      <div className="flex justify-center gap-10">
        <img src={PartnerImg1} alt="Partner 1" className="h-12" />
        <img src={PartnerImg2} alt="Partner 2" className="h-12" />
      </div>
    </div>
  </section>
);

export default Partners;
