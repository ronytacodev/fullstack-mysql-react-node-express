import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const URI = 'http:://localhost:8000/blogs/'

const CompShowBlogs = () => {
    const [blogs, setBlog] = useState([])
    useEffect ( () => {
        getBlogs()
    }, [])

    //procedimiento para mostrar todos los blogs
    const getBlogs = async () => {
        const res = await axios.get(URI)
        setBlog(res.data)
    }

    //procedimiento para eliminar un blog
    const deleteBlog = async(id) => {
        axios.delete(`${URI}${id}`)
        getBlogs()
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {/* me quede en el min 09.35 */}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowBlogs