export {};
// import { HiOutlineMail } from 'react-icons/hi';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { get_user_details } from '../../redux/actions/user';

// // Initialize Firebase app
// firebase.initializeApp({
//   apiKey: "AIzaSyD1UZwJzYf-AfLUdo0vH7s62wigiUa_Jgc",
//   authDomain: "legal-d0194.firebaseapp.com",
//   projectId: "legal-d0194",
//   storageBucket: "legal-d0194.appspot.com",
//   messagingSenderId: "444109003080",
//   appId: "1:444109003080:web:0226cc0e5c1177eee87b7d"
// });

// const auth = firebase.auth();

// const Login = ({get_user}: any) => {
//   const [user] = useAuthState(auth);
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

//   React.useEffect(() => {
//     console.log('Failed to log in:', user?.uid)
//     localStorage.setItem("user", user?.uid || "")
//     const data = get_user(user?.uid)
//     console.log('xx', data)
//   }, [user])

//   const handleLoginSuccess = () => {
    
//     setIsAuthenticated(true);
//   };

//   const handleLoginFailure = (error: firebase.auth.Error) => {
//     console.log('Failed to log in:', error);
//   };

//   const handleLogout = () => {
//     auth.signOut();
//     setIsAuthenticated(false);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       {user ? (
//         <div className="flex flex-col items-center justify-center space-y-4">
//           <h1 className="text-2xl font-bold">You are now logged in!</h1>
//           <button
//             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//             onClick={handleLogout}
//           >
//             Log Out
//           </button>
//         </div>
//       ) : (
//         <div className="max-w-sm mx-auto">
//         {/* <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
//             Username
//           </label>
//           <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
//             Password
//           </label>
//           <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********" />
//         </div> */}
//         <div className="mb-6">
//           <p className="text-gray-700 font-bold mb-2">
//             Sign in with:
//           </p>
//           <div className="flex items-center">
//             <button onClick={() => {
//                   const provider = new firebase.auth.GoogleAuthProvider();
//                   auth.signInWithPopup(provider).then(handleLoginSuccess).catch(handleLoginFailure);
//                 }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4">
//               Google
//             </button>
//             {/* <a href="#" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4">
//               Facebook
//             </a>
//             <a href="#" className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//               Twitter
//             </a> */}
//           </div>
//         </div>
//         {/* <div className="flex items-center justify-between">
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
//             Sign In
//           </button>
//         </div> */}
//       </div>
//       )}
//     </div>
//   );
// };

// //export default Login;

// const mapStateToProps = (state:any) => ({
//   account: state.web3.account
//   //my_user: state.user.my_user,
// })

// // const mapDispatchProps = () => {
// //   return {
// //     requestLogin: (body:any) => {
// //       return dispatch(get_user_details(body))
// //     }
// //   }
// // }


// export default connect(mapStateToProps, {
//   get_user: get_user_details
// })(Login)
