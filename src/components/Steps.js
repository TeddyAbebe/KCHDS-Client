import React, { Fragment } from "react";

const steps = [
  {
    icon: "fal fa-file-lines",
    title: "Project Clarification",
    text: "Provide clear and detailed information about the project.",
  },
  {
    icon: "fal fa-user-plus",
    title: "Online Registration",
    text: "Register home applicants through an online system.",
  },
  {
    icon: "fal fa-tasks",
    title: "Project Organization",
    text: "The project team is responsible for organizing all project-related activities.",
  },
  {
    icon: "fal fa-users",
    title: "Meetings",
    text: "Selected participants will be called to attend meetings to discuss project matters.",
  },
  {
    icon: "fal fa-handshake",
    title: "Representative Election",
    text: "Home applicants will elect their representatives and enter into a contractual agreement.",
  },
  {
    icon: "fal fa-map-marker-alt",
    title: "Land Selection",
    text: "Select suitable land for the construction project.",
  },
  {
    icon: "fal fa-piggy-bank",
    title: "Funds Deposit",
    text: "Home applicants must deposit land purchasing money into designated closed bank accounts.",
  },
  {
    icon: "fal fa-comments",
    title: "Design Consultation",
    text: "A second meeting will be held to address and finalize design consultation issues.",
  },
  {
    icon: "fal fa-file-invoice-dollar",
    title: "Cost Presentation",
    text: "Present various construction expenditure options to the home applicants.",
  },
  {
    icon: "fal fa-industry",
    title: "Payment for Prefabricated Materials (China)",
    text: "If prefabricated materials are sourced from China, the payment will be made to the Chinese company.",
  },
  {
    icon: "fal fa-gavel",
    title: "Local Prefabricated Materials",
    text: "If prefabricated materials are sourced locally, a purchasing bid will be notified and the bid winners will be publicly disclosed.",
  },
  {
    icon: "fal fa-credit-card",
    title: "Service Payment (Advance)",
    text: "50% of the service payment will be collected after the initial deposit in the bank.",
  },
  {
    icon: "fal fa-hand-holding-usd",
    title: "Service Payment (Completion)",
    text: "The remaining 50% payment will be collected upon the completion of the buildings at the time of inauguration.",
  },
  {
    icon: "fal fa-file-contract",
    title: "Contract Termination",
    text: "The contractual agreement can be terminated at any time, and home applicant registries can be revised or adjusted as necessary.",
  },
  {
    icon: "fal fa-tasks",
    title: "Activity Control",
    text: "All activities will be controlled to maximize efficiency and interest rates for bank deposits, administered according to the IPI Project guidelines.",
  },
  {
    icon: "fal fa-vote-yea",
    title: "Majority Vote",
    text: "Any decisions requiring a vote will be determined by majority rule.",
  },
];

function Steps() {
  return (
    <Fragment>
      <section
        className="space process-sec"
        id="steps-sec"
        data-overlay="title"
        data-opacity={9}
        data-bg-src="assets/img/update1/bg/process_bg_1.jpg"
      >
        <div className="container mb-n2">
          <div className="title-area text-center">
            <span className="sub-title6 text-white justify-content-center">
              <span className="shape left">
                <span className="dots" />
              </span>{" "}
              HOW WE WORK{" "}
              <span className="shape right">
                <span className="dots" />
              </span>
            </span>
            <h2 className="sec-title text-white">STEPS WE FOLLOW</h2>
          </div>
          <div
            id="steps-container"
            className="row gy-40 justify-content-between overflow-auto flex-nowrap"
          >
            {steps.map((step, index) => (
              <div
                className="col-sm-6 col-lg-auto process-card2-wrap"
                key={index}
              >
                <div className="process-card2">
                  <div className="process-card2_icon">
                    <i className={step.icon} />
                  </div>
                  <h2 className="process-card2_title">{step.title}</h2>
                  <p className="process-card2_text">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="flex justify-center md:hidden">
        <button className="text-white bg-gray-800 px-10 py-2 rounded-full">
          <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
          <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        </button>
      </div>
    </Fragment>
  );
}

export default Steps;
