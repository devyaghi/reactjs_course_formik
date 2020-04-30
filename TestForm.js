import React from "react";
import {Formik,Field} from "formik";

export default class TestForm extends React.Component{

    constructor(props) {
        super(props);
    }

    onsubmit=(values)=>{
        console.log(values['first_name'])
    }

    form_code=(props)=>{
        return <form onSubmit={props.handleSubmit}>
                 <Field name={'first_name'}/>
                 <Field name={'last_name'}/>
                 <button type={'submit'}>Send</button>
              </form>
    }

    render() {
        return(
            <Formik
            initialValues={{first_name:'aaa',last_name:'bbb'}}
            onSubmit={this.onsubmit}
            render={this.form_code}
            />

        )
    }

}