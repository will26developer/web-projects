import React from 'react'
import { ChoicesComponent } from './ChoicesComponent'
import { ResultsComponent } from './ResultsComponent'

export const MainComponent = () => {
  return (
    <main className='main'>
        <ChoicesComponent/>
        <ResultsComponent/>
    </main>
  )
}
