import { useState } from 'react'
import BaseLandingPage from './pages/BaseLandingPage/BaseLandingPage'

type DarkModeButtonProps = {
    handleToggleDarkMode: () => void
}

export function DarkModeButton(props: DarkModeButtonProps) {
    const { handleToggleDarkMode } = props

    return <button onClick={handleToggleDarkMode}>Toggle darkmode</button>
}
export default function App() {
    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div className={darkMode ? 'dark' : ''}>
            <div className='flex h-screen w-full justify-center dark:bg-slate-800'>
                <DarkModeButton handleToggleDarkMode={toggleDarkMode} />
                <div className={'w-full md:w-1/2 md:border md:border-y-0 md:border-slate-500'}>
                    <BaseLandingPage />
                </div>
            </div>
        </div>
    )
}
