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
            <input className='form-sign' type='text' name='query' placeholder='Nama'/>
            {/* <input type='text' name='nim' placeholder='NIM'/> */}
            <input className='form-sign' type='text' name='count' placeholder='Jumlah per Halaman (10)'/>
            <div className='test'>
                <button className='button-sign'>Cari</button>
            </div>
        </form>
    </div>
);

export default Form;