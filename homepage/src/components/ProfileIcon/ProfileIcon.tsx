type ProfileIconProps = {
    large?: boolean
}
export function ProfileIcon(props: ProfileIconProps) {
    const { large } = props
    return (
        <div
            style={{
                height: large ? 80 : 50,
                width: large ? 80 : 50,
                backgroundColor: '#bbb',
                borderRadius: '50%',
                display: 'inline-block',
                backgroundImage: "url('vibe.gif')",
                backgroundSize: 'contain',
                borderColor: 'white',
                borderWidth: '2px',
            }}
        >
            {' '}
        </div>
    )
}
