function Projects() {
    const projects=[
        {
            name:"Python Voice Assistance",
            pioints:[],
            image:"images/voice_ass.jpg",
        },
        {
            name:"Movie Rating",
            points:[],
            image:"images/movie_rate.png"
        },
        {
            name:"Tour guid",
            points:[],
            image:"images/development.jpg"
        }
    ]
    return (
        <div className="container">
            <h1>Projects</h1>
            <div className="projects-grid flex justify-between items-center">
                {projects.map((item)=><div className="pr-card" key={item}>
                    <img  src={`${item.image}`} alt="project-img"/>
                    <h1>{item.name}</h1>
                    <ul className="list">
                        <li>effecive code</li>
                        <li>wrtting mutliple line</li>
                        <li>rely on internet</li>
                    </ul>
                    <div className="pr-btn">
                        <button className="btn btn-secondary"><a href="https://popcornrate.netlify.app/">More</a></button>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Projects
