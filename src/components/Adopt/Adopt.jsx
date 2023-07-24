import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Adopt = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const token = 'b976feb53f655ad1896305f0bdb528a8f0c009d7d87e049174383ed3efb32f1d';
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };

    const fetchDogs = async () => {
      try {
        const response = await axios.get('https://specialdog.online/api/dogsinfo', config);
        setDogs(response.data);
        // console.log(response.data);
      } catch (error) {
        console.log('Error fetching dogs:', error.response);
      }
    };

    fetchDogs();
  }, []);
 
    // axios
    // .get('https://specialdog.online/api/breeds')
    // .then((response) => {
    //     setBreeds(response.data);
    // })
    // .catch((error) => console.error('Error fetching breeds', error));




      return (
        <>

<div className="container my-5">
  <section>
    <div className="row">
      <div className="col-md-6">
        <div className="Adopt">
          <h2 className="eto">
            <span style={{ color: 'rgba(252,176,66,255)' }}>Adopt</span> a dog
          </h2>
          <p>
            Our adoptable cats and dogs are all spayed/neutered (kapon) and vaccinated. Because they lived a
            difficult life before being rescued, we need to be sure that they get adopted by loving humans and
            won't be subjected to further cruelty or neglect.
          </p>
        </div>
        <div className="Apply">
          <h3 className="eto1">
            Here's how to <span style={{ color: 'rgba(252,176,66,255)' }}>apply:</span>
          </h3>
          <p>Submit the adoption application form</p>
          <p>Attend the Zoom interview</p>
          <p>Meet our shelter animals in person</p>
          <p>Visit your chosen pet to confirm your choice</p>
          <p>Wait for vet clearance and schedule pick up</p>
          <p>Take your pet home!</p>
          <a href="#adopt"><button className='btn btn-warning'>Adopt Now!</button></a>
        </div>
      </div>

    
      <div className="col-md-6 d-none d-md-block">
        <div className="row mt-5">
          <div className="col-sm-7 mb-3">
            <div className="imgBox">
              <img className='imgs' src="Images/AdoptImages/d16.jpg" alt="" />
            </div>
          </div>
          <div className="col-sm-5 mb-3">
            <div className="imgBox">
              <img className='imgs' src="Images/AdoptImages/d15.jpg" alt="" />
            </div>
          </div>
          
          <div className="col-sm-2">
            <div className="imgBox">
              <img className='imgs' src="Images/AdoptImages/d12.jpg" alt="" />
            </div>
          </div>
          <div className="col-sm-2">
            <div className="imgBox">
              <img className='imgs' src="Images/AdoptImages/d11.jpg" alt="" />
            </div>
          </div>
          <div className="col-sm-2">
            <div className="imgBox">
              <img className='imgs' src="Images/AdoptImages/d10.jpg" alt="" />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="imgBox">
              <img className='imgs' src="Images/AdoptImages/d9.jpg" alt="" />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="imgBox">
              <img className='imgs' src="Images/AdoptImages/d8.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</div>

<div id="adopt" className="container">
        <section>
          <div className="row">
            <div className="col-12">
              <div className="row">
                {dogs.map((dog, index) => (
                  <div className="col-md-3 col-sm-6 mb-2" key={index}>
                    <div className="card cardAdopt">
                      <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img src={dog.imageUrl} className="img-fluid hvr-grow" alt="Dog" style={{ width: "150px", height: "150px" }} />

                        <a href="#!">
                          <div className="" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                        </a>
                        <h5 className="card-title">{dog.name?.toString()}</h5>
                      </div>
                      <div className="card-body">
                        <h6 className="card-text" style={{fontWeight:'bold'}}>Breed : {dog.breed?.name}</h6>
                        <h6 className="card-text" style={{fontWeight:'bold'}}>Sex : {dog.sex}</h6>
                        <h6 className="card-text" style={{fontWeight:'bold'}}>Age : {dog.age}</h6>
                        <p className="card-text">{dog.description}</p>
                        <div className="AdoptLoop">
                          <Link
                            to={`/appinfo/${dog.name?.toString()}`}
                            className="btn btn-warning AdoptLoopBtn"
                            // onClick={() => setSelectedDogName(dog.name?.toString())}
                          >
                            Adopt Me
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

<div className="container">
  <h3 className='py-5 faq d-flex justify-content-center'>Adoption &nbsp;<span style={{ color: 'rgba(252,176,66,255)' }}>FAQ</span></h3>
  <section>
    <div className="row">
      <div className="col-md-6">
        <strong>How can I adopt from Special Dog?</strong>
        <p>
          Applicants go through a screening process to ensure that our rescued animals go to loving homes.
          The process includes an online interview via Zoom and at least two (2) separate shelter visits to meet and get to know your chosen pet.
          Apply <a href="/adoption-application">here</a>.
        </p>
        <hr />
        <strong>Can you adopt my dog?</strong>
        <p>
          Special Dog does NOT adopt owned pets. We already have 300+ shelter animals rescued from cruelty and neglect that are waiting to be adopted.
          If you need to give up your pet for some reason, please consider other options or apply for rehoming assistance.
        </p>
        <hr />
        <strong>Can my adoption application get denied?</strong>
        <p>
          Yes. Some reasons for denied applications include: Not being able to keep their pet indoors, incompatibility with the household, plus other circumstances that may be damaging to the health, safety, and happiness of our shelter animals.
        </p>
      </div>
      <div className="col-md-6">
        <strong>I live in the province/abroad. Can I still adopt?</strong>
        <p>
          Yes, but special arrangements need to be made for the meet-and-greet process.
          You may need to provide more information and documentation.
        </p>
        <hr />
        <strong>How long does the adoption process take?</strong>
        <p>
          The entire adoption process may take up to 2-3 weeks.
          The process includes application review, interview, meet and greet, vet clearance, and scheduling for pick-up.
        </p>
        <hr />
        <strong>Can I sponsor a dog without adopting?</strong>
        <p>
          Yes! You can be a sponsor parent to one of our shelter animals. Visit our shelter and meet your sponsored pet!
        </p>
      </div>
    </div>
  </section>
</div>





          
          
            </>
    
    
    );
  };

  export default Adopt;
