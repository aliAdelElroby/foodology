import React, { useState, useEffect } from "react";
import "./Login.scss";

// Import Components
import SocialButton from "@global/SocialButton/SocialButton";
import googleIcn from "./assets/google.svg";
import Input from "@global/Input/Input";
import MainButton from "@global/MainButton/MainButton";
import { useHistory } from "react-router-dom";
import { lazy } from "@lazy";
import { useDispatch, useSelector } from "react-redux";
import { useGoogleLogin } from "react-google-login";
import { serialize } from "@helpers";
import {
	loginWithGoogle as loginWithGoogleRedux,
	login as loginRedux
} from "@redux/actions/userSlice";

// Import Assets
import bg from "./assets/bg.jpg";

function Login() {
	// Redux
	const dispatch = useDispatch();
	const auth = useSelector(s => s.auth);
	// Google Hook
	const { signIn } = useGoogleLogin({
		clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
		onSuccess: loginWithGoogle
	});

	// States
	const [status, setStatus] = useState(false);
	const [form] = useState(React.createRef());

	const history = useHistory();
	// Functions
	useEffect(
		_ => {
			//Redirect To Home Page If IsAuth
			if (auth.check) {
				history.push(process.env.REACT_APP_LINK_START_WITH);
			}
		},
		[auth, history]
	);

	function loginWithGoogle(data) {
		dispatch(
			loginWithGoogleRedux(
				data,
				function() {
					auth.update();
					setTimeout(_ => {
						history.push(process.env.REACT_APP_LINK_START_WITH);
					}, 1000);
				},
				function() {
					alert("Not Found");
				}
			)
		);
	}
	function login(e) {
		setStatus("check");
		setTimeout(_ => {
			dispatch(
				loginRedux(
					serialize(form.current),
					function() {
						setStatus(true);
						auth.update();
						setTimeout(_ => {
							history.push(process.env.REACT_APP_LINK_START_WITH);
						}, 2000);
					},
					function() {
						setStatus("notFound");
					}
				)
			);
		}, 2000);
		e.preventDefault();
	}
	return (
		<div className="login-page">
			<div className="container-fluid m-0 p-0">
				<div className="row">
					{/* Photo */}
					<div className="col-12 col-sm-12 col-md-12 col-lg-7 d-none d-md-none d-lg-block">
						<lazy.div src={bg} loading={true} className="photo" />
					</div>

					{/* Content */}
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
									<form
										action="/"
										onSubmit={login}
										ref={form}
									>
										<Input
											data={{
												type: "email",
												name: "email",
												label: "Email address",
												placeholder: "Enter Your Email",
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
												name: "password",
												label: "Password",
												placeholder: "Enter password",
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
