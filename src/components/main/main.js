import React, { Component } from 'react';
import "./main.css";

const imageArr = ["sabin.png", "celes.png", "cyan.png", "edgar.png", "gau.png", "gogo.png", "locke.png", "mog.png", "setzer.png", "shadow.png", "terra.png", "umaro.png"];

class main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: shuffleArray(imageArr.slice()),
            picked: [],
            count:0,
            maxCount:0

        };
    }
    componentDidUpdate(){
        console.log("Count: " + this.state.count );
        if(this.state.count > this.state.maxCount){
            this.setState({maxCount: this.state.count});
            console.log("maxCount updated: " + this.state.count );
        }
    }

    onImageClick(clickedImage) {
        const { picked } = this.state;
        if (picked.includes(clickedImage)) {
            console.log("Clicked image: " + clickedImage);
            this.setState({picked:[], count: 0})
            console.log("start Over");
        } else {
            picked.push(clickedImage)
            console.log("Clicked image: " + clickedImage);
            this.setState({count: this.state.count + 1});
            
            
        }
        this.setState({cards:shuffleArray(imageArr.slice())})
        
    }



    render() {
        const { cards } = this.state;
        return (
            <div className="jumbotron">
            <div className="container">
                    {cards.map((image, i) => (
                        <img
                            key={i}
                            alt="FF6 Character"
                            className="card-img-top"
                            src={"../assets/images/ff6/"+image}
                            height='250'
                            onClick={() => {
                                this.onImageClick(image);
                            }}  
                        />     
                ))}
                </div>
                </div>
        )
    }



}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export default main;