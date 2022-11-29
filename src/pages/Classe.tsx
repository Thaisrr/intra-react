import React from "react";

type MyState = {counter: number, name: string};
class Classe extends React.Component<any, MyState> {
    message = 'Hello World';
    interval?: NodeJS.Timer;
    state: MyState = {
        counter: 0,
        name: 'Toto'
    }; // Hérité de React.Component, reactif
    constructor(props: any) {
        super(props);
        console.log('Constructor de Classe Component');
    }
    componentDidMount() {
        // Requête pour récupérer des données d'une API
        console.log('Component did mount');
        let time = 0;
        this.interval = setInterval(() => {
            time++;
            console.log('Time : ', time)
        }, 1000)
    }

    getSnapshotBeforeUpdate(prevProps: Readonly<any>, prevState: Readonly<MyState>): string {
        return 'Je suis le snapshot';
    }
    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<MyState>, snapshot?: string) {
        console.log('Updating : ', prevState, snapshot);
    }

    componentWillUnmount() {
        // Couper les flux
        console.warn('---- Destruction du composant Classe');
        clearInterval(this.interval);
    }

    render() {
        return (
            <>
                <h1>Classe Component</h1>
                <p>{this.message}</p>
                <p>Compteur : {this.state.counter}</p>
                <p>Nom : {this.state.name}</p>
                <p>
                    <button onClick={() => this.setState({counter: this.state.counter + 1})}>Increment</button>
                </p>
            </>
        )
    }
}

export default Classe;