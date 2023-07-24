// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
  
  
//   const ApplicantsInfo = () => {
    

 
  
  





//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [address, setAddress] = useState('');
//     const [phone, setPhone] = useState('');
//     const [email, setEmail] = useState('');
//     const [birthDate, setBirthDate] = useState('');
//     const [status, setStatus] = useState('');
//     const [occupation, setOccupation] = useState('');
//     const [socialMedia, setSocialMedia] = useState('');
//     const [promptedToAdopt, setPromptedToAdopt] = useState('');
//     const [adoptedBefore, setAdoptedBefore] = useState('');
//     const [alternateContactFirstName, setAlternateContactFirstName] = useState('');
//     const [alternateContactLastName, setAlternateContactLastName] = useState('');
//     const [alternateContactPhone, setAlternateContactPhone] = useState('');
//     const [alternateContactEmail, setAlternateContactEmail] = useState('');
//     // ... other form fields and their respective state variables
//     const location = useLocation();
//     const [name, setName] = useState('');
  
//     useEffect(() => {
//       const path = location.pathname;
//       const nameFromPath = path.substring(path.lastIndexOf('/') + 1);
//       const decodedName = decodeURIComponent(nameFromPath);
//       setName(decodedName);
//     }, [location.pathname]);
   
  
//     // const handleSubmit = (e) => {
//     //   e.preventDefault();
//     //   // Handle form submission logic here
//     // };
//     useEffect(() => {
//       const main = new Splide('#main-slider', {
//         type: 'fade',
//         heightRatio: 0.5,
//         pagination: false,
//         arrows: false,
//         cover: true,
//       });
    
//       const thumbnails = new Splide('#thumbnail-slider', {
//         rewind: true,
//         fixedWidth: 104,
//         fixedHeight: 58,
//         isNavigation: true,
//         gap: 10,
//         focus: 'center',
//         pagination: false,
//         cover: true,
//         dragMinThreshold: {
//           mouse: 4,
//           touch: 10,
//         },
//         speed: 1000, 
//         autoplay: true,
//         interval: 1500, 
//         breakpoints: {
//           640: {
//             fixedWidth: 66,
//             fixedHeight: 38,
//           },
//         },
//       });
    
//       main.sync(thumbnails).mount();
//       thumbnails.mount();
    
//       return () => {
//         main.destroy();
//         thumbnails.destroy();
//       };
//     }, []);
  

    // const Images = [
    //   ['https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg'],
    //   ['https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_1280.jpg'],
    //   ['https://cdn.pixabay.com/photo/2019/05/27/19/08/puppy-4233378_1280.jpg'],
    //   ['https://cdn.pixabay.com/photo/2016/03/27/20/51/dogs-1284238_1280.jpg'],
    //   ['https://cdn.pixabay.com/photo/2016/11/22/23/13/black-dog-1851106_1280.jpg'],
    //   ['https://cdn.pixabay.com/photo/2021/01/30/15/14/akita-5964180_1280.jpg'],
    //   ['https://cdn.pixabay.com/photo/2016/11/22/23/13/dog-1851107_1280.jpg'],
    //   ['https://cdn.pixabay.com/photo/2021/01/21/16/17/english-cocker-spaniel-5937757_1280.jpg'],
    //   ['https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_1280.jpg'],
    //   ['https://cdn.pixabay.com/photo/2016/05/09/10/42/weimaraner-1381186_1280.jpg'],
    //   ['https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_1280.jpg'],
    //   ['https://cdn.pixabay.com/photo/2017/09/25/13/14/dog-2785077_1280.jpg'],
    // ];
  
  
    
//     const ambobomo = (e) => {
//       e.preventDefault();
    
    
//       const formData = {
//         firstName,
//         lastName,
//         address,
//         phone,
//         email,
//         birthDate,
//         status,
//         occupation,
//         socialMedia,
//         promptedToAdopt,
//         adoptedBefore,
//         alternateContactFirstName,
//         alternateContactLastName,
//         alternateContactPhone,
//         alternateContactEmail,
      
