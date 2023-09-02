export default function BaseLandingPage() {
    return (
        <div className='relative'>
            <div
                className='absolute'
                style={{
                    height: 50,
                    width: 50,
                    backgroundColor: '#bbb',
                    borderRadius: '50%',
                    display: 'inline-block',
                    top: '30%',
                    left: '5%',
                }}
            ></div>
            <div className='bg-black' style={{ height: '10vh' }}></div>
            <div className='flex h-3/5 flex-col  gap-y-5'>
                <div className='pl-2 pt-10'>
                    <h1 className='text-xl font-bold'>Indika Wijesundera</h1>
                    <h1 className='text-base text-slate-500'>@SoftwareEngineer</h1>
                    <h1 className='text-base'>React, Nodejs, CDK</h1>
                    <h1 className='text-base text-slate-500'>Toronto, CA</h1>
                    <h1 className='text-base text-slate-500'>
                        <span className='font-bold text-black'>500</span> Trying to recruit
                    </h1>
                </div>
                <div>
                    <button>Posts</button>
                    <button>Projects</button>
                    <button>Blogs</button>
                </div>
                <div>
                    <div>CONTENT</div>
                </div>
            </div>
        </div>
    )
}
