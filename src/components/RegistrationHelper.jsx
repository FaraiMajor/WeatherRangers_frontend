import axios from "axios";

export default async function RegistrationHelper(firstName, lastName, email, password,zipCode) {

    const res = await axios.post('https://pacific-taiga-17233.herokuapp.com/api/users', {
        // Axios looks for the auth option, and, if it is set, formats a
        // basic auth header for you automatically.
         
            firstName: firstName,
            lastName : lastName,
            email: email,
            password: password,
            zipCode: zipCode
        
    });

    // const user = await axios.get('https://pacific-taiga-17233.herokuapp.com/api/users');
    // console.log(user);
    // const res2 = await axios.post('https://pacific-taiga-17233.herokuapp.com/api/locations', {
    //     // Axios looks for the auth option, and, if it is set, formats a
    //     // basic auth header for you automatically.
         
    //         zipCode : zipCode
        
    // });
    

    console.log(res); // 200
    console.log(firstName)
    console.log(lastName)
    console.log(password)
    console.log(zipCode)


}



//     const auth = (firstName, lastName, email, password) => async dispatch => {
    
    
    
//     let res;
//     try {
//       res = await axios.post(`https://pacific-taiga-17233.herokuapp.com/api/users`, { firstName, lastName, email, password }, { withCredentials: true });
//     }
//     catch (authError) {
//       return dispatch(getUser({ error: authError }));
//     }
  
//     try {
//       dispatch(getUser(res.data));
//     }
//     catch (dispatchOrHistoryErr) {
//       console.error(dispatchOrHistoryErr);
//     }
//   };

//   const reducer = (state = {}, action) => {
   
//         return true;
    
//   }
  
//   export default reducer;


 