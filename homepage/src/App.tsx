import { useState } from 'react'
import BaseLandingPage from './pages/BaseLandingPage/BaseLandingPage'
import { DarkModeButton } from './components/DarkModeButton'

export default function App() {
    const [darkMode, setDarkMode] = useState(true)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    const darkModeButton = (
        <DarkModeButton handleToggleDarkMode={toggleDarkMode} isDarkMode={darkMode} />
    )

    return (
        <div className={darkMode ? 'dark' : ''}>
            <div className='flex h-screen w-full justify-center dark:bg-slate-800'>
                <div className={'w-full md:w-1/2 md:border md:border-y-0 md:border-slate-500'}>
                    <BaseLandingPage DarkmodeButton={darkModeButton} />
                </div>
            </div>
        </div>
    )
}
