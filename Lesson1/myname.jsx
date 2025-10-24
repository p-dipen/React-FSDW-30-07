export default function MyName(props) {
  console.log('num', props.num);
  return (
    <div style={{ color: props.color || 'blue' }}>
      {Array(props.num || 1)
        .fill(null)
        .map(() => (
          <h1>I'm dipen</h1>
        ))}
    </div>
  );
}
