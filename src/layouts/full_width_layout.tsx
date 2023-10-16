import { ConnectedProps, connect } from 'react-redux'
import Footer from '../components/navigation/footer';
import { useEffect } from 'react';
import Navbar from '../core/components/navigation/navbar';
import { RootState } from '../store';
import { Navigate } from 'react-router-dom';
import MainLoading from '../components/loaders/main_loading';
import { getUserAccount, logoutUserAccount, verifyUserAccount } from '../pages/auth/redux/actions/user_account_action';
declare let window: any;

const FullWidthLayout: React.FC<PropsFromRedux> = ({
  children,
  loading,
  user_account_state,
  verifyUserAccount,
  logoutUserAccount
}:PropsFromRedux) => {

  useEffect(() => {
    const fetchData = async () => {
      console.log("verifyUserAccount")
      await verifyUserAccount();
    };
    fetchData();
  },[]);

  if(user_account_state?.isAuthenticated == false && !localStorage.getItem('access_token') ) {
    return <Navigate to={'/connect'}></Navigate>
  }

  const handleLogOut = async () => {
    await logoutUserAccount();
  }

  return (
    <div className='dark:bg-slate-700 min-h-screen'>
      <Navbar logOut={handleLogOut}/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        
        <div className="max-w-7xl mx-auto">{children}</div>
      </div>
      
      <Footer/>
      
      {loading && 
        (
          <div className='dark:bg-slate-800/80 bg-blue-800/80 fixed z-20 inset-0 flex items-center'>
            <MainLoading/>
          </div>
        )
      }
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  user_account_state: state.user_account_state,
  loading: (
    state.user_account_state?.loading ||
    state.general_data_state?.loading
  )
})

const mapDispatchToProps = {
  verifyUserAccount,
  getUserAccount,
  logoutUserAccount,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector> & {
  children?: React.ReactNode;
};;

export default connector(FullWidthLayout);