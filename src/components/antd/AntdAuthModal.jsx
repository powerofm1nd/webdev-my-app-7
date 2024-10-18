import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';

const AntdAuthModal = ({onLogin}) => {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const [form] = Form.useForm(); 

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        form.submit(); 
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    const onFinish = (values) => {
        console.log('Success:', values);
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
            onLogin()
        }, 2000);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Button type="primary" size='large' onClick={showModal}>
                Login
            </Button>

            <Modal
                title="Authorization form"
                open={open}
                onOk={handleOk} 
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <Form
                    form={form} 
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default AntdAuthModal;