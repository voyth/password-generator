import "./Layout.css";

export default Layout = ({ children }) => {
  return (
    <div id="overlay">
      <div id="blurred-margin">
        <div className="App">
          <h1>Password Generator</h1>
          {children}
        </div>
      </div>
    </div>
  );
};
