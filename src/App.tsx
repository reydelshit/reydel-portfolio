import AnimatedCursor from "react-animated-cursor";
import HeroPage from "./components/HeroPage";

interface Clickable {
  target: string;
  options: {
    innerSize: number;
    outerSize: number;
    color: string;
    outerAlpha: number;
    innerScale: number;
    outerScale: number;
  };
}

function App() {
  return (
    <div className="w-dvw h-dvh flex flex-col justify-center items-center">
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        // hasBlendMode={true}
        innerStyle={{
          backgroundColor: "#01F49D",
        }}
        outerStyle={{
          border: "3px solid #01F49D",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          {
            target: ".custom",
            options: {
              innerSize: 12,
              outerSize: 12,
              color: "#FFF",
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5,
            },
          } as Clickable,
        ]}
      />

      <HeroPage />
    </div>
  );
}

export default App;
