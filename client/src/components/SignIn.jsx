import React from 'react';

const SignIn = (props) => {
  return (
    <section className="hero signinbg is-fullheight">
      <div className="hero-body">
        <div className="columns is-multiline is-centered">
          <div className="column">
            <div className="card">
              <div className="card-content">
                <div className="content">
                  <div className="field">
                    <label className="label">Username</label>
                    <div className="control has-icons-left has-icons-right">
                      <input className="input is-success" type="text" value="Iceman" />
                      <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                      </span>
                      <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <p className="control has-icons-left">
                      <input className="input" type="password" value="Iceman" />
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                      </span>
                    </p>
                  </div>
                  <div className="field is-grouped">
                    <div className="control">
                      <button onClick={() => props.changeView('home')} className="button is-link">Sign In</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignIn;