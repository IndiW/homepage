import { useState } from 'react'
import { HeartIcon, LocationIcon } from '../../components/Icons'

export function ProfileIcon() {
    return (
        <div
            style={{
                height: 50,
                width: 50,
                backgroundColor: '#bbb',
                borderRadius: '50%',
                display: 'inline-block',
            }}
        >
            {' '}
        </div>
    )
}

type PostMetadata = {
    likes: number
    shares: number
}
type PostProps = {
    date: string
    content: string // extend to content component
    profileName: string
    profileHandle: string
    metadata: PostMetadata
}
export function Post(props: PostProps) {
    const { date, content, profileName, profileHandle, metadata } = props
    return (
        <div className='flex'>
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
                    <p>{content}</p>
                    <div className='flex flex-row items-center gap-2'>
                        <HeartIcon w={'15px'} h={'15px'} color={'#64748b'} />
                        <p className='text-sm text-slate-500'>{metadata.likes}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

type TabButtonProps = {
    label: string
    isActive: boolean
    handleClick: () => void
}
export function TabButton(props: TabButtonProps) {
    const { label, isActive, handleClick } = props

    return (
        <div>
            <button
                onClick={handleClick}
                className={`px-2 py-1 hover:bg-slate-100 ${
                    isActive ? 'text-black' : 'text-slate-500'
                }`}
            >
                {label}
            </button>
            <hr className={`${isActive ? 'h-1 bg-black' : 'invisible'}`} />
        </div>
    )
}

const tabLabels = ['All', 'Projects', 'Posts'] as const
type TabLabel = (typeof tabLabels)[number]

type PostType = 'project' | 'text'
type PostData = {
    type: PostType
    date: string
    metadata: PostMetadata
    content: string
}

const postsData: Array<PostData> = [
    {
        type: 'text',
        date: 'Sept 2, 2023',
        metadata: {
            likes: 20,
            shares: 20,
        },
        content: 'First post',
    },
]

const postTypeToTabNameMap: Record<PostType, TabLabel> = {
    text: 'Posts',
    project: 'Projects',
}

export default function BaseLandingPage() {
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

    return (
        <div className='relative'>
            <div className='absolute' style={{ top: '60px', left: '8px' }}>
                <ProfileIcon />
            </div>
            <div
                style={{
                    height: '10vh',
                    backgroundImage: "url('nikolaos-anastasopoulos-mrsv-Z35oMA-unsplash.jpg')",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            ></div>
            {/* <img src={CoverPhoto} alt="CoverPhoto" style={{height: '10vh'}} /> */}
            <div className='flex h-3/5 flex-col  gap-y-5 px-2'>
                <div className='pt-10'>
                    <h1 className='text-xl font-bold'>{profileName}</h1>
                    <h1 className='text-base text-slate-500'>{profileHandle}</h1>
                    <h1 className='text-base'>React, Nodejs, CDK</h1>
                    <div className='flex items-center'>
                        <LocationIcon w={'18x'} h={'18px'} color={'#64748b'} />
                        <h1 className='text-base text-slate-500'>Toronto, CA</h1>
                    </div>
                    <h1 className='text-base text-slate-500'>
                        <span className='font-bold text-black'>500</span> Trying to recruit
                    </h1>
                </div>
                <div>
                    <div className='row-auto flex w-screen gap-8'>
                        {tabLabels.map((label) => {
                            return (
                                <TabButton
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
                    {posts.map((data) => {
                        return (
                            <>
                                <Post
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
