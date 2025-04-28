function redBorder(WrappedComponent) {
  return function EnhancedComponent(props) {
    return (
      <div style={{ border: '12px solid red', padding: '10px' }}>
        <WrappedComponent {...props} />
        <div>
            <h2>Red Border Component</h2>
            <p>This is a higher-order component that adds a red border. {props.naa}</p>
        </div>
      </div>
    );
  };
}
export default redBorder;