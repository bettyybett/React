import React, {useState} from 'react';
import { Layout } from 'antd';
import { 
    PhoneOutlined 
} from '@ant-design/icons';
import './footer.css';
const {Footer,Item} = Layout;

export function Foo()
{
    return(
        <>
        
            
            <div class="container-fluid pb-0 mb-0 justify-content-center text-light ">
     <footer>
         <div class="row my-5 justify-content-center py-5">
             <div class="col-11">
                 <div class="row ">
                     <div class="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                         <h3 class="text-muted mb-md-0 mb-5 bold-text">Initiere Inot.</h3>
                     </div>
                     <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                         <h6 class="mb-3 mb-lg-4 bold-text "><b>DATE DE CONTACT</b></h6>
                         <ul class="list-unstyled">
                             <li>Numar contact: 0754542121</li>
                             <li>Mail: rapid.staff@gmail.com</li>
                             
                         </ul>
                     </div>
                     <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                         <h6 class="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>LOCATIE</b></h6>
                         <p class="mb-1">Calea Giulesti 18</p>
                         <p>Sector 1, Bucuresti</p>
                     </div>
                 </div>
                 <div class="row ">
                 <div class="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                         <p class="social text-muted mb-0 pb-0 bold-text"> <span class="mx-2"><i class="fa fa-facebook" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-linkedin-square" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-twitter" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-instagram" aria-hidden="true"></i></span> </p><small class="rights"><span>&#174;</span> 2021 All rights reserved.</small>
                     </div>
                     
                     <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                         <h6 class="mt-55 mt-2 text-muted bold-text"><b>OLTEANU ALINA</b></h6><small> <span><i class="fa fa-envelope" aria-hidden="true"></i></span> oltalina@gmail.com</small>
                     </div>
                     <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                         <h6 class="text-muted bold-text"><b>RUSU EDUARD</b></h6><small><span><i class="fa fa-envelope" aria-hidden="true"></i></span> rusu.eduard@gmail.com</small>
                     </div>
                 </div>
             </div>
         </div>
     </footer>
 </div>	
			
        
        </>
    );
}

export default Foo;