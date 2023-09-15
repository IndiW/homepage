import { useState } from 'react'
import { LocationIcon } from '../../components/Icons'
import { IconButton } from '../../components/IconButton'
import { ProfileIcon } from '../../components/ProfileIcon'
import { Post, CssPost, PostMetadata } from '../../components/Post'
import { TabButton, TabLabel, tabLabels } from '../../components/TabButton'

type PostType = 'project' | 'text'
type PostData = {
    type: PostType
    date: string
    metadata: PostMetadata
    content: string | JSX.Element
}

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

const postTypeToTabNameMap: Record<PostType, TabLabel> = {
    text: 'Posts',
    project: 'Projects',
}

export type BaseLandingPageProps = {
    DarkmodeButton?: JSX.Element
}

export default function BaseLandingPage(props: BaseLandingPageProps) {
    const { DarkmodeButton } = props

    const [currentTab, setCurrentTab] = useState<TabLabel>('All')
    const [posts, setPosts] = useState<Array<PostData>>(postsData)

    const handleTabClick = (newLabel: TabLabel) => {
        return () => {
            if (newLabel === 'All') {
                setPosts(postsData)
            } else {
                setPosts(postsData.filter((post) => newLabel === postTypeToTabNameMap[post.type]))
            }
            setCurrentTab(newLabel)
        }
    }
    const profileName = 'Indika Wijesundera'
    const profileHandle = '@SoftwareEngineer'
    const profileDescription =
        'Full stack developer with experience in typescript, python, react and aws'

    return (
        <div className='relative'>
            <div className='absolute' style={{ top: '15vh', left: '8px' }}>
                <ProfileIcon large={true} />
            </div>
            <div className='absolute' style={{ top: '19vh', right: '20px' }}>
                {DarkmodeButton}
            </div>
            <div
                style={{
                    height: '20vh',
                    backgroundImage: "url('coverphoto.jpg')",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            ></div>
            <div className='flex h-3/5 flex-col  gap-y-5 px-2'>
                <div className='pt-10 dark:text-white'>
                    <h1 className='text-xl font-bold'>{profileName}</h1>
                    <h1 className='text-base text-slate-500'>{profileHandle}</h1>
                    <h1 className='text-base'>{profileDescription}</h1>
                    <div className='flex items-center'>
                        <LocationIcon w={'18x'} h={'18px'} color={'#64748b'} />
                        <h1 className='text-base text-slate-500'>Toronto, CA</h1>
                    </div>
                    <h1 className='text-base text-slate-500'>
                        <span className='font-bold text-black dark:text-white'>500</span> Trying to
                        recruit
                    </h1>
                </div>
                <div>
                    <div className='row-auto flex  gap-8'>
                        {tabLabels.map((label) => {
                            return (
                                <TabButton
                                    key={label}
                                    isActive={label === currentTab}
                                    label={label}
                                    handleClick={handleTabClick(label)}
                                />
                            )
                        })}
                    </div>
                    <hr className='w-full' />
                </div>
                <div className='flex flex-col gap-4'>
                    {posts.map((data, index) => {
                        return (
                            <>
                                <Post
                                    key={data.type + `${index}`}
                                    date={data.date}
                                    content={data.content}
                                    profileName={profileName}
                                    profileHandle={profileHandle}
                                    metadata={data.metadata}
                                />
                                <hr className='w-full' />
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
