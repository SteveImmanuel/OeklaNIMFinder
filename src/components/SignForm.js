import React from "react";

const SignForm = props => (
    <form onSubmit={props.search}>
        <input type="text" name="username" placeholder="Username"/>
        <input type="text" name="password" placeholder="Password"/>
        <button>Masuk</button>
    </form>
);

export default SignForm;