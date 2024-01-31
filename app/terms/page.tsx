import Accordion1 from "@/components/accordion1/Accordion1";
import Accordion2 from "@/components/accordion2/Accordion2";


// Hello


const Terms = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="container">
        <h1 className="text-9xl text-center my-16">Terms</h1>
        <div className="flex gap-10 mt-20">

        <Accordion1 />
        <Accordion2 />
        </div>
      </div>
    </div>
  );
};

export default Terms;
