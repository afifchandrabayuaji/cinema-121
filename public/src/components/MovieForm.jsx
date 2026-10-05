export default function Form({}){
    return(
        <>
            <div>
                <form>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email"/>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password"/>
                    <input type="submit" value="Login" />
                </form>
            </div>
        </>
    )
}