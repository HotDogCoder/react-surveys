import NoAuthFullWidthLayoutLegal from "../layouts/no_auth_full_width_layout_legal";
import { ConnectedProps, connect } from "react-redux"
import {
    HiChevronRight,
    HiChevronDown,
    HiMail,
    HiCheck,
    HiX,
} from "react-icons/hi";
import LoadingFullWidth from "../components/loaders/loading_full_width";
import { Navigate } from 'react-router-dom'
import { RootState } from "../store";
import { TextField } from "@mui/material";
import { UserAccount } from "./auth/redux/types/user_account_types";
import { useState } from "react";
import { postUserAccount } from "./auth/redux/actions/user_account_action";
import { CustomButton } from "../core/components/buttons/custom_button";

const Connect: React.FC<PropsFromRedux> = ({ loading, postUserAccount, user_account_state }: PropsFromRedux) => {

    const initialRequestData: UserAccount = {
        username: "jhospinal",
        password: "admin",
    }

    const [formData, setFormData] = useState<UserAccount>(initialRequestData);
    const [email_is_open, set_email_is_open] = useState<boolean>(false);

    if (user_account_state?.isAuthenticated && localStorage.getItem('access_token')) {
        return <Navigate to="/" />;
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
          event.preventDefault();
          postUserAccount(formData);
        } catch (error) {
          console.log('Error new modal : ', error);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
    };

    return (
        <NoAuthFullWidthLayoutLegal>
            <div className="text-center">
                <p className="mt-8 text-xl font-gilroy-bold dark:text-stone-50 text-slate-900 sm:text-3xl sm:tracking-tight lg:text-4xl">
                    Login
                </p>
                <p className="max-w-xl my-5 mx-auto text-xl dark:text-stone-50 text-slate-500">
                    Conecte con uno de nuestros proveedores.
                </p>
            </div>

            {!loading ? (
                <div className="shadow overflow-hidden sm:rounded-md">
                    <ul role="list" className="divide-y divide-gray-200">
                        <li>
                            <div
                                onClick={() => {set_email_is_open(!email_is_open)}}
                                className="bg-white dark:bg-slate-800 hover:dark:bg-dark-second hover:bg-stone-50 block dark:text-stone-50 transition duration-300 ease-in-out cursor-pointer"
                            >
                                <div className="flex items-center px-4 py-4 sm:px-6">
                                    <div className="min-w-0 flex-1 flex items-center">
                                        <div className="flex-shrink-0">
                                            <HiMail className="text-5xl p-1"/>
                                        </div>
                                        <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                                            <div>
                                                <p className="text-sm font-medium truncate">
                                                    Email
                                                </p>
                                            </div>
                                            <div className="hidden md:block">
                                                
                                            </div>
                                        </div>
                                        
                                        <div>
                                            {!email_is_open ? (<HiChevronRight
                                                className="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />):(
                                            <HiX
                                                className="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                                
                                            />)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {email_is_open && (<div className="w-full">
                                <form onSubmit={handleSubmit} className="flex flex-wrap items-left p-2 bg-slate-50 dark:bg-slate-300">
                                    
                                    {user_account_state?.error && (<div className="p-1 w-full text-red-500">
                                        {user_account_state?.message}
                                    </div>)}
                                    <div className='p-1 w-full md:w-1/2'>
                                    <TextField 
                                        type="text"
                                        name="username"
                                        id="username"
                                        label="username" 
                                        variant="outlined"
                                        onChange={handleInputChange} 
                                        value={formData.username} 
                                        className="w-full" 
                                    />
                                    </div>

                                    <div className='p-1 w-full md:w-1/2'>
                                    <TextField 
                                        type="password"
                                        name="password"
                                        id="password"
                                        label="password" 
                                        variant="outlined"
                                        onChange={handleInputChange} 
                                        value={formData.password} 
                                        className="w-full" 
                                    />
                                    </div>
                                    
                                    <div className="w-full pt-2 flex justify-end space-x-2">

                                    <CustomButton
                                        label='Ingresar'
                                        onClick={() => {}}
                                        colors={['blue','blue']}
                                        icon={<HiCheck/>}
                                        type="submit"
                                    />
                                    </div>
                                </form>
                            </div>)}
                        </li>
                        
                    </ul>
                </div>
            ) : (
                <LoadingFullWidth />
            )}
            <br />
        </NoAuthFullWidthLayoutLegal>
    );
};

const mapStateToProps = (state:RootState) => ({
    loading: state.user_account_state?.loading,
    user_account_state: state.user_account_state,
    //my_user: state.user.my_user,
});

const mapDispatchToProps = {
    postUserAccount
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Connect);