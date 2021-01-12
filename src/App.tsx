import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import Rating, {RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import UnRating from "./components/UnRating/UnRating";
import {UnControlledOnOff} from "./components/OnOff/UnControlledOnOff";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [on, setOn] = useState<boolean>(true);
    return (
        <div className={"App"}>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            Article 1

            <Accordion
                titleValue={'Menu'}
                collapsed={accordionCollapsed}
                onClick={() => setAccordionCollapsed(!accordionCollapsed)}
                items={[]}
                color={'black'}
                onChange={()=>{}}
            />
            <Accordion
                titleValue={'Users'}
                collapsed={accordionCollapsed}
                onClick={() => setAccordionCollapsed(!accordionCollapsed)}
                items={[]}
                color={'black'}
                onChange={()=>{}}
            />

            Article 2
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            Article 3
            <UnControlledOnOff onChange={setOn}/> {on.toString()}
            <UnControlledOnOff onChange={setOn}/> {on.toString()}
            <OnOff on={on} onClick={setOn}/>
            <OnOff on={on} onClick={setOn}/>
            Article 4
            <UnControlledAccordion titleValue={'Menu'} items={[]} onClick={()=>{}}/>
            <UnControlledAccordion titleValue={'User'} items={[]} onClick={()=>{}}/>

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
