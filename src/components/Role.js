import React, { Fragment } from "react";

// Define an array of applicant roles objects
const applicantRoles = [
  {
    title: "Electing Representatives",
    description:
      "When electing representatives, it is crucial to consider key factors to ensure they can effectively serve your interests and bring positive change to your community.",
    icon: "fal fa-user-circle",
  },
  {
    title: "Opening and Maintaining Bank Accounts",
    description:
      "Understand the reasons an account may be closed, such as inactivity or violation of bank policies, and follow best practices to prevent account closure.",
    icon: "fal fa-university",
  },
  {
    title: "Timely Payment of Dues",
    description:
      "Prioritize timely payments to take control of your finances and avoid potential penalties or service interruptions.",
    icon: "fal fa-hand-holding-usd",
  },
  {
    title: "Respecting Majority Favor in Design Decisions",
    description:
      "Embrace the principle of respecting the majority favor in design decisions to achieve more successful outcomes and greater user satisfaction.",
    icon: "fal fa-paint-brush",
  },
  {
    title: "Peaceful Dispute Resolution",
    description:
      "Adopt peaceful dispute resolution methods to promote understanding and cooperation, thereby strengthening relationships and building trust within the community.",
    icon: "fal fa-handshake",
  },
  {
    title: "Terminating Contractual Agreements with Conflicting Parties",
    description:
      "Focus on cooperation and understanding when terminating contractual agreements with individuals, aiming to mitigate conflicts and part ways respectfully, preserving relationships and reputations in the process.",
    icon: "fal fa-file-contract",
  },
  {
    title: "Assigning an Accounting Professional",
    description:
      "Select a trustworthy and collaborative accounting professional to ensure financial accuracy, which builds a foundation for long-term success and strong business relationships.",
    icon: "fal fa-calculator",
  },
];

function Role() {
  return (
    <Fragment>
      <section className="space-top" id="role-sec">
        <div
          className="container"
          data-pos-space="#about-sec"
          data-sec-space="margin-bottom"
          data-margin-bottom="100px"
        >
          <div className="title-area text-center">
            <div className="shadow-title">APPLICANTS</div>
            <span className="sub-title6 justify-content-center">
              <span className="shape left">
                <span className="dots" />
              </span>{" "}
              ROLE{" "}
              <span className="shape right">
                <span className="dots" />
              </span>
            </span>
            <h2 className="sec-title">Applicant Responsibilities</h2>
          </div>
          <div
            className="row slider-shadow th-carousel"
            data-slide-show={4}
            data-lg-slide-show={3}
            data-md-slide-show={2}
            data-xs-slide-show={1}
            data-arrows="true"
          >
            {/* Map through the array of applicant roles */}
            {applicantRoles.map((role, index) => (
              <div
                key={index}
                className="col-md-6 col-lg-4 col-xl-3 flip-icon-container"
              >
                <div className="service-box2">
                  <div className="service-box2_content">
                    <div className="service-box2_icon">
                      <i
                        className={`${role.icon} fa-lg icon`}
                        style={{ fontSize: "3rem" }}
                      />
                    </div>
                    <h3 className="service-box2_title">{role.title}</h3>
                    <p className="service-box2_text">{role.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Role;
