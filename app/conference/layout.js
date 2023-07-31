import style from "./styles.css"

export default function ConferenceLayout({ children }) {
    return (
     <>
     <header style={style.header}>
        <h1>GLOBOMANTICS TECH :)</h1>
        </header>
<section>{children}</section>
</>
    );
  }
  