export default function Section({ id, title, children, secondary = false }) {
  return (
    <section id={id} className={secondary ? "bg-alt" : "bg-main"}>
      <div className="section-content">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}
