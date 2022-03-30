import React from 'react';
import {Input, Modal} from 'antd';

export default function Add({student, resetAdding, setData, newStudent, setNewStudent}) {
  return (
    <div>
        <Modal
        title="Adding Student"
        visible={student}
        okText="Save"
        onCancel={() => {
          resetAdding();
        }}
        onOk={() => {
          setData((pre) => {
            if(newStudent !== ''){
            return [...pre, newStudent];
            }
          });
          
          document.getElementById("inp").value = '';
          document.getElementById("inpu").value = '';
          document.getElementById("input").value = '';

          resetAdding();
        }}
      >
        <Input id='inp'
          placeholder="Student Name"
          onChange={(e) => {
            setNewStudent(() => {
              const randomNumber = parseInt(Math.random() * 1000);
              return { name: e.target.value, id: randomNumber };
            });
          }}
        /><br/><br/>
        <Input id='inpu'
          placeholder="Student Email"
          onChange={(e) => {
            setNewStudent((pre) => {
              return { ...pre, email: e.target.value };
            });
          }}
        /><br/><br/>
        <Input id='input'
          placeholder="Student Address"
          onChange={(e) => {
            setNewStudent((pre) => {
              return { ...pre, address: e.target.value };
            });
          }}
        /><br/>
      </Modal>
    </div>
  )
}
