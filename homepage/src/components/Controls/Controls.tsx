import NavButton from '../NavButton'
import './styles.css'

type ControlsProps = {
    changePage: (newPage: number) => void
}

export default function Controls(props: ControlsProps) {
    const { changePage } = props
    return (
        <div className='button-container z-10 flex items-center justify-center gap-10 rounded-full bg-slate-700 bg-opacity-90 py-5 px-5 backdrop-blur-md'>
            <NavButton label='Gamers' handleClick={changePage} />
            <NavButton label='The Briefcase' handleClick={changePage} />
        </div>
    )
}
