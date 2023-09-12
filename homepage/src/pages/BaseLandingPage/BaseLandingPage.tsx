import { useState } from 'react'
import { HeartIcon, LocationIcon } from '../../components/Icons'

type ProfileIconProps = {
    large?: boolean
}
export function ProfileIcon(props: ProfileIconProps) {
    const { large } = props
    return (
        <div
            style={{
                height: large ? 80 : 50,
                width: large ? 80 : 50,
                backgroundColor: '#bbb',
                borderRadius: '50%',
                display: 'inline-block',
                backgroundImage: "url('vibe.gif')",
                backgroundSize: 'contain',
                borderColor: 'white',
                borderWidth: '2px',
            }}
        >
            {' '}
        </div>
    )
}

type IconButtonProps = {
    updateValue: (newValue: number) => void
    value: number
}
export function IconButton(props: IconButtonProps) {
    const { value, updateValue } = props
    const [hover, setHover] = useState(false)
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        if (!clicked) {
            updateValue(value + 1)
        } else {
            updateValue(value - 1)
        }
        setClicked(!clicked)
    }

    return (
        <button
            className={hover || clicked ? 'text-rose-700' : 'text-slate-500'}
            onMouseEnter={(e) => {
                setHover(true)
            }}
            onMouseLeave={(e) => {
                setHover(false)
            }}
            onClick={handleClick}
        >
            <div className='flex flex-row items-center gap-2'>
                <div
                    className={`flex h-5 w-5 content-center items-center justify-center rounded-full ${
                        hover ? ' bg-rose-700 bg-opacity-20' : ''
                    }
                    `}
                >
                    <HeartIcon
                        w={'15px'}
                        h={'15px'}
                        color={hover || clicked ? '#be123c' : '#64748b'}
                        fill={clicked ? '#be123c' : 'none'}
                    />
                </div>

                <p className='text-sm'>{value}</p>
            </div>
        </button>
    )
}

type PostMetadata = {
    likes: number
    shares: number
}
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
                    isActive ? 'text-black dark:text-white' : 'text-slate-500'
                }`}
            >
                {label}
            </button>
            <hr className={`${isActive ? 'h-1 bg-black dark:bg-white' : 'invisible'}`} />
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
    content: string | JSX.Element
}

export function CssPost() {
    return (
        <div
            style={{
                position: 'relative',
                overflow: 'hidden',
                backfaceVisibility: 'hidden',
            }}
        >
            <h1>I CAN ADD CSS</h1>
            <div
                className='shader__layer specular'
                style={{
                    background: 'black',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    backgroundSize: '100%',
                    backgroundAttachment: 'fixed',
                    backgroundImage:
                        'linear-gradient(180deg, black 20%, #3c5e6d 35%, #f4310e, #f58308 80%, black)',
                    mixBlendMode: 'color-dodge',
                }}
            >
                <div
                    className='shader__layer mask'
                    style={{
                        mixBlendMode: 'multiply',
                        background: 'black',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '100%',
                        height: '100%',
                        backgroundSize: '100%',
                        backgroundImage: "url('coverphoto.jpg')",
                    }}
                ></div>
            </div>
        </div>
    )
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
            <div className='absolute' style={{ top: '21vh', right: '20px' }}>
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
            {/* <img src={CoverPhoto} alt="CoverPhoto" style={{height: '10vh'}} /> */}
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
