import SectionLayout from "./SectionLayout"
import publications from "../../data/publications"

const PublicationsSection = () => {
  return (
    <SectionLayout
      id="publications"
      label="Publications"
      variant="green-alt"
      className="publications-section"
    >
      <div className="publication-overlay">
        <h2 className="publication-overlay__title">Publications</h2>
        <ul className="publication-overlay__list">
          {publications.map((pub, i) => (
            <li key={i} className="publication-overlay__item">
              <strong className="publication-overlay__item-title">{pub.title}</strong>
              <span className="publication-overlay__item-citation">{pub.citation}</span>
            </li>
          ))}
        </ul>
      </div>

    </SectionLayout>
  )
}

export default PublicationsSection
