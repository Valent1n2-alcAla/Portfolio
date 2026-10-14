import SectionHeading from '../SectionHeading/SectionHeading'
import { skillCategories } from '../../data/skills'
import './Skills.css'

function Skills() {
  return (
    <section
      id="competences"
      className="skills container"
      aria-labelledby="skills-title"
    >
      <SectionHeading title="Compétences" id="skills-title" />

      <div className="skills__grid">
        {skillCategories.map((category) => (
          <article key={category.title} className="skills__category">
            <h3>{category.title}</h3>
            <ul>
              {category.skills.map((skill) => (
                <li key={skill.name}>
                  <span>{skill.name}</span>
                  {skill.context && (
                    <small className="skills__context">{skill.context}</small>
                  )}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills