import '../css/loginContainer.css';

const Login=()=>{
    return(<>
            <div className="container-fluid loginContainer">
                <div className="log-form animate__animated animate__rollIn">
                    <h2>Login</h2>
                    <form>
                        <input type="text" title="username" placeholder="username" />
                        <input type="password" title="username" placeholder="password" />
                        <button type="submit" className="btn btn-dark  rounded-0  animate__animated animate__fadeInTopLeft">Login</button>
                      
                    </form>
                </div>
            </div>
    </>);
}

export default Login;