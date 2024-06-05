import './Solutions.css';
import Authitianit from '../../images/pillers/Authitianit.jpg';
import cyber from '../../images/pillers/cyber.jpg';
import endpoint from '../../images/pillers/endpoint.jpg';
import datapoint from '../../images/pillers/Datapoint.jpg';
import Security from '../../images/pillers/Security.jpg';
import networking from '../../images/pillers/networking.jpg';
import Perimie from '../../images/pillers/Perimie.jpg';
import servers from '../../images/pillers/severBackup.jpg';
import { NavLink } from "react-router-dom";

function Solutions() {
  return (
    <section id='hero' className='hero1'>
      <div className="container text-center">
        <div className='row'>
          <div className="row text">
            <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
            <div className="col-4" data-aos="fade-up" data-aos-delay="100"><p id='topic'>Solutions</p></div>
            <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
          </div>
        </div>
        <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 rowmargin">
          <div className="col">
            <NavLink to="/Solutions/InternetSecurity" activeClassName='active-link'>
              <div className="card crd">
                <img src={Perimie} className="card-img-top " alt="Perimeter and Internal Security" />
                <div className="card-body cardSize">
                  <p className="card-text txts">Perimeter and <br/> Internal Security</p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col">
            <NavLink to="/Solutions/CyberSecurity" activeClassName='active-link'>
              <div className="card crd">
                <img src={cyber} className="card-img-top" alt="Cyber Security Governance & Compliance" />
                <div className="card-body cardSize">
                  <p className="card-text txts">Cyber Security Governance <br/>  & Compliance</p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col">
            <NavLink to="/Solutions/Authentication" activeClassName='active-link'>
              <div className="card crd">
                <img src={Authitianit} className="card-img-top" alt="Authentication & Identity Management" />
                <div className="card-body cardSize">
                  <p className="card-text txts">Authentication & Identity Management</p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col">
            <NavLink to="/Solutions/SecurityManagement" activeClassName='active-link'>
              <div className="card crd">
                <img src={Security} className="card-img-top" alt="Security Management" />
                <div className="card-body cardSize">
                  <p className="card-text txts">Security <br/>  Management</p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col">
            <NavLink to="/Solutions/EndpointSecurity" activeClassName='active-link'>
              <div className="card crd">
                <img src={datapoint} className="card-img-top" alt="Endpoint Security" />
                <div className="card-body cardSize">
                  <p className="card-text txts">Endpoint <br/>  Security</p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col">
            <NavLink to="/Solutions/Networking" activeClassName='active-link'>
              <div className="card crd">
                <img src={networking} className="card-img-top" alt="Networking" />
                <div className="card-body cardSize">
                  <p className="card-text txts">Networking</p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col">
            <NavLink to="/Solutions/Infrastructure" activeClassName='active-link'>
              <div className="card crd ">
                <img src={endpoint} className="card-img-top datacenter" alt="Data Center Infrastructure and Infrastructure Monitoring" />
                <div className="card-body cardSize">
                  <p className="card-text txts">Data Center Infrastructure and  Monitoring</p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col column">
            <NavLink to="/Solutions/Server" activeClassName='active-link'>
              <div className="card crd ">
                <img src={servers} className="card-img-top" alt="Server Storage & Backup Solutions" />
                <div className="card-body cardSize">
                  <p className="card-text txts">Server Storage & Backup Solutions</p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      

    </section>
    
  );
}

export default Solutions;
