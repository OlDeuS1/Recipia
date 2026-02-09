function SectionHead({ title, kicker, action }) {
  return (
    <div className="section-head">
      <div>
        {kicker && <p className="section-kicker">{kicker}</p>}
        <h2>{title}</h2>
      </div>
      {action ? action : null}
    </div>
  )
}

export default SectionHead
