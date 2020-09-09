import React,{useContext} from 'react';
import BoxContext from '../contexts/BoxContext';

const boxForm = props => {

    const {color,setColor,box,setBox} = useContext(BoxContext);
    return(
        <form className="col-5 mx-auto">
        <div class="input-group">
            <input type="text" class="form-control" aria-describedby="basic-addon1" onChange={(e)=>setColor(e.target.value)} value={color}>
            <div class="input-group-append">
                Color <button class="btn btn-success" type="button">Add</button>
            </div></input>
        </div>
        </form>
    );
}


export default boxForm;