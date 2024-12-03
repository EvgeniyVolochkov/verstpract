import dot1 from "./img/Dots.svg"
import dot2 from "./img/Dots1.svg"
import logbg1 from "./img/Screenshot 2024-03-13 at 11.09 1.svg"
import logtxt1 from "./img/_Logo.svg"
import vecbg1 from "./img/Vector.svg"
import line from "./img/Frame 7.svg"
import AL from "./img/ArrowLeft.svg"
import AR from "./img/ArrowRight.svg"
import bshl from "./img/shirt 1.svg"
import bshr from "./img/image 1.svg"

function App() {
  return (
    <>
      <div class="bunn">
        <img className = ""  src = {dot1}/>
        <p className = "txtban">Summer sale up to 50% off</p>
        <img className = "" src = {dot2}/>
      </div>

      <div className = "head">
        <div className = "logup">
          <img className = "logotx1" src = {logtxt1}/>
        </div>

        <div className = "logund">
          <div className = "logbg">
            <img className = "logbg1" src = {logbg1}/>
              <div className = "txtbg1">
                <p className = "txtbg11">Spring Season</p>
              </div>
              <div className = "txtbg2">
                <p className = "txtbg21">view collection</p>
                <img className = "vecbg1" src = {vecbg1}/>
            </div>
          </div>
        </div>
      </div>

      <div className="linebar">
        <div className="linelogo">
          <img className = "line" src = {line}/>
        </div>
      </div>

      <div className = "bsh">
        <div className = "bshl">
          <div className = "bshl1">
            <img className = "AL" src = {AL}/>
            <img className = "AR" src = {AR}/>
            <img className = "bshl" src = {bshl}/>
          </div>
          <div className = "bshltxt">
            <p></p>
            <p></p>
          </div>
        </div>
        <div className = "bshr">
        <img/>
        <button></button>
        </div>
      </div>

      {/* <div className = "bsh2">
        <div className = "bsh2l">
          <img/>
          <button></button>
        </div>
        <div className = "bsh2r">
          <div className = "bsh2rup">

          </div>
          <div className = "bsh2rdw">

          </div>
        </div>
      </div>

      <div className = "bsh3">

      </div>

      <div  className = "pres">

      </div>

      <div  className = "wmh">

      </div>

      <div  className = "pshk">
        
      </div>

      <div className = "mics">
        
      </div>

      <div className = "ttsh">
        
      </div> */}
    </>
  );
}
  
    



export default App;