//       };
    
       
    

//       const formDataJson = JSON.stringify(formData);
    
   
//       localStorage.setItem('applicantInfo', formDataJson);
    
      
//       setFirstName('');
//       setLastName('');
//       setAddress('');
//       setPhone('');
//       setEmail('');
//       setBirthDate('');
//       setStatus('');
//       setOccupation('');
//       setSocialMedia('');
//       setPromptedToAdopt('');
//       setAdoptedBefore('');
//       setAlternateContactFirstName('');
//       setAlternateContactLastName('');
//       setAlternateContactPhone('');
//       setAlternateContactEmail('');
    
    
//       Swal.fire({
//         icon: 'success',
//         title: 'Good job!',
//         text: 'Form submitted successfully!',
//       });
//     };
    

    

    
    
    
//     return (
//       <>
//       <div className="container">
// <div className="row">
//             <div className="col-lg-6 col-md-6 col-12">
//                   <div className="container-fluid mt-5 warrior">
//           <h2 className='appss mt-5'>APPLICANT'S INFO</h2>
//         <form onSubmit={ambobomo}>
//             {/* Name */}
//                 <h4 className='nam mt-5'>Name*</h4>
//             <div className="row">
//                   <div className="col">
//                         <label htmlFor="firstName">First</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="firstName"
//                           placeholder="First"
//                           value={firstName}
//                           onChange={(e) => setFirstName(e.target.value)}
//                           required/>
//                       </div>
//                       <div className="col">
//                         <label htmlFor="lastName">Last</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="lastName"
//                           placeholder="Last"
//                           value={lastName}
//                           onChange={(e) => setLastName(e.target.value)}
//                           required
//                         />
//                       </div>
//               </div>

//                 {/* Address */}
//                 <h4 className='adds'>Address*</h4>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="address"
//                   placeholder="Address"
//                   value={address}
//                   onChange={(e) => setAddress(e.target.value)}
//                   required
//                 />
//               <div className="row mt-3">
//                       {/* Phone */}
//                   <div className="col">
//                   <h4>Phone*</h4>
//                         <input
//                         type="tel"
//                         className="form-control"
//                         id="phone"
//                         placeholder="Phone"
//                         value={phone}
//                         onChange={(e) => {
//                           const input = e.target.value;
//                           const sanitizedInput = input.replace(/\D/g, ""); // Remove non-numeric characters
//                           setPhone(sanitizedInput);
//                         }}
//                         required
//                     />
//                       </div>
                
//                       <div className="col">
//                         {/* Email */}
//                         <h4>Email*</h4>
//                             <input
//                               type="email"
//                               className="form-control"
//                               id="email"
//                               placeholder="Email"
//                               value={email}
//                               onChange={(e) => setEmail(e.target.value)}
//                               required
//                             />
//                       </div>
//               </div>
//                 {/* Birth Date */}
//                 <div className="row">
//                   <div className="col">
//                         <h4>Birth Date*</h4>
//                             <input
//                               type="date"
//                               className="form-control"
//                               id="birthDate"
//                               placeholder="Birth Date"
//                               value={birthDate}
//                               onChange={(e) => setBirthDate(e.target.value)}
//                               required
//                             />
//                     </div>
                    
//                       <div className="col">
//                             {/* Status */}
//                             <h4>Status*</h4>
//                               <div className="form-check">
//                                 <input
//                                   className="form-check-input"
//                                   type="radio"
//                                   name="status"
//                                   id="singleStatus"
//                                   value="Single"
//                                   checked={status === "Single"}
//                                   onChange={() => setStatus("Single")}
//                                   required
//                                 />
//                                 <label className="form-check-label" htmlFor="singleStatus">Single</label>
//                               </div>
//                               <div className="form-check">
//                                 <input
//                                   className="form-check-input"
//                                   type="radio"
//                                   name="status"
//                                   id="marriedStatus"
//                                   value="Married"
//                                   checked={status === "Married"}
//                                   onChange={() => setStatus("Married")}
//                                 />
//                                 <label className="form-check-label" htmlFor="marriedStatus">Married</label>
//                               </div>
//                               <div className="form-check">
//                                 <input
//                                   className="form-check-input"
//                                   type="radio"
//                                   name="status"
//                                   id="othersStatus"
//                                   value="Others"
//                                   checked={status === "Others"}
//                                   onChange={() => setStatus("Others")}
//                                 />
//                                 <label className="form-check-label" htmlFor="othersStatus">Others</label>
//                               </div>
//                       </div>
                                                
