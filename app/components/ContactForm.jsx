'use client'
import React, { useState } from "react";
import { useForm, Controller} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm as useFormspree } from '@formspree/react';
import { useTheme } from "../context/ThemeContext";


const ContactForm = () => {
  const { theme, toggleTheme } = useTheme();
  const [isFormSubmitting, setIsFormSubmitting] = useState(false); // Rename the state variable
  
  const schema = yup.object().shape({    
    name: yup
    .string()
    .required("Please enter your name")
    .min(6, "Name should be at least 6 characters")
    .max(20, "Name should not exceed 20 characters")
    .matches(/^[A-Za-z ]*$/, "Name should not contain numbers or special characters"),
    email: yup.string().email("Invalid email format").required("Please enter your email address."),
    subject: yup.string().required("Please enter a subject for your message."),
    message: yup.string().required("Please enter your message."),
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    trigger,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  // Set up Formspree
  const [state, submitForm] = useFormspree('xbjvbnwl');
 
  const onSubmit = async (data) => {
    try {
      const isValid = await trigger();

      if (isValid) {        
        await submitForm(data);
      } else {
        console.error('Validation errors occurred.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      reset();
    }
  };      
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} 
          action="https://formspree.io/f/xbjvbnwl" 
          method="POST" 
          className="w-full pt-8 lg:pt-0">
          { state.succeeded && <p className="text-green-400 pb-4">Thanks, your message has been received!</p>}
      <div className="mb-10">
        <Controller
          name="name"
          control={control}
          defaultValue="" 
          render={({ field }) => (
            <input
              type="text"
              placeholder="Name"
              {...field}
              onBlur={() => trigger("name")} 
              className="border border-[1px solid white] p-3 2xl:w-[30rem] w-full"
            />
          )}
        />
        {errors.name && <p className="text-[#f18181] text-sm">{errors.name.message}</p>}
      </div>
      <div className="mb-10">
        <Controller
          name="email"
          control={control}
          defaultValue="" 
          render={({ field }) => (
            <input
              type="email"
              placeholder="Email"
              {...field}
              onBlur={() => trigger("email")} // Trigger validation on blur

              className="border border-[1px solid white] p-3 2xl:w-[30rem] w-full"
            />
          )}
        />
        {errors.email && <p className="text-[#f18181] text-sm">{errors.email.message}</p>}
      </div>

      <div className="mb-10">
        <Controller
          name="subject"
          control={control}
          defaultValue="" 
          render={({ field }) => (
            <input
              type="text"
              placeholder="Subject"
              {...field}
              onBlur={() => trigger("subject")} // Trigger validation on blur
              className="border border-[1px solid white] p-3 2xl:w-[30rem] w-full"
            />
          )}
        />
        {errors.subject && <p className="text-[#f18181] text-sm">{errors.subject.message}</p>}
      </div>

      <div className="mb-10">
        <Controller
          name="message"
          control={control}
          defaultValue="" 
          render={({ field }) => (
            <textarea
              placeholder="Message"
              {...field}
              onBlur={() => trigger("message")} // Trigger validation on blur
              className="border border-[1px solid white] p-3 2xl:w-[30rem] w-full h-[10rem]"
            />
          )}
        />
        {errors.message && <p className="text-[#f18181] text-sm">{errors.message.message}</p>}
      </div>

      <div className="flex flex-col w-full md:w-[40%] xl:w-[20%] mt-10">
      <button
        type="submit"
        className="border border-slate-600 rounded-full px-4 py-2"
        disabled={isSubmitting || state.submitting}
      >
        {state.submitting ? 'Submitting...' : 'Submit'}
      </button>
      </div>
    </form>
  );
};

export default ContactForm;
