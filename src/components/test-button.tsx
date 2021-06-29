import React, { useEffect, useState } from 'react';


export function MyButton(props: {text: string}){

    return (<div>
        <div style={{backgroundColor: 'red',height: '200px'}}>
            This is red!
        </div>
        <div>
            {props.text}
        </div>
    </div>);
}