
function Services() {
    const Services=[
        {
           img:"images/development.jpg",
           heading:"Software Development",
           text:" Python developer with a keen interest in leveraging Python's versatility for both web development and automation. With a solid foundation in Python's frameworks and libraries, he's adept at creating efficient back-end solutions and streamlining processes"
        },
        {
            img:"images/development.jpg",
            heading:"Web Development",
            text:" Python developer with a keen interest in leveraging Python's versatility for both web development and automation. With a solid foundation in Python's frameworks and libraries, he's adept at creating efficient back-end solutions and streamlining processes"
         },
         {
            img:"images/development.jpg",
            heading:"Web Design",
            text:" Python developer with a keen interest in leveraging Python's versatility for both web development and automation. With a solid foundation in Python's frameworks and libraries, he's adept at creating efficient back-end solutions and streamlining processes"
         }
    ]
    
    return (
            <div className="container">
                <h1 className="services-head">Services</h1>
                <p>All your digital needs... covered.</p>
                <div className="card-grid">
                    {Services.map(item=>
                    <div className="card" key={item.img}>
                        <img className="card-img" src={`${item.img}`}/>
                        <h2>{item.heading}</h2>
                        <p>{item.text}</p>
                    </div>
                    )}
                </div>
            </div>
    )
}

export default Services
