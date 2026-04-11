import { BarScoreComponent } from "./components/BarScoreComponent"
import { FooterComponent } from "./components/FooterComponent";
import { MainComponent } from "./components/MainComponent";
import { RulesComponent } from "./components/RulesComponent";
import { useGame } from "./hooks/useGame";

function App() {
  const { state } = useGame();
  const { ui } = state;
  console.log(ui);
  return (
    <>
      {ui.showRules && <RulesComponent />}
      <div className="container-app">
        <BarScoreComponent />
        <MainComponent />
        <FooterComponent />
      </div>
    </>
  )
}

export default App
