import React from 'react';
import '../styles/Form.css';

const Form = props => (
    <div>
        {/* <div className="onoffswitch">
            <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" checked></input>
            <label className="onoffswitch-label" for="myonoffswitch">
                <span className="onoffswitch-inner"></span>
                <span className="onoffswitch-switch"></span>
            </label>
        </div> */}
        <form onSubmit={props.search}>
            <input className='input-form' type='text' name='name' placeholder='Nama'/>
            {/* <input type='text' name='nim' placeholder='NIM'/> */}
            <input className='input-form' type='text' name='count' placeholder='Jumlah per Halaman (10)'/>
            <button className='button-form'>Cari</button>
        </form>
    </div>
);

export default Form;