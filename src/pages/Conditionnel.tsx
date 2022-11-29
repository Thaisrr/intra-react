const Conditionnel = () => {

const is_logged = false;
const age = 0;

const Logged = () => (
    <div>
        <h3>Vous êtes bien connecté⋅e</h3>
        <p>lorem ipsum blabla</p>
    </div>
)

const not_logged =  (
    <div>
        <h3>Vous n'êtes pas connecté⋅e !!!</h3>
        <p>Veuillez remédier au problème</p>
    </div>
)


const Time = () => {
    const now = new Date();
    switch (now.getMonth()) {
        case 11 : 
            return <p>{now.getMonth()} C'est Noël !</p>
        case 6 | 7 :
            return <p>{now.getMonth()} C'est l'été</p>
        default: 
            return <p>{now.getMonth()} C'est un mois</p>
    }
}


    return (
        <div id="Conditionnel">
            <h1>Affichage Conditionnel</h1>

            <section>
                <h2>Sinon, ( sinon si ), sinon</h2>
                {/*  Connecté | Déconnecté */}
                <p><b>Status :</b>{ (is_logged)? "Connecté⋅e" : "Hors Ligne" }</p>
                {is_logged? <Logged/> : not_logged}
                <Time/>

            </section>

            <section>

                <h2>Si.... alors</h2>
                {is_logged? <p>Mon Profil</p> : null}

                <h3>Affiche si vrai</h3>
                {is_logged && <p>Mon Profil</p>}

                <h3>Affiche si faux : </h3>
                {is_logged || <p>Connexion</p>}
                {!is_logged && <p>Connexion</p>}

                { (age || age === 0) && <p>Vous avez bien entré votre age</p>}
            </section>

        </div>
    )
}

export default Conditionnel;