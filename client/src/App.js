import {SketchPicker} from 'react-color'
import {useState} from 'react-color'
import Button from './components/Button'
import './App.css';

function App() {
  const [color,setColor]=useState('lightblue');
  const [hidden,setHidden]=useState(false);

  const pickerStyles={
    default:{
      picker:{
        position:'absolute',
        button:'30px',
        left:'100px'
      }
    }
  }
  return (
   <div style={{background:color}} className='App'>
      <div className='container' >
        {hidden && (
          <SketchPicker 
            styles={pickerStyles}
            color={color}
            onChange={(updateColor)=>setColor(updateColor.hex)}
          /> 
        )}
        <Button/>
        {hidden ? 'Close color picket':'Open color picket'}
      
     </div>
   </div>
  );
}

export default App;
