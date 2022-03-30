import "antd/dist/antd.css";
// import axios from 'axios';/
import React, { useState } from "react";
import "./App.css";
import { Table, Button, Modal } from "antd";
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import Add from './components/add/add';
import Edit from "./components/edit/edit";

function App() {
  //student list
  const [data, setData] = useState([
    {
      id: 1,
      name: "suriya",
      email: "123suriya@gmail.com",
      address: "123suriya"
    },
    {
      id: 2,
      name: "prakash",
      email: "123prakash@gmail.com",
      address: "123prakash"
    },
    {
      id: 3,
      name: "karna",
      email: "123karna@gmail.com",
      address: "123karna"
    },
    {
      id: 4,
      name: "vignesh",
      email: "123vignesh@gmail.com",
      address: "123vignesh"
    }
  ]);
  

  // const getStudent =async () =>{
  //   try{
  //    const user = await axios.get('http://localhost:5000/data');
  //    console.log(user);
  //    setData(user)
  // }
 
  
  //   catch (error){
  //     console.log(error)
  //   }
  // }
  // useEffect(()=>{
  //   getStudent()
  // },[])


  //columns for table
  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "4",
      title: "Address",
      dataIndex: "address",
    },
    {
      key:"5",
      title:"Actions",
      render:(record)=>{
        return(
          <>
          <EditOutlined style={{color:'steelblue'}} onClick={() => {onEditStudent(record)}} />
          <DeleteOutlined style={{color:'red',paddingLeft:'20px'}} onClick={() => {onDeleteStudent(record)}} />
          </>
        )
      }
    }
  ];

  const [student, setStudent] = useState(false);
  const [editing,setEditing] = useState(false);
  const [edited,setEdited] = useState(null)

  //add new student
  const addStudent = () => {
    setStudent(true);
  };

  //cancel adding
  const resetAdding = () => {
    // setNewStudent('')
    setStudent(false);
    // console.log(newStudent);
  };

  //delete student
  const onDeleteStudent = (record) => {
    Modal.confirm({
      title:'are you want to delete',
      okText:'yes',
      okType:'danger',
      onOk:() => {
        setData((pre)=>{
          return pre.filter((std)=>
            std.id !== record.id
          )
        })
      }
    })
  }

  //edit student
  const onEditStudent = (record) => {
    setEditing(true);
    setEdited({...record});
  }

  //cancel Editing
  const resetEditing = () => {
    setEditing(false);
  }
  

  return (
    <div className="container">

      <Button type="primary" className="btn" onClick={addStudent}>
        Add Student
      </Button>
      
          <Edit 
          editing={editing}
          student={student}
          resetEditing={resetEditing}
          setData={setData}
          edited={edited}
          setEdited={setEdited}
          />

          <Add
          student={student}
          resetAdding={resetAdding}
          setData={setData}
          />

      <Table columns={columns} dataSource={data}></Table>
    </div>
  );
}

export default App;
