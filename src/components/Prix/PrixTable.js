import React from 'react'

export default function PrixTable(props) {


    function printScreen(device) {
        console.log(device)
        switch (device) {
            case "Iphone XR":
                return (
                    <>
                        {props.screen[0].screenLCD}
                    </>
                )
                break;
            case "Iphone X":
                return (
                    <>
                        {props.screen[0].screenLCD}
                    </>
                )
                break;
            default:
                return (
                    <>
                       {props.screen}
                    </>
                )
                break;

        }
    }
    return (
        <>
            <tr>
                <td>{props.device}</td>
                <td>{props.battery}$</td>
                <td>{printScreen(props.device)}$</td>
            </tr>
        </>
    )
}
