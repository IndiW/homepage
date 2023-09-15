import { ProfileIcon } from '../../components/ProfileIcon'
import { useState } from 'react'
import { IconButton } from '../IconButton'
import { PostMetadata } from './types'

type PostProps = {
    date: string
    content: string | JSX.Element
    profileName: string
    profileHandle: string
    metadata: PostMetadata
}
export function Post(props: PostProps) {
    const { date, content, profileName, profileHandle, metadata } = props
    const [likes, updateLikes] = useState(metadata.likes)
    const handleUpdateLike = (newValue: number) => {
        updateLikes(newValue)
    }

    const postContent = typeof content === 'string' ? <p>{content}</p> : content

    return (
        <div className='flex dark:text-white'>
            <div className='h-14 w-14 flex-none'>
                <ProfileIcon />
            </div>
            <div className='flex-initial'>
                <div className='flex flex-col gap-y-0.5'>
                    <span className='flex flex-row items-center'>
                        <h1 className='pr-2 font-bold'>{profileName.split(' ')[0]}</h1>
                        <h2 className='text-sm text-slate-500'>
                            {profileHandle} · {date}
                        </h2>
                    </span>
                    {postContent}
                    <IconButton value={likes} updateValue={handleUpdateLike} />
                </div>
            </div>
        </div>
    )
}
