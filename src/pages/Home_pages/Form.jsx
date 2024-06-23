function Form() {
    return (
        <form action="">
            <div className="flex justify-center border-solid">
                <div>
                    <label htmlFor="firstName">Your Name</label>
                    <input type="text" name="first_name"/>
                </div>
                <div>
                    <label htmlFor="email">Your Email</label>
                    <input type="mail" name="email"/>
                </div>
            </div>
            <label htmlFor="subject">Subject</label><br/>
            <input type="text" name="subject"/><br/>
            <label htmlFor="text-area">Message</label>
            <textarea name="text-area"></textarea>
            <div className="submit-btn">
                <button className="btn btn-secondary">submit</button>
            </div>
    </form>
    )
}

export default Form
