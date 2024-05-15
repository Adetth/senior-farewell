import { useState } from 'react';
import '../App.css';
import '../index.css'
import giphy5 from './giphy5.gif'
import Form from './Form';

const Farewell = () => {

let count = 0;

const [showForm, setShowForm] = useState(false);

function handleForm(){
    setShowForm(!showForm);
}

function setOpacity() {
    count++;
    if (count === 1) {
      const div = document.getElementById("text1");
      div.style.transition = "opacity 1s, transform 1s";
      div.style.opacity = "0";
      div.style.transform = "translateY(1vw)";
      const div1 = document.getElementById("text2");
      div1.style.transition = "opacity 1s";
      div1.style.opacity = "1";
    }
    if (count === 2) {
      const div = document.getElementById("text2");
      div.style.transition = "opacity 1s, transform 1s";
      div.style.opacity = "0";
      div.style.transform = "translateY(1vw)";
      const div1 = document.getElementById("text3");
      div1.style.transition = "opacity 1s";
      div1.style.opacity = "1";
    }
    if (count === 3) {
      const div = document.getElementById("text3");
      div.style.transition = "opacity 1s, transform 1s";
      div.style.opacity = "0";
      div.style.transform = "translateY(1vw)";
      const div1 = document.getElementById("text4");
      div1.style.transition = "opacity 1s";
      div1.style.opacity = "1";
    }
    if (count === 4) {
      const div = document.getElementById("text4");
      div.style.transition = "opacity 1s, transform 1s";
      div.style.opacity = "0";
      div.style.transform = "translateY(1vw)";
      const div1 = document.getElementById("text5");
      div1.style.transition = "opacity 1s";
      div1.style.opacity = "1";
    }
}

const redirectToForm = () => {
    window.location.href = 'https://forms.gle/P5UA25T2sw1FvS7F9'; // Replace with your actual form link
  };

    return (
    <div>
        <header className="button">
             <button className="enterOne" ><a className='anchorClass' href='https://forms.gle/P5UA25T2sw1FvS7F9'>Contribute</a></button>
        </header>
        <header className="button1">
            <button className="enterTwo" onClick={handleForm}>Register</button>
            {showForm && <Form />}
        </header>
        <div className="container">
            <div className="text1" id="text1">
                <h1 className="h1class"><a href=""><img src="https://fontmeme.com/permalink/240513/5391d05528dd4a312e23a0ddf02fddef.png" alt="the-last-jedi-font" border="0" className="imgClass"/></a><br/><a href=""><img src="https://fontmeme.com/permalink/240513/f1f8b9f34f00bab1f55fc0080fba1571.png" alt="the-last-jedi-font" border="0"/></a><br/><a href=""><img src="https://fontmeme.com/permalink/240515/ac62b1dabf96685d85795456601aaba8.png" alt="beat-the-💩-font" border="0" className='clickMe'/></a></h1>
            </div>
            <div className="text2" id="text2">
                <h1 className="h1class"><a href=""><img src="https://fontmeme.com/permalink/240513/1ceeda1a5cef9c73d179db2332974331.png" alt="the-last-jedi-font" border="0" className="imgClass"/></a><br/><a href=""><img src="https://fontmeme.com/permalink/240513/809723eac324e43a15c4404da1098b89.png" alt="the-last-jedi-font" border="0" className="imgClass"/></a></h1>
            </div>
            <div className="text3" id="text3">
                <h1 className="h1class"><a href=""><img src="https://fontmeme.com/permalink/240513/97fe321e5cd987c834a9920bb7112faa.png" alt="the-last-jedi-font" border="0" className="imgClass"/></a><br/><a href=""><img src="https://fontmeme.com/permalink/240515/1138e1208ec624c90c59acaa4b57f3b4.png" alt="the-last-jedi-font" border="0" className='imgClass'/></a></h1>
            </div>
            <div className="text4" id="text4">
                <h1 className="h1class"><a href=""><img src="https://fontmeme.com/permalink/240513/61d6198c7c4bba5481ffb6a0853026fe.png" alt="the-last-jedi-font" border="0" className="imgClass"/></a><br/><a href=""><img src="https://fontmeme.com/permalink/240513/c49468a39e462e67c5cee5449c7356b3.png" alt="the-last-jedi-font" border="0" className="imgClass"/></a><br/><a href=""><img src="https://fontmeme.com/permalink/240513/5fc3a0b395b8b7b711252066dea1658d.png" alt="the-last-jedi-font" border="0" className="imgClass"/></a></h1>
            </div>
            <div className="text5" id="text5">
                <h1 className="h1class"><a href=""><img src="https://fontmeme.com/permalink/240513/75d3ada40353d0d7d5ce84ea279bd19a.png" alt="the-last-jedi-font" border="0" className="imgClass"/></a><br/><a href=""><img src="https://fontmeme.com/permalink/240513/d49143916d858a6ad8d38ca9b3fdd6d2.png" alt="the-last-jedi-font" border="0" className="imgClass"/></a></h1>
            </div>
            <button onClick={setOpacity} className="next">
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </button>
        </div><br/><br/><br/><br/><br/>
        {/* <div><h2 className="h2class">Click!</h2></div> */}
    </div>
    );
};

export default Farewell;