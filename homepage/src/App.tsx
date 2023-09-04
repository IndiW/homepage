import { useState } from 'react'
import BaseLandingPage from './pages/BaseLandingPage/BaseLandingPage'
export default function App() {
    return (
        <div className='flex h-screen w-full justify-center'>
            <div className='w-full md:w-1/2 md:border md:border-y-0 md:border-slate-500'>
                <BaseLandingPage />
            </div>
        </div>
    )
}
