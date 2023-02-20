import NavButton from '../NavButton'
import './styles.css'
export default function Controls() {
    return (
        <div className='button-container z-10 flex items-center justify-center gap-10 rounded-full bg-slate-700 bg-opacity-90 py-5 px-5 drop-shadow-lg'>
            <NavButton label='Gamers' />
            <NavButton label='The Briefcase' />
        </div>
    )
}
