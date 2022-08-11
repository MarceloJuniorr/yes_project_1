import { useEffect, useState } from "react";
import "./styles.css";

interface IButton {
    button: string,
    type: string,
    onClick: any,
    testid: string
}


export function Button ({ button, type, onClick, testid }: IButton) {
    const handleOnClick = () => {
        onClick();
    }

    return ( 

              <input
              data-testid={testid}
              type={type}
              value={button}
              onClick={handleOnClick}
              className="button"
            />

    );
}
   