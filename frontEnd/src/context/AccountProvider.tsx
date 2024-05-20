import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type User = {
  id: number;
  name: string;
  type: string;
};

type AccountContextType = {
  userInfo: User;
  setUserInfo: (user: User) => void;
};

export const AccountContext = createContext<AccountContextType>({
  userInfo: { id: -1, name: "", type: "user" },
  setUserInfo: () => {},
});

export const useAccountContext = () => useContext(AccountContext);

const AccountProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState<User>({ id: -1, name: "", type: "user" });

  useEffect(() => {
    console.log("Provider userInfo updated:", userInfo);
  }, [userInfo]);

  return (
    <AccountContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
