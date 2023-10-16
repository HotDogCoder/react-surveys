import { connect } from 'react-redux'
import { useEffect } from 'react';
declare let window: any;

const FullWindowLayout = ({children, loadWeb3, get_network_id, my_user, get_my_user_details}:any) => {

  useEffect(() => {
      const fetchData = async () => {
        if (localStorage.getItem("account")) {
          loadWeb3();
          my_user ? <></>:get_my_user_details()
        }
      };
      fetchData();

      if (window.ethereum) {
        get_network_id();
      }
  }, []);

  return (
    <>
      <div className="mx-auto inset-0 absolute">
        <div className="mx-auto inset-0 absolute">{children}</div>
      </div>
    </>
  )
}

const mapStateToProps = (state: any) => ({

})

export default connect(mapStateToProps, {
}) (FullWindowLayout);