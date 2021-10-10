import React, { useContext, useState, useEffect } from "react";
import "./Login.scss";
// Import Components
import SocialButton from "@global/SocialButton/SocialButton";
import googleIcn from "./assets/google.svg";
import Input from "@global/Input/Input";
import MainButton from "@global/MainButton/MainButton";
import { useHistory } from "react-router-dom";
import { lazy } from "@lazy";
import { isAuth } from "@helpers";
import { useGoogleLogin } from "react-google-login";
// Import Assets
import bg from "./assets/bg.jpg";

// Context
import { UserContext } from "@/App";

function Login({ setAuth }) {
	// Import Data From Context
	const users = useContext(UserContext);

	// Constants
	const clientIdGoogle =
		"101275596193-mv48v4l51somsi7aqvlc0nkgofn4669t.apps.googleusercontent.com";
	const { signIn } = useGoogleLogin({
		clientId: clientIdGoogle,
		onSuccess: loginWithGoogle
	});
	// States
	const [status, setStatus] = useState(false);
	const [email] = useState(React.createRef());
	const [pass] = useState(React.createRef());
	const history = useHistory();
	// Functions
	useEffect(
		_ => {
			if (isAuth()) {
				history.push("/");
			}
		},
		[history]
	);
	function loginWithGoogle(data) {
		const usersRoot = users || [];
		const result = usersRoot.filter(el => {
			return el.email.toLowerCase() === data.profileObj.email;
		});
		if (result.length > 0) {
			setAuth(result[0]);
			history.push("/");
		}
	}
	function login(e) {
		setStatus("check");
		setTimeout(_ => {
			check(
				email.current.value,
				pass.current.value,
				function(data) {
					setStatus(true);
					setAuth(data);
					setTimeout(_ => {
						history.push("/");
					}, 5000);
				},
				function() {
					setStatus("notFound");
				}
			);
		}, 5000);
		e.preventDefault();
	}
	function check(
		emailFeild,
		passFeild,
		successFunc = null,
		errorFunc = null
	) {
		const usersRoot = users || [];
		const result = usersRoot.filter(el => {
			return (
				el.email.toLowerCase() === emailFeild.toLowerCase() &&
				el.password.toLowerCase() === passFeild.toLowerCase()
			);
		});
		result.length > 0 ? successFunc(result[0]) : errorFunc(result[0]);
		return result.length > 0 ? true : false;
	}
	return (
		<div className="login-page">
			<div className="container-fluid m-0 p-0">
				<div className="row">
					<div className="col-12 col-sm-12 col-md-12 col-lg-7 d-none d-md-none d-lg-block">
						<lazy.div src={bg} loading={true} className="photo" />
					</div>
					<div className="col-12 col-sm-12 col-md-7 col-lg-5 m-auto">
						<div className="content m-auto">
							<div className="text-center">
								<h3
									className="t3"
									data-aos="fade-right"
									data-aos-delay="200"
								>
									Sign in to continue
								</h3>
								<SocialButton
									data={{
										icon: googleIcn,
										val: "Sign in with Google",
										bootstrap: "mt-5",
										aos: "zoom-in",
										aosDelay: 500
									}}
									onClick={signIn}
								/>
								<div className="or my-4 t5 d-flex align-items-center justify-content-center">
									Or, sign in with your email
								</div>
								<div className="form">
									<form action="/" onSubmit={login}>
										<Input
											data={{
												type: "email",
												label: "Email address",
												placeholder: "Enter Your Email",
												ref: email,
												status
											}}
											data-aos="fade-right"
											data-aos-delay="700"
											data-aos-once={true}
											data-aos-offset="0"
										/>
										<Input
											data={{
												type: "password",
												label: "Password",
												placeholder: "Enter password",
												ref: pass,
												status
											}}
											data-aos="fade-right"
											data-aos-delay="900"
											data-aos-once={true}
											data-aos-offset="0"
										/>
										<div className="forget mt-4">
											<a
												href="#1"
												className="t5 text-primary"
											>
												Forgot password?
											</a>
										</div>
										<MainButton
											data={{
												size: "l",
												val: "Sign In",
												bootstrap: "w-100 mt-5"
											}}
											onClick={login}
										/>
										<div
											className="have-acount t5 mt-4"
											data-aos="zoom-in"
											data-aos-offset="0"
											data-aos-once="true"
										>
											Don’t have an account?{" "}
											<a href="#1">Sign up now</a>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
