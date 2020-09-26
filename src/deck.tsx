import { AvPanel, AvPrimitive, AvStandardGrabbable, AvTransform, DefaultLanding, PrimitiveType } from '@aardvarkxr/aardvark-react';
import { Av, g_builtinModelBox } from '@aardvarkxr/aardvark-shared';
import bind from 'bind-decorator';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PlayingCard } from './card';

type DeckProps = {
}

class CardDeck extends React.Component<{}, DeckProps>{


    cardComponents = [];

	constructor( props: any )
	{
        super( props );
        for (var i = 0; i < 52; i++) {
            this.cardComponents.push(<PlayingCard index={i} suit={i/13} />)
        }
	}
    public render(){
        return(
            <div>
                {this.cardComponents}
            </div>
        );
    }


} 

export default CardDeck;