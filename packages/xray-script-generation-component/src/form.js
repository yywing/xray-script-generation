import React from 'react'

import Form from "@rjsf/core";

const schema = require('./schema.json');

export default class ScriptForm extends React.Component {
    render() {
        return (<Form schema={schema} />)
    }
}