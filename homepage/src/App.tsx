import BaseLandingPage from './components/BaseLandingPage/BaseLandingPage'
import Controls from './components/Controls'
export default function App() {
    return (
        <div className='h-screen w-full'>
            <div className='relative z-0'>
                <BaseLandingPage />
                <Controls />
            </div>
        </div>
    )
}
