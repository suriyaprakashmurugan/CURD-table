// import React from 'react';
// import { Modal} from 'antd';
// import {useForm} from 'react-hook-form'

// export default function Add({student, resetAdding, setData, newStudent, setNewStudent}) {

//   const {register, handleSubmit, formState:{errors}} = useForm();

//   const onFinish = (data) => {
//     setNewStudent(()=>{
//       const randomNumber = parseInt(Math.random() * 1000);
//               return { ...data, id: randomNumber };
//     })
//     console.log(newStudent);
    
//     setData((pre) => {
//       return [...pre, newStudent];
//     });
//   }
//   const onFinishFailed = () => {
//     resetAdding();
//   }
//   return (
//     <div>
//         <Modal
//         title="Adding Student"
//         visible={student}
//         okText="Save"
//         onCancel={onFinishFailed}
//         onOk={()=>{
//           document.getElementById("btnClick").click();
//         }}
//       >
//             <form 
//             id='formId'
//             className='formDesign'
//             method='post'
//             onSubmit={handleSubmit(onFinish)}
//             >
//               <label>Name<br/>

//                 <input
//                 placeholder='Add sudent Name!'
//                 className='inputDesign'
//                 name='name'
//                 type='text'
//                 {...register("name", {
//                   required: true,
                  
//                 })}
//               /><br/>
//               </label>
//               {errors.Name && <p style={{color:'red'}}>Please input name</p>}
              
//               <label>Email<br/>

//                 <input
//                 placeholder='Add sudent Email!'
//                 className='inputDesign'
//                 name='email'
//                 type='email'
//                 {...register("email", {
//                   required: true,
                  
//                 })}
//               /><br/>           
//               </label>
//               {errors.Email && <p style={{color:'red'}}>Please input email id</p>}
              
//               <label>Student Address<br/>

//                 <input
//                 placeholder='Add sudent Address!'
//                 className='inputDesign'
//                 name='address'
//                 type='text'
//                 {...register("address", {
//                   required: true,
                  
//                 })}
//               /><br/>       
//               </label>
//               {errors.Address && <p style={{color:'red'}}>Please input Address</p>}
//               <button type='submit' id='btnClick' style={{display:'none'}}>save</button>
//             </form>

//         {/* <Input 
//           placeholder="Student Name"
//           onChange={(e) => {
//             setNewStudent(() => {
//               const randomNumber = parseInt(Math.random() * 1000);
//               return { name: e.target.value, id: randomNumber };
//             });
//           }}
//         /><br/><br/>
//         <Input
//           placeholder="Student Email"
//           onChange={(e) => {
//             setNewStudent((pre) => {
//               return { ...pre, email: e.target.value };
//             });
//           }}
//         /><br/><br/>
//         <Input
//           placeholder="Student Address"
//           onChange={(e) => {
//             setNewStudent((pre) => {
//               return { ...pre, address: e.target.value };
//             });
//           }}
//         /><br/> */}
//       </Modal>
//     </div>
//   )
// }
