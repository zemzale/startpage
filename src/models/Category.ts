import { Link } from './Link'

export interface Category {
    name: string;
    links: Link[];
}

export const DefaultCategories: Category[] = [
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
