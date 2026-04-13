import React from 'react'
import { ChoiceComponent } from "./ChoiceComponent";
import { ResultsComponent } from "./ResultsComponent";
import { useGame } from '../hooks/useGame';

export const MainComponent = () => {
  const {state} = useGame();
  const results = state.ui.showResults; 
  return (
    <main className="main">
      {!results ? <ChoiceComponent/> : <ResultsComponent/>}
    </main>
  )
}
