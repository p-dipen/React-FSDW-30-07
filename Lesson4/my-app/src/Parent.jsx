function Son({ statement }) {
  return (
    <div style={{ backgroundColor: 'lightgreen' }}>
      <h2>Son</h2>
      <div>{statement}</div>
    </div>
  );
}

function Daughter(props) {
  return (
    <div style={{ backgroundColor: 'lightblue' }}>
      <h2>Daughter</h2>
      <div>{props.children}</div>
    </div>
  );
}

function Parent() {
  const shoot = (a) => {
    alert(a);
  };
  return (
    <div>
      <h1>My Two Children</h1>
      <button onClick={() => shoot('YYYOoooo!')}>Take the shoot!</button>
      <Son
        statement=" This was writtern in Parent Component, but displayed as a part of the
          SOn component"
      />
      <Daughter>
        <p>
          This was writtern in Parent Component, but displayed as a part of the
          Daughter component
        </p>
      </Daughter>
    </div>
  );
}
export default Parent;
