import { useState } from 'react'

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
                    <span className='flex flex-row items-center'>
                        <p className='text-sm text-slate-500'>Likes: {metadata.likes}</p>
                    </span>
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
            <button onClick={handleClick} className={'p-2 hover:bg-slate-100'}>
                {label}
            </button>
            <hr className={`${isActive ? 'h-1 bg-black' : ' bg-slate-500'}`} />
        </div>
    )
}

const tabLabels = ['All', 'Projects', 'Posts'] as const
type TabLabel = (typeof tabLabels)[number]

export default function BaseLandingPage() {
    const [currentTab, setCurrentTab] = useState<TabLabel>('All')
    const handleTabClick = (newLabel: TabLabel) => {
        return () => setCurrentTab(newLabel)
    }
    const profileName = 'Indika Wijesundera'
    const profileHandle = '@SoftwareEngineer'

    return (
        <div className='relative'>
            <div className='absolute' style={{ top: '16%', left: '2%' }}>
                <ProfileIcon />
            </div>
            <div className='bg-black' style={{ height: '10vh' }}></div>
            <div className='flex h-3/5 flex-col  gap-y-5 px-2'>
                <div className='pt-10'>
                    <h1 className='text-xl font-bold'>{profileName}</h1>
                    <h1 className='text-base text-slate-500'>{profileHandle}</h1>
                    <h1 className='text-base'>React, Nodejs, CDK</h1>
                    <h1 className='text-base text-slate-500'>Toronto, CA</h1>
                    <h1 className='text-base text-slate-500'>
                        <span className='font-bold text-black'>500</span> Trying to recruit
                    </h1>
                </div>
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
                <div>
                    <Post
                        date={'Sept 2, 2023'}
                        content='First post'
                        profileName={profileName}
                        profileHandle={profileHandle}
                        metadata={{ likes: 20, shares: 25 }}
                    />
                </div>
            </div>
        </div>
    )
}
