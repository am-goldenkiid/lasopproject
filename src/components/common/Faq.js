import React, { useEffect, useState } from "react";
import Faquestion from "react-faq-component";
import doubleline from "./../../assets/double.png"
import "./faq.css"


function Faq() {

    const data = {
        rows: [
            {
                title: "I don’t have any background knowledge in programming, can I apply?",
                content: `Yes, you can. You don’t need any background knowledge in IT or coding before you can register. Having one is only an advantage for you. At LASOP, we start from the basics and guide you through all you need to know to be a successful software developer.`,
            },
            {
                title: "What Must I Do To Be Successful In The Program?",
                content:
                    "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
            },
            {
                title: "What Materials Do I Need For This Program?",
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            },
            {
                title: "What Are My Expectations At The End Of The Program?",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, ab!",
            },
        ],
    };

    const config = {
        animate: true,
        arrowIcon: "V",
        openOnload: 0,
        expandIcon: "+",
        collapseIcon: "-",
    };

    const style = {
        bgColor: "transparent",
        rowTitleColor: "#fff",
        rowContentColor: "#fff",
        arrowColor: "#fff",
        rowContentPaddingTop: "10px",
        rowContentPaddingBottom: "10px",
        rowContentPaddingLeft: "10px",
        rowContentPaddingRight: "10px",
        transitionDuration: "0.9s",
        timingFunc: "ease-in-out"

    }

  return (
    <div className="faqs p-5">


        <div className="info">
        <Faquestion
                styles={style}
                data={data}
               config={config}
            />
        </div>

    </div>
  )
}

export default Faq