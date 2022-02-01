import './App.css'
import { Category } from './models/Category'
import { Card } from './components/Card'

function App() {
    const categories: Category[] = [
        {
            name: "Fun", 
            links: [
                {name: "/r/programming", url: "https://reddit.com/r/programming"},
                {name: "YouTube", url: "https://youtube.com"},
                {name: "Netflix", url: "https://netflix.com"}
            ]
        },
        {
            name :"Code", 
            links: [
                {name: "GitHub", url: "https://github.com"}, 
                {name: "GitLab", url: "https://gitlab.com"}
            ]
        }
    ]
  return (
    <div className="App">
        <div className="holder"> 
            {categories.map((category: Category, i: number) => <Card key={ i } name={ category.name } links={ category.links } />)}
        </div>
    </div>
  )
}

export default App
