export default function Preloader({ pct, done }) {
  return <div className={`preloader${done ? ' preloader--done' : ''}`} aria-hidden={done}>
    <div className="preloader__inner">
      <div className="preloader__mark">R<span>1</span>DE</div>
      <div className="preloader__pct">{pct}<i>%</i></div>
      <div className="preloader__note">Find your rhythm</div>
    </div>
  </div>;
}
