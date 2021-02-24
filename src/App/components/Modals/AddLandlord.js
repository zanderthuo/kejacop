import React from 'react';
import { Modal, Button, Form, Col, Input, Select } from 'antd';

import '../Modals/AddLandlordModal/AddLandlordModal.css'

const { Option } = Select;

class AddLandlordModal extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };


  render() {
    // const validateMessages = {
    //   required: '${label} is required!',
    //   types: {
    //     email: '${label} is not valid email',
    //     number: '${label} is not valid email',
    //   },
    // };
  
    return (
      <div>
        <span onClick={this.showModal}>
          Add New
        </span>
        <Modal
          title="Basic Modal"
          closeIcon
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" className="Canc" onClick={this.handleCancel}>
              Cancel
            </Button>,
            <Button key="submit" className="Addla" type="primary" onClick={this.handleOk}>
              Add Landlord
            </Button>,
          ]}
        >
          <Form
          name="AddLandlord"
          >
            <Form.Item
             rules={[{ required: true, message: 'Please input your Name!' }]}       
            >
              <Input 
              placeholder="Name" />
            </Form.Item>
            <Form.Item
              rules={[{ required: true, type: 'email', message: 'Please input your Email!' }]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
            rules={[{ required: true, type: 'number', message: 'Please input your Phone Number!' }]}
            >
              <Input placeholder="Phone Number" />
            </Form.Item>
            <Form.Item
              name="gender"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Gender"
                allowClear
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default AddLandlordModal


// ToDo
/**
 * form from antd 
 * work on styling the form
 * 
 */