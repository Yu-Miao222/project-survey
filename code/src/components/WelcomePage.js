/* eslint-disable */

import React from "react";
import { NextQuestionButton } from "./NextQuestionButton";

export const WelcomePage = ({ onClickNext }) => {
    return (
        <section className="welcomeBox" >
            <h1>
                Welcome! Thanks for shopping with us! Your opinion matters, let's chat!
            </h1>
            
            <NextQuestionButton button="Start" onClickNext={onClickNext}/>
            
        </section>

    )
}