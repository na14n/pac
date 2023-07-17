const Hero = ({heroType}) => {
    return (
        (heroType === 1) ? (
            <div>
                (slider)
            </div>
        ) : (
            <div className="w-full h-[100vh] bg-red-500">
                (hero)
            </div>
        )
    )
}

export default Hero;