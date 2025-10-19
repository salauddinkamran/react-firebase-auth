import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';

const Home = () => {


  const authInfo = use(AuthContext)
  console.log(authInfo)
  return (
    <div>
      <h1 className='text-4xl text-sky-500 font-bold text-center mt-20'>This is home pages</h1>
    </div>
  );
};

export default Home;