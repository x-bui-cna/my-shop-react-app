import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import HomePage from "../../pages/homepage/homepage.component";
import ShopPage from "../../pages/shop/shop.component";
import SignInAndSignUp from "../../pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "../../pages/checkout/checkout.component";
import "./routerAnimation.scss";

function AnimationRouter(props) {
  const location = useLocation();
  const { currentUser } = props;
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Switch location={location}>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signIn"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default AnimationRouter;
