import "./Login.css";

const Login = () => {
    return (
        <div class="form-container">
            <div class="head-container">
                <h1 class="h-text">Welcome to IMSA Replay</h1>
            </div>
            <div class="container-fluid">
                <h1 class="sign-head">Sign Up</h1>
                <form>
                    <label class="form-label">Enter your email address</label>
                    <input class="input-box" type="email" placeholder="" />
                    <label class="form-label">Enter your password</label>
                    <input class="input-box" type="password" placeholder="" />
                    <div class="button-container">
                        <input class="sign-button" type="button" value="Submit" />
                        <hr class="line" color="black " size="1" align="center" />
                    </div>
                    <div class="g-container">
                        <button class="g-button">
                            <h1 class="g-text">Sign in with Google</h1>
                        </button>
                    </div>
                    <h1 class="b-text">
                        Don't have an Account? <a class="s-text">Sign Up</a>
                    </h1>
                    <closeform></closeform>
                </form>
            </div>
        </div>
    );
};

export default Login;
