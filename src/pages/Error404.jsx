function Error404() {
    return (
        <div style={{textAlign:'center', marginTop: '25px'}}>
            <h1>404: PAGE NOT FOUND</h1>
            <img style={{width:'200px', height:'250px'}}src="../gains-loading.jpg" alt="gains loading " />
            <h4 style={{marginBottom:'25px'}}>Oops, having trouble lifting this page onto the app!</h4>
            <a href="./" ><button className="btn btn-secondary">Let's Get Back to Tracking</button></a>
        </div>
    );
}
export default Error404;

