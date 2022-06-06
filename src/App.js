//import logo from './Images/drug-free-world-logo-text_en.svg';
import logo from './Images/drug-free-world-logo-text_en-americas.png';
import logoImage from './Images/antidrug-logo.png';
import pageEdgeTop from './Images/pageEdgeTop.JPG'
import pageEdgeBottom from './Images/pageEdgeBottom.JPG'
import logoW from './Images/dfw_logo-white.svg'
import bannerImageAdjusted from './Images/bannerImageAdjusted.JPG'
import freeMaterials from './Images/free-materials.png'
import getInvolved from './Images/get-involved.jpg'

import './App.css';

function App() {
  return (
    <div className="App">
      <div className='topBar'>
        <div className='topBarInner'> 
          <div className='menuButton'>
            Menu
          </div>
          <div className='topBarLogo'>
            <div >
              <img src={logoImage}></img>
            </div>
            <div className='logoImage2'>
              <img src={logo}></img>
            </div>
          </div>
          <nav className='topNav'>
            <ul>
              <li>
                  <div>Who We Are</div>
                  <div className='hoverIndicator'></div>                
              </li>
              <li>
                <div>Get the Facts</div>
                <div className='hoverIndicator'></div>
              </li>
              <li>
                <div>Free Materials</div>
                <div className='hoverIndicator'></div>
              </li>
              <li>
                <div>Get Involved</div>
                <div className='hoverIndicator'></div>
              </li>
            </ul>
          </nav>         
        </div>
        
      </div>
      <div className='banner'>
        <img src={bannerImageAdjusted}></img>
      </div>        
      <div className='cardsSection'>
          <div className='card'>
            <div className='cardTop'>
              WHO WE ARE
            </div>       
            <div className='cardImg'>
              <img src={getInvolved}></img>
            </div>        
            Learn about who we are and what we do
            <button className='cardButton'>Learn More</button>
          </div>
          <div className='card'>
            <div className='cardTop'>
              FREE MATERIALS
            </div>      
            <div className='cardImgSmaller'>
              <img src={freeMaterials}></img>
            </div>         
            Get free materials to display or distribute
            <button className='cardButton'>Free Materials</button>
          </div>
          <div className='card'>
            <div className='cardTop'>
              GET INVOLVED
            </div>         
            <div className='cardImg'>
              <img src={getInvolved}></img>
            </div>   
            Lern how to get involved
            <button className='cardButton'>Get Involved</button>
          </div>
      </div>
      <div className='infoSection'>
        <div className='infoSectionInner'>
          <div className='infosectionTitle'>
            WHAT YOU NEED TO KNOW
          </div>
          <p>
            There is a lot of talk about drugs in the world—on the streets, at school, on the Internet and TV. Some of it is true, some not.

            <br></br>
            <br></br>
            Much of what you hear about drugs actually comes from those selling them. Reformed drug dealers have confessed they would have said anything to get others to buy drugs.

            <br></br>
            <br></br>
            Don’t be fooled. You need facts to avoid becoming hooked on drugs and to help your friends stay off them.
            <br></br>
            <br></br>
            Sooner or later—if it hasn’t already happened—you, or someone close to you, will be offered drugs. The decision of whether or not to use them could drastically affect your life. Any addict will tell you they never expected a drug to take control of their life or maybe that they started with “just pot” and that it was “just something to do” with their friends. They thought they could handle it and when they found out they couldn’t, it was too late.
            <br></br>
            <br></br>
            You have a right to know the FACTS about drugs—not opinions, hype or scare tactics. So how do you tell fact from fiction? That is why we have created this website—for you.
          </p>
        </div>        
      </div>
      <div className='videoSection'>
        <br></br>
        <div className='infosectionTitle'>
          OUR TEAM AND MISSION
        </div>
        
        <br></br>
        <iframe width="90%" height="400vh" src="https://www.youtube.com/embed/U5WmBrpAEwk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className='foter'>
        
        <img src={pageEdgeTop}></img>
        <div className='footerInner'>
          <br></br>
          <div className='topLeftFooter'>
            <div className='footerLogo'>
              <img className='footerLogo' src={logoW}></img>
            </div> 
            <div className='footerTitle'>
              Foundation for a Drug-Free World Americas Chapter
            </div>
          </div>
          <br></br> 
          <div className='footerLine'></div>
          <div className='footerSection'>
            <div className='footerSectionTitle'>
                WHO WE ARE
            </div>
            <br></br>  
            <a>About us</a>
            <br></br> 
            <a>Donate</a>
            <br></br> 
            <a>Contact Us</a>
          </div>

          <div className='footerSection'>
            <div className='footerSectionTitle'>FREE MATERIALS</div>            
            <br></br>
            <a>Distribution Kits</a>            
            <br></br>
            <a>Fliars</a>            
            <br></br>
            <a>Office Displays</a>
          </div>
          <div className='footerSection'>
            <div className='footerSectionTitle'> GET INVOLVED</div>
            
            <br></br> 
            <a>Get the facts</a>
            <br></br> 
            <a>Volunteer</a>
            <br></br> 
            <a>Join the network</a>
            <br></br>                       
            
          </div>
        </div>
        <div><img src={pageEdgeBottom}></img></div>
      </div>
    </div>
  );
}

export default App;
