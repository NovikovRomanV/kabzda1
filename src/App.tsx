import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
import UnRating from "./components/UnRating/UnRating";

function App() {
    return (
        <div>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            Article 1

            <Accordion titleValue={'Menu'} collapsed = {true}/>
            <Accordion titleValue={'Users'} collapsed = {false}/>

            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            Article 3
            <OnOff />
            <OnOff/>
            <OnOff />

            Article 4
            <UnControlledAccordion titleValue={'Menu'}/>
            <UnControlledAccordion titleValue={'User'}/>

            Article 5
            <UnRating/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}


export default App;
