function Hero() {
    return (
        <div className="hero flex items-centre justify-between">
            <div className="left flex-1 justify-center">
                <img src="images/hero.jpg" alt="Profile" />
            </div>
            <div className="right flex-1">
                <h6>Jagadeesh Boina</h6>
                <h1>I &apos; m a Web<br/> <span>Developer</span></h1>
                <p>Hello! I &apos;m Jagadeesh, a passionate web developer with a robust skill set in both front-end and back-end development. My journey in the tech world is driven by my love for creating dynamic and visually appealing websites. With expertise in React, HTML, and CSS, I specialize in crafting responsive user interfaces that are not only eye-catching but also intuitive for users.</p>
                <div>
                    <button className="btn btn-secondary">DOWNLOAD Resume</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
