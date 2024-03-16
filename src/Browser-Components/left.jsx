import React, {useState, useEffect} from 'react'
import './left.css'

export default function left() {

  const [keyInput, setKeyInput] = useState('');
  const [colorInput, setColorInput] = useState('');
  const [storedData, setStoredData] = useState({});

  // Load stored data from local storage when the component mounts
  useEffect(() => {
    const storedDataJSON = localStorage.getItem('colorData');
    if (storedDataJSON) {
      setStoredData(JSON.parse(storedDataJSON));
    }
  }, []);

  // Update local storage whenever storedData changes
  useEffect(() => {
    localStorage.setItem('colorData', JSON.stringify(storedData));
  }, [storedData]);

  const handleKeyChange = (e) => {
    setKeyInput(e.target.value);
  };

  const handleColorChange = (e) => {
    setColorInput(e.target.value);
  };

  const handleSave = () => {
    if (keyInput && colorInput) {
      setStoredData({ ...storedData, [keyInput]: colorInput });
      setKeyInput('');
      setColorInput('');
    }
  };

  // joker is fine. Poker is fine.

  const [isOpen, setIsOpen] = useState(false);

  // Function to open the popup
  const openPopup = () => {
    setIsOpen(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setIsOpen(false);
  };

  const localStore = (e) =>{
    localStorage.setItem(e,)
  }

  return (
    <>
    <div className='leftContainer'>
        <h3 className='pocketleft'>Pocket Notes</h3>

        {/* <div className="group">

        </div> */}

        {/* <div className="sticky">
            <p className='plus' >+</p>
        </div> */}
      
    </div>
    
    {/* my logic start */}
      {isOpen &&(
        <div className='heaa'>

          <div className="overlay" id="overlay" onClick={closePopup}></div>

          <div className="popup" id="popup">
          <p>Create New group</p>
          <label htmlFor="username">Group Name</label>
          <input type="username" id="username" value={keyInput} name="username" placeholder='Enter group name' required  onChange={handleKeyChange}></input> <br /> <br />

          <label htmlFor="chooseColor" className='choosecolour' value={colorInput} onChange={handleColorChange} >Choose colour</label>
          <div className="color c1"></div><div className="color c2"></div><div className="color c3"></div>
          <div className="color c4"></div><div className="color c5"></div><div className="color c6"></div> <br/><br/>
          
          <button onClick={handleSave} onSubmit={localStore} type="submit" id='createGroup'>Create</button>
          </div>
         </div>
      )} 

    {/* my logic end */}

    {/* Overlay */}
    {/* {isOpen && <div className="overlay" onClick={closePopup}></div>} */}

    {/* Popup */}
    {/* <div className="overlay" id="overlay" >hi</div>
    {isOpen && (
      <div className="popup"> */}
        {/* <span className="close" onClick={closePopup}>&times;</span> */}

        {/* <h3>Signup Form</h3>
        <form>
          <label htmlFor="username">Group Name</label>
          <input type="username" id="username" name="username" placeholder='Enter group name' required ></input> <br /> <br />
          
          <label htmlFor="chooseColor">Choose colour</label> */}
          {/* <input type="chooseColor" id="chooseColor" name="chooseColor" required ></input> <br /> <br /> */}
          
          {/* <div className="color c1"></div><div className="color c2"></div><div className="color c3"></div>
          <div className="color c4"></div><div className="color c5"></div><div className="color c6"></div>
          
          <button type="submit">Signup</button>
        </form>
      </div>
    )} */}

    {/* Button to open the popup */}
    {/* <button onClick={openPopup}>+</button> */}
    <div className='sticky'>
      <button className='plus' onClick={openPopup}>+</button>
      {/* {console.log(" openPopup ")}{console.log(openPopup)} */}
    </div>

    </>
  )
}