import dot1 from "./img/Dots.svg"
import dot2 from "./img/Dots1.svg"
import logtx1 from "./img/_Logo.svg"
import vecbg1 from "./img/Vector.svg"
import AL from "./img/ArrowLeft.svg"
import AR from "./img/ArrowRight.svg"
import bshli from "./img/shirt 1.svg"
import bshri from "./img/image 1.svg"
import BI from "./img/BI.svg"
import FB from "./img/FB.svg"
import HB from "./img/HB.svg"
import KF from "./img/KF.svg"
import Num from "./img/Numero.svg"

function App() {
  return (
    <div className = "main">
      <div class="bunn">
        <img className = "dot1"  src = {dot1}/>
        <p className = "txtban">SUMMER SALE UP TO 50% OFF</p>
        <img className = "dot2" src = {dot2}/>
      </div>

      <div className = "head">
        <div className = "logup">
          <img className = "logotx1" src = {logtx1}/>
        </div>
        <div className = "logund">
          <div className = "logbg">
            <div className = "txtbg1">
              <p className = "txtbg11">Spring Season</p>
            </div>
            <div className = "txtbg2">
              <p className = "txtbg21">VIEW COLLECTION</p>
              <img className = "vecbg1" src = {vecbg1}/>
            </div>
          </div>
        </div>
      </div>

      <div className="linebar">
        <div className="linelogo">
          <img className = "line1" src = {Num}/>
          <img className = "line2" src = {BI}/>
          <img className = "line3" src = {KF}/>
          <img className = "line4" src = {FB}/>
          <img className = "line5" src = {HB}/>
        </div>
      </div>

      <div className = "bsh">
        <div className = "bshl">
          <div className = "bshl1">
            <img className = "AL" src = {AL}/>
            <img className = "bshli" src = {bshli}/>
            <img className = "AR" src = {AR}/>
          </div>
          <div className = "bshltxt">
            <p>Basic Shirt</p>
            <p>€49</p>
          </div>
        </div>
        <div className = "bshr">
        <img className = "bshri" src = {bshri}/>
        <button className = "ssbs">Shop Shirts</button>
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
    </div>
  );
}
  
    



export default App;