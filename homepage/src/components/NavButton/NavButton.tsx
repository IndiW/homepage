import BriefcaseIcon from '../../assets/briefcase.svg'
import GamersIcon from '../../assets/gamers.svg'

type Labels = 'Gamers' | 'The Briefcase'
type IconLabelMappingType = {
    [label in Labels]: {
        icon: string
    }
}

const IconLabelMapping: IconLabelMappingType = {
    Gamers: {
        icon: GamersIcon,
    },
    'The Briefcase': {
        icon: BriefcaseIcon,
    },
}

type NavButtonProps = {
    label: keyof typeof IconLabelMapping
}
export default function NavButton(props: NavButtonProps) {
    const { label } = props
    return (
        <button
            className='rounded-lg bg-slate-800 px-5 py-2.5 text-sm 
        font-medium text-white hover:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-slate-300 dark:border-slate-700 
        dark:bg-slate-800 dark:hover:bg-slate-700 dark:focus:ring-slate-700'
        >
            <img src={IconLabelMapping[label].icon} alt={label} width='20px' color='white' />
        </button>
    )
}
