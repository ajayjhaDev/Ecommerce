import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("please fill name"),
    email: yup.string().required("please fill email"),
    number: yup
      .number()
      .integer()
      .positive()
      .typeError("please fill mobile number"),
    message: yup.string().required("write address....."),
  })
  .required();

const OrderForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    alert("your order has been submitted successfully");
    reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="name" {...register("name")} />
          <p style={{ color: "red" }}>{errors.name?.message}</p>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="email"
            {...register("email")}
          />
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="mobile no."
            {...register("number")}
          />
          <p style={{ color: "red" }}>{errors.number?.message}</p>
        </Form.Group>

        <Form.Label>Address</Form.Label>

        <FloatingLabel label="Address">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "150px" }}
            {...register("message")}
          />
          <p style={{ color: "red" }}>{errors.message?.message}</p>
        </FloatingLabel>

        <Button variant="primary" type="submit">
          Order
        </Button>
      </Form>
    </>
  );
};

export default OrderForm;
