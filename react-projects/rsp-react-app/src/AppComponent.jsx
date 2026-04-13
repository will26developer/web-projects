import React from 'react'
import { HeaderComponent } from './components/HeaderComponent'; 
import { MainComponent } from "./components/MainComponent";
import { FooterComponent } from "./components/FooterComponent";
import { RulesComponent } from "./components/RulesComponent";
import { useGame } from './hooks/useGame';

export const AppComponent = () => {
  const {state} = useGame();
  const rules = state.ui.showRules;
  return (
    <>
     {rules && <RulesComponent/>}
     <div className='app-container'>
      <HeaderComponent/>
      <MainComponent/> 
      <FooterComponent/>
     </div>
    </>
  )
}
