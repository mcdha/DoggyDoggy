  import React, { useEffect, useState } from 'react';
  import { Link } from 'react-router-dom';



    const Adopt = () => {
      
      const [selectedDogName, setSelectedDogName] = useState('');

      let dognames = [
        ['Emperador Light', 'If you are the type of dog owner that wants a 1-yr-old female Aspin that stays quiet at home, try to get to know Emperador Light.', 'Images/AdoptImages/d1.jpg'],
        ['Emperador Double Light', 'He is a smart, trainable 1-yr-old Aspin who is still a bit skittish in unfamiliar surroundings. But just give him some time and love, and Emperador Double Light will show you his true.', 'Images/AdoptImages/d2.jpg'],
        ['Fundador Light', 'Fundador Light is a highly energetic dog that needs time to bond with humans, being a 8-yr-old rescue that has been through rough times.', 'Images/AdoptImages/d3.jpg'],
        ['Fundador Double Light', 'A 3-yr-old Aspin rescued from nearby Fatima College, Fundador Double Light is very friendly and social. She loves to wag her tail and she warms up to people easily.', 'Images/AdoptImages/d4.jpg'],
        ['Delro', 'DeFriendly dog alert! Delro desperately needs a loving forever-human with a deep need for companionship. Delro smiles a lot, as she is a happy and cheerful pet.', 'Images/AdoptImages/d5.jpg'],
        ['Banoi', 'When Banoi shows you her happy face, you will surely be won over with delight. A 5-yr-old Aspin rescued in Marikina City during typhoon Ulysees.', 'Images/AdoptImages/d6.jpg'],
        ['Whitey', 'Whitey may have looked like a healthy and happy stray dog, but in truth, he was in great pain.', 'Images/AdoptImages/d7.jpg'],
        ['Walter White', 'Walter White was not yet born when he was rescued. Thats right! His momma, Menchie, was rescued inside UP Campus when she was pregnant.', 'Images/AdoptImages/d8.jpg'],
        ['Usagi', 'Usagi belongs to a litter of 5 puppies called the “Sailor Moon pups.” They were found wandering near the Manila Bay area during the lockdown in 2021.', 'Images/AdoptImages/d9.jpg'],
        ['Haley', 'When Haley, a hit and run victim, was found underneath a parked car, our volunteer rescuers were unsure if she would make it. After being treated for her injuries, our shelter vet was unsure if she would walk again.', 'Images/AdoptImages/d10.jpg'],
        ['Tina', 'There`s only one thing keeping this young, beautiful girl from being adopted, and that is her shy and skittish nature.', 'Images/AdoptImages/d11.jpg'],
        ['Tali', 'If you look closely at her “before” photo, youll see a deep line around her neck that looks like a collar. That is in fact a deep laceration caused by a rope tightly wound around her neck.', 'Images/AdoptImages/d12.jpg'],
        ['Santelmo', 'Santelmo was rescued with her mom, Miyuki, and 4 other newborn siblings in Sampaloc, Manila. Now, Santelmo is a good-looking boy, much larger than the average Aspin.', 'Images/AdoptImages/d13.jpg'],
        ['Mamoru', 'Mamoru belongs to a litter of 5 puppies called the “Sailor Moon pups.” They were found wandering near the Manila Bay area during the lockdown in 2021.', 'Images/AdoptImages/d14.jpg'],
        ['Hawthorn', 'Hawthorn was rescued in Project 8, Quezon City, hiding in someones garden. He was skittish and difficult to handle.', 'Images/AdoptImages/d15.jpg'],
        ['Spider', 'Foggy is the last of his litter: nicknamed the Bad Weather Boys, after the inclement conditions under which they were rescued in Loyola Memorial Park.', 'Images/AdoptImages/d16.jpg'],
    ];

    const [randomNumber1, setRandomNumber1] = useState(null);
    const [randomNumber2, setRandomNumber2] = useState(null);
  

    const randomizer = () => {
      setRandomNumber1(Math.floor(Math.random() * dognames.length));
      setRandomNumber2(Math.floor(Math.random() * dognames.length));
      
    };

    useEffect(() => {
      if (randomNumber1 === null && randomNumber2 === null) {
        randomizer();
      } else if (randomNumber1 === randomNumber2) {
        setRandomNumber2(prevNumber => (prevNumber + 1) % dognames.length);
      }
    }, [randomNumber1, randomNumber2]);

      return (
        <>

<div className="container my-5">
  <section>
    <div className="row">
      <div className="col-md-6">
        <div className="Adopt">
          <h2 className="eto">
            <span style={{ color: 'rgba(252,176,66,255)' }}>Adopt</span> a shelter dog
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

      <div className="col-md-6">
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
          {/* <div className="col-sm-3 mb-3">
            <div className="imgBox">
              <img className='imgs' src="Images/AdoptImages/d14.jpg" alt="" />
            </div>
          </div> */}
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

<div id='adopt' className="container">
  <section>
    <div className="row">
      
      <div className="col-12">
        <div className="row">
          {[...Array(4)].map((_, index1) => {
            return (
              <div className="row" key={index1}>
                {[...Array(4)].map((_, index2) => {
                  const name = index1 === 0 ? index2 : index1 === 1 ? 5 + index2 : index1 === 2 ? 9 + index2 : 12 + index2;

                  return (
                    <div className="col-md-3 col-sm-6" key={index2}>
                      <div className="card cardAdopt">
                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                          <img src={dognames[name][2]} className="img-fluid hvr-grow" alt="Dog" />
                          <a href="#!">
                            <div className="" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                          </a>
                          <h5 className="card-title">{dognames[name][0]}</h5>
                        </div>
                        <div className="card-body">
                          <p className="card-text">{dognames[name][1]}</p>
                          <div className='AdoptLoop'>
                            <Link to={`/appinfo/${dognames[name][0]}`} className="btn btn-warning AdoptLoopBtn" onClick={() => setSelectedDogName(dognames[name][0])}>
                              Adopt Me
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
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
