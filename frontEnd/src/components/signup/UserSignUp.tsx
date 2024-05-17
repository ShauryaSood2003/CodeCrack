import Input from "../sign/Input";
import Title from "../sign/Title";
import Button from "../sign/Button";
import { useState } from "react";
import { z } from "zod";

function UserSignUp() {
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

    const handleClick = () => {
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
            email: "",
            fname: "",
            lname: "",
            password: ""
        });
        setTrigger(false);
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