//                   </div>
              
              
              
//                             <div className="row">
//                                     <div className="col"> 
//                                             {/* Occupation */}
//                                             <label htmlFor="occupation">Occupation</label>
//                                           <input
//                                             type="text"
//                                             className="form-control"
//                                             id="occupation"
//                                             placeholder="Please type N/A if unemployed"
//                                             value={occupation}
//                                             onChange={(e) => setOccupation(e.target.value)}
//                                             required
                                    
                                            

//                                           />
//                                     </div>

//                                     <div className="col">
//                                           {/* Social Media */}
//                                           <label htmlFor="socialMedia">Social Media</label>
//                                           <input
//                                             type="text"
//                                             className="form-control"
//                                             id="socialMedia"
//                                             placeholder="Please type N/A if no social media"
//                                             value={socialMedia}
//                                             onChange={(e) => setSocialMedia(e.target.value)}
//                                             required
//                                           />
//                                     </div>
//                             </div>

                                      

//                           {/* Prompted to Adopt */}
//                           <h4>Selected Dog's Name:</h4>
//                           <input  className="form-control" type="text"value={name} disabled />
//                           <h4>What prompted you to adopt from Special Dog?*</h4>
//                           <div className="form-check">
//                             <input
//                               className="form-check-input"
//                               type="radio"
//                               name="promptedToAdopt"
//                               id="friendsPrompt"
//                               value="Friends"
//                               checked={promptedToAdopt === "Friends"}
//                               onChange={() => setPromptedToAdopt("Friends")}required
//                             />
//                             <label className="form-check-label" htmlFor="friendsPrompt">Friends</label>
//                           </div>
//                           <div className="form-check">
//                             <input
//                               className="form-check-input"
//                               type="radio"
//                               name="promptedToAdopt"
//                               id="websitePrompt"
//                               value="Website"
//                               checked={promptedToAdopt === "Website"}
//                               onChange={() => setPromptedToAdopt("Website")}
//                             />
//                             <label className="form-check-label" htmlFor="websitePrompt">Website</label>
//                           </div>
//                           <div className="form-check">
//                             <input
//                               className="form-check-input"
//                               type="radio"
//                               name="promptedToAdopt"
//                               id="socialMediaPrompt"
//                               value="Social Media"
//                               checked={promptedToAdopt === "Social Media"}
//                               onChange={() => setPromptedToAdopt("Social Media")}
//                             />
//                             <label className="form-check-label" htmlFor="socialMediaPrompt">Social Media</label>
//                           </div>
//                           <div className="form-check">
//                             <input
//                               className="form-check-input"
//                               type="radio"
//                               name="promptedToAdopt"
//                               id="otherPrompt"
//                               value="Other"
//                               checked={promptedToAdopt === "Other"}
//                               onChange={() => setPromptedToAdopt("Other")}
//                             />
//                             <label className="form-check-label" htmlFor="otherPrompt">Other</label>
//                           </div>

