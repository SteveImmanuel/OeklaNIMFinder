import React from 'react';
import '../styles/Form.css';

const Form = props => (
    <div>
        <form onSubmit={props.search}>
            <input className='form-sign' type='text' name='query' placeholder='Ketikkan pencarian...'/>
            <input className='form-sign' id='count' type='number' name='count' placeholder='Jumlah per Halaman (10)'/>
            <select className ='select-sign' name='type'>
                <option value='-1'>Tipe Pencarian</option>
                <option value='0'>NIM</option>
                <option value='1'>Nama</option>
            </select>
            <div className='test'>
                <button className='button-sign'>Cari</button>
            </div>
        </form>
    </div>
);

export default Form;