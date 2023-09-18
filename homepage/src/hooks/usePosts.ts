import { useEffect, useState } from 'react'
import { PostData } from '../client'
import { CssPost } from '../components/Post'

const postsData: Array<PostData> = [
    {
        type: 'project',
        date: 'Sept 5, 2023',
        metadata: {
            likes: 12243,
            shares: 20,
        },
        content: CssPost(),
    },
    {
        type: 'text',
        date: 'Sept 5, 2023',
        metadata: {
            likes: 9243,
            shares: 20,
        },
        content: 'no affiliation to ❌ btw',
    },
    {
        type: 'text',
        date: 'Sept 2, 2023',
        metadata: {
            likes: Math.round((Date.now() * 2) / 1000000),
            shares: 20,
        },
        content: 'First post',
    },
]

export function UsePosts() {
    const [postsState, setPostsState] = useState<Array<PostData>>(postsData)
    const postsDispatcher = { postsState, setPostsState }

    return [postsData, postsDispatcher] as const
}