//                           {/* Adopted Before */}
//                           <h4>Have you adopted from Special Dog before?*</h4>
//                           <div className="form-check">
//                             <input
//                               className="form-check-input"
//                               type="radio"
//                               name="adoptedBefore"
//                               id="yesAdoptedBefore"
//                               value="Yes"
//                               checked={adoptedBefore === "Yes"}
//                               onChange={() => setAdoptedBefore("Yes")}
//                               required
//                             />
//                             <label className="form-check-label" htmlFor="yesAdoptedBefore">Yes</label>
//                           </div>
//                           <div className="form-check">
//                             <input
//                               className="form-check-input"
//                               type="radio"
//                               name="adoptedBefore"
//                               id="noAdoptedBefore"
//                               value="No"
//                               checked={adoptedBefore === "No"}
//                               onChange={() => setAdoptedBefore("No")}
//                             />
//                             <label className="form-check-label" htmlFor="noAdoptedBefore">No</label>
//                           </div>
                          
//                           {/* Alternate Contact */}
//                           <h4>Alternate Contact*</h4>
//                           <div className="row">
//                             <div className="col">
//                               <label htmlFor="alternateContactFirstName">First name</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 id="alternateContactFirstName"
//                                 placeholder="First"
//                                 value={alternateContactFirstName}
//                                 onChange={(e) => setAlternateContactFirstName(e.target.value)}
//                                 required
//                               />
//                             </div>
//                             <div className="col">
//                               <label htmlFor="alternateContactLastName">Last name</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 id="alternateContactLastName"
//                                 placeholder="Last"
//                                 value={alternateContactLastName}
//                                 onChange={(e) => setAlternateContactLastName(e.target.value)}
//                                 required
//                               />
                              
//                             </div>


//                             <div className="row">
//                               <div className="col">
//                               <h4>Phone*</h4>
//                               <input
//                               type="tel"
//                               className="form-control"
//                               id="alternateContactPhone"
//                               placeholder="Phone"
//                               value={alternateContactPhone}
//                               onChange={(e) => {
//                                 const input = e.target.value;
//                                 const sanitizedInput = input.replace(/\D/g, ""); // Remove non-numeric characters
//                                 setAlternateContactPhone(sanitizedInput);
//                               }}
//                               required
//                             />
//                                   </div>
//                               <div className="col">
//                                 {/* Alternate Contact Email */}
//                           <h4>Email*</h4>
//                           <input
//                             type="email"
//                             className="form-control"
//                             id="alternateContactEmail"
//                             placeholder="Email"
//                             value={alternateContactEmail}
//                             onChange={(e) => setAlternateContactEmail(e.target.value)}
//                             required
//                           />
//                             </div>
//                           </div>
                          
                        
//                           <div className='buto'>
//                             <button type="submit" className="btn btn-warning mt-3 ">Submit</button>
//                               </div>
//                           </div>
//                   {/* Alternate Contact Phone */}
//                 </form>
//             </div>
//       </div>
//           {/* splide */}
//               <div className="col-lg-6 col-md-6 col-12 lady">
//                   <div className="container">
//                     <div className="splide my-5" id="main-slider">
//                       <div className="splide__track">
//                         <ul className="splide__list">
//                           {Images.map((Images, index) => (
//                             <li className="splide__slide" key={index}>
//                               <img
//                                 src={Images[0]}
//                                 className="img-fluid"
//                                 alt={`Slide ${index + 1}`}
//                               />
//                               <div className="carousel-caption d-none d-md-block">
//                               </div>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>

//                     <div className="splide my-5" id="thumbnail-slider">
//                       <div className="splide__track">
//                         <ul className="splide__list">
//                           {Images.map((Images, index) => (
//                             <li className="splide__slide hvr-grow-shadow" key={index}>
//                               <img
//                                 src={Images[0]}
//                                 className="img-fluid"
//                                 alt={`Thumbnail ${index + 1}`}
//                               />
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
                                      
//                                       <div class="container mt-5">
// <h2>Terms and Conditions - Special Dog Adoption</h2>
// <p>These terms and conditions ("Agreement") govern your use of the special dog adoption services provided by [Your Company Name] ("Company"). By accessing or using the special dog adoption services, you agree to be bound by these terms and conditions. If you do not agree with any part of this Agreement, you must not use the services.</p>

