import './styles.css'
import BriefCaseGif from '../../assets/briefcase-gif.gif'
import AngelSounds from '../../assets/angel-sounds.mp3'

export default function BriefcasePage() {
    return (
        <div className='flex h-screen flex-col items-center justify-center gap-y-5 bg-amber-300'>
            <h1 className='text-6xl  font-bold '>Indika Wijesundera</h1>
            <h2 className='text-2xl'>Software Engineer</h2>
            <audio controls autoPlay>
                <source src={AngelSounds} type='audio/mp3' />
                Cannot load audio
            </audio>
            <h1>Inspiration from:</h1>
            <img src={BriefCaseGif} alt='' />
        </div>
    )
}
