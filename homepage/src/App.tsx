import { useState } from 'react'
import BaseLandingPage from './pages/BaseLandingPage/BaseLandingPage'

type DarkModeButtonProps = {
    handleToggleDarkMode: () => void
}

export function DarkModeButton(props: DarkModeButtonProps) {
    const { handleToggleDarkMode } = props

    return (
        <>
            {/* <button onClick={handleToggleDarkMode}>Toggle darkmode</button> */}
            <input type='checkbox' id='darkmode-toggle' />
            <label
                htmlFor='darkmode-toggle'
                style={{
                    width: '100px',
                    height: '50px',
                    position: 'relative',
                    display: 'block',
                    background: '#ebebeb',
                    borderRadius: '200px',
                    boxShadow:
                        'inset 0px 5px 15px rgba(0,0,0,0.4), inset 0px -5px 15px rgba(255,255,255,0.4)',
                    cursor: 'pointer',
                }}
            />
        </>
    )
}
export default function App() {
    const [darkMode, setDarkMode] = useState(true)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    const darkModeButton = <DarkModeButton handleToggleDarkMode={toggleDarkMode} />

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
