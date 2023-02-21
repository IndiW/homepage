import { useState } from 'react'
import BaseLandingPage from './components/BaseLandingPage/BaseLandingPage'
import BriefcasePage from './components/BriefcasePage'
import Controls from './components/Controls'
import { usePages } from './hooks/usePages'
export default function App() {
    const [page, changePage] = usePages(0)

    const currentPage = (page: number) => {
        switch (page) {
            case 0:
                return <BaseLandingPage />
            case 1:
                return <BriefcasePage />
            default:
                return <BaseLandingPage />
        }
    }

    return (
        <div className='h-screen w-full'>
            <div className='relative z-0'>
                {currentPage(page)}
                <Controls changePage={changePage} />
            </div>
        </div>
    )
}
