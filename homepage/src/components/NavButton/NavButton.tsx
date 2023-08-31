import BriefcaseIcon from '../../assets/briefcase.svg'
import GamersIcon from '../../assets/gamers.svg'
import './styles.css'

type Labels = 'Gamers' | 'The Briefcase' | 'Basic'
type IconLabelMappingType = {
    [label in Labels]: {
        icon: string
        page: number
    }
}

const IconLabelMapping: IconLabelMappingType = {
    Basic: {
        icon: GamersIcon,
        page: 0,
    },
    'The Briefcase': {
        icon: BriefcaseIcon,
        page: 1,
    },
    Gamers: {
        icon: GamersIcon,
        page: 2,
    },
}

type NavButtonProps = {
    label: keyof typeof IconLabelMapping
    handleClick: (newPage: number) => void
}
export default function NavButton(props: NavButtonProps) {
    const { label, handleClick } = props
    return (
        <button
            className='nav-button button flex flex-col items-center justify-center  bg-slate-800 px-5 py-2.5 
        text-sm font-medium text-white hover:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-slate-300 
        dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:focus:ring-slate-700'
            onClick={() => handleClick(IconLabelMapping[label].page)}
        >
            <img src={IconLabelMapping[label].icon} alt={label} width='20px' color='white' />
            <h1 className='button-label'>{label}</h1>
        </button>
    )
}
