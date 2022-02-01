import { Category } from '../models/Category'
import { Link } from '../models/Link'

export const Card = ({ name, links } : Category) => {
    return (
        <div className="card">
            <div className="card-header">
                <span>{ name }</span>
            </div>
            <div className="card-body">
                <ul>
                    { 
                        links.map((item: Link, i: number) => 
                            <a key={ i } href={ item.url }><li>{ item.name }</li></a>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}
