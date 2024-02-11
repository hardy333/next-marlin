import Accordion1 from "@/components/accordion1/Accordion1";
import NewPageCard from "./NewPageCard";
import cardsData from "./cardsData";
import "./new-page.css";
import Accordion2 from "@/components/accordion2/Accordion2";

const Page = () => {
  return (
    <>
      <main className="new-page">
        <div className="container">
          <header>
            <h1>
              Rapidly build modern web apps with{" "}
              <span className="decorated-word">Metronic</span>
            </h1>
            <p>
              The most advanced{" "}
              <span className="colored-word"> Bootstrap 5</span> foundation with
              a solid design system, extensive utility classes and custom made{" "}
              <span className="colored-word">in-house </span>
              components.
            </p>
          </header>

          <div className="new-page-card-container">
            {/* <NewPageCard Icon={Icon1}/>
                <NewPageCard Icon={Icon2}/> */}
            {cardsData.map((card, index) => (
              <NewPageCard key={card.p + index} card={card} />
            ))}
          </div>

          <div className="container" style={{ width: "1180px" }}>
            <h1 className="text-9xl text-center my-16">Terms</h1>
            <div className="flex gap-10 mt-20">
              <Accordion1 />
              <Accordion2 />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