// <h4>Special Dog Adoption Process</h4>
// <ol>
//     <li>
//         <p>The Company provides a platform for users to connect with dog owners or shelters for the purpose of adopting special dogs.</p>
//     </li>
//     <li>
//         <p>Adoption decisions are made solely by the dog owners or shelters, and the Company does not guarantee the availability or suitability of any special dog listed for adoption.</p>
//     </li>
//     <li>
//         <p>The adoption process, including screening, home visits, and any associated fees, is the responsibility of the dog owner or shelter, and the Company is not liable for any disputes or issues arising from the adoption process.</p>
//     </li>
// </ol>

// <h4>User Obligations</h4>
// <ol>
//     <li>
//         <p>You agree to provide accurate and up-to-date information when using the special dog adoption services.</p>
//     </li>
//     <li>
//         <p>You will use the special dog adoption services solely for lawful purposes and in compliance with this Agreement.</p>
//     </li>
//     <li>
//         <p>You will not engage in any activity that may interfere with the proper functioning of the special dog adoption services or compromise its security.</p>
//     </li>
// </ol>

// <h4>Special Dog Health and Condition</h4>
// <ol>
//     <li>
//         <p>The Company strives to provide accurate information about the special dogs available for adoption. However, the Company cannot guarantee the health, behavior, or condition of any special dog.</p>
//     </li>
//     <li>
//         <p>It is your responsibility to thoroughly evaluate and consider the suitability of a special dog for adoption, including consulting with a veterinarian if necessary, before making any adoption decisions.</p>
//     </li>
// </ol>
// </div>

//   </div>
// </div>
// </div>
  


    
                            


//         </>

//     );
//   };

//   export default ApplicantsInfo;



