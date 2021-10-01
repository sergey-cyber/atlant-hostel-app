import { Form, Input, Button } from "antd";
import { FormInstance } from "antd/es/form";
import { createRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reduser";
import styles from "./loginPage.module.scss";

enum LOGIN_FORM_STATE {
  REGISTARATION = "registration",
  LOGIN = "login",
}

const LoginPage = (props: any) => {
  const [formState, setFormState] = useState<LOGIN_FORM_STATE>(LOGIN_FORM_STATE.LOGIN);

  const onFinish = (values: any) => {
    const { email, password, ...userData } = values;
    props.login(email, password);
    console.log(userData);
  };

  const formRef = createRef<FormInstance>();

  useEffect(() => {
    formRef.current?.resetFields(); // Reset form values
  }, [formState]);

  return (
    <div className={styles.loginPage}>
      <Form name="basic" layout="vertical" ref={formRef} onFinish={onFinish} autoComplete="off">
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
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
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        {formState === LOGIN_FORM_STATE.REGISTARATION && (
          <>
            <Form.Item
              label="Retry password"
              name="retryPassword"
              rules={[
                {
                  required: true,
                  message: "Please retry password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The two passwords that you entered do not match!")
                    );
                  },
                }),
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Age"
              name="age"
              rules={[
                () => ({
                  validator(_, value) {
                    if (!value || !!value.match(/^\d\d$/)) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Please input only number!"));
                  },
                }),
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Phone"
              rules={[
                () => ({
                  validator(_, value) {
                    if (!value || !!value.match(/\+\d+$/)) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Invalid phone number!"));
                  },
                }),
              ]}
            >
              <Input placeholder="+7 914 999 99 99" />
            </Form.Item>
          </>
        )}

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <div
            className={styles.formStateSwitcher}
            onClick={() =>
              setFormState(
                formState === LOGIN_FORM_STATE.LOGIN
                  ? LOGIN_FORM_STATE.REGISTARATION
                  : LOGIN_FORM_STATE.LOGIN
              )
            }
          >
            {formState === LOGIN_FORM_STATE.LOGIN ? "Перейти к регистрации." : "Выполнить вход."}
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default connect(() => ({}), { login })(LoginPage);
