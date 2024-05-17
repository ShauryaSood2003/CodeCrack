import Button from "../sign/Button";
import Input from "../sign/Input";
import Title from "../sign/Title";
import { useState } from "react";
import {z} from "zod";

function UserSignIn(){
    const [user,setUser]=useState({
        email:"",
        password:"",
    });
    const [errors, setErrors] = useState<string[]>([]);
    const [trigger, setTrigger] = useState(false);

    const User = z.object({
        email: z.string().email(),
        password: z.string().min(8).max(20)
    });

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setUser(prevInfo => ({
            ...prevInfo,
            [name]: value
        }));
    };
    const handleClick = ()=>{
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
        setUser({
            email:"",
            password:""
        })
        setTrigger(false);
    }

    return(
        <div className="flex justify-center items-center h-screen">
            <div className="space-y-7 flex flex-col items-center md:w-[25%]">
                <Title 
                    title="Sign In"
                />
                <Input 
                    type="email"
                    placeholder="xyz@gmail.com"
                    lable="Email Id"
                    name="email"
                    value={user.email}
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
                <Button onClick={handleClick} text="SignIn"></Button>
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
    )
}
export default UserSignIn;