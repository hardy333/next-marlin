import NewPageCard from "./NewPageCard";
import { Icon1, Icon2 } from "./cardIcons";
import cardsData from "./cardsData";
import "./new-page.css"

const Page = () => {
  return (
    <>
      <main className="new-page">
        <div className="container">
          <header>
            <h1>
              Rapidly build modern web apps with <span className="decorated-word">Metronic</span>
            </h1>
            <p>
              The most advanced <span className="colored-word"> Bootstrap 5</span> foundation with a solid design
              system, extensive utility classes and custom madeM<span className="colored-word">in-house</span>
              components.
            </p>
          </header>

            <div className="new-page-card-container">
                {/* <NewPageCard Icon={Icon1}/>
                <NewPageCard Icon={Icon2}/> */}
                {
                    cardsData.map((card, index) => (<NewPageCard key={card.p + index} card={card}/>))
                }
            </div>

          
        </div>
      </main>
    </>
  );
};

export default Page;
