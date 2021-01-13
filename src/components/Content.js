const Content = () => {
  return(
    <div className="container my-3">
      <div id="about" className="about-me">
        <h3 className="text-decoration-underline text-center mb-4">&nbsp;&nbsp;&nbsp;&nbsp;About me&nbsp;&nbsp;&nbsp;&nbsp;</h3>
        <div className="row">
          <div className="col-md-6 col-sm-12 col-xs-12">
            <p> I have 2 years of experience as an Oracle developer and 1 year as a software developer. 
                I have worked on many projects mainly in the banking sector, developing financial solutions 
                for money markets, loans, and saving accounts modules.
            </p>
            <p> I am also a proficient Java developer, building scalable full stack solutions using latest web technologies. 
                My strong suit is in solving customer business problems and ensuring they receive a robust 
                and satisfying solution.
            </p>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12">
            <h4>Projects</h4>
            <ul>
              <li><strong>Database migration:</strong> Migrated a whole banking system from the legacy Oracle 6i database to Oracle 12c. Upgraded
                their binary files from forms 6i to 12c and optimizing many of their existing solutions.
              </li>
              <li><strong>Interfaces:</strong> Developed an interface for a large bank. This interface would consume a SOAP api, verify data integrity
                and apply many business rules to each and every operation received. This interface proved to be reliable and error 
                resistant, consuming thousands or operations daily in an insignificant amount of time.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div id="interests" className="about-me">
        <h3 className="text-decoration-underline text-center mb-4">&nbsp;&nbsp;&nbsp;&nbsp;My interests&nbsp;&nbsp;&nbsp;&nbsp;</h3>
        <div className="row">
          <div className="col-md-6 col-sm-12 col-xs-12">
            <h4>I'm usually interested in:</h4>
            <p className="mx-2">
              <b>Computer builds:</b> I go around searching for friend an acquaintances wanting or interested
              in building a gaming computer or just a workspaces and joining their research in finding their best suited hardware
              for the job.
            </p>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12">
            <h4>Main interests</h4>
            <ul className="ms-3"> 
              <li>Spreading my nerdiness here and there, thus creating a whole new generation of computer nerds like myself. 😊</li>
              <li>Buying new video games that I would probably never play.</li>
            </ul>
            <h4>Other interests</h4>
            <ul className="ms-3">
              <li>Searching for local hiking clubs and joining them in discovering nature beauty.</li>
              <li>Playing board games that no one actually ever heard of them before.</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-center">
          <div className="contact-me" id="contact">
            <h3 className="text-decoration-underline text-center mb-4">&nbsp;&nbsp;&nbsp;&nbsp;Contact me&nbsp;&nbsp;&nbsp;&nbsp;</h3>
            <form id="my-form"
                  action="https://formspree.io/f/xdowwpvn"
                  method="POST">
              <div className="form-floating mb-3">
                <input type="text" name="name" className="form-control" id="name" placeholder="your name" />
                <label htmlFor="floatingInput">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input type="email" name="_replyto" className="form-control" id="email" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
                <div id="emailHelp" 
                     className="form-text text-start">Don't worry. I won't be sharing your email with anyone else 😄
                </div>
              </div>
              <div className="form-floating mt-3 mb-3">
                <textarea name="message"
                          className="form-control" 
                          placeholder="Leave a comment here" 
                          id="comments" 
                          rows="6"
                          style={{height: '130px'}}></textarea>
                <label htmlFor="floatingTextarea2">Message</label>
              </div>
              <button id="my-form-button"
                      className="btn btn-primary">Send</button>
              <p id="my-form-status"></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;