// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

type Data = { id: number, author: string, title: string }[]

const booksDB =  [
    {id: 1, author: 'A.Tolstoy', title: '1War and World'},
    {id: 2, author: 'B.Tolstoy', title: '2War and World'},
    {id: 3, author: 'C.Tolstoy', title: '2War and World'},
    {id: 4, author: 'D.Tolstoy', title: '4War and World'},
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method == 'GET') {
        let books = booksDB

        const term = req.query.term as string

        if(term) {
            books = books.filter(book => book.title.toLowerCase().includes(term.toLowerCase()))
        }

        res.status(200).json(books)
    }

}
