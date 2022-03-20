import React from 'react'
import * as BsIcon from 'react-icons/bs'
const Lstyle = ()=>{
    return (
        <style>
            {`
                @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
                .main-container{
                    width:100%;
                    height: 100vh;
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
                    padding: 5px;
                    height: 44px;
                    margin-bottom: 15px;
                    border-radius: 5px;
                }
                .form input:focus{
                    outline: none;
                }
                .form button{
                    background-color: #0D6EFD;
                    width: 100%;
                    height: 48px;
                    text-align: center;
                    padding: 5px 0px;
                    border: none;
                    color: white;
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
                }
                .form-help a span{
                    color: gray;
                }
                
                .two-line{
                    display: flex;
                    width: 100%;
                    justify-content: center;
                    color: gray;
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
                    margin-top: 5%;
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
            `}
        </style>
    )
}
const Login = () => {
  return (
    <>
        <div className="main-container">
            <div className="second-container">
                <h1>Instagram</h1>
                <form action="" className='form'>
                    <input type="text" placeholder='Phone number, email or usrname'/>
                    <input type="password"  placeholder='password'/>
                    <button type='submit' className='button'>Login</button>
                </form>
                <div className="form-help">
                    <a href="/"><span>Forget your login details?</span> Get help logging in.</a>
                </div>
                <div className="two-line">
                    <hr className='one'/> Or <hr className='two'/>
                </div>
                <div className="help-border">
                    <a href="/"><span><BsIcon.BsFacebook/></span> Log in with Facebook</a>
                </div>
            </div>
            <div className="bottom-signup">
                <a href="/"><span>Don't have an account?</span> Sign up.</a>
            </div>
        </div>
        <Lstyle/>
    </>
  )
}

export default Login