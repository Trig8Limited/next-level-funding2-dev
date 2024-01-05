import { useTheme } from '@/context/ThemeContext';
import React, { useState } from 'react';
import Button from './Button';

const UserResponsePage = ({handleCloseClick}) => {
  const {theme} = useTheme()
  const [responses, setResponses] = useState({
    rating: '',
    feedback: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResponses((prevResponses) => ({
      ...prevResponses,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the submission of responses here
    console.log('User responses:', responses);
    // You might want to send the responses to a server or perform further actions
  };

  return (
    <div className={`${theme === 'light' ? "body-bg text-white" : "bg-white text-black"}  text-black w-[100%] m-0 p-10 h-screen`}>
      <h1 className=' text-center text-xl text-[#942289] font-bold'>
        NextLeveFunding
      </h1>
      <p className={`${theme === 'light' ? " text-white" : " text-black"} lexend text-[17px]  text-center`} >
        Did our site serve you well today?
      </p>
      <form onSubmit={handleSubmit}>
      
        <label className={`${responses.rating === "No" ? "hidden" : "block"} mt-3 relative flex items-center`}>
                <div className={`${theme === 'light' ? "border border-white " : "bg-white"} w-full cursor-pointer flex items-center  gap-4 p-2 shadow-lg rounded-md container-check`}><input onClick={handleCloseClick} type='radio' id="yes"
                name="rating"
                value="Yes"
                onChange={handleChange}
                />
                <span class="checkmark"></span> 
                <p className={`ml-3 flex gap-1 items-center lexend text-[17px]`}> <span>{responses.rating === "Yes" ? "" : "Yes"}</span> {responses.rating === "Yes" ? <p>We&#39;re thrilled to hear that! 🌟</p> : ""}</p>
                  </div>
            </label>
            {/* {responses.rating === 'Yes' && (
            <div className='flex justify-center items-center  flex-col'>

            
             <p className='text-sm font-bold my-4'> What specifically made your experience positive?</p>
              <textarea
              className={`w-full p-2 h-[100px] ${theme === 'light' ? "border border-white " : "bg-white"}`}
                name="feedback"
                value={responses.feedback}
                onChange={handleChange}
              />
          
          </div>
        )} */}

          
          
            <label className={`${responses.rating === 'Yes' ? 'hidden' : 'block'} mt-3 relative flex items-center`}>
                <div className={`${theme === 'light' ? "border border-white " : "bg-white"} w-full cursor-pointer flex items-center  gap-4 p-2 shadow-lg rounded-md container-check`}><input type='radio' id="no"
                name="rating"
                value="No"
                onChange={handleChange}
                />
                <span class="checkmark"></span> 
                <p className={`ml-3 flex gap-1 items-center lexend text-[17px]`}> <span>{responses.rating === "No" ? "" : "No"}</span> {responses.rating === "No" ? <p>We&#39;re sorry to hear that. 😔</p> : ""}</p>
                </div>
            </label>
          
            {responses.rating === 'No' && (
            <div className='flex justify-center items-center  flex-col'>

            
             <p className='text-sm  my-4 lexend text-[17px]'>Your feedback is important to us.</p>
              <textarea
              className={`w-full p-2 h-[100px] ${theme === 'light' ? "border border-white " : "bg-white"}`}
                name="feedback"
                value={responses.feedback}
                onChange={handleChange}
              />
          
          </div>
        )}
        
        <Button className={`text-[0.6rem] my-3  ${responses.rating === 'Yes' ? 'hidden' : 'block'}  ${theme === 'dark' ? 'border border-[#942289]' :  'border border-blue-500' } bg-[#362A6A] lexend `} text="Share Your Thoughts" type="submit"/> 
      </form>
    </div>
  );
};

export default UserResponsePage;
{/* <script type="text/javascript" id="zsiqchat">var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "siq6e8889663ec033c6bb111609546973337343aff15691605a1605dfcccad1a465", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zohopublic.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);</script> */}