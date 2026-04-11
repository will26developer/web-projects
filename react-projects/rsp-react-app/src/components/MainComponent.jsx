import { useGame } from "../hooks/useGame";
import { ChoicePickerComponent } from "./ChoicePickerComponent";
import { ResultsComponent } from "./ResultsComponent";



export const MainComponent = () => {
  const { state } = useGame();
  return (
    <main className="main">
      {!state.ui.showResults && <ChoicePickerComponent />}
      {state.ui.showResults && <ResultsComponent />}
    </main>
  )
}

