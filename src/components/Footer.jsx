import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import ListGroup from "react-bootstrap/ListGroup";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("please fill name"),
    email: yup.string().required("please fill email"),
    message: yup.string().required("write message....."),
  })
  .required();

const Footer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    alert("your enquiry has been submitted successfully");
    reset();
  };

  return (
    <>
      <h5 className="text-center mt-5" id="contact">
        Contact Us
      </h5>

      <section className="container row mx-auto mt-5">
        <div className="col-lg-6">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="name"
                {...register("name")}
              />
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

            <Form.Label>Enquiry</Form.Label>

            <FloatingLabel label="Messages">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "150px" }}
                {...register("message")}
              />
              <p style={{ color: "red" }}>{errors.message?.message}</p>
            </FloatingLabel>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>

        <div className="col-lg-6 mt-4">
          <ListGroup>
            <ListGroup.Item>Email: OnlineShop@gmail.com</ListGroup.Item>
            <ListGroup.Item>Mobile no. +12-466823238</ListGroup.Item>
            <ListGroup.Item>
              Address: 11802 Warfield St, San Antonio, TX 78216, United States{" "}
            </ListGroup.Item>
          </ListGroup>
        </div>
      </section>
      <div className="p-5 text-center" style={{ backgroundColor: "#f2f8fc" }}>
        @All rights reserved
      </div>
    </>
  );
};

export default Footer;
