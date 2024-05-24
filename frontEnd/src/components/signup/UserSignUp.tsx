import Input from "../sign/Input";
import Title from "../sign/Title";
import Button from "../sign/Button";
import { useState } from "react";
import { z } from "zod";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

function UserSignUp() {
    const navigate=useNavigate();
    const [user, setUser] = useState({
        email: "",
        fname: "",
        lname: "",
        password: ""
    });

    const [errors, setErrors] = useState<string[]>([]);
    const [trigger, setTrigger] = useState(false);

    const User = z.object({
        email: z.string().email(),
        fname: z.string().min(1,{message:"First Name cannot be Empty"}),
        lname: z.string(),
        password: z.string().min(8).max(20)
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleClick = async() => {
        const parse = User.safeParse(user);

        if (!parse.success) {
            const errorMessages = parse.error.issues.map(item => item.message);
            setErrors(errorMessages);
            setTrigger(true);
            setTimeout(() => {
                setTrigger(false);
                setErrors([]);
            }, 10000);
            return;
        }
        console.log(user);
        try{
            const response=await axios({
                method:"POST",
                url:"http://localhost:4000/auth/signup",
                data:user,
                withCredentials: true
            })
            localStorage.setItem("userInfo",response.data);
            navigate("/");            
        }catch(e:any){
            const message:string=e.response?.data?.message || "Server Down Try Again Later!";
            setErrors([message]);
            setTrigger(true);
            setTimeout(()=>{
                setTrigger(false);
            },5000);
        }
        
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="space-y-7 flex flex-col items-center md:w-[25%]">
                <Title title="Sign Up" />
                <Input
                    type="email"
                    placeholder="xyz@gmail.com"
                    lable="Email Id"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                />
                <Input
                    type="text"
                    placeholder="John"
                    lable="First Name"
                    name="fname"
                    value={user.fname}
                    onChange={handleChange}
                />
                <Input
                    type="text"
                    placeholder="Doe"
                    lable="Last Name"
                    name="lname"
                    value={user.lname}
                    onChange={handleChange}
                />
                <Input
                    type="password"
                    placeholder=""
                    lable="Password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                />
                <Button onClick={handleClick} text="Sign Up" />
                <GoogleLogin
                        onSuccess={async (res)=>{
                            const decoded=(res.credential);
                            console.log(decoded);
                            
                        }}
                        onError={() => {
                            console.log("Errro occired while google signin!");
                        }}
                />
                <p>Already have an Account ? <Link to={"/signin"} className="text-pink-500 font-medium" > Login Here </Link></p>
                {   
                    trigger && (
                        <div className="text-center m-2">
                            {
                                errors.map((errMsg, index) => (
                                    <p className="text-red-600" key={index}>{errMsg}</p>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default UserSignUp;
