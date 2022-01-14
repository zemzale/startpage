import './App.css'

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
            {categories.map(category => <Card name={ category.name } links={ category.links } />)}
        </div>
    </div>
  )
}

const Card = ({ name, links } : Category) => {
    return (
        <div className="card">
            <div className="card-header">
                <span>{ name }</span>
            </div>
            <div className="card-body">
                <ul>
                    { links.map((item: Link) => <a href={ item.url }><li>{ item.name }</li></a>)}
                </ul>
            </div>
        </div>
    )
}

interface Category {
    name: string;
    links: Link[];
}

interface Link {
    name: string;
    url: string;
}
export default App
