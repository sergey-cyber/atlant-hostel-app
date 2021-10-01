import { Form, Input, Button, Rate } from "antd";
import style from "./reviews_form.module.scss";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "Укажите ${label}",
};
/* eslint-enable no-template-curly-in-string */

const ReviewsForm = (props) => {
  const onFinish = (_formData) => {
    const formData = { ..._formData };
    formData.review.publicationDate = new Date().toLocaleDateString(); // Добавляем дату в объект
    props.postNewReview(formData.review);
    props.setReviewsForm(false); // Закрывет форму отзывов
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={["review", "rate"]} label="Оценка">
        <Rate className={style.rate} />
      </Form.Item>
      <Form.Item name={["review", "name"]} label="Как вас зовут" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={["review", "content"]} label="Описание" rules={[{ required: true }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Отправить отзыв
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ReviewsForm;
