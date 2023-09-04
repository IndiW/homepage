import { useState } from 'react'
import BaseLandingPage from './pages/BaseLandingPage/BaseLandingPage'
export default function App() {
    return (
        <div className='flex h-screen w-full justify-center'>
            <div className='border border-y-0 border-slate-500 md:w-1/2'>
                <BaseLandingPage />
            </div>
        </div>
    )
}
