import './styles.css'
import confetti from 'canvas-confetti'

export default function PushableButton() {
    const handleClick = () => {
        confetti()
    }
    return (
        <button className='pushable' onClick={handleClick}>
            <span className='shadow'></span>
            <span className='edge'></span>
            <span className='front'>Push me</span>
        </button>
    )
}
