import './App.css'
import React, { useState } from 'react'
import { Category, DefaultCategories } from './models/Category'
import { Card } from './components/Card'

function App() {
  const [categories, setCategories] = useState(DefaultCategories)
  const [t, setT] = useState("value")

  const submitForm = (event: React.FormEvent) => {
    event.preventDefault()
    const name = t
    //TODO @zemzale 02/02/22 Figure out how to add the fucking links to the cateory
    setCategories(categories => [...categories, 
      {
        name: name, 
        links: []
      }
    ]
    )
  }
   
  return (
    <div className="App">
        <div className="holder"> 
            {
                categories.map((category: Category, i: number) => 
                    <Card key={ i } name={ category.name } links={ category.links } />
                )
            }
        </div>
        <form onSubmit={submitForm}>
          <input type="text" value={t} onChange={(e) => {
            setT(e.target.value)
          }}/>
          <input type="submit" value="submit"/>
        </form>
    </div>
  )
}

export default App
