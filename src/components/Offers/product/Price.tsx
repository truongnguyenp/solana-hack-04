import React from "react";

const Price = (props: any) => {
    return (
        <div className="flex">
            <p className="mr-[8px]">{"Maximum lending: "}</p>
            <div className="price">        
                <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg"><path
                    d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                    fill="#00FFF8"/>
                </svg>
                <p className="ml-[4px]">{props.maximumLending}</p>
            </div>
        </div>
    );
}

export default Price;