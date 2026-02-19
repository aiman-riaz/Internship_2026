import Hero from "./components/Hero";
import FeatureCard from "./components/FeatureCard";
import "./App.css";

function App() {
  return (
    <div>
      <Hero />

      <section className="features">
        <FeatureCard
          title="Fast Performance"
          description="Optimized and lightning fast user experience."
        />
        <FeatureCard
          title="Secure Platform"
          description="Built with security as a top priority."
        />
        <FeatureCard
          title="Easy Integration"
          description="Seamlessly connect with your tools."
        />
      </section>
    </div>
  );
}

export default App;