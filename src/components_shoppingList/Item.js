import React from "react";


function Item({item}){
    return(
        <div>
            <div className={'mt-5 row justify-content-center'}>
                <div className={'col-md-8'}>
                    <h1 className={'text-black'}>{item}</h1>
                    <div className={'col-md-4'}>
                        <button className={'btn btn-primary md-2'}>Edit</button>
                        <button className={'btn btn-danger md-2'}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;