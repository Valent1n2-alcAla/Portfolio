import SectionHeading from '../SectionHeading/SectionHeading'
import './About.css'

const facts = [
    { label: 'Localisation', value: 'Caen, France' },
    { label: 'Diplôme', value: 'BTS SIO' },
    { label: 'Formation', value: 'Licence STS Développeur Web et Mobile, CaenSup' },
    { label: 'Recherche', value: 'Alternance ou CDI' },
]

function About() {
    return (
        <section
            id="a-propos"
            className="about container"
            aria-labelledby="about-title"
        >
            <SectionHeading title="À propos" id="about-title" />

            <div className="about__grid">
                <div className="about__text">
                    <p>
                        Ce qui m'a donné envie de développer, c'est d'aider les gens. Voir que
                        quelques lignes de code peuvent faire passer quelqu'un d'une simple
                        application de gestion à un site de vente complet : c'est ce qui me
                        motive. Après une spécialité NSI au lycée, j'ai poursuivi avec un BTS
                        Services Informatiques aux Organisations à Caen.
                    </p>
                    <p>
                        Pendant mon stage chez DeltInfo, j'ai travaillé sur InterVizio, un outil
                        de gestion des interventions. C'est le projet dont je suis le plus fier,
                        parce qu'il est aujourd'hui utilisé en entreprise. Je ne connais pas
                        tout, mais je veux savoir faire beaucoup plus de choses, pour aider le
                        plus de monde possible.
                    </p>
                </div>

                <dl className="about__facts">
                    {facts.map((fact) => (
                        <div key={fact.label} className="about__fact">
                            <dt>{fact.label}</dt>
                            <dd>{fact.value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    )
}

export default About