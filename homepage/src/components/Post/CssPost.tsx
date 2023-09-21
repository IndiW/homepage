import PushableButton from '../PushableButton/PushableButton'

export function CssPost() {
    return (
        <div
            style={{
                position: 'relative',
                overflow: 'hidden',
                backfaceVisibility: 'hidden',
            }}
        >
            <h1>I CAN ADD CSS</h1>
            <div
                className='shader__layer specular'
                style={{
                    background: 'black',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    backgroundSize: '100%',
                    backgroundAttachment: 'fixed',
                    backgroundImage:
                        'linear-gradient(180deg, black 20%, #3c5e6d 35%, #f4310e, #f58308 80%, black)',
                    mixBlendMode: 'color-dodge',
                }}
            >
                <div
                    className='shader__layer mask'
                    style={{
                        mixBlendMode: 'multiply',
                        background: 'black',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '100%',
                        height: '100%',
                        backgroundSize: '100%',
                        backgroundImage: "url('coverphoto.jpg')",
                    }}
                ></div>
            </div>
        </div>
    )
}
