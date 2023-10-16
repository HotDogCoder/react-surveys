import FullWidthLayout from "../../layouts/full_width_layout";
import { useEffect, useState } from "react";
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from "../../store";

const Home: React.FC<PropsFromRedux> = ({}: PropsFromRedux) => {

  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const onInit = async () => {
      try {
        
      } catch (error) {
          console.error('Error fetching data: ', error);
      } finally {
          setLoading(false);
      }
    };
    
    onInit();
  }, []);



  return (
    <FullWidthLayout>
      
    </FullWidthLayout>
  )
}

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Home);