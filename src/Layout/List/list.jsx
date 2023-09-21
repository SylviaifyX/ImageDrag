// import React , {useState, useEffect, useRef} from 'react'
import Sortable from 'sortablejs';
// import ClipLoader from "react-spinners/ClipLoader";
import SearchIcon from '@mui/icons-material/Search';
import Grid from "../Grid/grid"
import React, { useState, useEffect, useRef } from 'react'

const imageList = [
    {
        id: 1,
        tag: "Bag",
        des: "feel the love of a chic bag",
        image: "bag1.jpg"

    },
    {
        id: 2,
        tag: "Bag",
        des: "feel the love of a chic bag",
        image: "bag2.jpg"

    },
    {
        id: 3,
        tag: "Bag",
        des: "feel the love of a chic bag",
        image: "bag1.jpg"
    },
    {
        id: 4,
        tag: "Food",
        des: "food is the gift of life",
        image: "food1.jpg"
    },
    {
        id: 5,
        tag: "Food",
        des: "food is the gift of life",
        image: "food1.jpg"
    },
    {
        id: 6,
        tag: "Shoe",
        des: "walk like a boss",
        image: "shoe1.jpg"
    },
    {
        id: 7,
        tag: "Shoe",
        des: "walk like a boss",
        image: "shoe2.jpg"
    },
    {
        id: 8,
        tag: "Shoe",
        des: "walk like a boss",
        image: "shoe3.jpg"
    },
    {
        id: 9,
        tag: "Shoe",
        des: "walk like a boss",
        image: "shoe3.jpg"
    },
]

function List() {
    // const [isLoaded, setIsLoaded] = useState(false)
    const [query, setQuery] = useState("")
    const gridRef = useRef(null)
    const sortableRef = useRef(null)
    const [photo, setPhoto] = useState(imageList)

    useEffect(() => {

        const onListChange = () => {
            const newData = [...gridRef.current.children]
                .map(i => i.dataset.id)
                .map(id => photo.find(imageList => String(imageList.id) === String(id)))
            setPhoto(newData)
        }

        sortableRef.current = new Sortable(gridRef.current, {
            animation: 150,
            onEnd: onListChange,
        })
    }, [])

    return (
        <div className="max-w-[1200px] md:m-auto ">
            <div className='bg-slate-200 w-[50%] m-auto mt-[30px] mb-[20px] flex items-center p-[8px] rounded-xl'>
                <input className="w-full md:w-[90%] bg-transparent outline-none" type="text"
                    placeholder="search image" onChange={e => setQuery(e.target.value)} />
                <SearchIcon />
            </div>

            <div ref={gridRef} className="grid grid-cols-1 m-auto  md:grid-cols-2 lg:grid-cols-3 gap-[5px] p-[5px] md:p-[5px] lg:p-0">
                {
                    photo.filter((photo) => photo.tag.toLowerCase().includes(query.toLowerCase())).map(({ id, tag , image, des }) => {
                            return <div className='' data-id={id} key={id}>
                                <Grid des={des}  image={image} tag={tag} />
                            </div>
                    })
                }
            </div>


            
        </div>)
};
         export default List;