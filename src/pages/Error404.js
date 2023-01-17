function Error404() {
    return (
        <div className='load' style={{textAlign:'center', marginTop: '25px'}}>
            <h1>404: PAGE NOT FOUND</h1>
            <img className='my-1' src="../gains-loading-orange.jpg" alt="gains loading " />
            <h4 id='greet' className='my-3'>Oops, having trouble lifting this page onto the app!</h4>
            <a href="./" ><button className="btn btn-secondary fw-bold">Let's Get Back to Tracking</button></a>
        </div>
    );
}
export default Error404;

