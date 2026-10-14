import './SectionHeading.css'

type SectionHeadingProps = {
  title: string
  id?: string
}

function SectionHeading({ title, id }: SectionHeadingProps) {
  return (
    <h2 id={id} className="section-heading">
      {title}
    </h2>
  )
}

export default SectionHeading