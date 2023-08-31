import NavButton from '../NavButton'
import './styles.css'

type OpenOverlayButtonProps = {
    openOverlay: () => void
}

export default function OpenOverlayButton(props: OpenOverlayButtonProps) {
    const { openOverlay } = props
    return (
        <div className='button-container space-y-2' onClick={openOverlay}>
            <div className='h-0.5 w-8 bg-gray-600'></div>
            <div className='h-0.5 w-8 bg-gray-600'></div>
            <div className='h-0.5 w-8 bg-gray-600'></div>
        </div>
    )
}
