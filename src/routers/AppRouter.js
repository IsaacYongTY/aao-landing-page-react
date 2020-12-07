import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ContactForm from '../components/ContactForm'
import App from '../App'
import ComingSoon from '../components/ComingSoon'
import SideBar from '../components/SideBar'

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact={true} />
            <Route path="/contact-form" component={ContactForm}/>
            <Route path="/sidebar" component={SideBar} />
        </Switch>
    </BrowserRouter>
)

export default AppRouter