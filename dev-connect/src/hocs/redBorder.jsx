function redBorder(WrappedComponent) {
  return function EnhancedComponent(props) {
    return (
      <div style={{ border: '2px solid red', padding: '10px' }}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}
export default redBorder;