import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [students, setstudents] = useState([
    {name :"mohamed" , age:21 , Countries:"Tunisia" , state:"Gabés" , Work:"Developer" , img:"https://scontent.xx.fbcdn.net/v/t1.15752-9/395092636_889948178660994_1571707477816163031_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=510075&_nc_ohc=7VSeySq5L0UAX80967I&_nc_ht=scontent.xx&oh=03_AdRbwCNGhYsL1av_LH8zDXLsyaPUpy73Zcgl6BJ8izvW7g&oe=657082EE"}
  ])
  const [show, setshow] = useState(false)
  return (
    <div className='box'>
      <div className='btn'>
<button className='btn2' onClick={()=>setshow(!show)}>Click here show card</button>
      </div>
      <div className='box1'>
    {show?<div className='cardd' >
      {students.map((el)=> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.img} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
       {el.age}<br></br>
       {el.Countries}<br></br>
       {el.state}<br></br>
       {el.Work}<br></br>
        </Card.Text>
      
      </Card.Body>
    </Card>)}
     
    </div>:null}
    </div>
    </div>
  );
}

export default App;
