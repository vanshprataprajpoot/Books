import '../css/SignUpContainer.css';

const SignUp=()=>{
    return(<>
            <div className="container-fluid SignUpContainer">
                <div className="log-form animate__animated animate__fadeInBottomRight">
                    <h2>Sign Up</h2>
                    <form>
                        <input type="text" title="Username" placeholder="username" />
                        <input type="email" title="Email" placeholder="Email" />
                        <input type="password" title="Password" placeholder="password" />
                        <button type="submit" className="btn btn-dark  rounded-0  animate__animated animate__fadeInTopLeft">Sign Up</button>
                      
                    </form>
                </div>
            </div>
    </>);
}

export default SignUp;