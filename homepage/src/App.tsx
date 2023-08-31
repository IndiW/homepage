import { useState } from 'react'
import BaseLandingPage from './pages/BaseLandingPage/BaseLandingPage'
import BriefcasePage from './pages/BriefcasePage'
import OpenOverlayButton from './components/OpenOverlayButton'
import { usePages } from './hooks/usePages'
import ControlsOverlay from './components/ControlsOverlay/ControlsOverlay'
import GamersPage from './pages/GamersPage/GamersPage'
export default function App() {
    const [page, changePage] = usePages(2)
    const [showControlsOverlay, setShowControlsOverlay] = useState(false)

    const openOverlay = () => {
        setShowControlsOverlay(true)
    }

    const closeOverlay = () => {
        setShowControlsOverlay(false)
    }

    const currentPage = (page: number) => {
        switch (page) {
            case 0:
                return <BaseLandingPage />
            case 1:
                return <BriefcasePage />
            case 2:
                return <GamersPage />
            default:
                return <BaseLandingPage />
        }
    }

    const handleChangePage = (page: number) => {
        const newPage = changePage(page)
        setShowControlsOverlay(false)
        return newPage
    }

    const controlsOverlay = showControlsOverlay ? (
        <ControlsOverlay changePage={handleChangePage} handleCloseOverlay={closeOverlay} />
    ) : (
        <></>
    )

    return (
        <div className='h-screen w-full'>
            <div className='relative'>
                {controlsOverlay}
                {currentPage(page)}
                <OpenOverlayButton openOverlay={openOverlay} />
            </div>
        </div>
    )
}
