import { useState } from 'react'
import ThreeD from './ThreeD'
import './styles.css'

export default function GamersPage() {
    const [rtxOn, setRtxOn] = useState(false)

    const handleChangeRtx = () => {
        setRtxOn(!rtxOn)
    }

    if (rtxOn) {
        return (
            <div className='flex h-screen flex-col items-center justify-center gap-y-5'>
                <button onClick={handleChangeRtx}>{rtxOn ? 'RTX OFF' : 'RTX ON'}</button>
            </div>
        )
    }

    return (
        <div className='flex h-screen flex-col items-center justify-center gap-y-5'>
            <div id='info'>Indika Wijesundera</div>
            <ThreeD />
            <button onClick={handleChangeRtx}>{rtxOn ? 'RTX OFF' : 'RTX ON'}</button>
        </div>
    )
}
