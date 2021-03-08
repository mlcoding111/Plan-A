import React from 'react'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer class="page-footer font-small pt-5 text-white" >
            <div class="container-fluid text-center text-md-left link-contact">
                <div class="row ">
                    <div class="col-md-5 mt-md-0 mt-3 text-white">
                        <h3 >Programmation</h3>
                        <p>Site web programmer par Michael Lacroix <code>(MLWeb)</code> .</p>
                    </div>

                    <hr class="clearfix w-100 d-md-none pb-3 border-white" />
                    <div class="col-md-3 col-5 mb-md-0 mb-3 d-flex justify-content-center flex-column">
                        <h5 >Liens</h5>
                        <hr className="buffer-hr"></hr>
                        <ul class="list-unstyled">
                            <li className="mb-1">
                                <Link to="/">Accueil</Link>
                            </li>
                            <li className="my-1">
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li className="my-1">
                                <Link to="/prix">Prix</Link>
                            </li>
                        </ul>
                    </div>


                    <div class="col-md-4 col-7 mb-md-0 mb-3 d-flex justify-content-center flex-column" id="footer-contact">
                        <h5>Contact</h5>
                        <hr className="buffer-hr"></hr>
                        <ul className="list-unstyled">
                            <li className="mb-1">
                                <FontAwesome className="fas fa-mobile mr-1" size="2x" /><span>819-290-4318</span>
                            </li>
                            <li className="my-1">
                                <FontAwesome className="far fa-envelope mr-1" size="1.5x" /><span>Jeremy.perrier@hotmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div class="footer-copyright text-center pt-5 pb-2">© 2020 Copyright:
            <span> Plan A</span>
            </div>


        </footer>

    )
}
