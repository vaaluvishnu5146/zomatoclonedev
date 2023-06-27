import "./App.css";
import PriceCard from "./Components/PriceCard/PriceCard";

const pricingDetails = [
  {
    pricing: 0,
    priceType: "FREE",
    features: [
      { feature: "Single User", isAvailable: true },
      { feature: "5GB Storage", isAvailable: true },
      { feature: "Unlimited Public Projects", isAvailable: true },
      { feature: "Community Access", isAvailable: true },
      { feature: "Unlimited Private Projects", isAvailable: false },
      { feature: "Dedicated Phone Support", isAvailable: false },
      { feature: "Free Subdomain", isAvailable: false },
      { feature: "Monthly Status Reports", isAvailable: false },
    ],
  },
  {
    pricing: 10,
    priceType: "PAID",
    features: [
      { feature: "Single User", isAvailable: true },
      { feature: "5GB Storage", isAvailable: true },
      { feature: "Unlimited Public Projects", isAvailable: true },
      { feature: "Community Access", isAvailable: true },
      { feature: "Unlimited Private Projects", isAvailable: true },
      { feature: "Dedicated Phone Support", isAvailable: true },
      { feature: "Free Subdomain", isAvailable: false },
      { feature: "Monthly Status Reports", isAvailable: false },
    ],
  },
  {
    pricing: 20,
    priceType: "PAID",
    features: [
      { feature: "Single User", isAvailable: true },
      { feature: "5GB Storage", isAvailable: true },
      { feature: "Unlimited Public Projects", isAvailable: true },
      { feature: "Community Access", isAvailable: true },
      { feature: "Unlimited Private Projects", isAvailable: true },
      { feature: "Dedicated Phone Support", isAvailable: true },
      { feature: "Free Subdomain", isAvailable: true },
      { feature: "Monthly Status Reports", isAvailable: true },
    ],
  },
];

// FUNCTIONAL COMPONENT
function App() {
  return (
    <div className="App">
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {pricingDetails.map((d, i) => (
              <PriceCard data={d} key={`pricing-card-${i}`} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
