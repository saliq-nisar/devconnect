function redBorder(WrappedComponent) {
  return function EnhancedComponent(props) {
    return (
      <div style={{ border: '2px solid red' }}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}
export default redBorder;