import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const ApplicantsInfo = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [occupation, setOccupation] = useState('');
  const [monthlyincome, setMonthlyIncome] = useState('');
  const [doglover, setDogLover] = useState('');
  const [dogname, setDogName] = useState('');
  const [whatpromptedyoutoadoptadog, setPromptedToAdopt] = useState('');
  const [haveyouadoptfromherebefore, setAdoptedBefore] = useState('');
  const [alternatefirstname, setAlternateFirstName] = useState('');
  const [alternatelastname, setAlternateLastName] = useState('');
  const [alternatephonenumber, setAlternatePhoneNumber] = useState('');
  const [alternateemail, setAlternateEmail] = useState('');
  
  const location = useLocation();
  const [name, setName] = useState('');
  
  useEffect(() => {
    const path = location.pathname;
    const nameFromPath = path.substring(path.lastIndexOf('/') + 1);
    const decodedName = decodeURIComponent(nameFromPath);
    setName(decodedName);
  }, [location.pathname]);
  
  const addApplicant = (newApplicant) => {
    const token = 'b976feb53f655ad1896305f0bdb528a8f0c009d7d87e049174383ed3efb32f1d';
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };

    axios
      .post('https://specialdog.online/api/applicants', newApplicant, config)
      .then((response) => {
        // Handle the response, e.g., show a success message
        Swal.fire({
          icon: 'success',
          title: 'Good job!',
          text: 'Form submitted successfully!',
        });

        // Clear the form fields
        setFirstName('');
        setLastName('');
        setStreet('');
        setCity('');
        setProvince('');
        setZipcode('');
        setPhonenumber('');
        setEmail('');
        setStatus('');
        setOccupation('');
        setMonthlyIncome('');
        setDogLover('');
        setDogName('');
        setPromptedToAdopt('');
        setAdoptedBefore('');
        setAlternateFirstName('');
        setAlternateLastName('');
        setAlternatePhoneNumber('');
        setAlternateEmail('');
      })
      .catch((error) => {
        // Handle the error, e.g., show an error message
        console.error('Kindly check the input', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstname: firstName,
      lastname: lastName,
      street: street,
      city: city,
      province: province,
      zipcode: zipcode,
      phonenumber: phonenumber,
      email: email,
      status: status,
      occupation: occupation,
      monthlyincome: monthlyincome,
      doglover: doglover,
      dogname: dogname,
      whatpromptedyoutoadoptadog: whatpromptedyoutoadoptadog,
      haveyouadoptfromherebefore: haveyouadoptfromherebefore,
      alternatefirstname: alternatefirstname,
      alternatelastname: alternatelastname,
      alternatephonenumber: alternatephonenumber,
      alternateemail: alternateemail,
    };
    addApplicant(formData);
  };

  useEffect(() => {
    const main = new Splide('#main-slider', {
      type: 'fade',
      heightRatio: 0.5,
      pagination: false,
      arrows: false,
      cover: true,
    });

    const thumbnails = new Splide('#thumbnail-slider', {
      rewind: true,
      fixedWidth: 104,
      fixedHeight: 58,
      isNavigation: true,
      gap: 10,
      focus: 'center',
      pagination: false,
      cover: true,
      dragMinThreshold: {
        mouse: 4,
        touch: 10,
      },
      speed:2000,
      autoplay: true,
      interval: 1500,
      breakpoints: {
        640: {
          fixedWidth: 66,
          fixedHeight: 38,
        },
      },
    });

    main.sync(thumbnails).mount();
    thumbnails.mount();

    return () => {
      main.destroy();
      thumbnails.destroy();
    };
  }, []);

  const Images = [
    ['https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg'],
    ['https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_1280.jpg'],
    ['https://cdn.pixabay.com/photo/2019/05/27/19/08/puppy-4233378_1280.jpg'],
    ['https://cdn.pixabay.com/photo/2016/03/27/20/51/dogs-1284238_1280.jpg'],
    ['https://cdn.pixabay.com/photo/2016/11/22/23/13/black-dog-1851106_1280.jpg'],
    ['https://cdn.pixabay.com/photo/2021/01/30/15/14/akita-5964180_1280.jpg'],
    ['https://cdn.pixabay.com/photo/2016/11/22/23/13/dog-1851107_1280.jpg'],
    ['https://cdn.pixabay.com/photo/2021/01/21/16/17/english-cocker-spaniel-5937757_1280.jpg'],
    ['https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_1280.jpg'],
    ['https://cdn.pixabay.com/photo/2016/05/09/10/42/weimaraner-1381186_1280.jpg'],
    ['https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_1280.jpg'],
    ['https://cdn.pixabay.com/photo/2017/09/25/13/14/dog-2785077_1280.jpg'],
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="container-fluid mt-5 warrior">
              <h2 className="appss mt-5">APPLICANT'S INFO</h2>
              <form onSubmit={handleSubmit}>
                <h4 className="nam mt-5">Name*</h4>
                <div className="row">
                  <div className="col">
                    <label htmlFor="firstName">First</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="First"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="lastName">Last</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Last"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col">
               
                <div className="row">
                <h4 className="adds">Address*</h4>
                  <div className="col">
                    <h4>
                      <label htmlFor="street">Street*</label>
                    </h4>
                    <input
                      type="text"
                      className="form-control"
                      id="street"
                      placeholder="Street"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col">
                    <h4>
                      <label htmlFor="city">City*</label>
                    </h4>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      placeholder="City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h4>
                      <label htmlFor="province">Province*</label>
                    </h4>
                    <input
                      type="text"
                      className="form-control"
                      id="province"
                      placeholder="Province"
                      value={province}
                      onChange={(e) => setProvince(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col">
                    <h4>
                      <label htmlFor="zipcode">Zipcode*</label>
                    </h4>
                    <input
                      type="text"
                      className="form-control"
                      id="zipcode"
                      placeholder="Zip Code"
                      value={zipcode}
                      onChange={(e) => {
                        const input = e.target.value;
                        const sanitizedInput = input.replace(/\D/g, ''); // Remove non-numeric characters
                        setZipcode(sanitizedInput);
                      }}
                    />
                  </div>
                </div>
                </div>
               

                <div className="row">
                  <div className="col">
                    <h4>Phone*</h4>
                    <input
                      type="tel"
                      className="form-control"
                      id="phonenumber"
                      placeholder="Phone"
                      value={phonenumber}
                      onChange={(e) => {
                        const input = e.target.value;
                        const sanitizedInput = input.replace(/\D/g, ''); // Remove non-numeric characters
                        setPhonenumber(sanitizedInput);
                      }}
                      required
                    />
                  </div>

                  <div className="col">
                    <h4>Email*</h4>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <h4>Status*</h4>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="status"
                        id="singleStatus"
                        value="single"
                        checked={status === 'single'}
                        onChange={() => setStatus('single')}
                        required
                      />
                      <label className="form-check-label" htmlFor="singleStatus">
                        Single
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="status"
                        id="marriedStatus"
                        value="married"
                        checked={status === 'married'}
                        onChange={() => setStatus('married')}
                      />
                      <label className="form-check-label" htmlFor="marriedStatus">
                        Married
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="status"
                        id="othersStatus"
                        value="others"
                        checked={status === 'others'}
                        onChange={() => setStatus('others')}
                      />
                      <label className="form-check-label" htmlFor="othersStatus">
                        Others
                      </label>
                    </div>
                  </div>

                  <div className="col">
                    <h4>
                      <label htmlFor="occupation">Occupation*</label>
                    </h4>
                    <input
                      type="text"
                      className="form-control"
                      id="occupation"
                      placeholder="Please type N/A if unemployed"
                      value={occupation}
                      onChange={(e) => setOccupation(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <h4>
                      <label htmlFor="monthlyincome">Monthly Income</label>
                    </h4>
                    <input
                      type="number"
                      className="form-control"
                      id="monthlyincome"
                      placeholder="Monthly Income"
                      value={monthlyincome}
                      onChange={(e) => setMonthlyIncome(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col">
                    <h4>Are you a dog lover?*</h4>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="doglover"
                        id="yesDogLover"
                        value="yes"
                        checked={doglover === 'yes'}
                        onChange={() => setDogLover('yes')}
                        required
                      />
                      <label className="form-check-label" htmlFor="yesDogLover">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="doglover"
                        id="noDogLover"
                        value="no"
                        checked={doglover === 'no'}
                        onChange={() => setDogLover('no')}
                      />
                      <label className="form-check-label" htmlFor="noDogLover">
                        No
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <h4>
                      <label htmlFor="dogname">Dog's Name</label>
                    </h4>
                    <input
                      type="text"
                      className="form-control"
                      id="dogname"
                      placeholder={name}
                      value={dogname}
                      onChange={(e) => setDogName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col">
                    <h4>Have you adopted from here before?*</h4>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="haveyouadoptfromherebefore"
                        id="yesAdoptedBefore"
                        value="yes"
                        checked={haveyouadoptfromherebefore === 'yes'}
                        onChange={() => setAdoptedBefore('yes')}
                        required
                      />
                      <label className="form-check-label" htmlFor="yesAdoptedBefore">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="haveyouadoptfromherebefore"
                        id="noAdoptedBefore"
                        value="no"
                        checked={haveyouadoptfromherebefore === 'no'}
                        onChange={() => setAdoptedBefore('no')}
                      />
                      <label className="form-check-label" htmlFor="noAdoptedBefore">
                        No
                      </label>
                    </div>
                  </div>
                </div>
                
               
                <div className="row">
                  <div className="col">
                    <h4>
                      <label htmlFor="whatpromptedyoutoadoptadog">Reason For Adopting A Dog*</label>
                    </h4>
                    <input
                      type="text"
                      className="form-control"
                      id="whatpromptedyoutoadoptadog"
                      placeholder="Reason for adopting"
                      value={whatpromptedyoutoadoptadog}
                      onChange={(e) => setPromptedToAdopt(e.target.value)}
                    />
                </div>
                </div>
                

                <h4 className="amt">
                  If there is an alternate contact person, please provide their details below:
                </h4>
                <div className="row">
                  <div className="col">
                    <h4>
                      <label htmlFor="alternatefirstname">First Name</label>
                    </h4>
                    <input
                      type="text"
                      className="form-control"
                      id="alternatefirstname"
                      placeholder="Alternate First Name"
                      value={alternatefirstname}
                      onChange={(e) => setAlternateFirstName(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <h4>
                      <label htmlFor="alternatelastname">Last Name</label>
                    </h4>
                    <input
                      type="text"
                      className="form-control"
                      id="alternatelastname"
                      placeholder="Alternate Last Name"
                      value={alternatelastname}
                      onChange={(e) => setAlternateLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h4>
                      <label htmlFor="alternatephonenumber">Phone Number</label>
                    </h4>
                    <input
                      type="tel"
                      className="form-control"
                      id="alternatephonenumber"
                      placeholder="Alternate Phone Number"
                      value={alternatephonenumber}
                      onChange={(e) => {
                        const input = e.target.value;
                        const sanitizedInput = input.replace(/\D/g, ''); // Remove non-numeric characters
                        setAlternatePhoneNumber(sanitizedInput);
                      }}
                    />
                  </div>

                  <div className="col">
                    <h4>
                      <label htmlFor="alternateemail">Email</label>
                    </h4>
                    <input
                      type="email"
                      className="form-control"
                      id="alternateemail"
                      placeholder="Alternate Email"
                      value={alternateemail}
                      onChange={(e) => setAlternateEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <button type="submit" className="btn btn-warning mt-3">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12">
            <h2 className="thankyou mt-5">SOME OF OUR LOVELY FRIENDS</h2>
            <div id="main-slider" className="splide">
              <div className="splide__track">
                <ul className="splide__list">
                  {Images.map((image, index) => (
                    <li className="splide__slide" key={index}>
                      <img src={image} alt="" className="slide" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div id="thumbnail-slider" className="splide mt-5">
              <div className="splide__track">
                <ul className="splide__list">
                  {Images.map((image, index) => (
                    <li className="splide__slide" key={index}>
                      <img src={image} alt="" className="slide-thumbnail" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="container mt-5">
<h2>Terms and Conditions - Special Dog Adoption</h2>
<p>These terms and conditions ("Agreement") govern your use of the special dog adoption services provided by [Your Company Name] ("Company"). By accessing or using the special dog adoption services, you agree to be bound by these terms and conditions. If you do not agree with any part of this Agreement, you must not use the services.</p>

<h4>Special Dog Adoption Process</h4>
<ol>
    <li>
        <p>The Company provides a platform for users to connect with dog owners or shelters for the purpose of adopting special dogs.</p>
    </li>
    <li>
        <p>Adoption decisions are made solely by the dog owners or shelters, and the Company does not guarantee the availability or suitability of any special dog listed for adoption.</p>
    </li>
    <li>
        <p>The adoption process, including screening, home visits, and any associated fees, is the responsibility of the dog owner or shelter, and the Company is not liable for any disputes or issues arising from the adoption process.</p>
    </li>
</ol>

<h4>User Obligations</h4>
<ol>
    <li>
        <p>You agree to provide accurate and up-to-date information when using the special dog adoption services.</p>
    </li>
    <li>
        <p>You will use the special dog adoption services solely for lawful purposes and in compliance with this Agreement.</p>
    </li>
    <li>
        <p>You will not engage in any activity that may interfere with the proper functioning of the special dog adoption services or compromise its security.</p>
    </li>
</ol>

<h4>Special Dog Health and Condition</h4>
<ol>
    <li>
        <p>The Company strives to provide accurate information about the special dogs available for adoption. However, the Company cannot guarantee the health, behavior, or condition of any special dog.</p>
    </li>
    <li>
        <p>It is your responsibility to thoroughly evaluate and consider the suitability of a special dog for adoption, including consulting with a veterinarian if necessary, before making any adoption decisions.</p>
    </li>
</ol>
</div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicantsInfo;

