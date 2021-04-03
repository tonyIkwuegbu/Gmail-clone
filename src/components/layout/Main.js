import React from "react";
import styled from "styled-components";
import EmailsView from './EmailsView';
import MailBoxList from './MailBoxList';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Mail from "./Mail"

function Main(){
    return(<Router>
        <Wrapper>
        <MailBoxList/>
          
<Switch>

    <Route path="/mail">
    <Mail/>

    </Route>
    <Route path="/">
    <EmailsView/>
    
    </Route>
</Switch>
    
        </Wrapper>
 </Router>
    )
}

export default Main;

const Wrapper = styled.div`
        display: grid;
        grid-template-columns: 270px auto 50px; 

`
