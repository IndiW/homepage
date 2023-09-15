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
