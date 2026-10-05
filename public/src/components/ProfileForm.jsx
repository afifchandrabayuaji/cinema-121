export default function LoginForm(){
    return(
        <>
            <div>
                <form onSubmit method="post">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username"/>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email"/>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password"/>
                    <label htmlFor=""></label>
                    <input type="submit" value="Register" />
                </form>
            </div>
        </>
    )
}