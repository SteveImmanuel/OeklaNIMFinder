import React from "react";

const Form = props => (
    <form onSubmit={props.search}>
        <input type="text" name="name" placeholder="Nama"/>
        <input type="text" name="nim" placeholder="NIM"/>
        Jumlah per Halaman:<input type="text" name="count" placeholder="10"/>
        <button>Cari</button>
    </form>
);

export default Form;