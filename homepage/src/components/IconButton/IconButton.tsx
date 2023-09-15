import { useState } from 'react'
import { HeartIcon } from '../../components/Icons'

type IconButtonProps = {
    updateValue: (newValue: number) => void
    value: number
}
export function IconButton(props: IconButtonProps) {
    const { value, updateValue } = props
    const [hover, setHover] = useState(false)
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        if (!clicked) {
            updateValue(value + 1)
        } else {
            updateValue(value - 1)
        }
        setClicked(!clicked)
    }

    return (
        <button
            className={hover || clicked ? 'text-rose-700' : 'text-slate-500'}
            onMouseEnter={(e) => {
                setHover(true)
            }}
            onMouseLeave={(e) => {
                setHover(false)
            }}
            onClick={handleClick}
        >
            <div className='flex flex-row items-center gap-2'>
                <div
                    className={`flex h-5 w-5 content-center items-center justify-center rounded-full ${
                        hover ? ' bg-rose-700 bg-opacity-20' : ''
                    }
                    `}
                >
                    <HeartIcon
                        w={'15px'}
                        h={'15px'}
                        color={hover || clicked ? '#be123c' : '#64748b'}
                        fill={clicked ? '#be123c' : 'none'}
                    />
                </div>

                <p className='text-sm'>{value}</p>
            </div>
        </button>
    )
}
