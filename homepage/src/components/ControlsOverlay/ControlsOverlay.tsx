import NavButton from '../NavButton/NavButton'
import './styles.css'

type ControlsOverlay = {
    changePage: (newPage: number) => void
    handleCloseOverlay: () => void
}
export default function ControlsOverlay(props: ControlsOverlay) {
    const { changePage, handleCloseOverlay } = props
    return (
        <div className='overlay-container'>
            <div className='overlay' />
            <div className='buttons-container'>
                <NavButton label='The Briefcase' handleClick={changePage} />
                <NavButton label='Basic' handleClick={changePage} />
                <NavButton label='Gamers' handleClick={changePage} />
                <button className='close-button' onClick={handleCloseOverlay}>
                    X
                </button>
            </div>
        </div>
    )
}
