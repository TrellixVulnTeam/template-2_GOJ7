import Data from "../../api/Data.json"

function Topbar() {
    return (
        <div className="top-bar d-none d-md-block">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-12 text-center">
                        <a href="/" className="top-left">
                            <span>{Data.dbPrincipal.workdays}</span>
                        </a>
                        <a href="/" className="top-left">
                        <span>{Data.dbPrincipal.workHours}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;
