import { client } from '@/libs/microcms'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Category = {
    id: string;
    name: string
}

type CategoryResponse = {
    contents: Category[]
}

const CategoryBox = async () => {

    const { contents } = await client.get<CategoryResponse>({ endpoint: 'categories' })

    return (
        <div className='text-sm flex items-center justify-center my-20 px-3'>
            <ul className='flex flex-wrap'>
                {contents.map((cat) => (
                    <li key={cat.id} className='mr-3 mb-8'>
                        <Link className='p-3 border rounded-full' href={`/blog/category/${cat.id}`}>{cat.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CategoryBox