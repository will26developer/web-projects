import React from 'react'
import { HeaderComponent } from './components/HeaderComponent'
import { MainComponent } from './components/MainComponent'

export const AppComponent = () => {
  return (
    <>
     <div className="app-container">
       <HeaderComponent/>
       <MainComponent/>
     </div>
    </>
  )
}
