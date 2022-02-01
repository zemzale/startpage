import './App.css'
import { Category, DefaultCategories } from './models/Category'
import { Card } from './components/Card'

function App() {
  return (
    <div className="App">
        <div className="holder"> 
            {
                DefaultCategories.map((category: Category, i: number) => 
                    <Card key={ i } name={ category.name } links={ category.links } />
                )
            }
        </div>
    </div>
  )
}

export default App
