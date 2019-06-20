import React from 'react';

const Form = props => (
    <div>
        <form onSubmit={props.search}>
            <input className='form-field' type='text' name='query' placeholder='Ketikkan pencarian...'/>
            <input className='form-field' id='count' type='number' min='1' name='count' placeholder='Jumlah per Halaman (10)'/>
            <select className ='select-field' name='type'>
                <option value='-1'>Tipe Pencarian</option>
                <option value='0'>NIM</option>
                <option value='1'>Nama</option>
            </select>
            <div className='button-wrapper'>
                <button className='button'>Cari</button>
            </div>
        </form>
    </div>
);

export default Form;