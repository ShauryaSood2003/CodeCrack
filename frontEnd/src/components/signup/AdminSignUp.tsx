import Input from "../sign/Input";
import Title from "../sign/Title";
import Button from "../sign/Button";
import { z } from "zod";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminSignUp() {
    const [user, setUser] = useState({
        email: "",
        fname: "",
        lname: "",
        password: "",
        code: ""
    });

    const navigate=useNavigate();
    const [errors, setErrors] = useState<string[]>([]);
    const [trigger, setTrigger] = useState(false);

    const UserSchema = z.object({
        email: z.string().email({ message: "Invalid email address" }),
        fname: z.string().min(1, { message: "First name is required" }),
        lname: z.string().min(1, { message: "Last name is required" }),
        password: z.string().min(8, { message: "Password must be at least 8 characters" }).max(20, { message: "Password cannot exceed 20 characters" }),
        code: z.string().max(10, { message: "Code cannot exceed 10 characters" })
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleClick = async() => {
        const parse = UserSchema.safeParse(user);

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

        try{
            const response=await axios({
                method:"POST",
                url:"http://localhost:4000/auth/admin/signup",
                data:user,
                withCredentials: true
            })
            localStorage.setItem("userInfo",response.data);
            navigate("/")
                       
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
                <Input
                    type="password"
                    placeholder=""
                    lable="Admin Code"
                    name="code"
                    value={user.code}
                    onChange={handleChange}
                />
                <Button onClick={handleClick} text="Sign Up"></Button>
                {trigger && (
                    <div className="text-center m-2">
                        {errors.map((errMsg, index) => (
                            <p className="text-red-600" key={index}>{errMsg}</p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default AdminSignUp;
